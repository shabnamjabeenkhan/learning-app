# EduBot AI – Database Schema (MVP)

## Overview
This schema supports both subscription and one-time payment models, user authentication, quiz generation, and anonymized performance tracking. All user data is protected by Supabase Row-Level Security (RLS).

---

## users
| Field             | Type      | Notes                        |
|-------------------|-----------|------------------------------|
| id                | serial PK |                              |
| created_time      | timestamp | default now                  |
| email             | varchar   | unique, not null             |
| first_name        | text      |                              |
| last_name         | text      |                              |
| gender            | text      |                              |
| profile_image_url | text      |                              |
| user_id           | varchar   | unique, not null (Clerk ID)  |
| subscription      | text      | current plan                 |

**Indexes:**
- email (unique)
- user_id (unique)

**RLS:**
- Users can only access their own row

---

## payments
| Field            | Type      | Notes                |
|------------------|-----------|----------------------|
| id               | serial PK |                      |
| created_time     | timestamp | default now          |
| stripe_id        | varchar   | not null             |
| email            | varchar   | not null             |
| amount           | varchar   | not null             |
| payment_time     | varchar   | not null             |
| payment_date     | varchar   | not null             |
| currency         | varchar   | not null             |
| user_id          | varchar   | FK -> users.user_id  |
| customer_details | text      | not null             |
| payment_intent   | varchar   | not null             |

**Indexes:**
- user_id
- stripe_id

**RLS:**
- Users can only access their own payments

---

## subscriptions
| Field                     | Type      | Notes                        |
|---------------------------|-----------|------------------------------|
| id                        | serial PK |                              |
| created_time              | timestamp | default now                  |
| subscription_id           | varchar   | not null                     |
| stripe_user_id            | varchar   | not null                     |
| status                    | varchar   | not null                     |
| start_date                | varchar   | not null                     |
| end_date                  | varchar   | nullable                     |
| plan_id                   | varchar   | FK -> subscriptions_plans    |
| default_payment_method_id | varchar   | nullable                     |
| email                     | varchar   | not null                     |
| user_id                   | varchar   | FK -> users.user_id          |

**Indexes:**
- user_id
- subscription_id

**RLS:**
- Users can only access their own subscriptions

---

## subscriptions_plans
| Field       | Type      | Notes                |
|-------------|-----------|----------------------|
| id          | serial PK |                      |
| created_time| timestamp | default now          |
| plan_id     | varchar   | not null             |
| name        | varchar   | not null             |
| description | text      | not null             |
| amount      | varchar   | not null             |
| currency    | varchar   | not null             |
| interval    | varchar   | not null (monthly/one-time) |

**Indexes:**
- plan_id

---

## invoices
| Field           | Type      | Notes                |
|-----------------|-----------|----------------------|
| id              | serial PK |                      |
| created_time    | timestamp | default now          |
| invoice_id      | varchar   | not null             |
| subscription_id | varchar   | FK -> subscriptions  |
| amount_paid     | varchar   | not null             |
| amount_due      | varchar   | nullable             |
| currency        | varchar   | not null             |
| status          | varchar   | not null             |
| email           | varchar   | not null             |
| user_id         | varchar   | FK -> users.user_id  |

**Indexes:**
- user_id
- subscription_id

**RLS:**
- Users can only access their own invoices

---

## refunds
| Field      | Type      | Notes                |
|------------|-----------|----------------------|
| id         | serial PK |                      |
| created_time| timestamp| default now          |
| payment_id | varchar   | FK -> payments       |
| user_id    | varchar   | FK -> users.user_id  |
| refund_id  | varchar   | not null             |
| amount     | varchar   | not null             |
| currency   | varchar   | not null             |
| refund_date| timestamp | not null             |
| status     | varchar   | not null             |
| reason     | text      | nullable             |
| metadata   | text      | nullable             |

**Indexes:**
- user_id
- payment_id

**RLS:**
- Users can only access their own refunds

---

## quizzes
| Field         | Type      | Notes                        |
|---------------|-----------|------------------------------|
| id            | serial PK |                              |
| created_time  | timestamp | default now                  |
| topic         | varchar   | not null                     |
| skill_level   | varchar   | not null (beginner/intermediate) |
| template_id   | varchar   | nullable (if from Supabase)  |
| generated_by  | varchar   | 'ai' or 'template'           |
| user_id       | varchar   | FK -> users.user_id          |
| is_opted_in   | boolean   | true if user opted to save Q&A |

**Indexes:**
- user_id
- topic

**RLS:**
- Users can only access their own quizzes

---

## quiz_questions
| Field        | Type      | Notes                        |
|--------------|-----------|------------------------------|
| id           | serial PK |                              |
| quiz_id      | int       | FK -> quizzes.id             |
| question     | text      | not null                     |
| type         | varchar   | 'mcq' or 'short'             |
| options      | text[]    | nullable (for MCQ)           |
| answer       | text      | not null                     |
| difficulty   | varchar   | e.g., 'easy', 'medium', 'hard'|
| explanation  | text      | nullable (for feedback)      |

**Indexes:**
- quiz_id
- difficulty

**RLS:**
- Only accessible if user owns parent quiz

---

## quiz_attempts
| Field         | Type      | Notes                        |
|---------------|-----------|------------------------------|
| id            | serial PK |                              |
| quiz_id       | int       | FK -> quizzes.id             |
| user_id       | varchar   | FK -> users.user_id          |
| started_at    | timestamp | default now                  |
| completed_at  | timestamp | nullable                     |
| score         | int       | nullable                     |
| focus_recommendation | text | nullable                   |

**Indexes:**
- user_id
- quiz_id

**RLS:**
- Users can only access their own attempts

---

## quiz_performance
| Field         | Type      | Notes                        |
|---------------|-----------|------------------------------|
| id            | serial PK |                              |
| user_id       | varchar   | FK -> users.user_id          |
| topic         | varchar   | not null                     |
| skill_level   | varchar   | not null                     |
| total_attempts| int       |                              |
| correct       | int       |                              |
| incorrect     | int       |                              |
| last_attempt  | timestamp |                              |
| weak_areas    | text[]    |                              |

**Indexes:**
- user_id
- topic

**RLS:**
- Users can only access their own performance data

---

## Notes
- All tables use RLS to ensure users can only access their own data.
- Quiz Q&A is only stored if user opts in; otherwise, only anonymized performance data is kept.
- Both subscription and one-time payment models are supported.
- All FKs use ON DELETE CASCADE for user_id relationships. 