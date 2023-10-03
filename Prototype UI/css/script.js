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
}
function approveLoan(row) {
    row.style.backgroundColor = '#a6f4a6';
    alert('Loan Approved!');
}

function denyLoan(row) {
    row.style.backgroundColor = '#f4a6a6';
    alert('Loan Denied!');
}

