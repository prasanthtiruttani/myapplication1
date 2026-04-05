# 📊 BEMAL Visual Guide

## Application Flowcharts and Diagrams

---

## 🗂️ Application Structure Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BEMAL - LABORATORY MANAGEMENT                     │
│              Amara Raja Energy and Mobility Ltd                     │
└─────────────────────────────────────────────────────────────────────┘

                         NAVIGATION HEADER
                    [Home] [Dashboard] [Samples] [Tests]
                    [Equipment] [Reports] [About] [Login/Logout]

┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                          🏠 HOME PAGE                               │
│                                                                      │
│  ┌─ Company & Lab Introduction ──────────────────────────────────┐  │
│  │  🔬 BEMAL - Battery Evaluation & Material Analytical Lab      │  │
│  │  Amara Raja Energy and Mobility Ltd                           │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Research Services Grid ──────────────────────────────────────┐  │
│  │  [🔋 Battery Testing] [🧪 Material Analysis] [⚡ Electrical]  │  │
│  │  [🔬 Microscopy] [📊 Data Analysis] [🔍 Failure Analysis]    │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ Why Choose BEMAL ────────────────────────────────────────────┐  │
│  │  🏆 State-of-the-Art Equipment  👨‍🔬 Expert Team              │  │
│  │  📈 Research Excellence  🤝 Industry Collaboration           │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                        🔐 LOGIN PAGE                                 │
│                                                                      │
│  ┌─────────────────────────────────────────┐                      │
│  │  Email:        [____________________]   │                      │
│  │  Password:     [____________________]   │                      │
│  │                                         │                      │
│  │               [✓ LOGIN BUTTON]          │                      │
│  │                                         │                      │
│  │  Demo Accounts:                         │                      │
│  │  👨‍💼 admin@bemal.com / admin123       │                      │
│  │  🔬 scientist@bemal.com / scientist123  │                      │
│  │  🧪 technician@bemal.com / technician123│                      │
│  │  📊 manager@bemal.com / manager123      │                      │
│  └─────────────────────────────────────────┘                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      📝 REGISTER PAGE                                │
│                                                                      │
│  ┌─────────────────────────────────────────┐                      │
│  │  Full Name:      [____________________]  │                      │
│  │  Email:          [____________________]  │                      │
│  │  Department:     [▼ R&D ▶]             │                      │
│  │  Role:           [▼ Scientist ▶]       │                      │
│  │  Password:       [____________________]  │                      │
│  │  Confirm Pwd:    [____________________]  │                      │
│  │                                         │                      │
│  │           [REGISTER] [← Back to Login]  │                      │
│  └─────────────────────────────────────────┘                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      📊 DASHBOARD PAGE                              │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Welcome to BEMAL - Laboratory Overview                     │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────┐ │
│  │ 🧪 Samples   │  │ ⏳ Tests     │  │ ⚙️ Equipment │  │ 📊 Rpts│ │
│  │      12      │  │      8       │  │      6       │  │   15   │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └───────┘ │
│                                                                      │
│  ┌─ Quick Actions ────────────────────────────────────────────┐   │
│  │  [🧪 Manage Samples] [🔬 Schedule Tests] [⚙️ View Equipment] │   │
│  │  [📊 Generate Reports] [ℹ️ About BEMAL]                     │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    🧪 SAMPLES PAGE                                  │
│                                                                      │
│  [+ Register Sample Button]                                        │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ ID    │ Name    │ Type  │ Batch │ Date  │ Source │ Status │ Loc│ │
│  ├───────┼─────────┼───────┼───────┼───────┼────────┼────────┼────┤ │
│  │ SMP-1 │ Battery │ Plate │ BAT-1 │ 4/1   │ Prod A │ Recvd  │ A1 │ │
│  │ SMP-2 │ Electro │ Fluid │ ELT-2 │ 4/2   │ QC     │ Testing │ B2 │ │
│  │ SMP-3 │ Separat │ AGM   │ SEP-3 │ 4/3   │ Supp X │ Compl  │ C3 │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  [Modal Popup when registering]                                    │
│  ┌──────────────────────────────┐                                 │
│  │ Register New Sample          │ ✕                              │
│  ├──────────────────────────────┤                                 │
│  │ Sample Name: [_________]      │                                 │
│  │ Type: [▼ Battery Plate ▶]     │                                 │
│  │ Batch: [_________]            │                                 │
│  │ Date: [📅 2024-04-01]         │                                 │
│  │ Source: [_________]           │                                 │
│  │ Location: [_________]         │                                 │
│  │ Quantity: [__] [▼ pieces ▶]   │                                 │
│  │ Description: [_________]      │                                 │
│  │                              │                                 │
│  │ [Cancel] [Register Sample]   │                                 │
│  └──────────────────────────────┘                                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    🔬 TESTS PAGE                                     │
│                                                                      │
│  [+ Schedule Test Button]                                          │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐│
│  │ ID    │ Sample │ Test Type │ Date  │ Tech │ Equip │ Status │ Act││
│  ├───────┼────────┼───────────┼───────┼──────┼───────┼────────┼────┤│
│  │ TST-1 │ SMP-1  │ Capacity  │ 4/5   │ Tech │ Analyz│ Sched  │ ✏️🗑️││
│  │ TST-2 │ SMP-2  │ pH Test   │ 4/6   │ Tech │ pH Met│ In Prog│ ✏️🗑️││
│  │ TST-3 │ SMP-3  │ Material  │ 4/7   │ Sci  │ SEM   │ Compl  │ ✏️🗑️││
│  └────────────────────────────────────────────────────────────────┘│
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    ⚙️ EQUIPMENT PAGE                                 │
│                                                                      │
│  [+ Add Equipment Button]                                          │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ ID    │ Name    │ Type  │ Loc │ Status │ Cal Date │ Actions   │ │
│  ├───────┼─────────┼───────┼─────┼────────┼──────────┼────────────┤ │
│  │ EQP-1 │ Battery │ Elect │ A   │ Avail  │ 2024-03 │ View Update│ │
│  │ EQP-2 │ SEM     │ Micro │ B   │ In Use │ 2024-02 │ View Update│ │
│  │ EQP-3 │ pH Met  │ Chem  │ C   │ Maint  │ 2024-03 │ View Update│ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    📊 REPORTS PAGE                                   │
│                                                                      │
│  [+ Generate Report Button]                                        │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ ID    │ Sample │ Test │ Type    │ Date  │ By    │ Actions    │ │
│  ├───────┼────────┼──────┼─────────┼───────┼───────┼─────────────┤ │
│  │ RPT-1 │ SMP-1  │ TST-1│ Capacity│ 4/5   │ Sci   │ View Download│ │
│  │ RPT-2 │ SMP-2  │ TST-2│ Chemical│ 4/6   │ Tech  │ View Download│ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                   ℹ️ ABOUT PAGE                                     │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  🔬 BEMAL Mission                                             │  │
│  │  "State-of-the-art research facility for lead acid..."       │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  🏆 Research Capabilities                                     │  │
│  │  Battery Testing • Material Analysis • Electrical Testing    │  │
│  │  Microscopy • Data Analysis • Failure Analysis               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  📞 Contact Information                                       │  │
│  │  Amara Raja Energy and Mobility Ltd                          │  │
│  │  Tirupati, Andhra Pradesh, India                             │  │
│  │  bemal@amararaja.com • +91-877-2261000                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

                         └─ FOOTER ─┘
            © 2024 Amara Raja Energy and Mobility Ltd - BEMAL
