// ============================================
// CONSUMABLE TRACKING SYSTEM - MAIN SCRIPT
// ============================================

// ============================================
// PAGE NAVIGATION SYSTEM
// ============================================

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ============================================
// AUTHENTICATION SYSTEM
// ============================================

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('cts_user') !== null;
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('cts_user');
    return user ? JSON.parse(user) : null;
}

// Login function
function login(email, password) {
    // Demo users for CTS
    const validUsers = [
        { email: 'admin@cts.com', password: 'admin123', role: 'admin', name: 'Administrator', department: 'Management' },
        { email: 'manager@cts.com', password: 'manager123', role: 'manager', name: 'Procurement Manager', department: 'Procurement' },
        { email: 'staff@cts.com', password: 'staff123', role: 'staff', name: 'Office Staff', department: 'Operations' },
        { email: 'approver@cts.com', password: 'approver123', role: 'approver', name: 'Request Approver', department: 'Management' }
    ];

    const user = validUsers.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('cts_user', JSON.stringify(user));
        localStorage.setItem('cts_loginTime', new Date().toLocaleString());
        showNotification('Login successful!', 'success');
        updateNavBar();
        showPage('dashboard');
        return true;
    } else {
        showNotification('Invalid email or password!', 'danger');
        return false;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('cts_user');
    localStorage.removeItem('cts_loginTime');
    updateNavBar();
    showNotification('Logged out successfully!', 'success');
    showPage('home');
}

// Register function
function register(name, email, password, confirmPassword, department, role) {
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'danger');
        return false;
    }

    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!', 'danger');
        return false;
    }

    // Save new user to localStorage
    const newUser = {
        name,
        email,
        password,
        department,
        role,
        registeredDate: new Date().toLocaleString(),
        status: 'active'
    };

    let users = JSON.parse(localStorage.getItem('cts_registeredUsers') || '[]');

    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!', 'warning');
        return false;
    }

    users.push(newUser);
    localStorage.setItem('cts_registeredUsers', JSON.stringify(users));

    showNotification('Registration successful! Please login.', 'success');
    showPage('login');
    return true;
}

// Update navigation bar based on login status
function updateNavBar() {
    const navButtons = document.querySelector('.nav-buttons');
    const user = getCurrentUser();

    if (user) {
        navButtons.innerHTML = `
            <span style="color: white; margin-right: 1rem;">Welcome, ${user.name}</span>
            <button class="btn btn-primary" onclick="logout()">Logout</button>
        `;
    } else {
        navButtons.innerHTML = `
            <a href="#" onclick="showPage('login')" class="btn btn-primary">Login</a>
            <a href="#" onclick="showPage('register')" class="btn btn-secondary">Register</a>
        `;
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        const container = document.createElement('div');
        container.id = 'notificationContainer';
        container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; width: 350px; max-width: 90%;';
        document.body.appendChild(container);
    }

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = 'margin-bottom: 10px; animation: slideDown 0.3s ease;';

    document.getElementById('notificationContainer').appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 4000);
}

// ============================================
// FORM HANDLERS
// ============================================

// Login form handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            login(email, password);
        });
    }

    // Register form handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const department = document.getElementById('registerDepartment').value;
            const role = document.getElementById('registerRole').value;

            if (register(name, email, password, confirmPassword, department, role)) {
                registerForm.reset();
            }
        });
    }

    // Update nav bar on page load
    updateNavBar();

    // Load data
    loadConsumables();
    loadCategories();
    loadSuppliers();
    loadRequests();

    // Initialize demo data if needed
    initializeDemoData();
});

// ============================================
// CONSUMABLE MANAGEMENT
// ============================================

