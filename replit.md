# Overview

This is a personal portfolio website for Heena Khan, a Stanford Computer Science student specializing in AI. The application features a terminal-themed interface that showcases her software engineering, data science, and design projects. Built with React frontend and Express.js backend, it includes animated startup sequences, interactive file system navigation, and responsive design optimized for internship applications.

# User Preferences

Preferred communication style: Simple, everyday language.

# Personal Information
- Name: Heena Khan
- University: Stanford University
- Major: Computer Science - Artificial Intelligence
- Expected Graduation: December 2026/March 2027
- Email: henakhan@stanford.edu
- Phone: (516) 613-1854
- GitHub: heenakhan122

# Recent Changes (Latest Update: August 28, 2025)

## Complete Resume Integration (August 28, 2025)
- Updated all content based on latest resume (August 2025 version)
- Refined work experience descriptions with actual job responsibilities:
  - Neurotrack: Data platform engineering with 10k+ cognitive assessment records
  - Pull for Progress: Interactive web apps with D3.js and geospatial tools
  - Afghanistan Women's Council: React e-commerce for 100+ Afghan artisans
- Updated skills to reflect actual technical stack from resume:
  - Programming Languages: Python, C++, Java, R, SQL, HTML/CSS, JavaScript, Node.js
  - Frameworks & Libraries: React, React Native, Pandas, Folium, OpenCV, HuggingFace
  - Focus on data platform engineering and AI-powered applications
- Streamlined projects to highlight two main technical achievements:
  - ModestFilter AI Chrome Extension with computer vision
  - Mobile Maristan PWA with offline-first architecture
- Updated coursework information and technical focus areas
- Enhanced about section to emphasize data platforms and healthcare technology impact

## Previous Portfolio Personalization
- Updated all placeholder content with Heena Khan's actual information
- Changed terminal prompt from "yourname@portfolio" to "heena@stanford"
- Updated contact information with real email, phone, and GitHub links
- Implemented functional resume download feature

## Design Updates
- Changed theme color from terminal green to hot pink (#ff1493) throughout the interface
- Integrated user's professional headshot in About page
- Updated navigation structure to match ddaniel.dev with numbered sections (0-5)
- Separated content into distinct page components for better organization

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Client-Side Routing**: Uses Wouter for lightweight routing
- **State Management**: React Query for server state and built-in React state for UI
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom terminal theme and dark mode support

## Backend Architecture
- **Express.js Server**: RESTful API server with middleware for JSON parsing and request logging
- **TypeScript**: Full type safety across the backend
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage)
- **Development Setup**: Hot reload with Vite integration in development mode
- **Error Handling**: Centralized error handling middleware

## Database Schema
- **PostgreSQL with Drizzle ORM**: Type-safe database operations
- **User Management**: Basic user schema with username/password authentication
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle-kit for database migrations

## Design System
- **Terminal Theme**: Dark background with green accent colors mimicking a terminal interface
- **Custom CSS Variables**: Consistent color scheme and typography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: Smooth transitions and progressive content loading

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in separate directories
- **Shared Types**: Common interfaces and schemas shared between frontend and backend
- **Component Organization**: UI components separated from business logic components

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Type-safe ORM and database toolkit
- **express**: Web framework for Node.js backend
- **react & react-dom**: Frontend framework
- **vite**: Build tool and development server

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Icon library

## Developer Experience
- **typescript**: Type safety across the stack
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing
- **esbuild**: Fast JavaScript bundler for production builds

## Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution environment for development server

## Form and Data Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation (via drizzle-zod)
- **date-fns**: Date manipulation utilities