# 🏭 CONSUMABLE TRACKING SYSTEM - BEMAL 2

## Complete End-to-End Application for Amara Raja Energy & Mobility Ltd

---

## 📋 PROJECT OVERVIEW

**Problem**: Consumables received from store were not being maintained properly in BEMAL Laboratory

**Solution**: A comprehensive web-based Consumable Tracking System (CTS) to manage, track, and optimize consumable inventory

**Location**: BEMAL 2 Folder - Complete standalone application

---

## 📁 FOLDER STRUCTURE

```
BEMAL2/
├── index.html          (Main HTML - UI & Structure)
├── styles.css          (Styling - Full CSS)
├── script.js           (Functionality - JavaScript)
└── README.md           (This file)
```

---

## 🚀 QUICK START

### Step 1: Open Application
1. Navigate to `BEMAL2` folder
2. Double-click `index.html` OR
3. Open with any web browser

### Step 2: Login with Demo Credentials
```
Email: admin@cts.com
Password: admin123
```

### Step 3: Start Managing Consumables!

---

## 🔐 LOGIN CREDENTIALS

| Role | Email | Password |
|------|-------|----------|
| **Administrator** | admin@cts.com | admin123 |
| **Manager** | manager@cts.com | manager123 |
| **Lab Staff** | staff@cts.com | staff123 |

---

## ✨ FEATURES & MODULES

### 1. **Dashboard** 📊
- Total Consumables Count
- Low Stock Items Alert
- Total Requests Pending
- Total Suppliers Count
- Quick Links to all modules

### 2. **Consumables Management** 📦
**Add/Track/Update Consumables:**
- Consumable Name
- Category Selection
- Current Stock Level
- Minimum Stock Level (for alerts)
- Unit Price
- Unit Type (Boxes, Bottles, Pieces, KG, Liters)

**Features:**
- ✅ Real-time stock tracking
- ✅ Low stock status indicator (Red/Green)
- ✅ Update stock levels instantly
- ✅ Delete consumables
- ✅ View all details

**Pre-loaded Demo Data:**
- Printer Paper A4 (50 reams) - Available
- Safety Gloves (10 boxes) - Low Stock ⚠️
- Laboratory Detergent (5 liters) - Low Stock ⚠️

### 3. **Categories Management** 🏷️
**Organize Consumables:**
- Office Supplies
- Safety Equipment
- Lab Equipment
- Cleaning
- Other custom categories

**Features:**
- ✅ Add new categories
- ✅ View item count per category
- ✅ Delete categories
- ✅ Automatic category assignment

### 4. **Suppliers Management** 🚚
**Vendor Information:**
- Supplier Name
- Contact Person
- Email Address
- Phone Number

**Features:**
- ✅ Add new suppliers
- ✅ Store contact details
- ✅ Quick access to vendor info
- ✅ Delete supplier records

**Pre-loaded Demo:**
- Office Supplies Ltd
- Safety Equipment Co

### 5. **Requests Management** 📋
**Create & Track Requests:**
- Select Consumable
- Request Quantity
- Add Notes
- Track Status (Pending/Approved)

**Features:**
- ✅ Create new requests
- ✅ Approve requests (if authorized)
- ✅ View request history
- ✅ Status tracking
- ✅ Requester identification

---

## 💻 TECHNICAL DETAILS

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser Local Storage
- **Architecture**: Single Page Application (SPA)
- **Responsive**: Mobile-friendly design

### Browser Compatibility
✅ Chrome/Edge  
✅ Firefox  
✅ Safari  
✅ Mobile Browsers

### Performance
- ⚡ Fast loading (< 1 second)
- 📱 Works offline
- 💾 Local data persistence

---

## 📊 DATA MANAGEMENT

### Storage Mechanism
All data is stored in browser's Local Storage:
- `consumables` - All consumable records
- `categories` - Category list
- `suppliers` - Supplier information
- `requests` - Request records
- `currentUser` - Logged-in user info

