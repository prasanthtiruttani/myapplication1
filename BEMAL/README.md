# 🔬 BEMAL - Battery Evaluation & Material Analytical Laboratory

A comprehensive sample management system for lead acid battery research and testing at Amara Raja Energy and Mobility Ltd.

## 📋 Overview

BEMAL (Battery Evaluation & Material Analytical Laboratory) is Amara Raja Energy and Mobility Ltd's advanced research facility dedicated to lead acid battery technology. This web application provides complete sample management, testing coordination, equipment tracking, and reporting capabilities for laboratory operations.

## 🎯 Features

### 🔐 Authentication System
- **Multi-role Access**: Admin, Scientist, Technician, Manager
- **Secure Login**: Email/password authentication
- **User Registration**: Department and role-based registration
- **Session Management**: Persistent login sessions

### 🧪 Sample Management
- **Sample Registration**: Complete sample intake and cataloging
- **Sample Tracking**: Real-time status monitoring
- **Inventory Management**: Location and quantity tracking
- **Sample Types**: Battery plates, electrolytes, separators, terminals, etc.
- **Batch Management**: Production batch tracking

### 🔬 Test Management
- **Test Scheduling**: Plan and schedule laboratory tests
- **Test Types**: Capacity, pH, material analysis, electrical, chemical, microscopy
- **Technician Assignment**: Assign tests to qualified personnel
- **Equipment Allocation**: Link tests to specific equipment
- **Status Tracking**: Monitor test progress and completion

### ⚙️ Equipment Management
- **Equipment Inventory**: Track all laboratory equipment
- **Calibration Schedules**: Monitor calibration status
- **Maintenance Tracking**: Record maintenance activities
- **Status Monitoring**: Available, In Use, Maintenance, Offline
- **Equipment Types**: Testers, analyzers, microscopes, spectrometers

### 📊 Reports & Analytics
- **Report Generation**: Create comprehensive test reports
- **Data Export**: Download reports in text format
- **Analytics Dashboard**: Key metrics and statistics
- **Historical Data**: Access past test results and reports

## 🏗️ System Architecture

