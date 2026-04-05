# 👥 USER MANAGEMENT GUIDE - BEMAL Laboratory

## Complete Employee ID & Email System

---

## 📋 WHAT IS USER MANAGEMENT?

User Management allows you to create and maintain employee profiles in the system with:
- ✅ Employee ID (Unique identifier)
- ✅ Full Name
- ✅ Department
- ✅ Designation
- ✅ Email Address (@amaraja.com)
- ✅ Contact Phone
- ✅ Employment Status
- ✅ Usage Tracking Integration

---

## ⚙️ EMAIL AUTO-GENERATION SYSTEM

### How Email Generation Works

When you add a user with Employee ID, the system **automatically generates** their email address:

**Format**: `empid@amaraja.com`

**Examples:**

| Employee ID | Email Generated |
|-------------|-----------------|
| EMP-001 | emp001@amaraja.com |
| EMP-002 | emp002@amaraja.com |
| LAB-001 | lab001@amaraja.com |
| SCI-101 | sci101@amaraja.com |
| TECH-50 | tech50@amaraja.com |

### Email Generation Rules

- Employee ID is converted to **lowercase**
- All **hyphens are removed**
- Automatically appended with **@amaraja.com**
- **Cannot be manually edited**
- **Unique per employee ID**

---

## 🚀 HOW TO ADD A NEW USER

### Step 1: Access User Management
1. Login to CTS
2. Go to **"Users"** in navigation menu
3. Click **"+ Add User"** button

### Step 2: Fill User Information

Fill the form with following details:

| Field | Description | Example |
|-------|-------------|---------|
| **Employee ID** | Unique ID for employee | EMP-001 |
| **Full Name** | Employee's complete name | John Scientist |
| **Department** | Which department | Research & Development |
| **Designation** | Job title | Senior Scientist |
| **Contact Phone** | Mobile/office number | +91-9876543210 |
| **Email Address** | Auto-generated, read-only | emp001@amaraja.com |

### Step 3: Review Email
- Email is automatically generated from Employee ID
- Format: **empid@amaraja.com**
- Example: **emp001@amaraja.com**

### Step 4: Submit
- Click **"Add User"**
- System confirms with email address
- User is created and visible in list

---

## 📊 USER MANAGEMENT PAGE

### Users Table Displays:

| Column | Description |
|--------|-------------|
| **Employee ID** | Unique employee identifier |
| **Full Name** | Employee's complete name |
| **Department** | Assignment department |
| **Email Address** | Auto-generated @amaraja.com |
| **Designation** | Job title/position |
| **Status** | Active/Inactive status |
| **Actions** | View profile, Delete user |

---

## 👤 USER PROFILE VIEW

When you click **"View"** on a user, you see complete profile with:

### Personal Information
- Full Name
- Employee ID
- Email Address
- Contact Phone
- Department
- Designation
- Employment Status
- Profile Created Date

### Usage Statistics
- Total Consumables Used
- Total Quantity Used
- Last Usage Date
- Recent Usage History (Last 5 records)

---

## 📋 DEMO USERS

The system comes with some example users for demonstration:

**Note**: Demo users are NOT pre-populated. You can add users like:

```
Example User 1:
- Employee ID: EMP-001
- Full Name: John Scientist
- Department: Research & Development
- Designation: Senior Scientist
- Email: emp001@amaraja.com

Example User 2:
- Employee ID: EMP-002
- Full Name: Sarah Manager
- Department: Testing
- Designation: Manager
- Email: emp002@amaraja.com

Example User 3:
- Employee ID: TECH-001
- Full Name: Mike Technician
- Department: Quality Control
- Designation: Lab Technician
- Email: tech001@amaraja.com
```

---

## 🔗 USER-CONSUMPTION TRACKING INTEGRATION

### Linking Users to Usage Records

When a user records consumable usage:
1. System automatically records their **Full Name**
2. Usage is linked to their **Employee ID** and **Email**
3. Complete traceability established
4. User profile shows **Usage Statistics**

### View User Consumption

1. Go to **Users** page
2. Find the user in the table
3. Click **"View"** button
4. See:
   - Personal details
   - Total consumables used
   - Consumption history
   - Last usage date

---

## 📊 USER STATISTICS

### Dashboard Shows:
- **Total Users** - How many employees registered
- **Active Users** - How many are marked active
- **Departments** - How many different departments

---

## 🏢 DEPARTMENTS

Available departments in the system:
- Research & Development
- Testing
- Quality Control
- Operations
- Maintenance
- Management

---

## 👔 DESIGNATIONS

Available job designations:
- Senior Scientist
- Scientist
- Lab Technician
- Manager
- Supervisor
- Staff

---

