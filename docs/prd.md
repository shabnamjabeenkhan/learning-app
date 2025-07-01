# EduBot AI – Product Requirements Document (PRD)

## Introduction
**Problem Statement:**
Learners struggle to master fundamentals across diverse topics due to a lack of personalized, actionable guidance and accessible explanations. Existing platforms offer static quizzes or generic feedback, leading to inefficient study and slow progress.

**Product Vision:**
EduBot AI delivers adaptive, AI-powered quizzes, empathetic feedback, and on-demand explanations, helping users focus their study efforts, clarify concepts, and accelerate mastery in any subject.

## Objectives & Goals
- Enable users to quickly assess their knowledge on any topic
- Provide actionable, personalized recommendations after each quiz
- Allow users to ask the AI for explanations of any topic or concept they don't understand
- Convert free users to paid subscribers via a seamless, value-driven experience

## Target Users & Roles
- **Primary User:** Learners (K-12, college, professionals, hobbyists) seeking to study any topic (e.g., Python, algebra, history)
- **Actions:** Input topic & skill level, take quiz, receive feedback, ask for explanations, upgrade to paid plan

## Core Features for MVP
1. **AI-Generated Quiz with Personalized Focus Recommendations**
   - Users input a topic and skill level
   - System generates a 5–8 question quiz (multiple-choice or short-answer)
   - Quiz is built using Supabase templates (for common topics) and OpenAI GPT-4o mini (for dynamic/edge cases)
   - After quiz, users receive a personalized focus recommendation based on incorrect answers, question difficulty, and topic mastery trends
   - Feedback is empathetic, tone-adaptive, and actionable
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

## Future Scope
- Review past quizzes and recommendations
- More question types (e.g., code input, drag-and-drop)
- Group plans, discounts, and coupon codes
- Advanced analytics and personalized learning paths
- In-app support chat and session replays

## User Journey
1. User signs up via Clerk
2. User inputs a topic and selects skill level, or asks the AI to explain a topic/concept
3. If quiz: System generates and displays a quiz
4. If explanation: System generates and displays a tailored explanation
5. User completes the quiz or reads the explanation
6. If quiz: System scores the quiz and provides a focus recommendation
7. User can take up to 5 quizzes or explanations during the free trial
8. On 6th usage or trial expiry, user sees paywall and can upgrade to paid plan
9. After payment, user has unlimited access

## Tech Stack
- **Frontend:** Next.js 15 (App Router), Tailwind CSS
- **Auth:** Clerk
- **Database:** Supabase PostgreSQL (with Drizzle ORM)
- **AI:** OpenAI GPT-4o mini API
- **Payments:** Stripe
- **Email:** Plunk
- **Analytics:** Plausible
- **Error Tracking:** Sentry
- **Spam Protection:** hCaptcha
- **State Management:** React Query
- **Deployment:** Vercel 