```

---

## 🔄 User Journey Flowchart

```
NEW USER JOURNEY
└─ Home Page
   └─ Click "Register"
      └─ Registration Form
         └─ Enter Details (Name, Email, Dept, Role, Password)
            └─ Click "Register"
               └─ Success Message
                  └─ Redirect to Login Page
                     └─ Login Page
                        └─ Enter Credentials
                           └─ Dashboard
                              ✓ Now can access all features

RETURNING USER JOURNEY
└─ Home Page
   └─ Click "Login"
      └─ Login Page
         └─ Enter Credentials
            └─ Dashboard
               └─ View Statistics
                  └─ Navigate to Modules
                     └─ Samples/Tests/Equipment/Reports
                        └─ Perform Actions (Add/Edit/Delete/View)
                           └─ Data Auto-Saved
                              ✓ Laboratory operations complete
```

---

## 💾 Data Flow Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                          │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │  HTML (index.html) - UI Layer        │
        │  • Forms, Tables, Navigation         │
        │  • Modal Dialogs, Buttons            │
        │  • Page Structure                    │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │  CSS (styles.css) - Presentation     │
        │  • Colors, Layout, Animations        │
        │  • Responsive Design                 │
        │  • Typography, Spacing               │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │  JavaScript (script.js) - Logic      │
        │  • Form Validation                   │
        │  • Data Management                   │
        │  • Event Handling                    │
        │  • Authentication                    │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │  localStorage - Data Persistence     │
        │  • bemal_samples                     │
        │  • bemal_tests                       │
        │  • bemal_equipment                   │
        │  • bemal_reports                     │
        │  • bemal_registeredUsers             │
        └───────────────────────────────────────┘
```

