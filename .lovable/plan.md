

# Redesign: Flowing Homepage Inspired by Malima.com

## The Vision
Transform the homepage from a sectioned layout with hard cuts into a seamless, flowing design where the gypsophila bouquet is the centerpiece that visually connects sections. Inspired by malima.com's approach: solid color backgrounds with flowers that "bleed" naturally across the page.

## Key Design Principles from Reference
- **No hard section boundaries** -- sections blend into each other with color gradients and overlapping elements
- **Hero with solid color background** (sage green) instead of a photo, with a large flower image that flows organically
- **Bold, editorial typography** overlapping with the flower imagery
- **Flower images break out of containers** -- not confined to grid boxes

## Changes to Implement

### 1. New Hero Section (Full Redesign)
- Replace the photo background with a solid sage green background (matching the primary color palette)
- Place a large, high-quality gypsophila PNG bouquet image on the right side that overflows naturally
- Bold "HADAD" text on the left with tagline
- The flower image should extend beyond the hero bottom edge, bleeding into the next section
- Transparent navbar that sits over the hero

### 2. Seamless Section Transitions
- Remove hard `bg-card` / white background switches between sections
- Use subtle gradient transitions between sections (e.g., sage green fading to cream)
- Use CSS clip-path curves or diagonal dividers for organic transitions
- Flower accent images positioned as floating elements between sections

### 3. Collection Section Reimagined
- Instead of a rigid 2x3 grid, use an organic masonry-style layout
- Images at varying sizes, some overlapping section boundaries
- Cards with rounded corners and subtle shadows for a softer feel

### 4. Values Section with Flowing Elements
- Add decorative flower/petal SVG shapes floating in the background
- Cards laid out in a more organic, less rigid pattern

### 5. Navbar Update
- Make navbar transparent on the hero, with white text
- Transition to solid background on scroll (already has backdrop-blur, just needs transparent initial state)

### 6. Color Palette Adjustment
- Hero background: sage green (primary color)
- Flowing gradient from sage green to warm cream between sections
- Accent elements in deeper green

## Technical Details

### Files to Modify
1. **src/pages/Index.tsx** -- Complete redesign of the homepage layout
   - Hero: solid green bg + large flower PNG positioned absolutely on right
   - Add curved SVG dividers between sections
   - Intro section: overlapping with hero via negative margin
   - Collection: organic layout with flowing background
   - Values + CTA: seamless gradient transition

2. **src/components/Navbar.tsx** -- Transparent-to-solid scroll behavior
   - Start with transparent bg + white text on hero
   - Add scroll listener to switch to solid bg after scrolling past hero
   - Use `useEffect` with scroll event

3. **src/index.css** -- Add utility classes for flowing shapes
   - Custom clip-path classes for curved section dividers
   - Remove `min-height`/`min-width` rule on `a` tags that may interfere with inline links

### Key Techniques
- **Negative margins + z-index** for overlapping sections
- **SVG wave/curve dividers** between sections for organic transitions
- **Absolute positioned flower images** that break out of their containers
- **CSS gradient backgrounds** that span multiple sections
- **Framer Motion scroll-based animations** for parallax flower movement

