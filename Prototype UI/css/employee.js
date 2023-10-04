let employees = JSON.parse(localStorage.getItem('employeesList')) || [
    {name: "Leo", position: "Manager", hireDate: "2010-05-15"},
    {name: "Adam", position: "Banker", hireDate: "2015-02-20"},
    {name: "Sarvesh",position: "Banker", hireDate: "2015-02-20"}
];

window.onload = function() {
    displayEmployees();

    document.getElementById('searchButton').addEventListener('click', function() {
        let searchTerm = document.getElementById('searchInput').value.toLowerCase();
        searchEmployees(searchTerm);
    });

    document.getElementById('clearButton').addEventListener('click', function() {
        displayEmployees();
    });

    const modal = document.getElementById('employeeModal');
    const btn = document.getElementById("addEmployeeBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('employeeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('employeeName').value;
        const position = document.getElementById('employeePosition').value;
        const date = document.getElementById('hireDate').value;

        employees.push({
            name: name,
            position: position,
            hireDate: date
        });

        localStorage.setItem('employeesList', JSON.stringify(employees));

        displayEmployees();
        modal.style.display = "none";
    });
}

function displayEmployees() {
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = '';
    for (let employee of employees) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.hireDate}</td>
            <td><button class="button deleteEmployeeBtn">Delete</button></td>
        `;
        tbody.appendChild(tr);
    }

    // 为每个删除按钮添加事件监听器
    document.querySelectorAll('.deleteEmployeeBtn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const confirmation = confirm('Are you sure you want to delete this employee?');
            if (confirmation) {
                employees.splice(index, 1);  // 删除对应的员工
                localStorage.setItem('employeesList', JSON.stringify(employees)); // 更新localStorage
                displayEmployees(); // 刷新列表
            }
        });
    });
}

function searchEmployees(term) {
    const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(term));
    displayFilteredEmployees(filteredEmployees);
}

function displayFilteredEmployees(filteredEmployees) {
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = '';
    for (let employee of filteredEmployees) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.hireDate}</td>
            <td><button class="button deleteEmployeeBtn">Delete</button></td>
        `;
        tbody.appendChild(tr);
    }
}
