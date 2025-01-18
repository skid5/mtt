    const express = require('express');
    const bodyParser = require('body-parser');
    const nodemailer = require('nodemailer');
    require('dotenv').config();

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS,
        },
    });

    // Contact form submission route
    app.post('/send-email', (req, res) => {
        const { name, email, message } = req.body;

        // Email options for user confirmation
        const userMailOptions = {
            from: process.env.SENDER_EMAIL, // Sender address
            to: email, // User's email address
            subject: 'Viestin vastaanottamisen vahvistus',
            text: `Hei ${name},\n\nKiitos viestistäsi. Vastaanotimme sen seuraavilla tiedoilla:\n\nViesti: ${message}\n\nYstävällisin terveisin,\nMatin Terveyspalvelu`
        };

        // Email options for site owner
        const ownerMailOptions = {
            from: 'mmkki.automatic@gmail.com',
            to: process.env.OWNER_EMAIL,
            subject: 'Uusi viesti yhteystiedotlomakkeelta',
            text: `Hei,\n\nOlet saanut uuden viestin yhteystiedotlomakkeelta seuraavilla tiedoilla:\n\nNimi: ${name}\nSähköposti: ${email}\nViesti: ${message}\n\nYstävällisin terveisin,\nMatin Terveyspalvelu`
        };

        // Send emails
        transporter.sendMail(userMailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Virhe käyttäjälle lähetettäessä sähköpostia');
            }
            console.log('User email sent: ' + info.response);
        });

        transporter.sendMail(ownerMailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Virhe omalle sähköpostille lähetettäessä');
            }
            console.log('Owner email sent: ' + info.response);
            res.status(200).send('Viesti lähetetty onnistuneesti');
        });
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }); 
