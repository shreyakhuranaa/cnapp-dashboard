CNAPP Dashboard - Frontend Trainee Assignment
A dynamic, responsive dashboard for Cloud Native Application Protection Platform (CNAPP) built with React and Vite.
🌐 Live Demo
🔗 Live Website: https://cnapp-dashboard-pink.vercel.app
📁 GitHub Repository: https://github.com/shreyakhuranaa/cnapp-dashboard
🎯 Assignment Requirements Fulfilled
This project implements all the requirements mentioned in the assignment:
✅ 1. Create a JSON to build this dashboard / widget dynamically

Dashboard built from configurable JSON structure with categories and widgets
Each category contains multiple widgets that can be dynamically managed
JSON structure allows for easy expansion and modification of dashboard content

✅ 2. Users should be able to dynamically add a widget and remove a widget from a section/category

Add Widget: Users can dynamically add widgets through modal interface
Remove Widget: Cross (X) icon on each widget for instant removal
Category Management: Add widgets to specific categories (CSPM, CWPP, Registry Scan)
Real-time Updates: All changes reflect immediately in the dashboard

✅ 3. For individual widget, random text can be put for assignment purposes

Each widget displays random text content as specified in assignment
Custom widgets show user-defined text content
Empty widgets display "No Graph data available!" message

✅ 4. Once user clicks on +Add Widget, users should be able to add Widget name, widget text

Add Widget Modal: Complete form interface for widget creation
Widget Name Input: Users can specify custom widget names
Widget Text Input: Users can add custom text content for widgets
Category Selection: Choose which category to add the widget to

✅ 5. Cross icon to remove widget from category OR uncheck from category list

X Button: Each widget has cross icon for immediate removal
Category List Management: Tab-based interface to add/remove widgets
Uncheck Functionality: Users can uncheck widgets from category lists in Add Widget modal

✅ 6. Users should be able to search in a list of all the widgets

Search Modal: Dedicated search interface for all available widgets
Real-time Filtering: Search works across widget names and categories
Add/Remove from Search: Direct widget management from search results
Visual Indicators: Shows which widgets are currently added to dashboard

🚀 Features Implemented
Core Dashboard Features

Dynamic widget addition with name and text input
Category-based organization (CSPM Executive Dashboard, CWPP Dashboard, Registry Scan)
Interactive search with real-time filtering across all widgets
Instant add/remove functionality with visual feedback
Cross icon removal on each widget card

Advanced Features

Visual data charts (donut charts, progress bars) for existing widgets
Export dashboard configuration as JSON
Refresh dashboard to reset to default state
Responsive design that works on all device sizes
Professional UI/UX with modern design patterns

Widget Management System

Add Widget Modal: Tab-based interface (CSPM, CWPP, Image, Ticket categories)
Search Modal: Find and manage any widget instantly with filtering
Category Management: Organize widgets across different security domains
Custom Widgets: Users can create completely custom widgets with personalized content

🛠️ Technology Stack

Frontend Framework: React 18 with modern Hooks (useState, useReducer)
Build Tool: Vite for fast development and optimized production builds
Styling: Tailwind CSS for responsive, modern design system
Icons: Lucide React for professional iconography
State Management: React useReducer for complex local state management
Deployment: Vercel for fast, reliable hosting

📦 Installation & Local Development
Prerequisites

Node.js (version 16 or higher)
npm package manager (comes with Node.js)

Steps to Run Locally

Clone the repository

bash   git clone https://github.com/shreyakhuranaa/cnapp-dashboard.git
   cd cnapp-dashboard

Install dependencies

bash   npm install

Start development server

bash   npm run dev

Open in browser

   Navigate to: http://localhost:5173

Build for production (optional)

bash   npm run build

Preview production build (optional)

bash   npm run preview
📱 How to Use the Dashboard
Adding Custom Widgets

Click the "Add Widget" button in the header
Select a category tab (CSPM, CWPP, Image, or Ticket)
Check/uncheck existing widgets to add or remove from categories
For custom widgets: Enter widget name and text content
Click "Confirm" to apply all changes

Searching and Managing Widgets

Click "Search widgets" button in the header
Type widget name or category name to filter results
Use "Add" or "Remove" buttons for instant widget management
View real-time status showing which widgets are currently added

Removing Widgets

Method 1: Click the X icon on any widget card for instant removal
Method 2: Uncheck widgets in the Add Widget modal interface
Method 3: Remove widgets directly via the Search modal

