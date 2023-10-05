document.querySelector('.transfer-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const fromAccountSelect = document.getElementById('transferFrom');
    const selectedFromAccount = fromAccountSelect.options[fromAccountSelect.selectedIndex];
    let selectedFromAccountBalance = parseFloat(selectedFromAccount.getAttribute('data-balance'));

    const toAccountSelect = document.getElementById('transferTo');
    const selectedToAccount = toAccountSelect.options[toAccountSelect.selectedIndex];
    let selectedToAccountBalance = parseFloat(selectedToAccount.getAttribute('data-balance'));

    const transferAmountInput = document.getElementById('transferAmount');
    const amountToTransfer = parseFloat(transferAmountInput.value);

    const balanceWarning = document.querySelector('.balance-warning');
    const transferLimitWarning = document.querySelector('.transfer-limit-warning');

    balanceWarning.style.display = "none";
    transferLimitWarning.style.display = "none";

    if (amountToTransfer > 500) {
        transferLimitWarning.style.display = "block";
        return;
    }

    if (amountToTransfer > selectedFromAccountBalance) {
        balanceWarning.style.display = "block";
        return;
    }

    selectedFromAccountBalance -= amountToTransfer;
    selectedFromAccount.setAttribute('data-balance', selectedFromAccountBalance.toString());
    selectedFromAccount.textContent = `${selectedFromAccount.value.split("-")[0]} - ${selectedFromAccount.value.split("-")[1]} - $${selectedFromAccountBalance}`;

    selectedToAccountBalance += amountToTransfer;
    selectedToAccount.setAttribute('data-balance', selectedToAccountBalance.toString());
    selectedToAccount.textContent = `${selectedToAccount.value.split("-")[0]} - ${selectedToAccount.value.split("-")[1]} - $${selectedToAccountBalance}`;

    alert('Transfer successful!');
});

