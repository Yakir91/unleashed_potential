import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = Number(process.env.PORT) || 3001
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || GMAIL_USER

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'dogName', 'dogAge', 'dogBreed', 'trainingType']
const MAX_BODY_BYTES = 20_000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

const rateLimitMap = new Map()

app.use(cors({ origin: true }))
app.use(express.json({ limit: '20kb' }))

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || 'unknown'
}

function checkRateLimit(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count += 1
  return true
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function createTransporter() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    throw new Error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in server/.env')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const ip = getClientIp(req)
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' })
    }

    const bodySize = JSON.stringify(req.body || {}).length
    if (bodySize > MAX_BODY_BYTES) {
      return res.status(413).json({ error: 'Payload too large.' })
    }

    const data = req.body || {}
    const missing = REQUIRED_FIELDS.filter((field) => !String(data[field] || '').trim())
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` })
    }

    if (!isValidEmail(data.email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const fields = {
      name: String(data.name).trim(),
      email: String(data.email).trim(),
      phone: String(data.phone).trim(),
      dogName: String(data.dogName).trim(),
      dogAge: String(data.dogAge).trim(),
      dogBreed: String(data.dogBreed).trim(),
      trainingType: String(data.trainingType).trim(),
      preferredDate: String(data.preferredDate || '').trim() || '—',
      preferredTime: String(data.preferredTime || '').trim() || '—',
      message: String(data.message || '').trim() || '—',
    }

    const text = [
      'New contact form submission from YakiRikko website',
      '',
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Dog name: ${fields.dogName}`,
      `Dog age: ${fields.dogAge}`,
      `Breed: ${fields.dogBreed}`,
      `Training type: ${fields.trainingType}`,
      `Preferred date: ${fields.preferredDate}`,
      `Preferred time: ${fields.preferredTime}`,
      `Message: ${fields.message}`,
    ].join('\n')

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
      <p><strong>Dog name:</strong> ${escapeHtml(fields.dogName)}</p>
      <p><strong>Dog age:</strong> ${escapeHtml(fields.dogAge)}</p>
      <p><strong>Breed:</strong> ${escapeHtml(fields.dogBreed)}</p>
      <p><strong>Training type:</strong> ${escapeHtml(fields.trainingType)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(fields.preferredDate)}</p>
      <p><strong>Preferred time:</strong> ${escapeHtml(fields.preferredTime)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(fields.message).replace(/\n/g, '<br>')}</p>
    `

    const transporter = createTransporter()
    await transporter.sendMail({
      from: `"YakiRikko Website" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: fields.email,
      subject: `New lead: ${fields.name} (${fields.dogName})`,
      text,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
})