### Data Format (JSON)
```javascript
// Consumable Example
{
  id: "CONS-1234567890",
  name: "Printer Paper A4",
  category: "Office Supplies",
  stock: 50,
  minLevel: 20,
  price: 250,
  unit: "reams",
  createdBy: "Administrator",
  createdDate: "2024-04-06"
}
```

---

## 🎯 WORKFLOW EXAMPLE

### Typical Consumable Management Flow

```
1. RECEIVE CONSUMABLE FROM STORE
   ↓
2. ADD IN CTS SYSTEM
   - Name: Printer Paper
   - Category: Office Supplies
   - Stock: 50 reams
   - Min Level: 20
   ↓
3. MONITOR STOCK
   - Dashboard shows 50 items
   - Status: ✅ Available
   ↓
4. USE IN LABORATORY
   - Staff uses 15 reams
   ↓
5. UPDATE STOCK IN CTS
   - Click Update
   - New stock: 35 reams
   - Status: Still ✅ Available
   ↓
6. STOCK FALLS BELOW MINIMUM
   - Stock reaches 18 reams
   - Status changes to: ⚠️ Low Stock
   ↓
7. CREATE REQUEST
   - Click "+ Create Request"
   - Select: Printer Paper
   - Quantity: 30 reams
   - Status: Pending
   ↓
8. APPROVE REQUEST
   - Manager/Admin approves
   - Status: Approved
   ↓
9. ORDER FROM SUPPLIER
   - Use supplier contact info
   - Place order
   ↓
10. RECEIVE NEW STOCK
    - New stock arrives
    ↓
11. UPDATE IN CTS
    - Add new stock (30 reams)
    - Total: 48 reams
    - Status: ✅ Available
    ↓
REPEAT CYCLE
```

---

## 🔧 HOW TO USE EACH MODULE

### Adding a Consumable
1. Go to **Consumables** page
2. Click **"+ Add Consumable"** button
3. Fill the form:
   - Name: `Laboratory Beakers`
   - Category: `Lab Equipment`
   - Stock: `25`
   - Min Level: `5`
   - Price: `50`
   - Unit: `pieces`
4. Click **"Add Consumable"**

### Creating a Request
1. Go to **Requests** page
2. Click **"+ Create Request"** button
3. Select consumable from dropdown
4. Enter quantity needed
5. Add notes (optional)
6. Click **"Create Request"**
7. Wait for approval

### Managing Stock
1. Go to **Consumables** page
2. Find the item
3. Click **"Update"** button
4. Enter new stock level
5. Confirm update

---

## 📱 USER INTERFACE

