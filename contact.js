$(document).ready(function() {
    // Bind the submit event of the form
    $("#contactForm").submit(function(event) {
        
        // Capture the form data
        let username = $("#username").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let message = $("#message").val();
        
        // Create the message for the pop-up
        let popupMessage = `
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        
        // Display the pop-up
        $("<div></div>").html(popupMessage).dialog({
            title: "Contact Form Submission",
            modal: true,
            buttons: {
                Ok: function() {
                    $(this).dialog("close");
                }
            }
        });
    });
});
