# EduBot AI – Technical Design Document (TDD)

## Overview
This document details the technical stack and integration approach for the EduBot AI MVP, focusing on reliability, scalability, and rapid development.

---

## Frontend
- **Framework:** Next.js 15 (App Router)
  - SSR/SSG for fast loads and SEO
  - File-based routing, server/client component split
- **Styling:** Tailwind CSS
  - Utility-first, responsive, rapid prototyping
- **State Management:** React Query
  - Caches API responses (esp. OpenAI), reduces costs
  - Handles async state, loading, and error UI

## Authentication
- **Provider:** Clerk
  - Free tier, easy Next.js integration
  - Built-in consent management, GDPR/CCPA support
  - Social login, email/password, magic link

## Database
- **Provider:** Supabase (PostgreSQL)
  - Free tier, managed, scalable
  - Row-Level Security (RLS) for user data isolation
  - **ORM:** Drizzle ORM
    - Type-safe queries, schema in code, migrations

## AI/Quiz Generation
- **Provider:** OpenAI GPT-4o mini API
  - Generates quiz questions and focus recommendations
  - Hybrid: Use Supabase for common templates, AI for dynamic/edge
  - Prompt engineering: UK English, neutral tone, validation layer

## Payments
- **Provider:** Stripe
  - Handles subscriptions and one-time payments
  - Webhooks for payment events (trial expiry, upgrade)
  - PCI-compliant, supports GBP

## Email
- **Provider:** Plunk
  - Sends quiz result summaries
  - Free tier for MVP

## Analytics
- **Provider:** Plausible
  - Privacy-first, no cookies
  - Tracks quiz starts/completions, conversion funnel

## Error Tracking
- **Provider:** Sentry
  - Monitors frontend and Supabase errors
  - Alerts for crashes, API failures

## Spam Protection
- **Provider:** hCaptcha
  - Used for public/guest quiz endpoints
  - Prevents bot signups/abuse

## Validation & Compliance
- **Validation:** Custom logic + Zod (for API payloads)
  - Filters hallucinated/ambiguous AI responses
- **Accessibility:**
  - WCAG AA: Contrast, font size, keyboard nav, focus states
  - Use Headless UI/ARIA patterns for custom components

## Deployment
- **Platform:** Vercel
  - Fast global CDN, serverless functions, preview deployments

---

## Integration Notes
- All sensitive keys in environment variables, not client bundle
- Use Supabase RLS for all user data
- Stripe webhooks secured with signing secret
- OpenAI API calls rate-limited and validated
- All 3rd party SDKs loaded client-side only if needed 