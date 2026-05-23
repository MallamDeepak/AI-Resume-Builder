# Landing Page Optimization Report

Date: 2026-04-04
Scope: landing experience and directly related files

## Files Reviewed

- src/pages/Home.jsx
- src/pages/LandingPageLayouts.jsx
- src/App.jsx
- src/components/NavBar.jsx
- src/pages/Footer.jsx
- src/pages/Aichat.jsx

## Optimizations Applied

### 1) Home page: reduce per-render allocations

File: src/pages/Home.jsx

Changes:
- Moved static arrays outside the component function:
  - templates
  - resumeTemplates
  - howItWorksSteps
  - features
- Removed unused mobile overlay state and toggle logic.

Why:
- Avoids recreating large data structures and JSX elements on every render.
- Removes dead code and unnecessary render work.

Impact:
- Lower render overhead for landing page updates.
- Cleaner component logic and easier maintenance.

### 2) Home page: image loading improvements

File: src/pages/Home.jsx

Changes:
- Added loading and decoding hints:
  - Hero carousel image: first slide eager, others lazy.
  - "How it works" images: lazy + async decode.
  - Template showcase images: lazy + async decode.

Why:
- Prioritize critical above-the-fold media while deferring non-critical images.

Impact:
- Better initial load behavior and reduced main-thread pressure.

### 3) Landing layout: lazy-load chatbot widget

File: src/pages/LandingPageLayouts.jsx

Changes:
- Replaced direct chatbot import with React.lazy.
- Wrapped chatbot mount in Suspense fallback.

Why:
- Chat widget is secondary to initial landing content.

Impact:
- Chatbot code moved to a separate chunk and no longer blocks initial route bundle.

### 4) Route config cleanup (public landing routes)

File: src/App.jsx

Changes:
- Removed duplicated route entries for:
  - /ats-checker
  - /AI-builder
  - /content-enhance
  - /score-checker
  - /resume-hub
  - /growths
- Removed an unused import.
- Fixed one missing semicolon in import line.

Why:
- Duplicate route declarations increase config complexity and risk mismatch/maintenance errors.

Impact:
- Leaner routing table and cleaner route ownership.

## Validation Performed

Command run:
- npm run build (from frontend)

Result:
- Build completed successfully.
- A separate chatbot output chunk is present (Aichat-*.js), confirming lazy-loading is effective.

## Observed Remaining Opportunities (Not changed in this pass)

1. Large landing image assets
- Multiple PNGs are very large (several hundred KB to multi-MB).
- Recommendation: convert heavy landing visuals to optimized WebP/AVIF and provide responsive image sizes.

2. Large main JS chunk
- Main bundle remains large.
- Recommendation: progressively add route-level lazy loading for more public pages and heavy dashboard/editor pages.

3. CSS bundle size
- CSS output is relatively large.
- Recommendation: review global styles and remove unused utility/classes where feasible.

## Summary

Implemented optimizations were safe, targeted, and validated by production build. The most important win in this pass is deferring chatbot code from initial landing load and reducing repeated render allocations in Home.

---

## Critical Fixes (2026-04-09)

### 1) Frontend build blocker fixed

File: src/App.jsx

Changes:
- Removed `HomeData` default import from `src/pages/HomeData.jsx`.
- Removed routes:
  - `/home-data`
  - `/homedata`

Why:
- `src/pages/HomeData.jsx` exports named constants, not a React default component.
- Importing it as a default route element caused production build failure.

Impact:
- Eliminated the App/HomeData import-export mismatch build error.

### 2) Render stability fix (HelpCenter)

Files:
- src/pages/HelpCenter.jsx
- src/landing_pages/HelpCenter.jsx

Changes:
- Renamed in-component JSX component declarations to render helper functions:
  - `GuideContent` -> `renderGuideContent`
  - `CollectionView` -> `renderCollectionView`
- Replaced JSX component usage with function calls:
  - `<GuideContent guide={selectedGuide} />` -> `{renderGuideContent(selectedGuide)}`
  - `<CollectionView collection={selectedCollection} />` -> `{renderCollectionView(selectedCollection)}`

Why:
- React lint rule flagged components created during render lifecycle.

Impact:
- Removed `react-hooks/static-components` critical issue at Guide/Collection render paths.
- Removed unused mouse-tracking state/handler in HelpCenter files to reduce lint noise.

### 3) React purity fix (ScoreChecker)

Files:
- src/pages/ScoreChecker.jsx
- src/landing_pages/ScoreChecker.jsx

Changes:
- Replaced non-deterministic score calculation in `trendData`:
  - From: `Math.floor(Math.random() * 5)`
  - To: deterministic delta `((scoreValue + i * 3) % 5)`

Why:
- `Math.random()` inside render-derived logic violates React purity lint rules.

Impact:
- Removed `react-hooks/purity` critical issue while preserving trend variance behavior.

### 4) Unused code and hooks cleanup pass

Files:
- src/pages/AIBuilder.jsx
- src/pages/ResumeGuide.jsx
- src/pages/TemplatesFeature.jsx
- src/pages/Contact.jsx
- src/pages/Footer.jsx
- src/pages/Blogpage.jsx
- src/pages/Home.jsx
- src/pages/ResumeExample.jsx
- src/pages/Privacypolicy.jsx
- src/pages/login.jsx
- src/pages/WritingCoverLetter.jsx

Changes:
- Removed unused handlers (`handleBackHome`) from pages where not referenced.
- Removed unused variables (`formData`, `isLoggedIn`, map index argument, unused imports/states).
- Fixed hook dependency issues:
  - `Home.jsx` interval effect dependency cleanup.
  - `ResumeExample.jsx` sections wrapped in `useMemo`.
  - `login.jsx` validation wrapped in `useCallback` for stable dependency graph.
- Fixed irregular whitespace/mojibake text in `WritingCoverLetter.jsx`.

Impact:
- Reduced lint noise and removed hook warnings/errors in the targeted landing scope.

### 5) Duplicate structure resolution

Files:
- src/landing_pages/*.jsx (consolidated as re-export wrappers)
- Removed:
  - src/landing_pages/HomeData.jsx
  - src/landing_pages/careerData.jsx

Changes:
- Converted `landing_pages` route component files to wrappers that re-export from `src/pages`.
- Removed duplicated non-component data wrappers that caused React refresh lint errors.

Why:
- Maintain one source of truth in `src/pages` and prevent drift between duplicated folders.

Impact:
- Structural duplication risk reduced and maintenance complexity lowered.