---

## 👥 User Role Permissions Matrix

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER ROLE PERMISSIONS                        │
├─────────────────────────────────────────────────────────────────┤
│ Feature              │ Admin │ Scientist │ Technician │ Manager │
├──────────────────────┼───────┼───────────┼────────────┼─────────┤
│ View Dashboard       │   ✓   │     ✓     │      ✓     │    ✓    │
│ Register Samples     │   ✓   │     ✓     │      ✗     │    ✓    │
│ Edit Samples         │   ✓   │     ✓     │      ✓     │    ✓    │
│ Delete Samples       │   ✓   │     ✗     │      ✗     │    ✓    │
├──────────────────────┼───────┼───────────┼────────────┼─────────┤
│ Schedule Tests       │   ✓   │     ✓     │      ✓     │    ✓    │
│ Execute Tests        │   ✓   │     ✓     │      ✓     │    ✓    │
│ Complete Tests       │   ✓   │     ✓     │      ✓     │    ✓    │
│ Delete Tests         │   ✓   │     ✗     │      ✗     │    ✓    │
├──────────────────────┼───────┼───────────┼────────────┼─────────┤
│ Add Equipment        │   ✓   │     ✗     │      ✗     │    ✓    │
│ Update Equipment     │   ✓   │     ✓     │      ✓     │    ✓    │
│ View Equipment       │   ✓   │     ✓     │      ✓     │    ✓    │
│ Maintenance Records  │   ✓   │     ✗     │      ✗     │    ✓    │
├──────────────────────┼───────┼───────────┼────────────┼─────────┤
│ Generate Reports     │   ✓   │     ✓     │      ✓     │    ✓    │
│ View Reports         │   ✓   │     ✓     │      ✓     │    ✓    │
│ Download Reports     │   ✓   │     ✓     │      ✓     │    ✓    │
│ Delete Reports       │   ✓   │     ✗     │      ✗     │    ✓    │
├──────────────────────┼───────┼───────────┼────────────┼─────────┤
│ User Management      │   ✓   │     ✗     │      ✗     │    ✗    │
│ System Configuration │   ✓   │     ✗     │      ✗     │    ✗    │
│ Audit Logs           │   ✓   │     ✗     │      ✗     │    ✓    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Sample Lifecycle Workflow

