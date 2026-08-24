# 📸 Image Management Guide

## Where to Store Your Photos

All images should be stored in the **`public/images/`** folder.

I've created organized subfolders for you:

```
public/
└── images/
    ├── gallery/       # Gallery page photos
    ├── hero/          # Homepage hero images/videos
    ├── about/         # About page photos
    └── testimonials/  # Client & dog photos
```

---

## How to Add Your Photos

### 1. **Gallery Photos** (`public/images/gallery/`)

Add your training photos here with descriptive names:
- `igp-tracking-1.jpg`
- `obedience-training-1.jpg`
- `puppy-foundation-1.jpg`
- `before-after-luna.jpg`
- etc.

**Then update** `src/pages/Gallery.jsx`:

```javascript
const galleryItems = [
  {
    id: 1,
    category: ['training', 'outdoor'],
    title: 'Basic Obedience Training',
    description: 'Max learning to sit and stay in the park',
    image: '/images/gallery/obedience-training-1.jpg',  // Add this line
    color: 'from-primary-400 to-primary-600',
  },
  // ... more items
]
```

Then in the render section, replace the placeholder div with:
```jsx
<img 
  src={item.image} 
  alt={item.title}
  className="w-full h-full object-cover"
/>
```

---

### 2. **Homepage Hero Image** (`public/images/hero/`)

Add your main hero image:
- `hero-yakir-training.jpg`
- `hero-igp-competition.jpg`

**Update** `src/pages/Home.jsx` around line 76:

Replace this placeholder div:
```jsx
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-400 to-secondary-500 aspect-square">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white p-8">
      <FaPaw className="text-8xl mb-4 mx-auto animate-bounce-slow" />
      <p className="text-2xl font-semibold mb-2">Your Training Photo/Video Here</p>
    </div>
  </div>
</div>
```

With:
```jsx
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
  <img 
    src="/images/hero/hero-yakir-training.jpg" 
    alt="Yakir Lavi Dog Training"
    className="w-full h-full object-cover aspect-square"
  />
</div>
```

---

### 3. **About Page Photos** (`public/images/about/`)

Add personal photos:
- `yakir-with-dog.jpg`
- `igp-competition-2023.jpg`
- `training-session-1.jpg`
- `training-session-2.jpg`

**Update** `src/pages/About.jsx` around line 97:

Replace placeholder divs with:
```jsx
{/* Main Photo */}
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
  <img 
    src="/images/about/yakir-with-dog.jpg" 
    alt="Yakir Lavi with training dog"
    className="w-full h-full object-cover aspect-square"
  />
</div>

{/* Additional Photos Grid */}
<div className="grid grid-cols-2 gap-4">
  <div className="relative rounded-2xl overflow-hidden shadow-lg">
    <img 
      src="/images/about/training-session-1.jpg" 
      alt="Training session"
      className="w-full h-full object-cover aspect-video"
    />
  </div>
  <div className="relative rounded-2xl overflow-hidden shadow-lg">
    <img 
      src="/images/about/igp-competition-2023.jpg" 
      alt="IGP Competition 2023"
      className="w-full h-full object-cover aspect-video"
    />
  </div>
</div>
```

---

### 4. **Testimonial Photos** (`public/images/testimonials/`)

Add client photos:
- `client-sarah-max.jpg`
- `client-michael-luna.jpg`
- etc.

**Update** `src/pages/Testimonials.jsx`:

In the testimonials array, add image paths:
```javascript
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    dogName: 'Max',
    rating: 5,
    text: '...',
    image: '/images/testimonials/client-sarah-max.jpg',  // Add this
    date: 'October 2024',
  },
  // ... more testimonials
]
```

Then in the render section, replace the placeholder div with:
```jsx
{testimonial.image ? (
  <img 
    src={testimonial.image} 
    alt={`${testimonial.name} with ${testimonial.dogName}`}
    className="w-12 h-12 rounded-full object-cover"
  />
) : (
  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
    {testimonial.name.charAt(0)}
  </div>
)}
```

---

## Image Recommendations

### File Format:
- **JPG/JPEG** - Best for photos (smaller file size)
- **PNG** - Best for logos or images with transparency
- **WebP** - Modern format (better compression)

### File Size:
- **Gallery photos**: Max 500KB each
- **Hero image**: Max 800KB
- **Thumbnails**: Max 200KB

### Optimization:
Use these free tools to optimize images before uploading:
- [TinyPNG](https://tinypng.com/) - Compress JPG/PNG
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app

### Dimensions:
- **Hero image**: 1200x1200px (square)
- **Gallery photos**: 800x800px to 1200x1200px
- **About page main photo**: 1000x1000px
- **Testimonial photos**: 300x300px (will be shown small)

---

## Quick Reference: How to Use Images

### In JSX/React:
```jsx
// Simple image
<img src="/images/gallery/photo1.jpg" alt="Description" />

// With Tailwind styling
<img 
  src="/images/hero/hero.jpg" 
  alt="Dog training"
  className="w-full h-auto rounded-lg shadow-lg"
/>

// Background image (CSS)
<div 
  style={{ backgroundImage: 'url(/images/hero/hero.jpg)' }}
  className="bg-cover bg-center h-96"
/>
```

### Path Format:
Always use **absolute paths** starting with `/`:
- ✅ Correct: `/images/gallery/photo1.jpg`
- ❌ Wrong: `../images/gallery/photo1.jpg`
- ❌ Wrong: `images/gallery/photo1.jpg`

---

## Example: Complete Gallery Item

Here's how a complete gallery item looks with a real image:

```javascript
{
  id: 1,
  category: ['training', 'outdoor'],
  title: 'IGP Obedience Training',
  description: 'Precision heel work during competition preparation',
  image: '/images/gallery/igp-obedience-1.jpg',
  color: 'from-primary-400 to-primary-600',
}
```

---

## Need Help?

If you want me to update any specific component to use your real photos, just tell me:
1. Which page/component
2. The filename of your photo
3. Where you saved it

Example: *"I added hero-yakir.jpg to public/images/hero/, can you update the homepage?"*

---

## Video Files

For videos (like homepage hero video), you can also use the public folder:

```
public/
└── videos/
    └── training-demo.mp4
```

Then reference with:
```jsx
<video autoPlay loop muted className="w-full h-full object-cover">
  <source src="/videos/training-demo.mp4" type="video/mp4" />
</video>
```

---

**Pro Tip**: Keep your original high-resolution photos backed up separately. The optimized versions you upload to the website should be compressed for web performance! 📸

