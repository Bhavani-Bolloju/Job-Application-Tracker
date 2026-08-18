# Job Tracker

A full-stack Next.js application for managing and tracking job application across different stages of hiring process in one place.

- Manage application details, notes and contacts for each application
- Overview stats showing counts by stage and recent activity

## Why i build it

Job searching is not always straightforward. It involves different stages, follow-ups, new approaches to reaching out, reflecting on what worked or didn't, and adjusting along the way. I felt this process needed a space of its own.

This is my first full-stack Next.js project, built to explore how a real-world application can model that workflow while focusing on:

**User experience**: design consistency, User feedback, and accessibility <br/>
**Component architecture**: reusable UI built with shadcn/ui <br/>
**Data modeling & backend**: Prisma with a structured database design <br/>
**Authentication**: NextAuth for secure user sessions <br/>
**Testing**: unit and component-level testing practices

## Features

* **Application management**: Add, edit, delete, and view individual applications.
* **Search & filtering**: Search and filter applications by specific criteria.
* **Application tracking**: Track by application platform, applied date, follow-up date, and status.
* **Application details**: For communication and follow-ups add notes and contact details.
* **Authentication**: Google authentication, guest access for quick exploration, and logout feature.
* **Dashboard**: Overview of application activity and total count.
* **Accessibility**: Keyboard-accessible interactions and screen-reader considerations.
* **Validation & feedback**: Form validation errors and status update feedback.

## Screenshots
[View Applications page](./docs/images/Applications.png) <br/>
[View Add application](./docs/images/AddApplication.png) <br/>
[View Detail application page](./docs/images/DetailApplication.png) <br/>
[View Dashboard page](./docs/images/Dashboard.png) <br/>


## Tech stack

**Frontend** - Next.js, React, Typescript, Tailwindcss, shadcn <br/>
**Backend & data** - Prisma, PostgreSQL, NextAuth.js<br/>
**Testing** - Vitest, React testing library, jsdom<br/>
**Other** - chart.js, sonner, date-fns

## Accessibility

- Explicit labels associated with form controls
- Keyboard-accessible controls
- Visible focus indicators
- Accessible form validation
- aria-invalid for invalid form controls
- aria-hidden for decorative icons and visual-only indicators


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
**Pagination** - Add pagination to the table data

## Design & UI

The UI was designed around clear visual hierarchy, consistency, and the relationship between elements.

### Design Decisions

- **Typography**: Font size is determined by the role and importance of the text on the page

- **Color**: Colors communicate the importance, state, and role of elements

- **Spacing**: Spacing is used to communicate relationships between elements

## Getting Started

### Prerequisites

**Make sure you have:**

- Node.js
- Neon PostgreSQL database
- Google OAuth credentials

### Installation

**Clone the repository:**

```
git clone <repository-url>
cd job-tracker
npm install
```

**Environment variables**

The application requires environment variables for authentication and database access.
Create a .env file in the project root:

**Example:**
```
    DATABASE_URL= 
    AUTH_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
```
`DATABASE_URL`: PostgreSQL connection string from Neon project. <br/>
`AUTH_SECRET`: Generate a secure random secret.<br/>
`GOOGLE_CLIENT_ID`: Create OAuth credentials in Google Cloud Console.<br/>
`GOOGLE_CLIENT_SECRET`: Provided with the Google OAuth credentials.<br/>

<i>Do not commit .env or other files containing secrets to version control.</i>


**Run the Prisma setup:**
```
npx prisma generate
```

**Apply the database schema:**
```
npx prisma migrate dev
```

**Seed the database**
```
npx prisma db seed
```

**Start the development server:**
```
npm run dev
```

**The application will then be available at:**
```
http://localhost:3000
```



## Testing

The project includes component-level tests for important user interactions. <br/>
For example, the application drawer tests cover interactions such as adding an application and updating application information.<br/>
Run the test suite with:
```
npm test
```