```
SAMPLE REGISTRATION
└─ Sample Received at Laboratory
   └─ Register in BEMAL System
      ├─ Enter Sample Details
      │  ├─ Name, Type, Batch Number
      │  ├─ Source, Quantity, Location
      │  └─ Description, Date
      └─ Status: "Received"
         └─ Store Sample Physically
            └─ Assign Storage Location
               └─ Sample Ready for Testing

TEST SCHEDULING
└─ Select Sample for Testing
   └─ Choose Test Type
      ├─ Capacity Test
      ├─ Material Analysis
      ├─ Chemical Analysis
      ├─ Electrical Test
      └─ Microscopy
         └─ Assign Technician
            └─ Assign Equipment
               └─ Set Test Parameters
                  └─ Schedule Date & Time
                     └─ Status: "Scheduled"

TEST EXECUTION
└─ Technician Accesses Scheduled Test
   └─ Prepare Equipment
      └─ Prepare Sample
         └─ Execute Test Protocol
            └─ Record Measurements
               └─ Analyze Results
                  └─ Complete Test
                     └─ Status: "Completed"

REPORT GENERATION
└─ Test Results Available
   └─ Generate Report
      ├─ Select Report Type
      ├─ Include Test Data
      ├─ Add Analysis
      └─ Generate PDF/Text
         └─ Status: "Generated"
            └─ Download/Share Report
               └─ Archive for Records
```

---

## ⚙️ Equipment Status Workflow

```
EQUIPMENT MANAGEMENT
└─ Equipment Added to System
   ├─ Equipment Details Entered
   │  ├─ Name, Type, Model
   │  ├─ Serial Number, Location
   │  ├─ Manufacturer, Purchase Date
   │  └─ Specifications
   └─ Initial Status: "Available"
      └─ Equipment Ready for Use

EQUIPMENT USAGE
└─ Test Scheduled with Equipment
   └─ Equipment Assigned to Test
      └─ Status Changes to "In Use"
         └─ Technician Uses Equipment
            └─ Test Completed
               └─ Status Returns to "Available"
                  └─ Equipment Ready for Next Test

MAINTENANCE REQUIRED
└─ Equipment Needs Maintenance
   ├─ Scheduled Maintenance
   ├─ Unscheduled Repair
   └─ Calibration Due
      └─ Status Changes to "Maintenance"
         └─ Maintenance Performed
            └─ Calibration Updated
               └─ Status Returns to "Available"

EQUIPMENT ISSUES
└─ Equipment Malfunction
   └─ Status Changes to "Offline"
      └─ Diagnosis Performed
         └─ Repair or Replacement
            └─ Status Returns to "Available"
               └─ Equipment Back in Service
```

---

## 📊 Status Color Coding System

```
┌─────────────────────────────────────────────────────────┐
│               STATUS COLOR CODING                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🟢 GREEN (#38a169) - Success/Available                 │
│    • Sample: Received, Completed                       │
│    • Test: Completed                                   │
│    • Equipment: Available                              │
│    • General: Success messages                         │
│                                                         │
│ 🔵 BLUE (#3182ce) - Progress/In Use                    │
│    • Sample: Testing (in progress)                     │
│    • Test: In Progress                                 │
│    • Equipment: In Use                                 │
│    • General: Information, links                       │
│                                                         │
│ 🟠 ORANGE (#d69e2e) - Warning/Pending                   │
│    • Sample: Pending analysis                          │
│    • Test: Scheduled (waiting)                         │
│    • Equipment: Maintenance due                        │
│    • General: Warnings, pending items                  │
│                                                         │
│ 🔴 RED (#e53e3e) - Error/Danger                         │
│    • Sample: Rejected, failed                          │
│    • Test: Rejected, failed                            │
│    • Equipment: Offline, broken                        │
│    • General: Errors, delete actions                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🗂️ File Organization Structure

```
BEMAL/
├── index.html
│   └── Main Application File
│       ├── HTML Structure
│       ├── Page Content
│       ├── Form Elements
│       └── Navigation
│
├── styles.css
│   └── Styling & Design
│       ├── Color Variables
│       ├── Layout Styles
│       ├── Component Styles
│       ├── Responsive Design
│       └── Animations
│
├── script.js
│   └── Application Logic
│       ├── Authentication
│       ├── Data Management
│       ├── Form Handling
│       ├── UI Interactions
│       └── Validation
│
├── README.md
│   └── Technical Documentation
│       ├── Overview
│       ├── Installation
│       ├── Features
│       └── API Reference
│
├── QUICKSTART.md
│   └── User Guide
│       ├── Getting Started
│       ├── Basic Tasks
│       └── Troubleshooting
│
├── REFERENCE.md
│   └── Quick Reference
│       ├── Commands
│       ├── Status Codes
│       └── Field Requirements
│
└── VISUAL_GUIDE.md
    └── This File
        ├── Flowcharts
        ├── Diagrams
        ├── User Journeys
        └── Visual Maps
