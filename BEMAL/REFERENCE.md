# 🔬 BEMAL Reference Guide

## Quick Lookup for BEMAL Laboratory Management System

---

## 🚀 Quick Start

**Open Application:**
```
Double-click: index.html
Login: admin@bemal.com / admin123
```

**File Location:**
```
C:\Users\prasa\OneDrive\Documents\My Github Projects\myapplication1\BEMAL\
```

---

## 🔑 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@bemal.com | admin123 |
| Scientist | scientist@bemal.com | scientist123 |
| Technician | technician@bemal.com | technician123 |
| Manager | manager@bemal.com | manager123 |

---

## 📊 Dashboard Metrics

- **📦 Total Samples**: Count of all registered samples
- **⏳ Pending Tests**: Tests scheduled but not completed
- **⚙️ Available Equipment**: Equipment ready for use
- **📄 Total Reports**: Generated test reports

---

## 🧪 Sample Management

### Sample Types
- Battery Plate
- Electrolyte
- Separator
- Terminal
- Container
- Raw Material
- Finished Product

### Sample Status
- 🟢 **Received**: Sample registered
- 🟡 **Testing**: Under analysis
- 🟢 **Completed**: Testing finished
- 🔴 **Rejected**: Failed quality check

### Required Fields for New Sample
- Sample Name
- Sample Type
- Batch Number
- Received Date
- Source
- Storage Location
- Quantity & Unit
- Description

---

## 🔬 Test Management

### Test Types
- Capacity Test
- pH Analysis
- Material Analysis
- Electrical Test
- Chemical Analysis
- Microscopy
- Thermal Analysis

### Test Status
- 🟡 **Scheduled**: Test planned
- 🔵 **In Progress**: Currently running
- 🟢 **Completed**: Test finished
- 🔴 **Rejected**: Test failed

### Required Fields for New Test
- Sample ID
- Test Type
- Scheduled Date
- Technician Name
- Equipment Name
- Test Parameters
- Notes (optional)

---

## ⚙️ Equipment Management

### Equipment Types
- Electrical Tester
- Chemical Analyzer
- Microscope
- Thermal Analyzer
- Material Tester
- Spectrometer

### Equipment Status
- 🟢 **Available**: Ready for use
- 🔵 **In Use**: Currently occupied
- 🟠 **Maintenance**: Under service
- 🔴 **Offline**: Not operational

### Required Fields for New Equipment
- Equipment Name
- Type
- Model
- Serial Number
- Location
- Manufacturer
- Purchase Date
- Last Calibration
- Specifications

---

## 📊 Reports

### Report Types
- Capacity Test Report
- Chemical Analysis Report
- Material Analysis Report
- Electrical Test Report
- Failure Analysis Report

### Report Actions
- **View**: See report details
- **Download**: Save as text file

---

## 🎨 Status Indicators

### Sample Status Colors
```
🟢 Green: Received, Completed
🟡 Yellow: Testing
🔴 Red: Rejected
```

### Test Status Colors
```
🟡 Yellow: Scheduled
🔵 Blue: In Progress
🟢 Green: Completed
🔴 Red: Rejected
```

### Equipment Status Colors
```
🟢 Green: Available
🔵 Blue: In Use
🟠 Orange: Maintenance
🔴 Red: Offline
```

---

## 📋 Form Field Requirements

### Sample Registration Form
| Field | Type | Required | Example |
|-------|------|----------|---------|
| Sample Name | Text | Yes | "Lead Acid Battery Plate A1" |
| Sample Type | Select | Yes | "Battery Plate" |
| Batch Number | Text | Yes | "BAT-2024-001" |
| Received Date | Date | Yes | "2024-04-01" |
| Source | Text | Yes | "Production Line A" |
| Location | Text | Yes | "Storage Room A1" |
| Quantity | Number | Yes | "5" |
| Unit | Select | Yes | "pieces" |
| Description | Textarea | Yes | "Positive plate sample..." |

