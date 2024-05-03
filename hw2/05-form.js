//Add your code here
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault(); 

        // Reading User Inputs
        const fullName = document.getElementById('fullname').value;
        const email = document.getElementById('exampleInputEmail1').value;
        const registrationStatus = document.querySelector('.form-select').value;
        const courses = document.querySelectorAll('.form-check-input:checked');
        const coursesTaken = Array.from(courses).map(course => course.nextElementSibling.textContent);

        // modal
        const message = `
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Registration Status:</strong> ${registrationStatus}</p>
            <p><strong>Courses Taken:</strong> ${coursesTaken.join(', ')}</p>
        `;

        // Create a modal and display the message
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Input</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;

        // Append the modal to the document body
        document.body.appendChild(modal);

        // Show the modal
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    });

    // Functionality for the reset button
    const resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function() {
        const formInputs = document.querySelectorAll('input, select');
        formInputs.forEach(input => {
            input.value = ''; // Reset the value of each input field
        });
    });
});
