// ========== PAGE NAVIGATION ==========
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Check authentication
    if (pageId !== 'home' && pageId !== 'login' && !isLoggedIn()) {
        showPage('login');
    }
}

// ========== AUTHENTICATION ==========
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const validUsers = [
        { email: 'admin@cts.com', password: 'admin123', name: 'Administrator', role: 'Admin' },
        { email: 'manager@cts.com', password: 'manager123', name: 'Manager', role: 'Manager' },
        { email: 'staff@cts.com', password: 'staff123', name: 'Lab Staff', role: 'Staff' }
    ];

    const user = validUsers.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserDisplay();
        loadAllData();
        showPage('dashboard');
        alert('Login successful!');
    } else {
        alert('Invalid credentials!');
    }

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

function logout() {
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    showPage('home');
    alert('Logged out successfully!');
}

function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function updateUserDisplay() {
    const userDisplay = document.getElementById('userDisplay');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (isLoggedIn()) {
        const user = getCurrentUser();
        userDisplay.textContent = `👤 ${user.name} (${user.role})`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        userDisplay.textContent = '';
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

// ========== MODAL FUNCTIONS ==========
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}

// ========== CONSUMABLES ==========
function addConsumable(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }

    const consumable = {
        id: 'CONS-' + Date.now(),
        name: document.getElementById('consName').value,
        category: document.getElementById('consCategory').value,
        stock: parseInt(document.getElementById('consStock').value),
        minLevel: parseInt(document.getElementById('consMinLevel').value),
        price: parseFloat(document.getElementById('consPrice').value),
        unit: document.getElementById('consUnit').value,
        createdBy: getCurrentUser().name,
        createdDate: new Date().toLocaleDateString()
    };

    let consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    consumables.push(consumable);
    localStorage.setItem('consumables', JSON.stringify(consumables));

    closeModal('consumableModal');
    event.target.reset();
    loadConsumables();
    loadRequestConsumables();
    updateDashboard();
    alert('Consumable added successfully!');
}

function loadConsumables() {
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const table = document.getElementById('consumablesTable');

    if (consumables.length === 0) {
        table.innerHTML = '<tr><td colspan="8" class="no-data">No consumables found</td></tr>';
        return;
    }

    table.innerHTML = consumables.map((cons, index) => `
        <tr>
            <td>${cons.id}</td>
            <td>${cons.name}</td>
            <td>${cons.category}</td>
            <td>${cons.stock}</td>
            <td>${cons.minLevel}</td>
            <td>₹${cons.price}</td>
            <td>
                <span class="status-badge ${cons.stock <= cons.minLevel ? 'status-low' : 'status-available'}">
                    ${cons.stock <= cons.minLevel ? 'Low Stock' : 'Available'}
                </span>
            </td>
            <td>
                <button class="btn-secondary" onclick="updateConsumable(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; margin-right: 0.25rem;">Update</button>
                <button class="btn-secondary" onclick="deleteConsumable(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
            </td>
        </tr>
    `).join('');
}

function updateConsumable(index) {
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const newStock = prompt('Enter new stock level:', consumables[index].stock);

    if (newStock !== null && !isNaN(newStock)) {
        consumables[index].stock = parseInt(newStock);
        localStorage.setItem('consumables', JSON.stringify(consumables));
        loadConsumables();
        updateDashboard();
        alert('Stock updated!');
    }
}

function deleteConsumable(index) {
    if (confirm('Delete this consumable?')) {
        let consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
        consumables.splice(index, 1);
        localStorage.setItem('consumables', JSON.stringify(consumables));
        loadConsumables();
        updateDashboard();
        alert('Consumable deleted!');
    }
}

function loadRequestConsumables() {
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const select = document.getElementById('reqConsumable');

    select.innerHTML = '<option value="">Select Consumable</option>' +
        consumables.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
}

// ========== CATEGORIES ==========
function addCategory(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }

    const category = {
        id: 'CAT-' + Date.now(),
        name: document.getElementById('catName').value,
        createdBy: getCurrentUser().name
    };

    let categories = JSON.parse(localStorage.getItem('categories') || '[]');
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));

    closeModal('categoryModal');
    event.target.reset();
    loadCategories();
    updateDashboard();
    alert('Category added successfully!');
}