function loadConsumables() {
    const consumables = getConsumablesData();
    const tableBody = document.getElementById('consumablesTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (consumables.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" class="text-center">No consumables found</td></tr>';
        } else {
            consumables.forEach((consumable, index) => {
                const status = consumable.stock <= consumable.minStock ? 'Low Stock' : 'Available';
                const statusClass = status === 'Low Stock' ? 'status-pending' : 'status-completed';
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${consumable.id}</td>
                    <td>${consumable.name}</td>
                    <td>${consumable.category}</td>
                    <td>${consumable.stock}</td>
                    <td>${consumable.minStock}</td>
                    <td>₹${consumable.price}</td>
                    <td><span class="status-badge ${statusClass}">${status}</span></td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #3182ce; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="viewConsumable(${index})">View</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #4ECDC4; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="updateConsumableStock(${index})">Update</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteConsumable(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addConsumable(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add consumables!', 'warning');
        return;
    }

    const consumable = {
        id: 'CONS-' + Date.now(),
        name: document.getElementById('consumableName').value,
        category: document.getElementById('consumableCategory').value,
        stock: parseInt(document.getElementById('consumableStock').value),
        minStock: parseInt(document.getElementById('consumableMinStock').value),
        unit: document.getElementById('consumableUnit').value,
        price: parseFloat(document.getElementById('consumablePrice').value),
        createdBy: getCurrentUser().name,
        createdDate: new Date().toISOString().split('T')[0]
    };

    let consumables = JSON.parse(localStorage.getItem('cts_consumables') || '[]');
    consumables.push(consumable);
    localStorage.setItem('cts_consumables', JSON.stringify(consumables));

    showNotification('Consumable added successfully!', 'success');
    closeModal('consumableModal');
    document.getElementById('consumableForm').reset();
    loadConsumables();
    updateDashboardStats();
}

function viewConsumable(index) {
    let consumables = JSON.parse(localStorage.getItem('cts_consumables') || '[]');
    const consumable = consumables[index];

    let details = `Consumable Details:\n\n`;
    details += `ID: ${consumable.id}\n`;
    details += `Name: ${consumable.name}\n`;
    details += `Category: ${consumable.category}\n`;
    details += `Stock: ${consumable.stock} ${consumable.unit}\n`;
    details += `Min Stock: ${consumable.minStock}\n`;
    details += `Price: ₹${consumable.price}\n`;
    details += `Created by: ${consumable.createdBy}\n`;

    alert(details);
}

function updateConsumableStock(index) {
    let consumables = JSON.parse(localStorage.getItem('cts_consumables') || '[]');
    const newStock = prompt('Update stock level:', consumables[index].stock);
    if (newStock !== null && !isNaN(newStock)) {
        consumables[index].stock = parseInt(newStock);
        localStorage.setItem('cts_consumables', JSON.stringify(consumables));
        showNotification('Stock updated successfully!', 'success');
        loadConsumables();
        updateDashboardStats();
    }
}

function deleteConsumable(index) {
    if (confirm('Are you sure you want to delete this consumable?')) {
        let consumables = JSON.parse(localStorage.getItem('cts_consumables') || '[]');
        consumables.splice(index, 1);
        localStorage.setItem('cts_consumables', JSON.stringify(consumables));
        showNotification('Consumable deleted successfully!', 'success');
        loadConsumables();
        updateDashboardStats();
    }
}

function getConsumablesData() {
    return JSON.parse(localStorage.getItem('cts_consumables') || '[]');
}

// ============================================
// CATEGORY MANAGEMENT
// ============================================

function loadCategories() {
    const categories = getCategoriesData();
    const tableBody = document.getElementById('categoriesTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (categories.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" class="text-center">No categories found</td></tr>';
        } else {
            categories.forEach((category, index) => {
                const consumableCount = getConsumablesData().filter(c => c.category === category.name).length;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${category.id}</td>
                    <td>${category.name}</td>
                    <td>${consumableCount}</td>
                    <td><span class="status-badge status-completed">Active</span></td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteCategory(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addCategory(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add categories!', 'warning');
        return;
    }

    const category = {
        id: 'CAT-' + Date.now(),
        name: document.getElementById('categoryName').value,
        createdBy: getCurrentUser().name,
        createdDate: new Date().toISOString().split('T')[0]
    };

    let categories = JSON.parse(localStorage.getItem('cts_categories') || '[]');
    categories.push(category);
    localStorage.setItem('cts_categories', JSON.stringify(categories));

    showNotification('Category added successfully!', 'success');
    closeModal('categoryModal');
    document.getElementById('categoryForm').reset();
    loadCategories();
}

function deleteCategory(index) {
    if (confirm('Are you sure you want to delete this category?')) {
        let categories = JSON.parse(localStorage.getItem('cts_categories') || '[]');
        categories.splice(index, 1);
        localStorage.setItem('cts_categories', JSON.stringify(categories));
        showNotification('Category deleted successfully!', 'success');
        loadCategories();
    }
}

function getCategoriesData() {
    return JSON.parse(localStorage.getItem('cts_categories') || '[]');
}

// ============================================
// SUPPLIER MANAGEMENT
// ============================================

function loadSuppliers() {
    const suppliers = getSuppliersData();
    const tableBody = document.getElementById('suppliersTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (suppliers.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No suppliers found</td></tr>';
        } else {
            suppliers.forEach((supplier, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${supplier.id}</td>
                    <td>${supplier.name}</td>
                    <td>${supplier.contact}</td>
                    <td>${supplier.email}</td>
                    <td>${supplier.phone}</td>
                    <td><span class="status-badge status-completed">Active</span></td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #3182ce; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="viewSupplier(${index})">View</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteSupplier(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addSupplier(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add suppliers!', 'warning');
        return;
    }

    const supplier = {
        id: 'SUP-' + Date.now(),
        name: document.getElementById('supplierName').value,
        contact: document.getElementById('supplierContact').value,
        email: document.getElementById('supplierEmail').value,
        phone: document.getElementById('supplierPhone').value,
        createdBy: getCurrentUser().name,
        createdDate: new Date().toISOString().split('T')[0]
    };

    let suppliers = JSON.parse(localStorage.getItem('cts_suppliers') || '[]');
    suppliers.push(supplier);
    localStorage.setItem('cts_suppliers', JSON.stringify(suppliers));

    showNotification('Supplier added successfully!', 'success');
    closeModal('supplierModal');
    document.getElementById('supplierForm').reset();
    loadSuppliers();
    updateDashboardStats();
}

function viewSupplier(index) {
    let suppliers = JSON.parse(localStorage.getItem('cts_suppliers') || '[]');
    const supplier = suppliers[index];

    let details = `Supplier Details:\n\n`;
    details += `ID: ${supplier.id}\n`;
    details += `Name: ${supplier.name}\n`;
    details += `Contact: ${supplier.contact}\n`;
    details += `Email: ${supplier.email}\n`;
    details += `Phone: ${supplier.phone}\n`;

    alert(details);
}

function deleteSupplier(index) {
    if (confirm('Are you sure you want to delete this supplier?')) {
        let suppliers = JSON.parse(localStorage.getItem('cts_suppliers') || '[]');
        suppliers.splice(index, 1);
        localStorage.setItem('cts_suppliers', JSON.stringify(suppliers));
        showNotification('Supplier deleted successfully!', 'success');
        loadSuppliers();
        updateDashboardStats();
    }
}

function getSuppliersData() {
    return JSON.parse(localStorage.getItem('cts_suppliers') || '[]');
}

// ============================================
// REQUEST MANAGEMENT
// ============================================

function loadRequests() {
    const requests = getRequestsData();
    const tableBody = document.getElementById('requestsTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (requests.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No requests found</td></tr>';
        } else {
            requests.forEach((request, index) => {
                const statusClass = `status-${request.status.toLowerCase()}`;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${request.id}</td>
                    <td>${request.consumable}</td>
                    <td>${request.quantity}</td>
                    <td>${request.requestedBy}</td>
                    <td>${request.requestDate}</td>
                    <td><span class="status-badge ${statusClass}">${request.status}</span></td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #3182ce; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="viewRequest(${index})">View</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #38a169; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="approveRequest(${index})">Approve</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteRequest(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addRequest(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to create requests!', 'warning');
        return;
    }

    const request = {
        id: 'REQ-' + Date.now(),
        consumable: document.getElementById('requestConsumable').value,
        quantity: parseInt(document.getElementById('requestQuantity').value),
        notes: document.getElementById('requestNotes').value,
        requestedBy: getCurrentUser().name,
        requestDate: new Date().toISOString().split('T')[0],
        status: 'Pending'
    };

    let requests = JSON.parse(localStorage.getItem('cts_requests') || '[]');
    requests.push(request);
    localStorage.setItem('cts_requests', JSON.stringify(requests));

    showNotification('Request created successfully!', 'success');
    closeModal('requestModal');
    document.getElementById('requestForm').reset();
    loadRequests();
    updateDashboardStats();
}

function viewRequest(index) {
    let requests = JSON.parse(localStorage.getItem('cts_requests') || '[]');
    const request = requests[index];

    let details = `Request Details:\n\n`;
    details += `ID: ${request.id}\n`;
    details += `Consumable: ${request.consumable}\n`;
    details += `Quantity: ${request.quantity}\n`;
    details += `Requested By: ${request.requestedBy}\n`;
    details += `Request Date: ${request.requestDate}\n`;
    details += `Status: ${request.status}\n`;
    details += `Notes: ${request.notes || 'N/A'}\n`;

    alert(details);
}

function approveRequest(index) {
    let requests = JSON.parse(localStorage.getItem('cts_requests') || '[]');
    requests[index].status = 'Approved';
    requests[index].approvedDate = new Date().toISOString().split('T')[0];
    localStorage.setItem('cts_requests', JSON.stringify(requests));
    showNotification('Request approved!', 'success');
    loadRequests();
    updateDashboardStats();
}

function deleteRequest(index) {
    if (confirm('Are you sure you want to delete this request?')) {
        let requests = JSON.parse(localStorage.getItem('cts_requests') || '[]');
        requests.splice(index, 1);
        localStorage.setItem('cts_requests', JSON.stringify(requests));
        showNotification('Request deleted successfully!', 'success');
        loadRequests();
        updateDashboardStats();
    }
}

function getRequestsData() {
    return JSON.parse(localStorage.getItem('cts_requests') || '[]');
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

function updateDashboardStats() {
    const consumables = getConsumablesData();
    const requests = getRequestsData();
    const suppliers = getSuppliersData();

    const totalConsumables = consumables.length;
    const lowStockItems = consumables.filter(c => c.stock <= c.minStock).length;
    const activeRequests = requests.filter(r => r.status === 'Pending').length;
    const totalSuppliers = suppliers.length;

    document.getElementById('totalConsumablesCount').textContent = totalConsumables;
    document.getElementById('lowStockCount').textContent = lowStockItems;
    document.getElementById('activeRequestsCount').textContent = activeRequests;
    document.getElementById('suppliersCount').textContent = totalSuppliers;
}

// ============================================
// DEMO DATA INITIALIZATION
// ============================================

function initializeDemoData() {
    // Initialize Consumables
    if (!localStorage.getItem('cts_consumables')) {
        const demoConsumables = [
            {
                id: 'CONS-001',
                name: 'Printer Paper A4',
                category: 'Office Supplies',
                stock: 50,
                minStock: 20,
                unit: 'reams',
                price: 150,
                createdBy: 'Administrator',
                createdDate: '2024-04-01'
            },
            {
                id: 'CONS-002',
                name: 'Ball Point Pen',
                category: 'Stationery',
                stock: 15,
                minStock: 30,
                unit: 'boxes',
                price: 200,
                createdBy: 'Administrator',
                createdDate: '2024-04-01'
            },
            {
                id: 'CONS-003',
                name: 'Hand Sanitizer',
                category: 'Safety',
                stock: 8,
                minStock: 10,
                unit: 'bottles',
                price: 250,
                createdBy: 'Administrator',
                createdDate: '2024-04-01'
            }
        ];
        localStorage.setItem('cts_consumables', JSON.stringify(demoConsumables));
    }

    // Initialize Categories
    if (!localStorage.getItem('cts_categories')) {
        const demoCategories = [
            { id: 'CAT-001', name: 'Office Supplies', createdBy: 'Administrator', createdDate: '2024-04-01' },
            { id: 'CAT-002', name: 'Stationery', createdBy: 'Administrator', createdDate: '2024-04-01' },
            { id: 'CAT-003', name: 'Safety', createdBy: 'Administrator', createdDate: '2024-04-01' },
            { id: 'CAT-004', name: 'Cleaning', createdBy: 'Administrator', createdDate: '2024-04-01' },
            { id: 'CAT-005', name: 'IT', createdBy: 'Administrator', createdDate: '2024-04-01' }
        ];
        localStorage.setItem('cts_categories', JSON.stringify(demoCategories));
    }

    // Initialize Suppliers
    if (!localStorage.getItem('cts_suppliers')) {
        const demoSuppliers = [
            {
                id: 'SUP-001',
                name: 'Paper World Inc',
                contact: 'John Smith',
                email: 'john@paperworld.com',
                phone: '+91-9876543210',
                createdBy: 'Administrator',
                createdDate: '2024-04-01'
            },
            {
                id: 'SUP-002',
                name: 'Stationery Hub',
                contact: 'Sarah Johnson',
                email: 'sarah@stationeryhub.com',
                phone: '+91-9123456789',
                createdBy: 'Administrator',
                createdDate: '2024-04-01'
            }
        ];
        localStorage.setItem('cts_suppliers', JSON.stringify(demoSuppliers));
    }

    // Initialize Requests
    if (!localStorage.getItem('cts_requests')) {
        const demoRequests = [
            {
                id: 'REQ-001',
                consumable: 'Printer Paper A4',
                quantity: 10,
                requestedBy: 'Office Staff',
                requestDate: '2024-04-05',
                status: 'Pending',
                notes: 'For monthly reports'
            }
        ];
        localStorage.setItem('cts_requests', JSON.stringify(demoRequests));
    }

    updateDashboardStats();
}

// ============================================
// EVENT LISTENERS
// ============================================

// Sidebar navigation for mobile
document.addEventListener('DOMContentLoaded', function() {
    updateDashboardStats();
});
