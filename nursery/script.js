// ============================================
// NURSERY MANAGEMENT SYSTEM - MAIN SCRIPT
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
    return localStorage.getItem('user') !== null;
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Login function
function login(email, password) {
    // Demo users
    const validUsers = [
        { email: 'admin@nursery.com', password: 'admin123', role: 'admin', name: 'Admin User' },
        { email: 'teacher@nursery.com', password: 'teacher123', role: 'teacher', name: 'Teacher' },
        { email: 'parent@nursery.com', password: 'parent123', role: 'parent', name: 'Parent' }
    ];

    const user = validUsers.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('loginTime', new Date().toLocaleString());
        showNotification('Login successful!', 'success');
        updateNavBar();
        showPage('home');
        return true;
    } else {
        showNotification('Invalid email or password!', 'danger');
        return false;
    }
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('loginTime');
    updateNavBar();
    showNotification('Logged out successfully!', 'success');
    showPage('home');
}

// Register function
function register(name, email, password, confirmPassword, role) {
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'danger');
        return false;
    }

    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!', 'danger');
        return false;
    }

    // Save new user to localStorage
    const newUser = { name, email, password, role, registeredDate: new Date().toLocaleString() };

    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Check if email already exists
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!', 'warning');
        return false;
    }

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

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
            <span style="color: white; margin-right: 1rem;">Welcome, ${user.name}!</span>
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
            const role = document.getElementById('registerRole').value;

            if (register(name, email, password, confirmPassword, role)) {
                registerForm.reset();
            }
        });
    }

    // Update nav bar on page load
    updateNavBar();

    // Load student data
    loadStudents();
    loadClasses();
    loadStaff();
    loadFeesData();

    // Initialize demo data if needed
    initializeDemoData();
});

// ============================================
// STUDENT MANAGEMENT
// ============================================

function loadStudents() {
    const students = getStudentsData();
    const tableBody = document.getElementById('studentsTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (students.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No students found</td></tr>';
        } else {
            students.forEach((student, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.dob}</td>
                    <td>${student.class}</td>
                    <td>${student.parentName}</td>
                    <td>${student.phone}</td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #4ECDC4; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="editStudent(${index})">Edit</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteStudent(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addStudent(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add students!', 'warning');
        return;
    }

    const student = {
        id: 'STU-' + Date.now(),
        name: document.getElementById('studentName').value,
        dob: document.getElementById('studentDOB').value,
        class: document.getElementById('studentClass').value,
        parentName: document.getElementById('parentName').value,
        phone: document.getElementById('parentPhone').value,
        address: document.getElementById('studentAddress').value,
        enrollmentDate: new Date().toISOString().split('T')[0]
    };

    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    showNotification('Student added successfully!', 'success');
    closeModal('studentModal');
    document.getElementById('studentForm').reset();
    loadStudents();
}

function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        showNotification('Student deleted successfully!', 'success');
        loadStudents();
    }
}

function editStudent(index) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    const student = students[index];

    document.getElementById('studentName').value = student.name;
    document.getElementById('studentDOB').value = student.dob;
    document.getElementById('studentClass').value = student.class;
    document.getElementById('parentName').value = student.parentName;
    document.getElementById('parentPhone').value = student.phone;
    document.getElementById('studentAddress').value = student.address;

    openModal('studentModal');
}

function getStudentsData() {
    return JSON.parse(localStorage.getItem('students') || '[]');
}

// ============================================
// CLASS MANAGEMENT
// ============================================

