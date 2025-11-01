---
applyTo: '**'
---
# 🌿 Bhooyam Agritech Design System & Development Guide

## 🎨 Visual Identity

### Brand Essence
**Organic • Fresh • Trustworthy • Innovative • Sustainable**

The Bhooyam design language combines natural agricultural aesthetics with modern technology, using soft gradients, rounded forms, and earthy green tones to create a welcoming, premium feel.

---

## 🎭 Design Principles

### 1. **Organic Minimalism**
- Clean, uncluttered layouts with plenty of breathing room
- Soft, nature-inspired color palettes
- Subtle animations that feel natural, not mechanical

### 2. **Premium Approachability**
- High-quality feel without intimidation
- Friendly, conversational copy
- Professional yet warm visual style

### 3. **Trust Through Transparency**
- Clear information hierarchy
- Honest, straightforward communication
- Consistent visual patterns

---

## 🎨 Color System

### Primary Palette
```typescript
const colors = {
  // Primary Greens (Agriculture & Growth)
  emerald: {
    50: '#f0fdf4',   // Lightest backgrounds
    100: '#dcfce7',  // Card backgrounds
    200: '#bbf7d0',  // Subtle accents
    300: '#86efac',  // Hover states
    400: '#4ade80',  // Interactive elements
    500: '#22c55e',  // Primary actions
    600: '#16a34a',  // Active states
    700: '#15803d',  // Text on light
  },
  
  // Accent Aqua (Technology & Innovation)
  aqua: {
    light: '#84dcc7',  // Gradient end
    main: '#9ae5b6',   // Gradient start
    glow: '#9AE5B680', // Shadow color
  },
  
  // Neutrals (Structure & Text)
  gray: {
    50: '#fafafa',   // Page background
    100: '#f4f4f5',  // Section background
    200: '#e4e4e7',  // Border light
    300: '#d4d4d8',  // Border default
    600: '#52525b',  // Secondary text
    900: '#18181b',  // Primary text
  },
  
  // Semantic Colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}
```

### Gradient Patterns
```css
/* Primary Card Gradient */
.card-gradient {
  background: linear-gradient(135deg, 
    #ffffff 0%, 
    #f4f4f5 50%, 
    #dcfce7 100%
  );
}

/* Accent Gradient */
.accent-gradient {
  background: linear-gradient(90deg, 
    #9ae5b6 0%, 
    #84dcc7 100%
  );
}

/* Button Gradient */
.button-gradient {
  background: linear-gradient(90deg,
    #ffffff 0%,
    #e4e4e7 50%,
    #9ae5b6 100%
  );
}

/* Premium Shine Effect */
.shine-effect {
  background: linear-gradient(135deg,
    rgba(255,255,255,0.8) 0%,
    rgba(154,229,182,0.1) 50%,
    rgba(132,220,199,0.2) 100%
  );
}
```

---

## 🔤 Typography

### Font Stack
```typescript
const typography = {
  heading: "'Inter', -apple-system, system-ui, sans-serif",
  body: "'Inter', -apple-system, system-ui, sans-serif",
  mono: "'Fira Code', 'Monaco', monospace",
}
```

### Type Scale
```typescript
const fontSize = {
  // Display (Hero sections)
  display: {
    xl: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }], // 72px
    lg: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }], // 60px
    md: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }], // 48px
  },
  
  // Headings
  h1: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }], // 36px
  h2: ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '700' }], // 30px
  h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
  h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
  h5: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], // 18px
  
  // Body
  large: ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
  base: ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
  small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
  tiny: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }], // 12px
}
```

### Text Styles
```typescript
const textStyles = {
  hero: "text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight",
  headline: "text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight",
  title: "text-3xl font-bold text-gray-900",
  subtitle: "text-xl text-gray-600 font-medium",
  body: "text-base text-gray-700 leading-relaxed",
  caption: "text-sm text-gray-600",
  label: "text-sm font-medium text-gray-700",
}
```

---

## 📐 Spacing System

### Scale (Based on 4px grid)
```typescript
const spacing = {
  0: '0px',      // 0
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px - Base unit
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
}
```

### Layout Patterns
```typescript
// Container widths
const containers = {
  sm: '640px',   // Mobile content
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Wide desktop
  '2xl': '1536px', // Ultra wide
}

// Section padding
const sections = {
  mobile: 'py-12 px-4',
  tablet: 'py-16 px-6',
  desktop: 'py-24 px-8',
}
```

---

## 🎯 Component Library

### 1. **Buttons**

