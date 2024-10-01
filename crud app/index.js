// CRUD App by Hamid

let items = []; // Array to store the list of items (name, email)
let editIndex = null; // Variable to track which item is being edited

// Add function to create a new item
function add() {
    const name = document.getElementById('c-name').value;
    const email = document.getElementById('c-email').value;

    if (!name || !email) {
        showMessage("Please fill in all fields", "error");
        return;
    }

    // Push new item to the array
    items.push({ name, email });
    clearCreateForm();
    displayItems();
    showMessage("Item added successfully!", "success");
}

// Display the items in the table
function displayItems() {
    const tableBody = document.querySelector('.table-data');
    tableBody.innerHTML = ""; // Clear the table

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>
                <button onclick="edit(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Delete function to remove an item
function deleteItem(index) {
    items.splice(index, 1); // Remove the item from the array
    displayItems();
    showMessage("Item deleted successfully!", "success");
}

// Edit function to pre-fill the form with existing data
function edit(index) {
    document.getElementById('u-name').value = items[index].name;
    document.getElementById('u-email').value = items[index].email;
    document.getElementById('create-frm').style.display = 'none';
    document.getElementById('update-frm').style.display = 'block';
    editIndex = index; // Set the index for updating the item
}

// Update function to modify an existing item
function update() {
    const updatedName = document.getElementById('u-name').value;
    const updatedEmail = document.getElementById('u-email').value;

    if (!updatedName || !updatedEmail) {
        showMessage("Please fill in all fields", "error");
        return;
    }

    // Update the item in the array
    items[editIndex] = { name: updatedName, email: updatedEmail };
    clearUpdateForm();
    displayItems();
    showMessage("Item updated successfully!", "success");
    resetForms();
}

// Function to clear the create form
function clearCreateForm() {
    document.getElementById('c-name').value = '';
    document.getElementById('c-email').value = '';
}

// Function to clear the update form
function clearUpdateForm() {
    document.getElementById('u-name').value = '';
    document.getElementById('u-email').value = '';
}

// Function to reset forms visibility
function resetForms() {
    document.getElementById('create-frm').style.display = 'block';
    document.getElementById('update-frm').style.display = 'none';
}

// Function to display messages
function showMessage(msg, type) {
    const messageDiv = document.getElementById('msg');
    messageDiv.textContent = msg;
    if (type === "error") {
        messageDiv.style.color = "red";
    } else {
        messageDiv.style.color = "green";
    }
    setTimeout(() => {
        messageDiv.textContent = ''; // Clear the message after 3 seconds
    }, 3000);
}

// Initialize by showing the create form and hiding the update form
function displayitem() {
    resetForms();
}
