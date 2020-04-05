import querystring from 'querystring';
import Airtable from 'airtable';
// import SendGrid from './volunteer-api/send-grid';

const getLeadAndGroupByZip = async ({
  zipCode,
  volunteerTable,
  fbGroupTable,
}) => {
  let promises = [
    volunteerTable
      .select({
        filterByFormula: `{Zip} = "${zipCode}"`,
      })
      .all(),
    fbGroupTable
      .select({
        filterByFormula: `{Zip} = "${zipCode}"`,
      })
      .all(),
  ];
  try {
    const [volunteerRecords, fbGroupRecords] = await Promise.all(promises);
    console.log('records:', volunteerRecords);
    return volunteerRecords[0].fields;
  } catch (err) {
    throw err;
  }
};

exports.handler = async (event, context) => {
  // Only allow POST
  // if (event.httpMethod !== 'POST') {
  //   return { statusCode: 405, body: 'Method Not Allowed' };
  // }

  Airtable.configure({
    apiKey: process.env.AIRTABLE_API,
  });

  const base = Airtable.base(`appTFnl3y8NPjOWnN`);
  const volunteerTable = base('Volunteers');
  const fbGroupTable = base('FB Groups');

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  // name | REQUIRED | (string, longer than 3 char???)
  // zipcode | REQUIRED. (string for now unless you can get fancy and validate it's real.)
  // role | REQUIRED. (checkbox)
  // skills | (text)
  // email | REQUIRED. (validate is an email format at least)
  // comments | (text)
  const params = querystring.parse(event.body);
  const name = params.name;
  const zipcode = params.zipcode;
  const role = params.role;
  const email = params.email;

  const skills = params.skills;
  const comments = params.comments;
  try {
    const record = await getLeadAndGroupByZip({
      zipCode: 'Nita',
      volunteerTable,
      fbGroupTable,
    });
    return {
      statusCode: 200,
      body: `Hello, ${record}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Hello, ${err}`,
    };
  }
};