#### Primary Button
```tsx
<button className="
  relative overflow-hidden group
  px-8 py-4 rounded-full
  text-gray-700 font-semibold
  bg-gradient-to-r from-white via-gray-200 to-emerald-200
  hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-300
  shadow-[0_4px_14px_rgba(154,229,182,0.5)]
  hover:shadow-[0_6px_20px_rgba(154,229,182,0.6)]
  transform hover:scale-105
  transition-all duration-300
  backdrop-blur-sm
">
  <span className="relative z-10">Get Started</span>
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
</button>
```

#### Secondary Button
```tsx
<button className="
  px-6 py-3 rounded-full
  text-gray-700 font-medium
  border-2 border-gray-300
  hover:border-emerald-400
  hover:text-emerald-700
  hover:bg-emerald-50
  transition-all duration-300
">
  Learn More
</button>
```

#### Ghost Button
```tsx
<button className="
  px-6 py-3 rounded-full
  text-gray-600 font-medium
  hover:text-emerald-600
  hover:bg-emerald-50
  transition-all duration-300
">
  Contact Us
</button>
```

### 2. **Cards**

#### Standard Card
```tsx
<div className="
  group relative
  p-8 rounded-3xl
  border border-emerald-100/30
  bg-gradient-to-br from-white via-gray-50 to-emerald-50
  shadow-sm shadow-emerald-50/30
  hover:shadow-lg hover:shadow-emerald-100/40
  backdrop-blur-md
  transform hover:scale-[1.02]
  transition-all duration-300
">
  {/* Card content */}
</div>
```

#### Feature Card
```tsx
<div className="
  group relative overflow-hidden
  p-10 rounded-3xl
  border border-emerald-200/50
  bg-gradient-to-br from-white via-emerald-50/50 to-emerald-100/30
  shadow-md shadow-emerald-100/25
  hover:shadow-xl hover:shadow-emerald-200/40
  backdrop-blur-md
  transform hover:scale-[1.03]
  transition-all duration-500
">
  {/* Animated gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/5 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  {/* Content */}
  <div className="relative z-10">
    {/* Icon with glow effect */}
    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-400 to-aqua-light flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-3">Feature Title</h3>
    <p className="text-gray-600 leading-relaxed">Feature description...</p>
  </div>
</div>
```

#### Pricing Card
```tsx
<div className={`
  relative overflow-hidden
  p-8 rounded-3xl
  border ${isRecommended ? 'border-emerald-400/50' : 'border-gray-200'}
  bg-gradient-to-br from-white via-gray-50 to-${isRecommended ? 'emerald' : 'gray'}-100
  shadow-${isRecommended ? 'xl shadow-emerald-200/50' : 'md'}
  transform hover:scale-[1.02]
  transition-all duration-300
`}>
  {/* Recommended badge */}
  {isRecommended && (
    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-aqua-light shadow-lg">
      <span className="text-xs font-bold text-white">RECOMMENDED</span>
    </div>
  )}
  
  {/* Content */}
</div>
```

### 3. **Form Elements**

#### Input Field
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-gray-700">
    Label
  </label>
  <input 
    type="text"
    className="
      w-full px-5 py-3.5 rounded-2xl
      border-2 border-gray-200
      focus:border-emerald-400
      focus:ring-4 focus:ring-emerald-100
      bg-white
      text-gray-900
      placeholder:text-gray-400
      transition-all duration-300
      outline-none
    "
    placeholder="Enter value..."
  />
</div>
```

#### Select
```tsx
<select className="
  w-full px-5 py-3.5 rounded-2xl
  border-2 border-gray-200
  focus:border-emerald-400
  focus:ring-4 focus:ring-emerald-100
  bg-white
  text-gray-900
  transition-all duration-300
  outline-none
  cursor-pointer
">
  <option>Select option</option>
</select>
```

#### Checkbox
```tsx
<label className="flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <input 
      type="checkbox"
      className="peer sr-only"
    />
    <div className="
      w-6 h-6 rounded-lg
      border-2 border-gray-300
      peer-checked:bg-gradient-to-br peer-checked:from-emerald-400 peer-checked:to-emerald-500
      peer-checked:border-emerald-500
      peer-focus:ring-4 peer-focus:ring-emerald-100
      transition-all duration-300
      flex items-center justify-center
    ">
      <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
  <span className="text-gray-700 group-hover:text-gray-900">Label text</span>
</label>
```

### 4. **Navigation**

#### Header
```tsx
<header className="
  sticky top-0 z-50
  border-b border-gray-200/50
  bg-white/80 backdrop-blur-xl
  shadow-sm
