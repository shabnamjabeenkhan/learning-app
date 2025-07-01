# EduBot AI – System Architecture (MVP)

This diagram shows the high-level architecture and data flow for the MVP, including all major services and integrations.

```mermaid
graph TD
  subgraph User
    U[User (Browser)]
  end

  subgraph Frontend
    FE[Next.js 15 (Vercel)]
  end

  subgraph Backend
    DB[Supabase (Postgres)]
    AI[OpenAI GPT-4o mini]
    PAY[Stripe]
    AUTH[Clerk]
    EMAIL[Plunk]
    ANALYTICS[Plausible]
    ERR[Sentry]
    CAPTCHA[hCaptcha]
  end

  U -- "HTTP/HTTPS" --> FE
  FE -- "API (REST/GraphQL)" --> DB
  FE -- "API" --> AI
  FE -- "API/Webhooks" --> PAY
  FE -- "API" --> AUTH
  FE -- "API" --> EMAIL
  FE -- "JS SDK" --> ANALYTICS
  FE -- "JS SDK" --> ERR
  FE -- "API" --> CAPTCHA

  PAY -- "Webhooks" --> FE
  AUTH -- "Webhooks" --> FE
  DB -- "Row-Level Security" --> FE

  FE -- "Deployed on" --> VERCEL[Vercel Hosting]
``` 