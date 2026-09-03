# Deploy yakirikko.co.il (Netlify + LiveDNS)

This guide finishes production setup after the Netlify config in this repo is in place.

## 1. Push code to GitHub

Commit and push the Netlify changes (`netlify.toml`, `netlify/functions/contact.js`, `package.json`) to your GitHub repo (`Yakir91/unleashed_potential`).

Do **not** commit `server/.env`.

## 2. Create the Netlify site

1. Go to [app.netlify.com](https://app.netlify.com) and sign in (GitHub login is easiest).
2. **Add new site** → **Import an existing project** → choose GitHub → select `unleashed_potential`.
3. Confirm build settings (from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
4. Click **Deploy site**.

Wait until the deploy succeeds. Open the temporary URL (`https://something.netlify.app`) and check the site loads.

## 3. Environment variables (contact form email)

In Netlify: **Site configuration** → **Environment variables** → add:

| Key | Value |
|-----|--------|
| `GMAIL_USER` | `yakirikko1@gmail.com` |
| `GMAIL_APP_PASSWORD` | Your 16-character Gmail App Password (**no spaces**) |
| `CONTACT_TO_EMAIL` | `yakirikko1@gmail.com` |

Then **trigger a new deploy** (Deploys → Trigger deploy → Deploy site) so the function picks up the variables.

Test the contact form on the `*.netlify.app` URL and confirm you receive the email.

## 4. Add custom domain in Netlify

1. Netlify → **Domain management** → **Add a domain** → enter `yakirikko.co.il`.
2. Also add `www.yakirikko.co.il` if offered (recommended: primary apex, www redirects to apex — or the reverse; either is fine).
3. Netlify shows the **DNS records** you must create. Keep that page open.

Typical records Netlify asks for:

- **Apex** (`yakirikko.co.il` / `@`): one or more **A** records pointing to Netlify’s load-balancer IPs (shown in the UI).
- **www**: **CNAME** pointing to `your-site-name.netlify.app`.

Use the exact values Netlify displays — do not invent IPs.

## 5. Point LiveDNS to Netlify

1. Log in to [LiveDNS](https://www.livedns.co.il) (or your LiveDNS control panel).
2. Open DNS management for **yakirikko.co.il**.
3. Remove any old **A** / **CNAME** / **AAAA** records for `@` and `www` that conflict.
4. Add the records Netlify showed you (exact host, type, and value).
5. Save. DNS can take a few minutes to a few hours.

## 6. HTTPS

Once Netlify detects correct DNS:

1. Domain management should show the domain as verified.
2. Netlify provisions a **Let’s Encrypt** certificate automatically.
3. Visit `https://yakirikko.co.il` — you should see a valid padlock.

## 7. Checklist

- [ ] Site loads on `https://yakirikko.co.il`
- [ ] Routes work (`/about`, `/services`, `/contact`, …)
- [ ] Language switcher works
- [ ] Contact form sends email successfully
- [ ] `www` either works or redirects to the apex domain

## Local development (unchanged)

```bash
npm run server   # Express contact API on :3001
npm run dev      # Vite on :5173 (proxies /api to :3001)
```

Production uses the Netlify Function instead of Express; both share the same Gmail env var names.