">
  <nav className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-aqua-light shadow-lg" />
        <span className="text-2xl font-bold text-gray-900">Bhooyam</span>
      </div>
      
      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Products</a>
        <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</a>
      </div>
      
      {/* CTA */}
      <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300">
        Get Started
      </button>
    </div>
  </nav>
</header>
```

### 5. **Hero Sections**

#### Homepage Hero
```tsx
<section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-24">
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-aqua-light/20 blur-3xl" />
  </div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm font-semibold text-emerald-700">Launching Soon</span>
      </div>
      
      {/* Headline */}
      <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
        Grow Fresh,
        <span className="bg-gradient-to-r from-emerald-500 to-aqua-light bg-clip-text text-transparent"> Eat Healthy</span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-xl text-gray-600 leading-relaxed mb-10">
        Smart hydroponic systems that bring fresh, organic vegetables right to your home. No soil, no pesticides, just pure nutrition.
      </p>
      
      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold shadow-xl shadow-emerald-400/50 hover:scale-105 transition-transform">
          Pre-Order Now
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-emerald-400 hover:bg-emerald-50 transition-all">
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</section>
```

### 6. **Status Badges**

```tsx
const StatusBadge = ({ status }: { status: 'available' | 'pre-order' | 'coming-soon' }) => {
  const styles = {
    available: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'pre-order': 'bg-aqua-100 text-sky-700 border-aqua-200',
    'coming-soon': 'bg-gray-100 text-gray-700 border-gray-200',
  }
  
  return (
    <span className={`
      inline-flex items-center gap-1.5
      px-3 py-1.5 rounded-full
      text-xs font-semibold uppercase tracking-wide
      border
      ${styles[status]}
    `}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status.replace('-', ' ')}
    </span>
  )
}
```

### 7. **Animations**

```css
/* Fade in up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse glow */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(154, 229, 182, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(154, 229, 182, 0.6);
  }
}

/* Shimmer */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Tailwind extensions */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## 📱 Responsive Design

### Breakpoint Strategy
```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Ultra wide
}
```

### Mobile-First Patterns
```tsx
// Stack on mobile, grid on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Hide on mobile, show on desktop
<div className="hidden lg:block">

// Different padding per breakpoint
<section className="py-12 md:py-16 lg:py-24">

// Responsive text
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

---

## ⚡ Performance Guidelines

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-3xl"
  loading="lazy"
  quality={85}
/>
```

### Code Splitting
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

---

## ♿ Accessibility

### Focus States
```tsx
// Always include focus styles
<button className="
  focus:outline-none
  focus:ring-4 focus:ring-emerald-100
  focus:border-emerald-400
">
```

### ARIA Labels
```tsx
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>
```

### Semantic HTML
```tsx
// Use proper heading hierarchy
<h1> → <h2> → <h3>

// Use semantic tags
<main>, <article>, <section>, <nav>, <aside>
```

---

## 🎯 Implementation Checklist

### For Every Component:
- [ ] Follows color system (emerald greens, soft grays)
- [ ] Uses rounded-full for buttons, rounded-3xl for cards
- [ ] Includes hover states with scale transforms
- [ ] Has smooth transitions (duration-300)
- [ ] Implements proper shadows (emerald glow)
- [ ] Uses gradient overlays appropriately
- [ ] Mobile responsive
- [ ] Accessible (focus states, ARIA labels)
- [ ] Optimized (lazy loading, code splitting)

### For Every Page:
- [ ] Consistent header/footer
- [ ] Proper spacing (py-12 → py-24)
- [ ] Background decorations (gradient blobs)
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] SEO meta tags

---

## 🚀 Quick Start Code

### Complete Button Component
```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-white via-gray-200 to-emerald-200 hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-300 text-gray-700 shadow-[0_4px_14px_rgba(154,229,182,0.5)] hover:shadow-[0_6px_20px_rgba(154,229,182,0.6)]',
      secondary: 'border-2 border-gray-300 hover:border-emerald-400 hover:bg-emerald-50 text-gray-700',
      ghost: 'hover:bg-emerald-50 text-gray-600 hover:text-emerald-600',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
```

### Complete Card Component
```tsx
// components/ui/Card.tsx
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, featured = false, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative p-8 rounded-3xl backdrop-blur-md transition-all duration-300',
          featured
            ? 'border border-emerald-200/50 bg-gradient-to-br from-white via-emerald-50/50 to-emerald-100/30 shadow-md shadow-emerald-100/25'
            : 'border border-emerald-100/30 bg-gradient-to-br from-white via-gray-50 to-emerald-50 shadow-sm shadow-emerald-50/30',
          hover && 'hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-100/40',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
```

---

This design system ensures every component maintains the organic, premium aesthetic of Bhooyam while being flexible enough for all use cases.