### Test Scheduling Form
| Field | Type | Required | Example |
|-------|------|----------|---------|
| Sample ID | Text | Yes | "SMP-001" |
| Test Type | Select | Yes | "Capacity Test" |
| Scheduled Date | Date | Yes | "2024-04-05" |
| Technician | Text | Yes | "Lab Technician" |
| Equipment | Text | Yes | "Battery Analyzer BA-100" |
| Parameters | Textarea | Yes | "C/10 discharge rate..." |
| Notes | Textarea | No | "Special instructions" |

### Equipment Registration Form
| Field | Type | Required | Example |
|-------|------|----------|---------|
| Equipment Name | Text | Yes | "Battery Analyzer BA-100" |
| Type | Select | Yes | "Electrical Tester" |
| Model | Text | Yes | "BA-100" |
| Serial Number | Text | Yes | "BA100-2023-001" |
| Location | Text | Yes | "Test Lab A" |
| Manufacturer | Text | Yes | "TestEquip Inc." |
| Purchase Date | Date | Yes | "2023-01-15" |
| Last Calibration | Date | Yes | "2024-03-01" |
| Specifications | Textarea | Yes | "Voltage range: 0-20V..." |

---

## 🔍 Navigation Menu

### Main Navigation
- **🏠 Home**: Welcome and services
- **📊 Dashboard**: Statistics overview
- **🧪 Samples**: Sample management
- **🔬 Tests**: Test scheduling
- **⚙️ Equipment**: Equipment inventory
- **📊 Reports**: Report generation
- **ℹ️ About**: Laboratory info

### User Actions (Top Right)
- **👤 [User Name]**: Current user
- **🚪 Logout**: Sign out

---

## ⌨️ Keyboard Shortcuts

- **Enter**: Submit forms
- **Esc**: Close modals
- **Tab**: Navigate form fields
- **Ctrl+R**: Refresh page
- **F12**: Developer console

---

## 📱 Device Compatibility

### Mobile (< 768px)
- Single column layouts
- Touch-friendly buttons
- Optimized navigation
- Readable text sizes

### Tablet (768px - 1199px)
- Two column layouts
- Flexible navigation
- Adapted tables
- Medium components

### Desktop (1200px+)
- Multi-column layouts
- Full navigation
- Complete tables
- Large components

---

## 💾 Data Storage

### Storage Method
- Browser localStorage
- Client-side only
- No server required
- ~5-10 MB capacity

### Data Persistence
- ✅ Survives browser restart
- ✅ Works offline
- ❌ Lost if cache cleared
- ❌ Not shared between browsers

### Data Categories
- `bemal_samples`: Sample records
- `bemal_tests`: Test records
- `bemal_equipment`: Equipment records
- `bemal_reports`: Report records
- `bemal_users`: User accounts

---

## 🔐 User Roles & Permissions

### Administrator
- ✅ Full system access
- ✅ User management
- ✅ All CRUD operations
- ✅ System configuration

### Research Scientist
- ✅ Sample registration
- ✅ Test scheduling
- ✅ Report generation
- ✅ Equipment viewing
- ❌ User management

### Lab Technician
- ✅ Test execution
- ✅ Equipment status updates
- ✅ Sample status updates
- ✅ Basic reporting
- ❌ Sample registration

### Lab Manager
- ✅ Operational oversight
- ✅ Resource management
- ✅ Quality control
- ✅ Advanced reporting
- ❌ System administration

---

## 📊 ID Numbering System

### Sample IDs
- Format: `SMP-XXX`
- Example: `SMP-001`, `SMP-002`
- Auto-generated sequentially

### Test IDs
- Format: `TST-XXX`
- Example: `TST-001`, `TST-002`
- Auto-generated sequentially

### Equipment IDs
- Format: `EQP-XXX`
- Example: `EQP-001`, `EQP-002`
- Auto-generated sequentially

