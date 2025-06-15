document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestList = document.getElementById('guest-list');
    
    // Defines the maximum number of guests allowed
    const MAX_GUESTS = 10;
    
    // Handle form submission
    guestForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Suppress the default form submission
        
        const guestName = guestNameInput.value.trim();
        
        if (guestName) {
            // Check if guest list is at capacity
            if (guestList.children.length >= MAX_GUESTS) {
                alert('The guest list is full! A maximum of 10 guests is allowed.');
                return;
            }
            
            // Create new guest list item
            const listItem = document.createElement('li');
            listItem.className = 'guest-item';
            
            // Create guest name element
            const nameSpan = document.createElement('span');
            nameSpan.textContent = guestName;
            nameSpan.className = 'guest-name';
            
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
            
            // Creates remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('click', () => {
                listItem.remove();
            });
            
            // Appends elements to list item
            listItem.appendChild(nameSpan);
            listItem.appendChild(rsvpButton);
            listItem.appendChild(removeButton);
            
            // Adds the new guest to the list
            guestList.appendChild(listItem);
            
            // Clears the input field
            guestNameInput.value = '';
        }
    });
});