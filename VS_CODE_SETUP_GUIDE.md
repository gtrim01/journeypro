# JourneyPro - Visual Studio Code Setup Guide

## Opening the Project in Visual Studio Code

### Prerequisites

Before opening the JourneyPro project in Visual Studio Code, ensure you have the following installed:

1. **Visual Studio Code** - Download from https://code.visualstudio.com/
2. **Node.js** (version 18 or higher) - Download from https://nodejs.org/
3. **Python** (version 3.9 or higher) - Download from https://python.org/
4. **Git** - Download from https://git-scm.com/

### Step-by-Step Setup Instructions

#### 1. Extract and Open the Project

1. **Extract the project files** to your desired location
2. **Open Visual Studio Code**
3. **Open the project folder**:
   - Click `File` → `Open Folder...`
   - Navigate to the `journeypro-complete` folder
   - Click `Select Folder` (Windows) or `Open` (Mac/Linux)

#### 2. Install Recommended Extensions

VS Code will automatically suggest installing recommended extensions for this project. Click "Install All" when prompted, or manually install these essential extensions:

- **ES7+ React/Redux/React-Native snippets** - For React development
- **Python** - For backend development
- **Prettier - Code formatter** - For code formatting
- **ESLint** - For JavaScript linting
- **Auto Rename Tag** - For HTML/JSX tag editing
- **Bracket Pair Colorizer** - For better code readability
- **GitLens** - For enhanced Git integration

#### 3. Configure the Integrated Terminal

1. Open the integrated terminal: `View` → `Terminal` or `Ctrl+`` (backtick)
2. You should see the terminal open at the bottom of VS Code
3. The terminal should automatically open in the `journeypro-complete` directory

#### 4. Set Up the Frontend

In the VS Code terminal, run these commands:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
pnpm install

# Start the development server
pnpm run dev --host
```

The frontend will start on `http://localhost:5173` (or the next available port).

#### 5. Set Up the Backend (New Terminal)

1. Open a new terminal: `Terminal` → `New Terminal` or `Ctrl+Shift+`` 
2. In the new terminal, run:

```bash
# Navigate to backend directory
cd backend

# Activate virtual environment
source venv/bin/activate

# Install dependencies (if needed)
pip install -r requirements.txt

# Start the backend server
python src/main.py
```

The backend API will start on `http://localhost:5000`.

### Working with the Project in VS Code

#### File Structure Overview

```
journeypro-complete/
├── frontend/           # React application
│   ├── src/
│   │   ├── App.jsx    # Main application component
│   │   ├── App.css    # Styling with regional themes
│   │   └── components/ # Reusable components
├── backend/            # Flask API server
│   ├── src/
│   │   ├── main.py    # Main Flask application
│   │   ├── routes/    # API route definitions
│   │   └── models/    # Database models
├── docs/              # Documentation
├── assets/            # Shared resources
└── config/            # Configuration files
```

#### Key Development Files

**Frontend Development:**
- `frontend/src/App.jsx` - Main React component with travel intelligence features
- `frontend/src/App.css` - Regional theming and custom styles
- `frontend/src/components/` - Reusable UI components

**Backend Development:**
- `backend/src/main.py` - Flask application entry point
- `backend/src/routes/` - API endpoint definitions
- `backend/src/models/` - Database model definitions

#### Development Workflow

1. **Frontend Changes:**
   - Edit files in `frontend/src/`
   - Changes automatically reload in browser
   - View at `http://localhost:5173`

2. **Backend Changes:**
   - Edit files in `backend/src/`
   - Restart the backend server to see changes
   - API available at `http://localhost:5000`

3. **Testing:**
   - Frontend: Open browser to `http://localhost:5173`
   - Backend: Use API testing tools or browser for `http://localhost:5000`

#### Useful VS Code Features

**Multi-root Workspace:**
- You can open both `frontend` and `backend` as separate workspace folders
- `File` → `Add Folder to Workspace...`

**Integrated Git:**
- Use the Source Control panel (`Ctrl+Shift+G`) for Git operations
- View changes, commit, and push directly from VS Code

**Debugging:**
- Set breakpoints by clicking in the gutter next to line numbers
- Use `F5` to start debugging (configure launch.json if needed)

**Extensions Panel:**
- Access via `Ctrl+Shift+X`
- Search and install additional extensions as needed

### Troubleshooting Common Issues

#### Port Already in Use
If you see "Port 5173 is in use", the development server will automatically try the next available port (5174, 5175, etc.).

#### Python Virtual Environment Issues
If the virtual environment doesn't activate:
```bash
# Windows
backend\venv\Scripts\activate

# Mac/Linux
source backend/venv/bin/activate
```

#### Node.js/pnpm Issues
If pnpm is not found:
```bash
# Install pnpm globally
npm install -g pnpm
```

#### Missing Dependencies
If you encounter missing dependency errors:
```bash
# Frontend
cd frontend && pnpm install

# Backend
cd backend && source venv/bin/activate && pip install -r requirements.txt
```

### Next Steps

1. **Explore the Code:** Start by examining `frontend/src/App.jsx` to understand the travel intelligence features
2. **Customize Regional Themes:** Modify `frontend/src/App.css` to adjust regional color schemes
3. **Add Features:** Use the component structure to add new travel planning features
4. **Test Functionality:** Use the browser to test the regional theme switching and travel planning interface
5. **Review Documentation:** Check `docs/journeypro_technical_implementation_guide.pdf` for comprehensive implementation details

### Support

- **Documentation:** Complete technical guide available in `docs/` directory
- **Code Comments:** All major components include detailed comments
- **README Files:** Each directory contains specific setup instructions

You're now ready to develop and customize your JourneyPro travel intelligence platform!

