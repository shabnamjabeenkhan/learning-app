# EduBot AI – User Flows (MVP)

## 1. New User Sign-Up & Free Trial
1. User lands on homepage
2. Clicks "Start Free Trial"
3. Signs up via Clerk (email/social)
4. Account created, free trial (5 quizzes/3 days) activated

## 2. Taking a Quiz
1. User enters topic (e.g., "Python loops") and selects skill level
2. Clicks "Generate Quiz"
3. System fetches template from Supabase or generates via OpenAI (hybrid)
4. Quiz (5–8 questions) displayed (MCQ/short-answer)
5. User answers each question (keyboard/tab support)
6. After last question, user submits quiz
7. System scores quiz and provides focus recommendation (with empathetic feedback)
8. User can opt-in to save full Q&A history (toggle)

## 3. Hitting Free Trial Limit & Upgrading
1. User completes 5th quiz or 3 days pass
2. On next quiz attempt, paywall modal appears
3. User prompted to upgrade (monthly or one-time)
4. If user cancels, returns to dashboard/landing

## 4. Payment (Subscription or One-Time)
1. User selects plan (monthly or one-time)
2. Stripe checkout opens
3. User completes payment
4. System verifies payment via webhook
5. User's account upgraded to unlimited quizzes

## 5. Quiz Generation (Hybrid)
1. User requests quiz
2. System checks Supabase for template (common topics)
3. If not found, calls OpenAI GPT-4o mini to generate quiz
4. Quiz questions stored if user opted in; otherwise, only anonymized performance data saved

## 6. Opt-In to Save Quiz History
1. User sees "Save my quiz history" toggle before quiz
2. If enabled, full Q&A stored in Supabase
3. If disabled, only anonymized performance data stored

## 7. Accessibility
1. All interactive elements are keyboard accessible (tab/shift-tab)
2. Visible focus states on buttons/inputs
3. Sufficient color contrast and resizable text 