# CareLynk - Healthcare Management Platform

A comprehensive healthcare management web application built with React, TypeScript, and Vite. CareLynk provides a modern interface for managing patients, nurses, sponsors, appointments, and medical records.

## Features

- **Dashboard**: Overview with statistics, charts, and activity summaries
- **User Management**: Manage patients, nurses, sponsors, and administrators
- **Patient Profiles**: Detailed patient information, medication tracking, and sponsor management
- **Appointments**: Schedule and manage appointments with calendar views
- **Chat System**: Real-time messaging between healthcare providers and patients
- **Settings**: User preferences and account management
- **Responsive Design**: Fully responsive across all device sizes

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Routing**: React Router v7
- **Charts**: Recharts
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EHA-Capstone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── layouts/        # Layout components (navbar, routes)
│   ├── patient/        # Patient-related components
│   ├── nurse/          # Nurse-related components
│   └── ui/             # Base UI components
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   ├── dashboard-home/ # Dashboard home page
│   ├── users/          # User management pages
│   ├── patients/       # Patient pages
│   ├── appointments/   # Appointment pages
│   ├── chats/          # Chat pages
│   ├── settings/       # Settings page
│   └── profile/        # Profile pages
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── constant/           # Constants and configurations
└── lib/                # Library utilities
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint-fix` - Fix ESLint errors

## Key Features

### Authentication
- Login page with email/EHR ID support
- Protected routes with authentication checks
- Session management

### Dashboard
- Real-time statistics and metrics
- Interactive charts and graphs
- Activity summaries
- Quick search functionality

### User Management
- Create, view, edit, and delete users
- Role-based access (Admin, Nurse, Patient, Sponsor)
- User profile management
- Data tables with pagination and search

### Patient Management
- Comprehensive patient profiles
- Medication tracking
- Appointment history
- Sponsor management
- Medical records

### Responsive Design
- Mobile-first approach
- Responsive navigation with mobile menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api
```

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a capstone project. For contributions, please follow the existing code style and conventions.

## License

This project is part of a capstone project for educational purposes.

## Acknowledgments

- Built with modern React best practices
- UI components inspired by shadcn/ui
- Icons provided by Lucide