```

---

## 🔄 Sample Management Process Flow

```
1. SAMPLE RECEIPT
   ┌─────────────────┐
   │ Sample Arrives  │
   │ at Laboratory   │
   └─────────────────┘
           │
           ▼

2. SAMPLE REGISTRATION
   ┌─────────────────┐
   │ Enter Details   │
   │ in BEMAL System │
   └─────────────────┘
           │
           ▼

3. SAMPLE STORAGE
   ┌─────────────────┐
   │ Assign Location │
   │ Physical Storage│
   └─────────────────┘
           │
           ▼

4. TEST SCHEDULING
   ┌─────────────────┐
   │ Schedule Tests  │
   │ Assign Resources│
   └─────────────────┘
           │
           ▼

5. TEST EXECUTION
   ┌─────────────────┐
   │ Run Tests       │
   │ Record Results  │
   └─────────────────┘
           │
           ▼

6. REPORT GENERATION
   ┌─────────────────┐
   │ Create Reports  │
   │ Analysis & Data │
   └─────────────────┘
           │
           ▼

7. SAMPLE DISPOSITION
   ┌─────────────────┐
   │ Archive/Dispose │
   │ Final Status    │
   └─────────────────┘
```

---

## 📈 Dashboard Metrics Flow

```
DATA COLLECTION
└─ Real-time Data Aggregation
   ├─ Sample Count Query
   │  └─ Total registered samples
   ├─ Test Status Query
   │  └─ Pending/scheduled tests
   ├─ Equipment Status Query
   │  └─ Available equipment count
   └─ Report Count Query
      └─ Generated reports total

METRICS CALCULATION
└─ Dashboard Statistics
   ├─ Total Samples: COUNT(samples)
   ├─ Pending Tests: COUNT(tests WHERE status='Scheduled')
   ├─ Available Equipment: COUNT(equipment WHERE status='Available')
   └─ Total Reports: COUNT(reports)

DISPLAY UPDATE
└─ UI Components
   ├─ Stat Cards Update
   ├─ Progress Indicators
   ├─ Status Badges
   └─ Real-time Refresh
```

---

## 🔐 Authentication Flow

```
USER LOGIN PROCESS
└─ User Visits Application
   └─ Clicks "Login" Button
      └─ Login Form Appears
         └─ User Enters Credentials
            ├─ Email Validation
            ├─ Password Check
            └─ Account Verification
               ├─ SUCCESS: Redirect to Dashboard
               │  ├─ Store user session
               │  ├─ Update navigation
               │  └─ Load user permissions
               └─ FAILURE: Show error message
                  ├─ Invalid credentials
                  ├─ Account locked
                  └─ Try again

USER REGISTRATION PROCESS
└─ User Clicks "Register"
   └─ Registration Form Appears
      └─ User Fills Details
         ├─ Name, Email, Department
         ├─ Role, Password, Confirm
         └─ Form Validation
            ├─ Email uniqueness check
            ├─ Password strength
            ├─ Required fields
            └─ Submit Registration
               ├─ SUCCESS: Account created
               │  └─ Redirect to login
               └─ FAILURE: Show validation errors
