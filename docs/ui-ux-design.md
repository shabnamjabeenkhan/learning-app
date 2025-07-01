# EduBot AI – UI/UX Design (MVP)

## Main User Interactions & Flows
- **Landing Page:**
  - Clear CTA: "Start Free Trial"
  - Value proposition, feature highlights
- **Sign-Up:**
  - Clerk modal (email/social)
- **Quiz Input:**
  - Topic input field, skill level dropdown
  - "Generate Quiz" button
- **Quiz Screen:**
  - 5–8 questions (MCQ/short-answer)
  - Progress indicator (e.g., "3/7")
  - "Save my quiz history" toggle
  - Submit button (disabled until all answered)
- **Feedback Screen:**
  - Score summary
  - Focus recommendation (empathetic, actionable)
  - Micro-feedback after each question
- **Paywall Modal:**
  - Shown after 5th quiz or trial expiry
  - Plan selection (monthly/one-time)
  - Stripe checkout button
- **Payment Success:**
  - Confirmation, unlimited access unlocked

## Key UI Components
- **Navigation Bar:** Minimal, sticky, logo + CTA
- **Quiz Card:** Question, options/input, feedback
- **Modal:** Paywall, error, confirmation dialogs
- **Buttons:** Large, accessible, clear focus states
- **Form Inputs:** Accessible, labeled, error states
- **Progress Bar:** Visualizes quiz progress

## Accessibility (WCAG AA)
- Contrast ratio ≥ 4.5:1
- Font size ≥ 16px, resizable to 200%
- Keyboard navigation (tab/shift-tab)
- Visible focus states (outline on buttons/inputs)
- ARIA labels for custom components
- No color-only indicators

## Responsive Design
- **Mobile-First:**
  - Stacked layout, large touch targets
  - Collapsible nav, modals full-screen on mobile
- **Tablet/Desktop:**
  - Centered content, max-width containers
  - Responsive grid for quiz options
- **Testing:**
  - Chrome DevTools, device emulation, manual keyboard testing 