function loadCategories() {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const table = document.getElementById('categoriesTable');

    if (categories.length === 0) {
        table.innerHTML = '<tr><td colspan="4" class="no-data">No categories found</td></tr>';
        return;
    }

    table.innerHTML = categories.map((cat, index) => {
        const count = consumables.filter(c => c.category === cat.name).length;
        return `
            <tr>
                <td>${cat.id}</td>
                <td>${cat.name}</td>
                <td>${count}</td>
                <td>
                    <button class="btn-secondary" onclick="deleteCategory(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}

function deleteCategory(index) {
    if (confirm('Delete this category?')) {
        let categories = JSON.parse(localStorage.getItem('categories') || '[]');
        categories.splice(index, 1);
        localStorage.setItem('categories', JSON.stringify(categories));
        loadCategories();
        updateDashboard();
        alert('Category deleted!');
    }
}

// ========== SUPPLIERS ==========
function addSupplier(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }

    const supplier = {
        id: 'SUP-' + Date.now(),
        name: document.getElementById('supName').value,
        contact: document.getElementById('supContact').value,
        email: document.getElementById('supEmail').value,
        phone: document.getElementById('supPhone').value,
        createdBy: getCurrentUser().name
    };

    let suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    suppliers.push(supplier);
    localStorage.setItem('suppliers', JSON.stringify(suppliers));

    closeModal('supplierModal');
    event.target.reset();
    loadSuppliers();
    updateDashboard();
    alert('Supplier added successfully!');
}

function loadSuppliers() {
    const suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    const table = document.getElementById('suppliersTable');

    if (suppliers.length === 0) {
        table.innerHTML = '<tr><td colspan="6" class="no-data">No suppliers found</td></tr>';
        return;
    }

    table.innerHTML = suppliers.map((sup, index) => `
        <tr>
            <td>${sup.id}</td>
            <td>${sup.name}</td>
            <td>${sup.contact}</td>
            <td>${sup.email}</td>
            <td>${sup.phone}</td>
            <td>
                <button class="btn-secondary" onclick="deleteSupplier(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
            </td>
        </tr>
    `).join('');
}

function deleteSupplier(index) {
    if (confirm('Delete this supplier?')) {
        let suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
        suppliers.splice(index, 1);
        localStorage.setItem('suppliers', JSON.stringify(suppliers));
        loadSuppliers();
        updateDashboard();
        alert('Supplier deleted!');
    }
}

// ========== REQUESTS ==========
function addRequest(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }

    const request = {
        id: 'REQ-' + Date.now(),
        consumable: document.getElementById('reqConsumable').value,
        quantity: parseInt(document.getElementById('reqQuantity').value),
        notes: document.getElementById('reqNotes').value,
        requestedBy: getCurrentUser().name,
        status: 'Pending',
        requestDate: new Date().toLocaleDateString()
    };

    let requests = JSON.parse(localStorage.getItem('requests') || '[]');
    requests.push(request);
    localStorage.setItem('requests', JSON.stringify(requests));

    closeModal('requestModal');
    event.target.reset();
    loadRequests();
    updateDashboard();
    alert('Request created successfully!');
}

function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('requests') || '[]');
    const table = document.getElementById('requestsTable');

    if (requests.length === 0) {
        table.innerHTML = '<tr><td colspan="7" class="no-data">No requests found</td></tr>';
        return;
    }

    table.innerHTML = requests.map((req, index) => `
        <tr>
            <td>${req.id}</td>
            <td>${req.consumable}</td>
            <td>${req.quantity}</td>
            <td>${req.requestedBy}</td>
            <td>${req.requestDate}</td>
            <td>
                <span class="status-badge ${req.status === 'Pending' ? 'status-pending' : 'status-available'}">
                    ${req.status}
                </span>
            </td>
            <td>
                ${req.status === 'Pending' ? `
                    <button class="btn-secondary" onclick="approveRequest(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #c6f6d5; color: #22543d; margin-right: 0.25rem;">Approve</button>
                ` : ''}
                <button class="btn-secondary" onclick="deleteRequest(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
            </td>
        </tr>
    `).join('');
}

function approveRequest(index) {
    let requests = JSON.parse(localStorage.getItem('requests') || '[]');
    requests[index].status = 'Approved';
    localStorage.setItem('requests', JSON.stringify(requests));
    loadRequests();
    updateDashboard();
    alert('Request approved!');
}

function deleteRequest(index) {
    if (confirm('Delete this request?')) {
        let requests = JSON.parse(localStorage.getItem('requests') || '[]');
        requests.splice(index, 1);
        localStorage.setItem('requests', JSON.stringify(requests));
        loadRequests();
        updateDashboard();
        alert('Request deleted!');
    }
}

// ========== DASHBOARD ==========
function updateDashboard() {
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const requests = JSON.parse(localStorage.getItem('requests') || '[]');
    const suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');

    document.getElementById('totalConsumables').textContent = consumables.length;
    document.getElementById('lowStockCount').textContent =
        consumables.filter(c => c.stock <= c.minLevel).length;
    document.getElementById('totalRequests').textContent = requests.length;
    document.getElementById('totalSuppliers').textContent = suppliers.length;
}

// ========== INITIALIZATION ==========
function loadAllData() {
    loadConsumables();
    loadCategories();
    loadSuppliers();
    loadRequests();
    loadRequestConsumables();
    loadUsageTracking();
    loadUsageConsumables();
    loadUsers();
    updateDashboard();
}

function initializeDemoData() {
    if (!localStorage.getItem('consumables')) {
        const demoConsumables = [
            {
                id: 'CONS-001',
                name: 'Printer Paper A4',
                category: 'Office Supplies',
                stock: 50,
                minLevel: 20,
                price: 250,
                unit: 'reams',
                createdBy: 'System',
                createdDate: '2024-01-01'
            },
            {
                id: 'CONS-002',
                name: 'Safety Gloves',
                category: 'Safety Equipment',
                stock: 10,
                minLevel: 25,
                price: 150,
                unit: 'boxes',
                createdBy: 'System',
                createdDate: '2024-01-01'
            },
            {
                id: 'CONS-003',
                name: 'Laboratory Detergent',
                category: 'Cleaning',
                stock: 5,
                minLevel: 10,
                price: 400,
                unit: 'liters',
                createdBy: 'System',
                createdDate: '2024-01-01'
            }
        ];
        localStorage.setItem('consumables', JSON.stringify(demoConsumables));
    }

    if (!localStorage.getItem('categories')) {
        const demoCategories = [
            { id: 'CAT-001', name: 'Office Supplies', createdBy: 'System' },
            { id: 'CAT-002', name: 'Safety Equipment', createdBy: 'System' },
            { id: 'CAT-003', name: 'Lab Equipment', createdBy: 'System' },
            { id: 'CAT-004', name: 'Cleaning', createdBy: 'System' }
        ];
        localStorage.setItem('categories', JSON.stringify(demoCategories));
    }

    if (!localStorage.getItem('suppliers')) {
        const demoSuppliers = [
            {
                id: 'SUP-001',
                name: 'Office Supplies Ltd',
                contact: 'Raj Kumar',
                email: 'contact@officesupplies.com',
                phone: '+91-9876543210',
                createdBy: 'System'
            },
            {
                id: 'SUP-002',
                name: 'Safety Equipment Co',
                contact: 'Priya Singh',
                email: 'sales@safetyequip.com',
                phone: '+91-8765432109',
                createdBy: 'System'
            }
        ];
        localStorage.setItem('suppliers', JSON.stringify(demoSuppliers));
    }

    // Initialize demo usage records
    if (!localStorage.getItem('usageRecords')) {
        const demoUsage = [
            {
                id: 'USG-001',
                consumableName: 'Printer Paper A4',
                consumableId: 'CONS-001',
                quantityUsed: 5,
                usedBy: 'John Scientist',
                department: 'Research & Development',
                purpose: 'Printing test reports',
                notes: 'For battery test documentation',
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                remainingStock: 45
            }
        ];
        localStorage.setItem('usageRecords', JSON.stringify(demoUsage));
    }
}

// ========== USAGE TRACKING ==========
function recordUsage(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }

    const consumableName = document.getElementById('usageConsumable').value;
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const consumable = consumables.find(c => c.name === consumableName);

    if (!consumable) {
        alert('Consumable not found!');
        return;
    }

    const quantityUsed = parseFloat(document.getElementById('usageQuantity').value);

    // Check if enough stock
    if (consumable.stock < quantityUsed) {
        alert(`Insufficient stock! Available: ${consumable.stock}, Requested: ${quantityUsed}`);
        return;
    }

    // Update consumable stock
    consumable.stock -= quantityUsed;
    localStorage.setItem('consumables', JSON.stringify(consumables));

    // Record usage
    const usageRecord = {
        id: 'USG-' + Date.now(),
        consumableName: consumableName,
        consumableId: consumable.id,
        quantityUsed: quantityUsed,
        usedBy: getCurrentUser().name,
        department: document.getElementById('usageDepartment').value,
        purpose: document.getElementById('usagePurpose').value,
        notes: document.getElementById('usageNotes').value,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        remainingStock: consumable.stock
    };

    let usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    usageRecords.push(usageRecord);
    localStorage.setItem('usageRecords', JSON.stringify(usageRecords));

    closeModal('usageModal');
    event.target.reset();
    loadUsageTracking();
    loadConsumables();
    updateDashboard();
    alert('Usage recorded successfully!');
}

function loadUsageTracking() {
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');

    // Load usage table
    const usageTable = document.getElementById('usageTable');
    if (usageRecords.length === 0) {
        usageTable.innerHTML = '<tr><td colspan="8" class="no-data">No usage records found</td></tr>';
    } else {
        usageTable.innerHTML = usageRecords.map((record, index) => `
            <tr>
                <td>${record.date} ${record.time}</td>
                <td>${record.consumableName}</td>
                <td>${record.quantityUsed}</td>
                <td><strong>${record.usedBy}</strong></td>
                <td>${record.purpose}</td>
                <td>${record.department}</td>
                <td>${record.remainingStock}</td>
                <td>
                    <button class="btn-secondary" onclick="deleteUsageRecord(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    // Load user consumption summary
    loadUserConsumptionSummary();

    // Load consumable usage analysis
    loadConsumableUsageAnalysis();

    // Update usage stats
    updateUsageStats(usageRecords);
}

function loadUserConsumptionSummary() {
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    const userMap = {};

    // Group by user
    usageRecords.forEach(record => {
        if (!userMap[record.usedBy]) {
            userMap[record.usedBy] = {
                name: record.usedBy,
                department: record.department,
                totalItems: 0,
                usageCount: 0,
                lastUsed: record.date
            };
        }
        userMap[record.usedBy].totalItems += record.quantityUsed;
        userMap[record.usedBy].usageCount += 1;
        userMap[record.usedBy].lastUsed = record.date;
    });

    const table = document.getElementById('userConsumptionTable');
    const userArray = Object.values(userMap);

    if (userArray.length === 0) {
        table.innerHTML = '<tr><td colspan="6" class="no-data">No user consumption data</td></tr>';
    } else {
        table.innerHTML = userArray.map(user => `
            <tr>
                <td><strong>${user.name}</strong></td>
                <td>${user.department}</td>
                <td>${user.totalItems.toFixed(2)}</td>
                <td>${user.usageCount}</td>
                <td>${user.lastUsed}</td>
                <td>
                    <button class="btn-secondary" onclick="showUserDetails('${user.name}')" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;">View</button>
                </td>
            </tr>
        `).join('');
    }
}

function loadConsumableUsageAnalysis() {
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const consumableMap = {};

    // Group by consumable
    usageRecords.forEach(record => {
        if (!consumableMap[record.consumableName]) {
            consumableMap[record.consumableName] = {
                name: record.consumableName,
                id: record.consumableId,
                totalUsed: 0,
                frequency: 0,
                lastUsedBy: record.usedBy,
                lastUsedDate: record.date
            };
        }
        consumableMap[record.consumableName].totalUsed += record.quantityUsed;
        consumableMap[record.consumableName].frequency += 1;
        consumableMap[record.consumableName].lastUsedBy = record.usedBy;
        consumableMap[record.consumableName].lastUsedDate = record.date;
    });

    const table = document.getElementById('consumableUsageTable');
    const consumableArray = Object.values(consumableMap);

    if (consumableArray.length === 0) {
        table.innerHTML = '<tr><td colspan="6" class="no-data">No consumable usage data</td></tr>';
    } else {
        table.innerHTML = consumableArray.map(cons => `
            <tr>
                <td><strong>${cons.name}</strong></td>
                <td>${cons.totalUsed.toFixed(2)}</td>
                <td>${cons.frequency} times</td>
                <td>${cons.lastUsedBy}</td>
                <td>${cons.lastUsedDate}</td>
                <td>
                    <button class="btn-secondary" onclick="showConsumableHistory('${cons.name}')" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;">View</button>
                </td>
            </tr>
        `).join('');
    }
}

function updateUsageStats(usageRecords) {
    document.getElementById('totalUsageRecords').textContent = usageRecords.length;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const thisMonthRecords = usageRecords.filter(record => {
        const recordDate = new Date(record.date);
        return recordDate.getMonth() === currentMonth && recordDate.getFullYear() === currentYear;
    });
    document.getElementById('thisMonthUsage').textContent = thisMonthRecords.length;

    const uniqueUsers = new Set(usageRecords.map(r => r.usedBy));
    document.getElementById('activeUsers').textContent = uniqueUsers.size;
}

function showUserDetails(userName) {
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    const userRecords = usageRecords.filter(r => r.usedBy === userName);

    const html = `
        <h3>Usage Details for ${userName}</h3>
        <table class="data-table" style="margin-top: 1rem;">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Consumable</th>
                    <th>Quantity</th>
                    <th>Purpose</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                ${userRecords.map(record => `
                    <tr>
                        <td>${record.date} ${record.time}</td>
                        <td>${record.consumableName}</td>
                        <td>${record.quantityUsed}</td>
                        <td>${record.purpose}</td>
                        <td>${record.department}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.getElementById('userDetailsContent').innerHTML = html;
    openModal('userDetailsModal');
}

function showConsumableHistory(consumableName) {
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    const consumableRecords = usageRecords.filter(r => r.consumableName === consumableName);

    const html = `
        <h3>Usage History for ${consumableName}</h3>
        <table class="data-table" style="margin-top: 1rem;">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Quantity Used</th>
                    <th>Used By</th>
                    <th>Purpose</th>
                    <th>Remaining Stock</th>
                </tr>
            </thead>
            <tbody>
                ${consumableRecords.map(record => `
                    <tr>
                        <td>${record.date} ${record.time}</td>
                        <td>${record.quantityUsed}</td>
                        <td>${record.usedBy}</td>
                        <td>${record.purpose}</td>
                        <td>${record.remainingStock}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.getElementById('consumableHistoryContent').innerHTML = html;
    openModal('consumableHistoryModal');
}

function deleteUsageRecord(index) {
    if (confirm('Delete this usage record?')) {
        let usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
        usageRecords.splice(index, 1);
        localStorage.setItem('usageRecords', JSON.stringify(usageRecords));
        loadUsageTracking();
        alert('Usage record deleted!');
    }
}

function loadUsageConsumables() {
    const consumables = JSON.parse(localStorage.getItem('consumables') || '[]');
    const select = document.getElementById('usageConsumable');

    if (select) {
        select.innerHTML = '<option value="">Select Consumable</option>' +
            consumables.map(c => `<option value="${c.name}">${c.name} (Stock: ${c.stock} ${c.unit})</option>`).join('');
    }
}

// ========== USER MANAGEMENT ==========
function addUser(event) {
    event.preventDefault();
    
    if (!isLoggedIn()) {
        alert('Please login first!');
        return;
    }
    
    const empId = document.getElementById('empId').value;
    const fullName = document.getElementById('fullName').value;
    const department = document.getElementById('userDepartment').value;
    const designation = document.getElementById('userDesignation').value;
    const phone = document.getElementById('userPhone').value;
    
    // Auto-generate email: empid@amaraja.com
    const email = empId.toLowerCase().replace(/-/g, '') + '@amaraja.com';
    
    // Check if employee ID already exists
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.empId === empId)) {
        alert('Employee ID already exists!');
        return;
    }
    
    const user = {
        id: 'USR-' + Date.now(),
        empId: empId,
        fullName: fullName,
        department: department,
        designation: designation,
        email: email,
        phone: phone,
        status: 'Active',
        createdBy: getCurrentUser().name,
        createdDate: new Date().toLocaleDateString()
    };
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    closeModal('userModal');
    event.target.reset();
    loadUsers();
    updateDashboard();
    alert(`User added successfully!\nEmail: ${email}`);
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const table = document.getElementById('usersTable');
    
    if (users.length === 0) {
        table.innerHTML = '<tr><td colspan="7" class="no-data">No users found</td></tr>';
    } else {
        table.innerHTML = users.map((user, index) => `
            <tr>
                <td><strong>${user.empId}</strong></td>
                <td>${user.fullName}</td>
                <td>${user.department}</td>
                <td>${user.email}</td>
                <td>${user.designation}</td>
                <td>
                    <span class="status-badge status-available">
                        ${user.status}
                    </span>
                </td>
                <td>
                    <button class="btn-secondary" onclick="viewUserProfile('${user.email}')" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; margin-right: 0.25rem;">View</button>
                    <button class="btn-secondary" onclick="deleteUser(${index})" style="padding: 0.25rem 0.75rem; font-size: 0.85rem; background: #fed7d7; color: #c53030;">Delete</button>
                </td>
            </tr>
        `).join('');
    }
    
    updateUserStats(users);
}

