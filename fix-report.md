## Fix Report

### File: frontend/src/pages/Home.jsx
- Issue: Hero CTA used a Font Awesome icon class without guaranteed font asset loading, causing missing icon in some environments.
- Fix: Replaced icon with lucide-react GraduationCap component.
- Before vs After: Before, icon depended on external CSS/font availability; after, icon is bundled React SVG and always renders.

- Issue: Mobile step-number badges in "How It Works" were absolutely positioned without a relative parent, so badges could overlap in incorrect positions.
- Fix: Added relative positioning to each step container.
- Before vs After: Before, badges could render at shared page coordinates; after, each badge stays inside its own card.

- Issue: Template carousel arrow controls were hover-only, reducing usability on touch devices and keyboard navigation.
- Fix: Made controls visible on mobile and visible on group focus for keyboard users; added aria-labels and button type.
- Before vs After: Before, controls were often hidden on non-hover devices; after, controls are discoverable and accessible.

- Issue: Template cards and feature cards used click-only div wrappers, limiting keyboard/screen reader accessibility.
- Fix: Converted interactive wrappers to semantic button elements with aria-labels and explicit type.
- Before vs After: Before, card interaction relied on pointer devices; after, cards support keyboard and assistive technologies.

- Issue: Page root lacked primary semantic landmark.
- Fix: Switched root wrapper from div to main.
- Before vs After: Before, screen readers had less structural guidance; after, page has clear main content landmark.

### File: frontend/src/components/NavBar.jsx
- Issue: Mobile menu toggle lacked accessible metadata and controls association.
- Fix: Added type, aria-label, aria-expanded, and aria-controls attributes.
- Before vs After: Before, screen reader context for menu state was limited; after, menu state/control relationship is explicit.

- Issue: Profile trigger and logout control used non-semantic click containers.
- Fix: Converted both to button elements with proper aria attributes.
- Before vs After: Before, keyboard interaction and semantics were weaker; after, controls are fully semantic and keyboard-friendly.

- Issue: Mobile sidebar navigation used anchor href links for internal routing, causing full page reloads and slower transitions.
- Fix: Replaced internal anchor links with react-router Link components.
- Before vs After: Before, internal nav could trigger hard reloads; after, navigation is SPA-fast and preserves app state behavior.

- Issue: Navbar feature label typo (Guilded AI Builder).
- Fix: Corrected to Guided AI Builder.
- Before vs After: Before, typo reduced polish; after, text is corrected.

- Issue: User fetch loading state was not reliably reset on failure.
- Fix: Moved loading reset to finally block and added isLoggedIn dependency for effect clarity.
- Before vs After: Before, loader could remain active after API errors; after, loader always resolves correctly.

### File: frontend/src/pages/Footer.jsx
- Issue: Footer logo alt text was generic and non-descriptive.
- Fix: Updated alt text to UptoSkills logo.
- Before vs After: Before, assistive text had low value; after, branding image is described meaningfully.

- Issue: Social links lacked explicit accessible labels.
- Fix: Added per-link aria-label values based on destination platform.
- Before vs After: Before, icon-only links had weak spoken context; after, screen readers announce destination clearly.

- Issue: Newsletter email input had no explicit form label.
- Fix: Added an associated sr-only label and id on input.
- Before vs After: Before, form control labeling depended on placeholder; after, proper accessible label exists.

- Issue: Footer accordion section headers were div click targets, not semantic controls.
- Fix: Converted section headers to buttons with aria-expanded and aria-controls and linked panel ids.
- Before vs After: Before, keyboard/assistive interaction was limited; after, collapsible sections are semantic and accessible.

## Validation Performed
- Checked edited files for diagnostics: no new errors in Home, NavBar, and Footer.
- Built frontend production bundle successfully using Vite after changes.
- Existing project-wide lint issues remain in unrelated modules and were not modified as part of this landing-page fix scope.