Additional Dashboard Controls

🔄 Refresh Button: Reset dashboard to default state with original widgets
⋯ More Options Menu: Access export functionality and additional settings
🕒 Time Filter: Visual dashboard time range indicator

🗂️ Project Structure
cnapp-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx              # Main application component
│   ├── Dashboard.jsx        # Complete dashboard implementation with all features
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind CSS styles and custom styling
├── index.html              # HTML template
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
└── README.md              # Complete project documentation
📊 Dashboard Categories & Widgets
CSPM Executive Dashboard

Cloud Accounts: Visual donut chart showing connected/not connected accounts
Cloud Account Risk Assessment: Complex donut chart with security metrics
Security Score: Custom widget for security scoring
Compliance Overview: Compliance status and metrics

CWPP Dashboard

Top 5 Namespace Specific Alerts: Alert monitoring widget
Workload Alerts: Container workload security alerts
Container Security: Container security metrics and status
Runtime Protection: Real-time security protection status

Registry Scan

Image Risk Assessment: Progress bar showing vulnerability counts
Image Security Issues: Security issue tracking with progress visualization
Vulnerability Scan Results: Detailed vulnerability scanning data
Malware Detection: Malware detection reports and statistics

🎨 Widget Types & Visualizations

Donut Charts: Interactive charts for security metrics and statistics
Progress Bars: Visual representation of risk assessments and vulnerability data
Custom Text Widgets: User-defined widgets with personalized text content
Empty State Widgets: Placeholder widgets displaying "No Graph data available!"

📋 JSON Structure Example
The dashboard uses this dynamic JSON structure:
json{
  "categories": {
    "cspm": {
      "id": "cspm",
      "name": "CSPM Executive Dashboard",
      "widgets": {
        "widget1": {
          "id": "widget1",
          "name": "Cloud Accounts",
          "text": "Random text for Cloud Accounts widget",
          "type": "donut-simple",
          "data": {
            "total": 2,
            "connected": 2,
            "notConnected": 0
          }
        }
      }
    }
  }
}
✅ Complete Assignment Requirements Checklist
Assignment RequirementStatusImplementation Details1. JSON-based dynamic dashboard✅ CompleteFull JSON structure with categories and widgets2. Add/remove widgets from categories✅ CompleteModal interface with category selection3. Random text for widgets✅ CompleteAll widgets display appropriate text content4. Add Widget with name & text inputs✅ CompleteForm with name and text input fields5. Cross icon removal OR category uncheck✅ CompleteBoth methods implemented and working6. Search functionality for all widgets✅ CompleteReal-time search with add/remove capabilities7. Use React/Angular technology✅ CompleteBuilt with React 18 and modern patterns8. Store management tool✅ CompleteuseReducer for local state management9. Share code via GitHub✅ CompleteComplete repository with all source code10. Steps to run locally✅ CompleteDetailed installation and setup instructions11. Deploy the website✅ CompleteLive deployment accessible online
🌐 Links & Access

🔗 Live Demo: https://cnapp-dashboard-pink.vercel.app
📁 GitHub Repository: https://github.com/shreyakhuranaa/cnapp-dashboard
👩‍💻 Developer: Shreya Khurana

🔧 Technical Implementation Details
State Management

Uses React useReducer for complex state operations
Handles add/remove widget actions efficiently
Maintains dashboard state consistency across all operations

Component Architecture

Modular component design with clear separation of concerns
Reusable chart components for data visualization
Modal components for user interactions

Responsive Design

Mobile-first approach using Tailwind CSS
Fully responsive grid layout that adapts to all screen sizes
Touch-friendly interface elements for mobile devices

Performance Optimization

Vite for fast development and optimized production builds
Efficient re-rendering with proper React patterns
Lightweight bundle size for fast loading

🚀 Deployment Information

Platform: Vercel
Build Command: npm run build
Output Directory: dist
Node Version: 18+
Auto-deployment: Enabled from GitHub repository
Custom Domain: Available via Vercel dashboard

📝 Development Notes

Dashboard is fully responsive and works on desktop, tablet, and mobile
All widget operations are performed locally (no backend required)
State management uses React useReducer for optimal performance and predictability
Modern React patterns and best practices implemented throughout
Clean, professional UI following contemporary dashboard design principles
Comprehensive error handling and user feedback systems