function viewUserProfile(email) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (!user) return;
    
    const usageRecords = JSON.parse(localStorage.getItem('usageRecords') || '[]');
    const userUsage = usageRecords.filter(r => r.usedBy === user.fullName);
    
    const html = `
        <div style="background: #f7fafc; padding: 1.5rem; border-radius: 8px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Personal Information</h4>
                    <p><strong>Full Name:</strong> ${user.fullName}</p>
                    <p><strong>Employee ID:</strong> ${user.empId}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Department:</strong> ${user.department}</p>
                    <p><strong>Designation:</strong> ${user.designation}</p>
                    <p><strong>Status:</strong> <span class="status-badge status-available">${user.status}</span></p>
                    <p><strong>Created:</strong> ${user.createdDate}</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Usage Statistics</h4>
                    <p><strong>Total Consumables Used:</strong> ${userUsage.length}</p>
                    <p><strong>Total Quantity Used:</strong> ${userUsage.reduce((sum, r) => sum + r.quantityUsed, 0).toFixed(2)}</p>
                    ${userUsage.length > 0 ? `<p><strong>Last Used:</strong> ${userUsage[userUsage.length - 1].date}</p>` : '<p><strong>Last Used:</strong> Never</p>'}
                </div>
            </div>
            
            ${userUsage.length > 0 ? `
                <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Recent Usage Records</h4>
                <table class="data-table" style="margin-top: 1rem;">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Consumable</th>
                            <th>Quantity</th>
                            <th>Purpose</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${userUsage.slice(-5).reverse().map(record => `
                            <tr>
                                <td>${record.date} ${record.time}</td>
                                <td>${record.consumableName}</td>
                                <td>${record.quantityUsed}</td>
                                <td>${record.purpose}</td>
                                <td>${record.department}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            ` : ''}
        </div>
    `;
    
    document.getElementById('userDetailsContent').innerHTML = html;
    openModal('userDetailsModal');
}

function deleteUser(index) {
    if (confirm('Delete this user?')) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
        alert('User deleted!');
    }
}

function updateUserStats(users) {
    document.getElementById('totalUsersCount').textContent = users.length;
    
    const activeUsers = users.filter(u => u.status === 'Active').length;
    document.getElementById('activeUsersCount').textContent = activeUsers;
    
    const departments = new Set(users.map(u => u.department));
    document.getElementById('departmentsCount').textContent = departments.size;
}

// Auto-generate email when Employee ID changes
document.addEventListener('input', function(event) {
    if (event.target.id === 'empId') {
        const empId = event.target.value;
        const emailField = document.getElementById('userEmail');
        if (emailField) {
            emailField.value = empId.toLowerCase().replace(/-/g, '') + '@amaraja.com';
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDemoData();
    updateUserDisplay();

    if (isLoggedIn()) {
        loadAllData();
    }
});

