window.onload = function() {
    document.querySelectorAll('.btn-success').forEach(function(button) {
        button.addEventListener('click', function(event) {
            let row = event.target.closest('tr');
            approveLoan(row);
        });
    });

    document.querySelectorAll('.btn-danger').forEach(function(button) {
        button.addEventListener('click', function(event) {
            let row = event.target.closest('tr');
            denyLoan(row);
        });
    });
    document.getElementById('searchBtn').addEventListener('click', function() {
        let searchTerm = document.getElementById('searchBox').value.toLowerCase();
        let rows = document.querySelectorAll('.table tbody tr');

        rows.forEach(function(row) {
            let name = row.querySelector('td').textContent.toLowerCase();
            if(name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

function approveLoan(row) {
    const confirmation = confirm("Are you sure you want to approve this loan?");
    if (confirmation) {
        const name = row.querySelector('td').textContent;
        addRecordToLocalStorage(name, 'Approved');
        row.style.backgroundColor = '#a6f4a6';
        alert('Loan Approved!');
    }
}

function denyLoan(row) {
    const confirmation = confirm("Are you sure you want to deny this loan?");
    if (confirmation) {
        const name = row.querySelector('td').textContent;
        addRecordToLocalStorage(name, 'Denied');
        row.style.backgroundColor = '#f4a6a6';
        alert('Loan Denied!');
    }
}

function addRecordToLocalStorage(name, status) {
    const records = JSON.parse(localStorage.getItem('loanRecords') || '[]');
    records.push({
        name: name,
        status: status,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('loanRecords', JSON.stringify(records));
}
