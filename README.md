# Todo Card Application

A feature-rich, accessible todo card component with real-time updates, priority tracking, and responsive design. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [Data Structure](#data-structure)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This Todo Card application provides an interactive task management interface with:
- Real-time status updates
- Priority-based visual indicators
- Due date tracking with overdue alerts
- Collapsible descriptions for long text
- Inline editing capabilities
- Dark/light mode support

## ✨ Features

### Core Functionality
- ✅ **Task Completion** - Mark tasks as complete with visual feedback
- 🎨 **Priority Levels** - High, Medium, Low with color-coded indicators
- 📊 **Status Tracking** - Pending, In Progress, Done states
- ⏰ **Due Date Management** - Set and track due dates with time remaining
- 📝 **Long Description Support** - Collapsible sections for lengthy content
- 🏷️ **Tag System** - Categorize tasks with customizable tags
- ✏️ **Inline Editing** - Edit all task details without page refresh

### Visual Features
- 🌓 **Dark/Light Mode** - Automatically adapts to system preferences
- 🎯 **Priority Indicators** - Left border color coding
- ⚠️ **Overdue Alerts** - Visual and text indicators for overdue tasks
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🎨 **Custom Styling** - Fully customizable CSS variables

## 🚀 Installation

### Option 1: Direct Download
1. Download the `index.html` file
2. Open in any modern web browser

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/todo-card.git
cd todo-card
Option 3: GitHub Pages Deployment
Push the HTML file to your GitHub repository

Enable GitHub Pages in repository settings

Access via https://yourusername.github.io/repo-name

💻 Usage
Basic Operations
Complete a Task:

Click the checkbox next to the task title

Edit Task Details:

Click the "Edit" button

Modify title, description, priority, or due date

Click "Save" to confirm or "Cancel" to discard

Change Status:

Use the status dropdown to switch between Pending, In Progress, or Done

View Full Description:

Click "Show more" for tasks with descriptions longer than 120 characters

Keyboard Shortcuts
Tab - Navigate between interactive elements

Enter - Activate buttons and toggles

Space - Toggle checkboxes

Escape - Cancel editing (when in edit mode)

##🧩 Components
Data Attributes
The application uses data-testid attributes for testing and debugging:

Data Attribute	Purpose
test-todo-card	Main card container
test-todo-title	Task title display
test-todo-priority	Priority badge
test-todo-status	Status badge
test-todo-due-date	Due date display
test-todo-time-remaining	Time remaining indicator
test-todo-description	Task description
test-todo-tags	Tags list container
test-todo-edit-form	Edit form container
CSS Classes
priority-high, priority-medium, priority-low - Priority styling

status-done, status-overdue - Status-based styling

expanded - Collapsible section state

🎨 Styling
CSS Variables
Customize the appearance by modifying these CSS variables:

css
:root {
  /* Colors */
  --bg: #f0ede6;
  --card: #fafaf7;
  --txt: #1c1a16;
  --accent: #c84f28;
  --green: #2d6a4f;
  --amber: #905008;
  --blue: #1a4f7a;
  --red: #b91c1c;
  
  /* Spacing */
  --r: 14px;        /* Border radius */
  --r-sm: 8px;      /* Small border radius */
  --r-xs: 6px;      /* Extra small border radius */
  
  /* Effects */
  --shadow: 0 1px 4px rgba(20,15,5,.07);
}
Priority Colors
High - Red/Orange accent

Medium - Amber/Gold accent

Low - Blue accent

Status Colors
Done - Green

Overdue - Red

In Progress - Amber

Pending - Blue

📊 Data Structure
Default Task Object
javascript
{
  title: 'Redesign onboarding flow for mobile users',
  description: 'Detailed task description...',
  priority: 'High',      // 'High', 'Medium', 'Low'
  status: 'In Progress', // 'Pending', 'In Progress', 'Done'
  dueDate: Date object,
  tags: ['work', 'urgent', 'design', 'mobile']
}
🌐 Browser Support
Browser	Version	Support
Chrome	90+	✅ Full
Firefox	88+	✅ Full
Safari	14+	✅ Full
Edge	90+	✅ Full
Opera	76+	✅ Full
♿ Accessibility
This application follows WCAG 2.1 guidelines:

Semantic HTML - Proper use of article, ul, time elements

ARIA Labels - Descriptive labels for screen readers

Keyboard Navigation - Full keyboard support

Focus Indicators - Visible focus states for all interactive elements

Color Contrast - Meets WCAG AA standards

Live Regions - aria-live for dynamic content updates

Screen Reader Support
Task status announcements

Time remaining updates

Overdue notifications

Form validation hints

🔧 Customization
Adding Custom Tags
javascript
// Add new tags in the HTML
<li>new-tag</li>

// Or dynamically via JavaScript
const tagsList = document.querySelector('[data-testid="test-todo-tags"]');
const newTag = document.createElement('li');
newTag.textContent = 'custom-tag';
tagsList.appendChild(newTag);
Modifying Collapse Threshold
Change the COLLAPSE_THRESHOLD variable (line ~359):

javascript
const COLLAPSE_THRESHOLD = 200; // Characters before collapsing
Changing Time Update Interval
Modify the interval duration (line ~511):

javascript
setInterval(updateTime, 60000); // Updates every minute
📱 Responsive Breakpoints
Device	Breakpoint	Adjustments
Mobile	< 480px	Reduced padding, single column form
Tablet	480px - 768px	Standard layout
Desktop	> 768px	Full spacing, multi-column forms
🐛 Known Issues
None reported

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Guidelines
Maintain existing data-testid attributes

Preserve accessibility features

Follow CSS naming conventions

Test across multiple browsers

📄 License
This project is licensed under the MIT License - see below:

text
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so.
🙏 Acknowledgments
Fonts: DM Serif Display and DM Sans

Icons: Custom SVG icons

Inspiration: Modern task management applications

📞 Support
For issues or questions:

Check the documentation

Open an issue on GitHub

Contact the maintainer

🔄 Version History
v1.0.0 (Current)

Initial release

Full CRUD operations

Dark/light mode support

Responsive design

Accessibility features

Made by CodeWithNuel