```

---

## 📋 Form Validation Rules

```
SAMPLE REGISTRATION FORM
├─ Sample Name: Required, Min 3 chars
├─ Sample Type: Required, From dropdown
├─ Batch Number: Required, Format XXX-XXXX-XXX
├─ Received Date: Required, Not future date
├─ Source: Required, Min 2 chars
├─ Location: Required, Min 2 chars
├─ Quantity: Required, Positive number
├─ Unit: Required, From dropdown
└─ Description: Required, Min 10 chars

TEST SCHEDULING FORM
├─ Sample ID: Required, Valid SMP-XXX format
├─ Test Type: Required, From dropdown
├─ Scheduled Date: Required, Not past date
├─ Technician: Required, Min 2 chars
├─ Equipment: Required, Min 3 chars
├─ Parameters: Required, Min 5 chars
└─ Notes: Optional, Max 500 chars

EQUIPMENT REGISTRATION FORM
├─ Equipment Name: Required, Min 3 chars
├─ Type: Required, From dropdown
├─ Model: Required, Min 2 chars
├─ Serial Number: Required, Unique
├─ Location: Required, Min 2 chars
├─ Manufacturer: Required, Min 2 chars
├─ Purchase Date: Required, Not future
├─ Calibration Date: Required, Not future
└─ Specifications: Required, Min 10 chars
```

---

## 🎯 Action Button Flow

```
ADD NEW ITEM
└─ User Clicks "+" Button
   └─ Modal Opens
      └─ Form Displays
         └─ User Fills Fields
            └─ Validation Runs
               ├─ SUCCESS: Item Created
               │  ├─ Data Saved to localStorage
               │  ├─ Table Updates
               │  ├─ Success Message
               │  └─ Modal Closes
               └─ FAILURE: Error Messages
                  ├─ Highlight Invalid Fields
                  └─ User Corrects & Retries

EDIT EXISTING ITEM
└─ User Clicks "Edit" Button
   └─ Modal Opens with Data
      └─ User Modifies Fields
         └─ Validation Runs
            ├─ SUCCESS: Item Updated
            │  ├─ Data Saved to localStorage
            │  ├─ Table Updates
            │  ├─ Success Message
            │  └─ Modal Closes
            └─ FAILURE: Error Messages

DELETE ITEM
└─ User Clicks "Delete" Button
   └─ Confirmation Dialog
      ├─ User Cancels: No Action
      └─ User Confirms: Item Deleted
         ├─ Data Removed from localStorage
         ├─ Table Updates
         └─ Success Message

VIEW ITEM DETAILS
└─ User Clicks "View" Button
   └─ Details Modal Opens
      └─ All Item Information Displayed
         └─ User Closes Modal
```

---

## 📊 Report Generation Flow

```
REPORT CREATION PROCESS
└─ User Navigates to Reports Page
   └─ Clicks "Generate Report"
      └─ Report Form Appears
         └─ User Selects Parameters
            ├─ Sample ID (optional)
            ├─ Test ID (optional)
            └─ Report Type (required)
               └─ System Validates Inputs
                  ├─ SUCCESS: Report Generated
                  │  ├─ Data Retrieved from Storage
                  │  ├─ Report Content Created
                  │  ├─ Report Saved to Storage
                  │  ├─ Table Updates
                  │  └─ Success Message
                  └─ FAILURE: Error Handling
                     ├─ Missing Data
                     ├─ Invalid IDs
                     └─ Generation Failed

REPORT VIEWING/DOWNLOADING
└─ User Finds Report in Table
   └─ Clicks "View" or "Download"
      ├─ VIEW: Modal with Report Content
      │  └─ User Reviews Information
      └─ DOWNLOAD: File Download Initiated
         ├─ Text File Created
         ├─ Browser Download Triggered
         └─ File Saved to User Device
```

---

*Visual guide for BEMAL laboratory operations*
*Amara Raja Energy and Mobility Ltd*
