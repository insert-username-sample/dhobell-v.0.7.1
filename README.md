# Dhobell - Professional Laundry Service

A modern web application for a professional laundry service built with React and Vite.

## Features

- Responsive design
- Modern UI/UX
- Fast loading and optimized performance
- Mobile-friendly navigation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment configuration:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your configuration

## Development

To start the development server:

```bash
npm run dev
```

## Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

1. Create a production build using `npm run build`
2. Deploy the contents of the `dist` directory to your hosting provider
3. Ensure your hosting provider is configured to handle client-side routing
4. Set up the appropriate environment variables in your hosting environment

## Environment Variables

Copy `.env.example` to `.env` and update the values:

- `VITE_API_URL`: Your API endpoint
- `VITE_APP_TITLE`: Application title
- `VITE_APP_DESCRIPTION`: Application description
- `VITE_ENABLE_ANALYTICS`: Enable/disable analytics
- `VITE_PUBLIC_URL`: Your production domain

## Tech Stack

- React
- Vite
- React Router
- TailwindCSS

## License

MIT