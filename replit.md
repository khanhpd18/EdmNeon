# EDM World - Electronic Dance Music Platform

## Overview

EDM World is a full-stack web application built as an Electronic Dance Music platform. It features a modern, neon-themed frontend showcasing EDM culture, artists, events, and community features. The application is built using a React frontend with Express.js backend, utilizing PostgreSQL for data persistence and deployed on Replit's infrastructure.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom neon theme and dark mode
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Typography**: Custom font stack featuring Orbitron for headings and Inter for body text

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx for server-side development

### Monorepo Structure
The application follows a monorepo pattern with shared code:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Type Safety**: Zod schemas for validation and TypeScript inference

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Animated landing section with neon effects
- **About Section**: EDM culture information and statistics
- **Artists Section**: Featured EDM artists showcase
- **Events Section**: Upcoming festivals and club events
- **CTA Section**: Community engagement and statistics
- **Footer**: Social links and site navigation

### Storage Layer
- **Interface**: Abstract storage interface (`IStorage`) for flexibility
- **Implementation**: In-memory storage for development (`MemStorage`)
- **Future**: Database storage implementation ready for production

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Routes**: Express.js handles requests with middleware logging
3. **Storage Operations**: Storage interface abstracts data persistence
4. **Response**: JSON responses with error handling middleware
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing for React
- **connect-pg-simple**: PostgreSQL session store

### UI Dependencies
- **@radix-ui/***: Comprehensive UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler
- **vite**: Frontend build tool with HMR

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Vite dev server with Express middleware
- **Port Configuration**: Internal port 5000, external port 80

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Replit Autoscale deployment target
- **Database**: Neon Database for production PostgreSQL

### Environment Configuration
- **DATABASE_URL**: Required environment variable for database connection
- **NODE_ENV**: Controls development vs production behavior
- **Session Management**: PostgreSQL-backed sessions for scalability

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```