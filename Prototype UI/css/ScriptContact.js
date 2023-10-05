const contacts = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { name: "Alice Johnson", email: "alice@example.com", phone: "555-555-5555" },
    { name: "Bob Brown", email: "bob@example.com", phone: "777-777-7777" },
    { name: "Eva Davis", email: "eva@example.com", phone: "888-888-8888" },
    // Add more contacts as needed
];


function displayContacts() {
    const contactList = document.querySelector(".contact-list");

    contacts.forEach(contact => {
        const contactCard = document.createElement("div");
        contactCard.classList.add("contact-card");

        contactCard.innerHTML = `
            <h2>${contact.name}</h2>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
        `;

        contactList.appendChild(contactCard);
    });
}

document
    .querySelector('#btn-add-contact')
    .addEventListener('click', function() {
        const nameInput = document.querySelector('#name-input');
        addContact(nameInput.value);
        nameInput.value = '';
    });

function addContact(fullName) {
    if (!fullName || !fullName.trim()) return;

    const  contactDiv = document.createElement('div')
    contactDiv.className = 'contact-entry';

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent = fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();
    /*
        contactDiv.addEventListener('dblclick', function () {
            contactDiv.remove();
        })
        */

    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textContent = fullName;

    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contacts-list').append(contactDiv);
}

function randomColor() {
    const colors = [
        '#75026e',
        '#059c16',
        '#000770',
        '#7a3e02',
        '#036b64',
        '#505e2d',
        '#e30909',
        '#b05e0c'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = displayContacts;