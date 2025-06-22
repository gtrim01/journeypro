# JourneyPro - Complete Travel Intelligence Platform

## Project Overview

JourneyPro is a comprehensive travel intelligence platform that provides intelligent route planning, weather integration, cultural adaptation, and safety features for travelers worldwide. This project includes a React frontend, Flask backend, mobile applications, and comprehensive documentation.

## Project Structure

```
journeypro-complete/
├── frontend/           # React web application
├── backend/            # Flask API server
├── mobile-app/         # React Native mobile applications
├── docs/              # Documentation and guides
├── assets/            # Shared images, icons, and design resources
├── config/            # Configuration files and environment settings
├── README.md          # This file
└── package.json       # Project metadata and scripts
```

## Quick Start Guide

### Prerequisites

- Node.js (version 18 or higher)
- Python (version 3.9 or higher)
- Git for version control
- Visual Studio Code (recommended)

### Installation

1. **Clone or download this project**
   ```bash
   # If using Git
   git clone <repository-url>
   cd journeypro-complete
   ```

2. **Set up the frontend**
   ```bash
   cd frontend
   pnpm install
   pnpm run dev --host
   ```

3. **Set up the backend**
   ```bash
   cd backend
   source venv/bin/activate
   pip install -r requirements.txt
   python src/main.py
   ```

### Development Workflow

1. **Frontend Development**
   - Navigate to `frontend/` directory
   - Run `pnpm run dev --host` to start development server
   - Edit files in `src/` directory
   - Changes will automatically reload in browser

2. **Backend Development**
   - Navigate to `backend/` directory
   - Activate virtual environment: `source venv/bin/activate`
   - Run `python src/main.py` to start API server
   - Edit files in `src/` directory
   - Restart server to see changes

3. **Testing**
   - Frontend: Access `http://localhost:5173`
   - Backend API: Access `http://localhost:5000`

## Key Features

### Travel Intelligence
- Intelligent route planning with weather integration
- Cultural adaptation for different regions
- Safety monitoring and alerts
- Vehicle-specific planning (cars, motorcycles, RVs, etc.)

### Regional Theming
- Automatic adaptation to cultural preferences
- Region-specific color schemes and layouts
- Localized content and messaging

### Mobile Applications
- iOS and Android native applications
- Offline functionality for travel scenarios
- Real-time synchronization with web platform

## Documentation

Complete documentation is available in the `docs/` directory:
- Technical Implementation Guide
- API Documentation
- Deployment Instructions
- User Guides

## Support

For technical support and questions:
- Review documentation in `docs/` directory
- Check the Technical Implementation Guide
- Contact development team

## License

Copyright 2025 JourneyPro. All rights reserved.

