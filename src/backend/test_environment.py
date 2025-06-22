#!/usr/bin/env python3
"""
JourneyPro Development Environment Test
This file tests the VS Code Python setup for JourneyPro development.
"""

import sys
import os
from datetime import datetime


def test_environment():
    """Test the development environment setup."""
    print("🚀 JourneyPro Development Environment Test")
    print("=" * 50)
    
    # Test Python version
    python_version = f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
    print(f"✅ Python Version: {python_version}")
    
    # Test virtual environment
    venv_path = os.environ.get('VIRTUAL_ENV', 'Not activated')
    print(f"✅ Virtual Environment: {venv_path}")
    
    # Test package imports
    try:
        import flask
        print(f"✅ Flask: {flask.__version__}")
    except ImportError:
        print("❌ Flask: Not installed")
    
    try:
        import fastapi
        print(f"✅ FastAPI: {fastapi.__version__}")
    except ImportError:
        print("❌ FastAPI: Not installed")
    
    try:
        import pandas
        print(f"✅ Pandas: {pandas.__version__}")
    except ImportError:
        print("❌ Pandas: Not installed")
    
    try:
        import requests
        print(f"✅ Requests: {requests.__version__}")
    except ImportError:
        print("❌ Requests: Not installed")
    
    print("=" * 50)
    print(f"🕒 Test completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("🎯 JourneyPro development environment is ready!")


if __name__ == "__main__":
    test_environment()

