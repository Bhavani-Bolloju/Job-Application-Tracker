# Job Tracker

A full-stack Next.js application for managing and tracking job application across different stages of hiring process in one place.

- Manage application details, notes and contacts for each application
- Overview stats showing counts by stage and recent activity

## Why i build it

## Features

* **Application management** — Add, edit, delete, and view individual applications.
* **Search & filtering** — Search and filter applications by specific criteria.
* **Application tracking** — Track by application platform, applied date, follow-up date, and status.
* **Application details** — For communication and follow-ups add notes and contact details.
* **Authentication** — Google authentication, guest access for quick exploration, and logout feature.
* **Dashboard** — Overview of application activity and total count.
* **Accessibility** — Keyboard-accessible interactions and screen-reader considerations.
* **Validation & feedback** — Form validation errors and status update feedback.


## Screenshots

## Tech stack

**Frontend** - Next.js, React, Typescript, Tailwindcss, shadcn

**Backend & data** - Prisma, PostgreSQL, NextAuth.js

**Testing** - Vitest, React testing library, jsdom

**Other** - chart.js, sonner, date-fns

## Project structure

```
    job-tracker/
    ├── app/
    │   ├── _components/     
    │   ├── api/         
    │   ├── applications/   
    │   ├── dashboard/       
    │   └── login/         
    │
    ├── components/
    ├── types.js
    ├── types.js         
    │   └── utils.js         
    │
    ├── lib/
    │   ├── application.js   
    │   ├── auth.js           
    │   ├── dashboard.js     
    │   ├── prisma.js        
    │   ├── types.js         
    │   └── utils.js      
    │
    ├── prisma/
    │   ├── schema.prisma     
    │   └── seed.ts         
    │
    ├── test/
    │   └── createApplication.ts
    │
    ├── public/           
    ├── .gitignore
    └── package.json

```
## Future Improvements

**Interaction tracker** - Timeline of actions 
<br/>
**Calendar view** - Calendar based view for applied date and follow-up date
<br/>
**Sidebar navigation** - Dedicated sidebar for navigation, user profile and logout
<br/>
**Advanced dashboard** - More details stats - comparisons across weeks and months
<br/>
**Sorting** - Sort applications by relevant fields

## Design & UI

The UI was designed around clear visual hierarchy, consistency, and the relationship between elements.

### Design Decisions

- **Typography**: Font size is determined by the role and importance of the text on the page

- **Color**: Colors communicate the importance, state, and role of elements

- **Spacing**: Spacing is used to communicate relationships between elements


## Environment variables
## Testing



