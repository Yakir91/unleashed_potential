# 🌍 Hebrew/English Language Support

## Overview
Your dog training website now supports both **English** and **Hebrew** languages with full RTL (Right-to-Left) support for Hebrew text.

## How It Works

### Language Switcher
- **Desktop**: Look for the language toggle button in the navbar (shows flag icons 🇮🇱 / 🇬🇧)
- **Mobile**: Open the mobile menu and you'll find the language switcher at the bottom
- Click to instantly switch between English (EN) and Hebrew (עב)

### What Gets Translated
The entire website is translated including:
- ✅ Navigation menu
- ✅ Homepage (hero, stats, video section, why choose us, CTA)
- ✅ Services page (all 6 training programs with details)
- ✅ **Contact page (booking form, FAQ, all sections)**
- ✅ **Gallery page (filters, items, upload section, CTA)**
- ✅ Footer (links, services, contact info)
- ✅ All buttons and calls-to-action

### RTL Support
When you switch to Hebrew:
- Text automatically flows from **right to left**
- Layout adjusts for proper Hebrew reading direction
- All spacing and alignment adapts automatically
- Maintains beautiful design in both directions

### Language Persistence
Your language choice is **saved automatically**:
- Uses browser localStorage
- Next visit remembers your preference
- No need to switch every time

## Technical Details

### File Structure
```
src/
├── i18n/
│   ├── i18n.js                 # i18n configuration
│   └── locales/
│       ├── en.json            # English translations
│       └── he.json            # Hebrew translations
├── components/
│   └── LanguageSwitcher.jsx   # Language toggle component
```

### Translation Files
All text content is stored in JSON files:
- `src/i18n/locales/en.json` - English content
- `src/i18n/locales/he.json` - Hebrew content

### Adding New Translations
To add or modify translations:

1. **Find the key** in `en.json` (e.g., `"home.hero.title"`)
2. **Update both files**:
   ```json
   // en.json
   {
     "home": {
       "hero": {
         "title": "Your English Text"
       }
     }
   }
   
   // he.json
   {
     "home": {
       "hero": {
         "title": "הטקסט שלך בעברית"
       }
     }
   }
   ```
3. **Use in components**:
   ```jsx
   import { useTranslation } from 'react-i18next'
   
   function MyComponent() {
     const { t } = useTranslation()
     return <h1>{t('home.hero.title')}</h1>
   }
   ```

### Pages Still Needing Translation
The following pages/components have not yet been translated (optional for future):
- ⏳ About Me page
- ⏳ Testimonials page
- ⏳ Dog of the Week component
- ⏳ Training Quiz component

These pages currently show English text only. They can be translated in the future if needed.

## Browser Compatibility
The language feature works in all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Benefits
Both languages are:
- Properly indexed by search engines
- Set with correct `lang` attribute
- Optimized for Hebrew and English keywords

## Support
If you need to:
- Add more languages
- Modify existing translations
- Fix translation errors

Simply edit the JSON files in `src/i18n/locales/` or reach out for assistance!

---

**Built with:**
- react-i18next
- i18next
- Custom RTL CSS support

