# 🌈 Little Scholars Nursery Management System

A complete front-end web application for managing nursery operations including student registration, class management, staff management, and fee tracking.

## 🎯 Features

### User Authentication
- **Login System** with role-based access (Admin, Teacher, Parent)
- **User Registration** with email verification
- **Demo Credentials** for testing
  - Admin: admin@nursery.com / admin123
  - Teacher: teacher@nursery.com / teacher123
  - Parent: parent@nursery.com / parent123

### Dashboard
- Real-time statistics showing:
  - Total students
  - Active classes
  - Staff members
  - Pending fees
- Quick access buttons to main modules

### Student Management
- Add, edit, and delete student records
- Track student information:
  - Name, Date of Birth, Class
  - Parent/Guardian details
  - Contact information
  - Enrollment date
- View all students in a sortable table

### Class Management
- Create and manage nursery classes
- Track class information:
  - Class name and capacity
  - Assigned teachers
  - Class timing/schedule
  - Class descriptions
- Support for different age groups:
  - Infant Care
  - Toddlers (1-2 years)
  - Pre-K (2-4 years)
  - Kindergarten (4-5 years)

### Staff Management
- Manage teaching and administrative staff
- Store staff information:
  - Position and experience
  - Contact details
  - Qualifications
  - Employment dates
- Support for various positions:
  - Lead Teachers
  - Teachers
  - Teacher Assistants
  - Administrative Staff

### Fee Management
- Track student fees and payments
- Features include:
  - Add fee records for students
  - Mark fees as paid
  - Track payment status (Pending, Paid, Overdue)
  - Add payment remarks
  - Fee history tracking

### About & Contact
- Information about the nursery
- Mission and vision statements
- Contact details
- Operating hours

## 🎨 Design Features

- **Modern UI/UX** with gradient backgrounds and smooth animations
- **Responsive Design** that works on desktop, tablet, and mobile devices
- **Color-Coded Status** indicators for easy identification
- **Modal Forms** for adding and editing information
- **Toast Notifications** for user feedback
- **Professional Typography** and spacing

### Color Scheme
- Primary: #FF6B6B (Red)
- Secondary: #4ECDC4 (Teal)
- Accent: #FFE66D (Yellow)
- Success: #27AE60 (Green)
- Warning: #F39C12 (Orange)
- Danger: #E74C3C (Red)

## 📁 File Structure

```
nursery/
├── index.html          # Main HTML file with all pages
├── styles.css          # Global CSS stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Running the Application

1. **Open the application:**
   - Simply open `nursery/index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

2. **Access the application:**
   - Open http://localhost:8000/nursery/index.html in your browser

3. **Login with demo credentials:**
   - Navigate to the Login page
   - Use one of the demo credentials provided
   - Or register a new account

## 📝 Usage Guide

### For Administrators
1. Login with admin credentials
2. Access Dashboard to view overall statistics
3. Manage students, classes, staff, and fees
4. Generate reports and track financials

### For Teachers
1. Login with teacher credentials
2. View assigned classes and students
3. Access class schedules
4. Monitor student progress

### For Parents
1. Register or login to your account
2. View your child's information
3. Check fee status and payment history
4. Communicate with the nursery

## 💾 Data Storage

All data is stored locally using browser's localStorage:
- Student records
- Class information
- Staff details
- Fee records
- User accounts

**Note:** Data persists across browser sessions but is cleared when cache is cleared.

## 🔐 Security Features

- Session-based authentication
- Password validation (minimum 6 characters)
- Role-based access control
- Email validation
- Confirmation dialogs for destructive actions

## 🎓 Demo Data

The application comes pre-loaded with demo data:
- 3 Sample students
- 3 Sample classes
- 3 Sample staff members
- 3 Sample fee records

This helps you understand the system workflow without starting from scratch.

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🔧 Customization

### Adding New Features
1. Add HTML structure in `index.html`
2. Add CSS styling in `styles.css`
3. Add JavaScript functionality in `script.js`

### Modifying Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
    /* ... other colors ... */
}
```

### Adding New Pages
1. Add a new div with `id="pageName"` class `page` in HTML
2. Add the content within the div
3. Create navigation link: `<a href="#" onclick="showPage('pageName')">`
4. Add CSS styling for the new page

## 🐛 Known Limitations

- Data is stored in localStorage (limited to ~5-10MB)
- No backend server integration
- No real-time synchronization
- No file upload functionality

## 🚀 Future Enhancements

- Backend API integration
- Real-time notifications
- Photo gallery and document uploads
- Attendance tracking
- Event calendar
- Invoice generation
- Parent mobile app
- Advanced reporting

## 📧 Support

For support or feature requests, contact: info@littlescholars.com

## 📄 License

This project is provided as-is for educational and commercial use.

## 👥 Credits

Developed with ❤️ for Little Scholars Nursery Management

---

**Version:** 1.0.0  
**Last Updated:** April 2024  
**Browser Support:** Chrome, Firefox, Safari, Edge (Latest versions)