### Report IDs
- Format: `RPT-XXX`
- Example: `RPT-001`, `RPT-002`
- Auto-generated sequentially

---

## 🎨 Color Scheme

### Primary Colors
- **Navy Blue** (#1a365d): Primary actions, headers
- **Dark Gray** (#2d3748): Secondary elements
- **Blue** (#3182ce): Links, accents
- **Green** (#38a169): Success, completed
- **Orange** (#d69e2e): Warnings, pending
- **Red** (#e53e3e): Errors, danger

### Status Colors
- **Available/Active**: Green (#38a169)
- **In Progress/Pending**: Blue/Orange (#3182ce/#d69e2e)
- **Completed**: Green (#38a169)
- **Error/Rejected**: Red (#e53e3e)

---

## 📋 Common Tasks

### Add New Sample
1. Navigate to Samples
2. Click "+ Register Sample"
3. Fill required fields
4. Click "Register Sample"

### Schedule Test
1. Navigate to Tests
2. Click "+ Schedule Test"
3. Fill required fields
4. Click "Schedule Test"

### Add Equipment
1. Navigate to Equipment
2. Click "+ Add Equipment"
3. Fill required fields
4. Click "Add Equipment"

### Generate Report
1. Navigate to Reports
2. Fill report form
3. Click "+ Generate Report"

### Update Status
1. Find item in table
2. Click appropriate button
3. Confirm action

---

## 🆘 Error Messages

### Common Errors
- **"Please login to perform this action"**: User not authenticated
- **"Invalid email or password"**: Wrong login credentials
- **"Passwords do not match"**: Registration password mismatch
- **"Email already registered"**: Duplicate user email
- **"Password must be at least 6 characters"**: Weak password

### Solutions
- Check login credentials
- Ensure all required fields filled
- Verify email format
- Check password requirements
- Refresh page and retry

---

## 🔧 File Structure

```
BEMAL/
├── index.html ............ Main application
├── styles.css ............ Styling & design
├── script.js ............. Functionality
├── README.md ............. Technical docs
├── QUICKSTART.md ......... User guide
├── REFERENCE.md .......... This file
└── VISUAL_GUIDE.md ....... Diagrams
```

---

## 📞 Contact Information

**Company:** Amara Raja Energy and Mobility Ltd
**Laboratory:** BEMAL (Battery Evaluation & Material Analytical Laboratory)
**Email:** bemal@amararaja.com
**Phone:** +91-877-2261000
**Website:** www.amararaja.com
**Emergency:** +91-877-2261001

---

## 📊 System Specifications

- **Version:** 1.0.0
- **Platform:** Web-based
- **Browser Support:** Modern browsers
- **Storage:** localStorage (5-10 MB)
- **Load Time:** < 1 second
- **Responsive:** Mobile, tablet, desktop

---

## 🎯 Quick Commands

### Open Application
```
Double-click index.html
```

### Login Commands
```
Email: admin@bemal.com
Password: admin123
```

### Navigation
```
Home → Dashboard → Samples/Tests/Equipment/Reports
```

### Data Management
```
Add: Click "+" buttons
Edit: Click "Edit" in tables
Delete: Click "Delete" in tables
View: Click "View" in tables
```

---

## 🌟 Success Indicators

### System Working Correctly
- ✅ Application loads quickly
- ✅ Login works with demo accounts
- ✅ Dashboard shows statistics
- ✅ Tables populate with data
- ✅ Forms submit successfully
- ✅ Data saves automatically
- ✅ Responsive on all devices

### User Actions Completed
- ✅ Sample registered successfully
- ✅ Test scheduled successfully
- ✅ Equipment added successfully
- ✅ Report generated successfully
- ✅ Status updated successfully

---

*Quick reference for BEMAL laboratory operations*
*Amara Raja Energy and Mobility Ltd*