```
Frontend Layer (HTML/CSS/JavaScript)
├── User Interface (index.html)
├── Styling (styles.css)
├── Functionality (script.js)
└── Data Storage (localStorage)

Data Management
├── Samples (bemal_samples)
├── Tests (bemal_tests)
├── Equipment (bemal_equipment)
├── Reports (bemal_reports)
└── Users (bemal_registeredUsers)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required

### Installation
1. **Download the BEMAL folder**
2. **Navigate to the folder**
3. **Open `index.html` in your browser**

### Demo Credentials
```
Administrator: admin@bemal.com / admin123
Research Scientist: scientist@bemal.com / scientist123
Lab Technician: technician@bemal.com / technician123
Lab Manager: manager@bemal.com / manager123
```

## 📖 User Guide

### For Administrators
1. **Login** with admin credentials
2. **Dashboard** - View overall laboratory statistics
3. **Manage Users** - Register new laboratory personnel
4. **Oversee Operations** - Monitor all laboratory activities

### For Research Scientists
1. **Login** with scientist credentials
2. **Register Samples** - Add new research samples
3. **Schedule Tests** - Plan analytical testing
4. **Review Results** - Access test reports and data
5. **Generate Reports** - Create research documentation

### For Lab Technicians
1. **Login** with technician credentials
2. **View Assigned Tests** - Check scheduled testing
3. **Update Test Status** - Mark tests as completed
4. **Equipment Management** - Monitor equipment status
5. **Sample Tracking** - Update sample locations

### For Lab Managers
1. **Login** with manager credentials
2. **Monitor Operations** - Overview of all activities
3. **Resource Management** - Equipment and personnel
4. **Quality Control** - Review testing procedures
5. **Reporting** - Generate operational reports

## 🔧 Technical Specifications

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design and animations
- **JavaScript (ES6)**: Application logic and interactivity
- **localStorage API**: Client-side data persistence

### Browser Compatibility
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Performance
- **Load Time**: < 1 second
- **Storage**: ~5-10 MB localStorage capacity
- **Responsive**: Mobile, tablet, desktop optimized

## 📊 Data Structure

### Sample Data
```javascript
{
  id: "SMP-001",
  name: "Lead Acid Battery Sample A1",
  type: "Battery Plate",
  batchNumber: "BAT-2024-001",
  receivedDate: "2024-04-01",
  source: "Production Line A",
  quantity: "5",
  unit: "pieces",
  location: "Storage Room A1",
  status: "Received",
  createdBy: "Research Scientist",
  createdDate: "2024-04-01"
}
```

### Test Data
```javascript
{
  id: "TST-001",
  sampleId: "SMP-001",
  testType: "Capacity Test",
  scheduledDate: "2024-04-05",
  technician: "Lab Technician",
  equipment: "Battery Analyzer",
  status: "Scheduled",
  createdBy: "Research Scientist"
}
```

### Equipment Data
```javascript
{
  id: "EQP-001",
  name: "Battery Analyzer BA-100",
  type: "Electrical Tester",
  location: "Test Lab A",
  status: "Available",
  lastCalibration: "2024-03-01",
  manufacturer: "TestEquip Inc."
}
```

## 🎨 Design System

### Color Palette
- **Primary**: #1a365d (Deep Navy Blue)
- **Secondary**: #2d3748 (Dark Gray)
- **Accent**: #3182ce (Blue)
- **Success**: #38a169 (Green)
- **Warning**: #d69e2e (Orange)
- **Danger**: #e53e3e (Red)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Hierarchy**: Clear heading levels and text sizes
- **Accessibility**: High contrast ratios

### Components
- **Cards**: Service and feature displays
- **Tables**: Data presentation
- **Forms**: Input and data collection
- **Modals**: Detailed views and editing
- **Buttons**: Action triggers with hover states

## 🔒 Security Features

- **Input Validation**: Client-side form validation
- **Password Requirements**: Minimum 6 characters
- **Email Validation**: Proper email format checking
- **Role-Based Access**: Different permissions per user type
- **Session Security**: Automatic logout on browser close

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layouts
- Touch-friendly buttons
- Optimized navigation
- Readable text sizes

### Tablet (768px - 1199px)
- Two column layouts
- Flexible navigation
- Adapted table display
- Medium-sized components

### Desktop (1200px+)
- Multi-column layouts
- Full navigation menu
- Complete table display
- Large screen optimization

## 🚀 Future Enhancements

### Phase 1 (Short Term)
- [ ] Backend API integration
- [ ] Database connectivity
- [ ] Real-time notifications
- [ ] Advanced search and filtering
- [ ] Export to Excel/PDF

### Phase 2 (Medium Term)
- [ ] Barcode scanning
- [ ] Automated test scheduling
- [ ] Quality control workflows
- [ ] Integration with lab equipment
- [ ] Advanced analytics dashboard

### Phase 3 (Long Term)
- [ ] Mobile app development
- [ ] IoT sensor integration
- [ ] Machine learning predictions
- [ ] Cloud backup and sync
- [ ] Multi-language support

## 🐛 Troubleshooting

### Common Issues

**Application won't load**
- Ensure all files are in the same folder
- Check file permissions
- Try a different browser

**Data not saving**
- Check localStorage is enabled
- Clear browser cache and retry
- Check browser developer console

**Login issues**
- Verify email and password
- Check user role permissions
- Try demo credentials

**Styling problems**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check CSS file loading

## 📞 Support

### Documentation
- **README.md**: Technical documentation
- **QUICKSTART.md**: User guide
- **REFERENCE.md**: Quick reference
- **VISUAL_GUIDE.md**: Diagrams and flowcharts

### Contact Information
- **Company**: Amara Raja Energy and Mobility Ltd
- **Laboratory**: BEMAL (Battery Evaluation & Material Analytical Laboratory)
- **Email**: bemal@amararaja.com
- **Phone**: +91-877-2261000
- **Website**: www.amararaja.com

## 📄 License

This application is developed for Amara Raja Energy and Mobility Ltd - BEMAL internal use.

## 👥 Credits

**Developed for**: Amara Raja Energy and Mobility Ltd
**Laboratory**: Battery Evaluation & Material Analytical Laboratory (BEMAL)
**Purpose**: Lead acid battery research and testing management

---

## 📊 Version Information

- **Version**: 1.0.0
- **Release Date**: April 2024
- **Browser Support**: Modern browsers
- **Platform**: Web-based application
- **Storage**: Client-side localStorage

---

*Advancing battery technology through scientific excellence* 🔋⚡
