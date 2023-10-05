document.addEventListener("DOMContentLoaded", function() {
    const openAccountLink = document.querySelector("#openAccountLink");
    const closeAccountLink = document.querySelector("#closeAccountLink");
    const openAccountModal = document.getElementById("myModal");
    const closeAccountModal = document.getElementById("closeAccount");

    function openOpenAccountModal() {
        openAccountModal.style.display = "block";
    }

    function closeOpenAccountModal() {
        openAccountModal.style.display = "none";
    }

    function openCloseAccountModal() {
        closeAccountModal.style.display = "block";
    }

    function closeCloseAccountModal() {
        closeAccountModal.style.display = "none";
    }

    openAccountLink.addEventListener("click", openOpenAccountModal);
    const openAccountCloseButton = openAccountModal.querySelector(".close");
    openAccountCloseButton.addEventListener("click", closeOpenAccountModal);

    closeAccountLink.addEventListener("click", openCloseAccountModal);
    const closeAccountCloseButton = closeAccountModal.querySelector(".close");
    closeAccountCloseButton.addEventListener("click", closeCloseAccountModal);
});