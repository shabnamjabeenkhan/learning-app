# EduBot AI – MVP Idea & Business Model

## High-Level Vision
EduBot AI empowers learners of all ages and backgrounds to master any topic—programming, science, history, and more—through personalized, AI-driven quizzes, actionable feedback, and on-demand explanations. Unlike static quiz platforms, EduBot adapts to each user's strengths and weaknesses, delivering focused recommendations and clear explanations that accelerate true understanding.

## Business Model
- **Free Trial:** 3 days, up to 5 quizzes
- **Paid Plans:**
  - £7.99/month (subscription, cancel anytime)
  - £29.99 one-time (lifetime access, non-cancellable)
- **Upgrade Prompt:** After 5th quiz or trial expiry, users see a paywall to upgrade

## Core MVP Features (Must-Have)
1. **AI-Generated Quiz with Personalized Focus Recommendations**
   - Users input any topic (e.g., "Python loops", "World War II") and select skill level
   - System generates a 5–8 question quiz (multiple-choice or short-answer)
   - Quiz is built using a hybrid of Supabase templates (for common topics) and OpenAI GPT-4o mini (for dynamic/edge cases)
   - After quiz, users receive a personalized focus recommendation based on:
     1. Incorrect answers (primary signal)
     2. Question difficulty (pre-tagged in Supabase)
     3. Topic mastery trends (spaced repetition logic)
   - Feedback is empathetic, tone-adaptive, and actionable (not robotic)
2. **On-Demand AI Explanations for Any Topic or Concept**
   - At any time, users can ask the AI to explain a topic, concept, or term they don't understand (e.g., "What are components in React?")
   - The AI provides a clear, tailored explanation in simple language
   - This feature is available independently of quizzes and can be used for any subject
3. **Seamless Auth, Trial, and Payment Flow**
   - Clerk sign-up required before first quiz or explanation
   - Free trial: 5 quizzes or explanations in 3 days
   - On 6th usage, show paywall with upgrade prompt
   - Stripe integration for monthly or one-time payment
   - Lifetime access after one-time payment (no plan changes)

## What's Not in the MVP
- No review of past quizzes/assessments
- No discounts, coupons, or group plans
- No data export or deletion
- Only multiple-choice and short-answer questions
- No controversial, medical, or adult topics

## Key Differentiator
AI-powered, empathetic, and adaptive feedback and explanations—tailored to user tone and learning gaps, not just "right/wrong."

## Compliance & Accessibility
- WCAG AA compliance (contrast, font size, keyboard navigation, visible focus states)
- Blacklist controversial, medical, and adult topics
- Store anonymized performance data for all; only store full Q&A if user opts in
- Use neutral, UK English; validate questions to avoid hallucinated facts 