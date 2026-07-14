# Plan: IP-Based Language Switching (Hebrew for Israel, English elsewhere)

## Goal
Make the entire site display Hebrew for visitors from Israeli IPs and English for visitors from other countries, while still allowing manual language switching. If geolocation fails, fall back to English.

## Current State
- All page text is hardcoded English JSX.
- A dormant i18n scaffold exists (`src/i18n/LanguageContext.tsx` + `src/i18n/translations.ts`) with full English/Hebrew dictionaries and RTL support, but it is not wired into the app.
- No backend/Lovable Cloud is currently enabled.

## Implementation Steps

### 1. Enable Lovable Cloud backend
- Activate Lovable Cloud to get serverless edge functions.
- This is required for reliable IP-to-country detection without exposing third-party API keys or relying on client-side APIs that may be blocked by CORS/rate limits.
- Create an edge function `detect-country` that reads the request IP and returns the ISO country code (e.g., `IL`, `US`).

### 2. Wire up existing i18n provider
- Import `LanguageProvider` in `src/App.tsx` and wrap the router/app tree.
- Update `LanguageContext` to:
  - Default to English on first load.
  - Call the `detect-country` edge function on mount.
  - If country is `IL`, switch to Hebrew automatically.
  - If detection fails or country is not `IL`, keep English.
  - Persist the user's manual override in `localStorage` (already partially supported).

### 3. Add a language toggle
- Add a small language switcher in the navbar or footer (e.g., "EN / עב").
- Clicking it overrides the IP-detected language and stores the preference.
- The toggle is visible to all users, satisfying the "manual Hebrew toggle" requirement.

### 4. Replace hardcoded text with translation keys
- Update all pages and components to use the existing `useLang` / `t` helpers:
  - `src/pages/Index.tsx`
  - `src/pages/About.tsx`
  - `src/pages/Gallery.tsx`
  - `src/pages/Contact.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/HeroSection.tsx`
  - `src/components/AccessibilityWidget.tsx`
  - `src/components/SkipLink.tsx` in `App.tsx`
- Expand `src/i18n/translations.ts` where keys are missing for newly discovered hardcoded strings.
- Ensure Hebrew text is set to `dir="rtl"` via the existing `LanguageContext` document update.

### 5. RTL layout verification
- Confirm Tailwind RTL variants and global CSS support right-to-left layouts.
- Check that the navbar, hero, product grid, and footer do not break when `dir="rtl"` is applied.
- Adjust margins/paddings/text-align where needed for Hebrew.

### 6. Testing
- Test locally with a VPN or mocked country code.
- Verify:
  - Israeli IP → Hebrew loads automatically.
  - Non-Israeli IP → English loads automatically.
  - Failed detection → English fallback.
  - Manual toggle overrides IP detection and persists on refresh.
  - RTL layout is visually correct.

## Technical Notes
- Edge function will use the incoming request's IP from headers (e.g., `x-forwarded-for`) and a geolocation lookup.
- We will keep route URLs locale-free (`/`, `/about`, etc.) so bookmarks and SEO remain simple.
- Existing translation keys will be reused wherever possible to minimize new translation work.

## Deliverables
- Lovable Cloud enabled.
- `detect-country` edge function.
- Updated `LanguageContext` with IP detection + manual override.
- Language toggle UI component.
- All hardcoded strings migrated to translation keys.
- Verified Hebrew RTL layout.