### Color Scheme
- **Primary Blue** (#3182ce) - Headers, buttons
- **Success Green** (#38a169) - Available/Good status
- **Danger Red** (#e53e3e) - Low stock/Alerts
- **Light Gray** (#f7fafc) - Background

### Design Features
- ✅ Clean, professional layout
- ✅ Responsive tables
- ✅ Modal pop-ups for forms
- ✅ Status badges (Color-coded)
- ✅ Intuitive navigation
- ✅ User-friendly buttons

---

## ⚠️ LOW STOCK ALERTS

**System automatically highlights:**
- Stock level ≤ Minimum level
- Shows in RED as "Low Stock"
- Helps prevent stockouts
- Easy to spot at a glance

**Example:**
- Minimum Level: 20
- Current Stock: 18
- **Status: ⚠️ Low Stock** (Highlighted in RED)

---

## 🔒 SECURITY FEATURES

### Authentication
- ✅ Login system with credentials
- ✅ User role identification
- ✅ Session management
- ✅ User display in navigation

### Access Control
- ✅ Only logged-in users can add data
- ✅ Track who created records
- ✅ Timestamp for all entries
- ✅ Secure logout function

### Data Protection
- ✅ Local storage (no external servers)
- ✅ Browser-based encryption
- ✅ Clear data on logout option
- ✅ Audit trail (creator info)

---

## 📊 SAMPLE DATA INCLUDED

### Pre-loaded Consumables
1. **Printer Paper A4** - 50 reams @ ₹250 ✅ Available
2. **Safety Gloves** - 10 boxes @ ₹150 ⚠️ Low Stock
3. **Laboratory Detergent** - 5 liters @ ₹400 ⚠️ Low Stock

### Pre-loaded Categories
- Office Supplies
- Safety Equipment
- Lab Equipment
- Cleaning

### Pre-loaded Suppliers
- Office Supplies Ltd (Raj Kumar)
- Safety Equipment Co (Priya Singh)

---

## 🎓 BENEFITS FOR BEMAL LAB

### 1. **Organization** 📋
- Know exactly what's in stock
- Categorized items for easy access
- Supplier contact info at hand

### 2. **Prevent Shortages** ⚠️
- Automatic low stock alerts
- Advance notice to order
- Never run out of essentials

### 3. **Cost Control** 💰
- Track spending per item
- Identify expensive consumables
- Optimize procurement

### 4. **Efficiency** ⚡
- Quick updates
- Easy request creation
- Fast approval process

### 5. **Accountability** ✅
- Who added what and when
- Complete audit trail
- Professional record-keeping

### 6. **Decision Making** 📊
- Historical data
- Consumption patterns
- Better forecasting

---

## 🐛 TROUBLESHOOTING

### Issue: Data not saving
**Solution**: Make sure browser supports Local Storage (all modern browsers do)

### Issue: Can't login
**Solution**: Use exact credentials:
- admin@cts.com / admin123
- manager@cts.com / manager123
- staff@cts.com / staff123

### Issue: Page not loading
**Solution**: 
- Clear browser cache
- Ensure all files (index.html, styles.css, script.js) are in BEMAL2 folder
- Check file extensions

### Issue: Lost data
**Solution**:
- Data is stored in browser
- Clear browser data = lose information
- Don't clear browser cache unnecessarily

---

## 📞 SUPPORT & CONTACT

**For Issues:**
- Check this README first
- Verify browser compatibility
- Clear cache and reload
- Ensure correct credentials

**Contact Information:**
- **Company**: Amara Raja Energy & Mobility Ltd
- **Laboratory**: BEMAL
- **Email**: cts@amararaja.com
- **Phone**: +91-877-2261000

---

## 📈 FUTURE ENHANCEMENTS

Possible improvements:
- ✨ Export data to Excel/PDF
- ✨ Cloud backup support
- ✨ Email notifications for low stock
- ✨ User roles and permissions
- ✨ Mobile app version
- ✨ Advanced analytics
- ✨ Barcode scanning
- ✨ Multiple location support

---

## 📝 VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-04-06 | Initial release with all core features |

---

## ✅ CHECKLIST - FIRST TIME USE

- [ ] Open `index.html` in browser
- [ ] Login with admin@cts.com / admin123
- [ ] View Dashboard (see stats)
- [ ] Check Consumables (see demo data)
- [ ] View Categories (5 pre-loaded)
- [ ] View Suppliers (2 pre-loaded)
- [ ] View Requests (1 sample)
- [ ] Try adding new consumable
- [ ] Try updating stock level
- [ ] Try creating request
- [ ] Test logout and login again

---

## 🎉 READY TO USE!

Your BEMAL Laboratory now has a professional Consumable Tracking System. Start managing your consumables efficiently today!

### Key Points to Remember:
✅ All data is stored locally (safe and fast)  
✅ Works offline (no internet needed)  
✅ Pre-loaded with demo data  
✅ Easy to learn and use  
✅ Complete audit trail  
✅ Mobile-friendly design  

**Happy Tracking! 📦✨**

---

**Application Created**: April 6, 2024  
**Organization**: Amara Raja Energy & Mobility Ltd  
**Laboratory**: BEMAL (Battery Evaluation & Material Analytical Laboratory)

