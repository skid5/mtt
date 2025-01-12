async function sendConfirmEmail() {
    const emailData = {
      to: "recipient@example.com",
      subject: "Matin Terveyspalvelu yhteyden oton vahvistus",
      message: "Kiitos yhteyden otosta!",
    };
  
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

  async function sendContactEmail() {
    const emailData = {
      to: "recipient@example.com",
      subject: "Matin Terveyspalvelu yhteyden oton vahvistus",
      message: "Kiitos yhteyden otosta!",
    };
  
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
 