function loadClasses() {
    const classes = getClassesData();
    const tableBody = document.getElementById('classesTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (classes.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center">No classes found</td></tr>';
        } else {
            classes.forEach((cls, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cls.id}</td>
                    <td>${cls.name}</td>
                    <td>${cls.capacity}</td>
                    <td>${cls.teacher}</td>
                    <td>${cls.timing}</td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #4ECDC4; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="editClass(${index})">Edit</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteClass(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addClass(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add classes!', 'warning');
        return;
    }

    const cls = {
        id: 'CLS-' + Date.now(),
        name: document.getElementById('className').value,
        capacity: document.getElementById('classCapacity').value,
        teacher: document.getElementById('classTeacher').value,
        timing: document.getElementById('classTiming').value,
        description: document.getElementById('classDescription').value
    };

    let classes = JSON.parse(localStorage.getItem('classes') || '[]');
    classes.push(cls);
    localStorage.setItem('classes', JSON.stringify(classes));

    showNotification('Class added successfully!', 'success');
    closeModal('classModal');
    document.getElementById('classForm').reset();
    loadClasses();
}

function deleteClass(index) {
    if (confirm('Are you sure you want to delete this class?')) {
        let classes = JSON.parse(localStorage.getItem('classes') || '[]');
        classes.splice(index, 1);
        localStorage.setItem('classes', JSON.stringify(classes));
        showNotification('Class deleted successfully!', 'success');
        loadClasses();
    }
}

function editClass(index) {
    let classes = JSON.parse(localStorage.getItem('classes') || '[]');
    const cls = classes[index];

    document.getElementById('className').value = cls.name;
    document.getElementById('classCapacity').value = cls.capacity;
    document.getElementById('classTeacher').value = cls.teacher;
    document.getElementById('classTiming').value = cls.timing;
    document.getElementById('classDescription').value = cls.description;

    openModal('classModal');
}

function getClassesData() {
    return JSON.parse(localStorage.getItem('classes') || '[]');
}

// ============================================
// STAFF MANAGEMENT
// ============================================

function loadStaff() {
    const staff = getStaffData();
    const tableBody = document.getElementById('staffTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (staff.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No staff found</td></tr>';
        } else {
            staff.forEach((member, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${member.id}</td>
                    <td>${member.name}</td>
                    <td>${member.position}</td>
                    <td>${member.experience}</td>
                    <td>${member.email}</td>
                    <td>${member.phone}</td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #4ECDC4; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="editStaff(${index})">Edit</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteStaff(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addStaff(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add staff!', 'warning');
        return;
    }

    const member = {
        id: 'STF-' + Date.now(),
        name: document.getElementById('staffName').value,
        position: document.getElementById('staffPosition').value,
        experience: document.getElementById('staffExperience').value,
        email: document.getElementById('staffEmail').value,
        phone: document.getElementById('staffPhone').value,
        qualification: document.getElementById('staffQualification').value,
        joiningDate: new Date().toISOString().split('T')[0]
    };

    let staffList = JSON.parse(localStorage.getItem('staff') || '[]');
    staffList.push(member);
    localStorage.setItem('staff', JSON.stringify(staffList));

    showNotification('Staff member added successfully!', 'success');
    closeModal('staffModal');
    document.getElementById('staffForm').reset();
    loadStaff();
}

function deleteStaff(index) {
    if (confirm('Are you sure you want to delete this staff member?')) {
        let staffList = JSON.parse(localStorage.getItem('staff') || '[]');
        staffList.splice(index, 1);
        localStorage.setItem('staff', JSON.stringify(staffList));
        showNotification('Staff member deleted successfully!', 'success');
        loadStaff();
    }
}

function editStaff(index) {
    let staffList = JSON.parse(localStorage.getItem('staff') || '[]');
    const member = staffList[index];

    document.getElementById('staffName').value = member.name;
    document.getElementById('staffPosition').value = member.position;
    document.getElementById('staffExperience').value = member.experience;
    document.getElementById('staffEmail').value = member.email;
    document.getElementById('staffPhone').value = member.phone;
    document.getElementById('staffQualification').value = member.qualification;

    openModal('staffModal');
}

function getStaffData() {
    return JSON.parse(localStorage.getItem('staff') || '[]');
}

// ============================================
// FEES MANAGEMENT
// ============================================

function loadFeesData() {
    const fees = getFeesData();
    const tableBody = document.getElementById('feesTableBody');

    if (tableBody) {
        tableBody.innerHTML = '';

        if (fees.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No fees records found</td></tr>';
        } else {
            fees.forEach((fee, index) => {
                const statusColor = fee.status === 'Paid' ? '#27AE60' : fee.status === 'Pending' ? '#F39C12' : '#E74C3C';
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${fee.id}</td>
                    <td>${fee.studentName}</td>
                    <td>$${fee.amount}</td>
                    <td>${fee.dueDate}</td>
                    <td><span style="background: ${statusColor}; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block;">${fee.status}</span></td>
                    <td>${fee.remarks}</td>
                    <td>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #27AE60; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;" onclick="markAsPaid(${index})">Mark Paid</button>
                        <button class="btn" style="padding: 5px 10px; font-size: 12px; background: #E74C3C; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="deleteFee(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
    }
}

function addFee(event) {
    event.preventDefault();

    if (!isLoggedIn()) {
        showNotification('Please login to add fees!', 'warning');
        return;
    }

    const fee = {
        id: 'FEE-' + Date.now(),
        studentName: document.getElementById('feeStudentName').value,
        amount: document.getElementById('feeAmount').value,
        dueDate: document.getElementById('feeDueDate').value,
        status: 'Pending',
        remarks: document.getElementById('feeRemarks').value,
        createdDate: new Date().toISOString().split('T')[0]
    };

    let fees = JSON.parse(localStorage.getItem('fees') || '[]');
    fees.push(fee);
    localStorage.setItem('fees', JSON.stringify(fees));

    showNotification('Fee record added successfully!', 'success');
    closeModal('feeModal');
    document.getElementById('feeForm').reset();
    loadFeesData();
}

function markAsPaid(index) {
    let fees = JSON.parse(localStorage.getItem('fees') || '[]');
    fees[index].status = 'Paid';
    fees[index].paidDate = new Date().toISOString().split('T')[0];
    localStorage.setItem('fees', JSON.stringify(fees));
    showNotification('Fee marked as paid!', 'success');
    loadFeesData();
}

function deleteFee(index) {
    if (confirm('Are you sure you want to delete this fee record?')) {
        let fees = JSON.parse(localStorage.getItem('fees') || '[]');
        fees.splice(index, 1);
        localStorage.setItem('fees', JSON.stringify(fees));
        showNotification('Fee record deleted successfully!', 'success');
        loadFeesData();
    }
}

function getFeesData() {
    return JSON.parse(localStorage.getItem('fees') || '[]');
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
    const students = getStudentsData();
    const classes = getClassesData();
    const staff = getStaffData();
    const fees = getFeesData();

    const totalStudents = students.length;
    const totalClasses = classes.length;
    const totalStaff = staff.length;
    const pendingFees = fees.filter(f => f.status === 'Pending').length;

    document.getElementById('totalStudentsCount').textContent = totalStudents;
    document.getElementById('totalClassesCount').textContent = totalClasses;
    document.getElementById('totalStaffCount').textContent = totalStaff;
    document.getElementById('pendingFeesCount').textContent = pendingFees;
}

// ============================================
// DEMO DATA INITIALIZATION
// ============================================

function initializeDemoData() {
    // Only add demo data if storage is empty
    if (!localStorage.getItem('students')) {
        const demoStudents = [
            { id: 'STU-001', name: 'Emma Wilson', dob: '2020-05-15', class: 'Pre-K', parentName: 'John Wilson', phone: '555-0101', address: '123 Main St', enrollmentDate: '2024-01-15' },
            { id: 'STU-002', name: 'Sophia Chen', dob: '2020-08-22', class: 'Kindergarten', parentName: 'Michael Chen', phone: '555-0102', address: '456 Oak Ave', enrollmentDate: '2024-02-10' },
            { id: 'STU-003', name: 'Liam Garcia', dob: '2019-11-03', class: 'Pre-K', parentName: 'Carlos Garcia', phone: '555-0103', address: '789 Pine Rd', enrollmentDate: '2024-01-20' }
        ];
        localStorage.setItem('students', JSON.stringify(demoStudents));
    }

    if (!localStorage.getItem('classes')) {
        const demoClasses = [
            { id: 'CLS-001', name: 'Pre-K Morning', capacity: '15', teacher: 'Sarah Johnson', timing: '9:00 AM - 12:00 PM', description: 'Pre-kindergarten morning class' },
            { id: 'CLS-002', name: 'Kindergarten', capacity: '20', teacher: 'Emily Brown', timing: '9:30 AM - 2:30 PM', description: 'Kindergarten full-day program' },
            { id: 'CLS-003', name: 'Toddlers', capacity: '10', teacher: 'Lisa Davis', timing: '10:00 AM - 1:00 PM', description: 'Toddler care and development' }
        ];
        localStorage.setItem('classes', JSON.stringify(demoClasses));
    }

    if (!localStorage.getItem('staff')) {
        const demoStaff = [
            { id: 'STF-001', name: 'Sarah Johnson', position: 'Lead Teacher', experience: '5 years', email: 'sarah@nursery.com', phone: '555-2001', qualification: 'Bachelor in Education', joiningDate: '2022-01-10' },
            { id: 'STF-002', name: 'Emily Brown', position: 'Teacher', experience: '3 years', email: 'emily@nursery.com', phone: '555-2002', qualification: 'Diploma in Child Care', joiningDate: '2022-06-15' },
            { id: 'STF-003', name: 'Mark Wilson', position: 'Administrative Staff', experience: '2 years', email: 'mark@nursery.com', phone: '555-2003', qualification: 'Bachelor in Management', joiningDate: '2023-03-01' }
        ];
        localStorage.setItem('staff', JSON.stringify(demoStaff));
    }

    if (!localStorage.getItem('fees')) {
        const demoFees = [
            { id: 'FEE-001', studentName: 'Emma Wilson', amount: '500', dueDate: '2024-04-30', status: 'Paid', remarks: 'Monthly tuition', createdDate: '2024-04-01', paidDate: '2024-04-15' },
            { id: 'FEE-002', studentName: 'Sophia Chen', amount: '500', dueDate: '2024-04-30', status: 'Pending', remarks: 'Monthly tuition', createdDate: '2024-04-01' },
            { id: 'FEE-003', studentName: 'Liam Garcia', amount: '250', dueDate: '2024-04-15', status: 'Overdue', remarks: 'Activity fee', createdDate: '2024-03-20' }
        ];
        localStorage.setItem('fees', JSON.stringify(demoFees));
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

