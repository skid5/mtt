// currently unused and not ready anyway
async function sendEmail() {
    const form = document.getElementById('contactForm')
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Collect form data
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
    try {
      const response = await fetch("https://REGION-PROJECT_ID.cloudfunctions.net/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }
  }