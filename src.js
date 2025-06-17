document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestCategorySelect = document.getElementById('guest-category');
    const guestList = document.getElementById('guest-list');
    
    // Defines the maximum number of guests allowed
    const MAX_GUESTS = 10;
    
    // Handles form submission
    guestForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Suppress the default form submission
        
        const guestName = guestNameInput.value.trim();
        const category = guestCategorySelect.value;
        
        if (guestName) {
            // Checks if guest list is at capacity
            if (guestList.children.length >= MAX_GUESTS) {
                alert('The guest list is full! A maximum of 10 guests is allowed.');
                return;
            }
            
            // Create new guest list item
            const listItem = document.createElement('li');
            listItem.className = `guest-item ${category}`;
            
            // Create guest name element
            const nameSpan = document.createElement('span');
            nameSpan.textContent = guestName;
            nameSpan.className = 'guest-name';
            
            // Create category badge
            const categoryBadge = document.createElement('span');
            categoryBadge.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryBadge.className = 'category-badge';
            
            // Create timestamp
            const timestamp = document.createElement('span');
            const now = new Date();
            timestamp.textContent = now.toLocaleTimeString();
            timestamp.className = 'timestamp';
            
            // Creates RSVP toggle button
            const rsvpButton = document.createElement('button');
            rsvpButton.textContent = 'Not Attending';
            rsvpButton.className = 'rsvp-btn not-attending';
            rsvpButton.addEventListener('click', () => {
                if (rsvpButton.textContent === 'Not Attending') {
                    rsvpButton.textContent = 'Attending';
                    rsvpButton.className = 'rsvp-btn attending';
                } else {
                    rsvpButton.textContent = 'Not Attending';
                    rsvpButton.className = 'rsvp-btn not-attending';
                }
            });
            
            // Create edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', () => {
                const newName = prompt('Enter new name:', nameSpan.textContent);
                if (newName && newName.trim()) {
                    nameSpan.textContent = newName.trim();
                }
            });
            
            // Creates remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('click', () => {
                listItem.remove();
            });
            
            // Create button container
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            buttonContainer.appendChild(rsvpButton);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(removeButton);
            
            // Appends elements to list item
            listItem.appendChild(categoryBadge);
            listItem.appendChild(nameSpan);
            listItem.appendChild(timestamp);
            listItem.appendChild(buttonContainer);
            
            // Adds the new guest to the list
            guestList.appendChild(listItem);
            
            // Clears the input field
            guestNameInput.value = '';
        }
    });
});