window.addEventListener('load', function() {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
        filterRecords();
    });
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        displayRecordsFromLocalStorage();
    });
});

function filterRecords() {
    const records = JSON.parse(localStorage.getItem('loanRecords') || '[]');
    const searchValue = searchInput.value.toLowerCase();

    const filteredRecords = records.filter(record => {
        return record.name.toLowerCase().includes(searchValue);
    });

    displayRecords(filteredRecords);
}

function displayRecords(records) {
    const tbody = document.getElementById('recordTableBody');
    tbody.innerHTML = '';

    for (let record of records) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.name}</td>
            <td>${record.status}</td>
            <td>${record.date}</td>
        `;
        tbody.appendChild(tr);
    }
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
    filterRecords();
});