## 🔐 USER STATUS

### Status Types:
- **Active** - User can use consumables and record usage
- **Inactive** - User profile preserved but not active

---

## 📋 EXAMPLE WORKFLOW

### Complete User Management Flow

```
1. NEW EMPLOYEE JOINS BEMAL LAB
   ↓
2. ADMIN ADDS USER IN CTS
   - Employee ID: EMP-010
   - Full Name: Rajesh Kumar
   - Department: Research & Development
   - Designation: Scientist
   - Phone: +91-9876543210
   ↓
3. SYSTEM AUTO-GENERATES EMAIL
   - Email: emp010@amaraja.com
   ↓
4. USER REGISTERED IN SYSTEM
   ↓
5. RAJESH RECORDS CONSUMABLE USAGE
   - Goes to Usage Tracking
   - Records: "Used 5 reams of paper"
   - System records his name from login
   ↓
6. USAGE LINKED TO USER PROFILE
   - Rajesh's profile shows usage
   - Can view his consumption history
   - Shows total quantity used
   ↓
7. MANAGER ANALYZES USAGE
   - Clicks "View" on Rajesh
   - Sees his usage statistics
   - Sees recent consumptions
   ↓
8. COMPLETE TRACEABILITY
   - WHO: Rajesh Kumar (EMP-010)
   - EMAIL: rajesh010@amaraja.com
   - DEPARTMENT: R&D
   - USAGE: Complete history
```

---

## ✅ BEST PRACTICES

### Adding Users:
- Use clear, consistent Employee ID format
- Keep department names consistent
- Verify email auto-generation
- Store username for login references

### Managing Users:
- Update contact information regularly
- Deactivate users instead of deleting
- Review usage statistics monthly
- Track high-consumption users

### Email Management:
- Email automatically generated
- Cannot be changed manually
- Based on Employee ID only
- All company emails use @amaraja.com

---

## 🔄 EMPLOYEE ID FORMATS

You can use various formats:

| Format | Example | Result |
|--------|---------|--------|
| EMP-001 | EMP-001 | emp001@amaraja.com |
| EMP001 | EMP001 | emp001@amaraja.com |
| LAB-10 | LAB-10 | lab10@amaraja.com |
| SCI-A1 | SCI-A1 | scia1@amaraja.com |
| TECH-001 | TECH-001 | tech001@amaraja.com |

---

## 🎯 KEY FEATURES

✅ **Unique Employee IDs** - No duplicates allowed
✅ **Auto Email Generation** - No manual entry needed
✅ **Complete Profiles** - All employee information captured
✅ **Usage Integration** - Track what each employee uses
✅ **Department Organization** - Group by department
✅ **Audit Trail** - Know who created each user and when
✅ **Status Management** - Active/Inactive tracking
✅ **Profile Viewing** - See complete user details anytime

---

## 📞 USAGE SCENARIOS

### Scenario 1: New Employee Onboarding
```
Step 1: Admin receives new employee list
Step 2: Add each employee to Users page
Step 3: System generates emails automatically
Step 4: Employees can start recording usage
```

### Scenario 2: Track Employee Consumption
```
Step 1: Manager wants to know what John used
Step 2: Go to Users page, find John
Step 3: Click "View" on his profile
Step 4: See all his consumptions and statistics
```

### Scenario 3: Department-wise Usage Analysis
```
Step 1: Filter users by department
Step 2: View each user's consumption
Step 3: Calculate total department usage
Step 4: Plan procurement accordingly
```

---

## 🔍 SEARCHING USERS

To find a user:
1. Go to **Users** page
2. Look through the table
3. Click **"View"** on the user's row
4. See complete profile

---

## 🗑️ DELETING USERS

If you need to remove a user:
1. Go to **Users** page
2. Find the user in table
3. Click **"Delete"** button
4. Confirm deletion
5. User record removed

**Note**: Usage history is preserved even after user deletion

---

## 📊 USER STATISTICS DASHBOARD

The Users page shows:
- **Total Users**: 15 (example)
- **Active Users**: 14 (example)
- **Departments**: 5 (example)

---

## 🎉 COMPLETE USER MANAGEMENT SYSTEM

You now have a complete system to:
✅ Register employees with unique IDs
✅ Auto-generate professional email addresses
✅ Track employee information
✅ Link to consumption data
✅ View user profiles and statistics
✅ Maintain company email format

---

## 📞 SUPPORT

For questions or issues:
- Email: cts@amararaja.com
- Phone: +91-877-2261000
- Lab: BEMAL - Amara Raja Energy & Mobility Ltd

---

**Complete User Management System Ready! 👥✨**

Every employee can now be tracked with proper identification and email assignment in your BEMAL Laboratory!

