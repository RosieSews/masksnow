const client = require('@sendgrid/client');

function addSendgridRecipient(client, email) {
  return new Promise((fulfill, reject) => {
    const data = [
      {
        email: email,
      },
    ];
    const request = {
      method: 'POST',
      url: '/v3/contactdb/recipients',
      body: data,
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
        // cb(null, response);
      })
      .catch(error => reject(error));
  });
}

function sendWelcomeEmail(client, email, senderEmail, senderName, templateID) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      reply_to: {
        email: senderEmail,
      },
      personalizations: [
        {
          to: [
            {
              email: email,
            },
          ],
        },
      ],
      template_id: templateID,
    };

    const request = {
      method: 'POST',
      url: '/v3/mail/send',
      body: data,
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
      })
      .catch(error => reject(error));
  });
}

// this is the proposed entrypoint for this file - all else is pretty much copy/paste from the example
// referenced in github issue
exports.SendGrid = function({ body, queryStringParameters }) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_WELCOME_SENDER_EMAIL,
    SENDGRID_WELCOME_SENDER_NAME,
    SENDGRID_WELCOME_TEMPLATE_ID,
  } = process.env;
  const parsedBody = JSON.parse(body);
  const email = parsedBody.email;
  const welcomeEmail = queryStringParameters.welcome_email === 'true';

  client.setApiKey(SENDGRID_API_KEY);
  addSendgridRecipient(client, email)
    .then((response, body) => {
      if (welcomeEmail) {
        return sendWelcomeEmail(
          client,
          email,
          SENDGRID_WELCOME_SENDER_EMAIL,
          SENDGRID_WELCOME_SENDER_NAME,
          SENDGRID_WELCOME_TEMPLATE_ID
        );
      } else {
        return Promise.resolve({
          statusCode: response.statusCode,
          body: `${email} added. No welcome email sent.`,
        });
      }
    })
    .catch(err => Promise.reject(err));
};
