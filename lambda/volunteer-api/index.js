import querystring from 'querystring';
import Airtable from 'airtable';
import { SendGrid } from './send-grid';

const getLeadAndGroupByZip = async ({
  zipCode,
  volunteerTable,
  fbGroupTable,
}) => {
  // we are bundling both queries to be run on airtable together to call them both.
  // may change as we know more
  // currently zipCode is NOT on any tables
  let promises = [
    volunteerTable
      .select({
        filterByFormula: `{Zip} = "${zipCode}"`,
      })
      .all(), //probably don't need .all() - presumably there will only be 1
    fbGroupTable
      .select({
        filterByFormula: `{Zip} = "${zipCode}"`,
      })
      .all(),
  ];
  try {
    const [volunteerRecords, fbGroupRecords] = await Promise.all(promises);
    return [volunteerRecords[0].fields, fbGroupRecords[0].fields];
  } catch (err) {
    // could have specific error handling for this case
    // throwing for now so we can handle any errors in a higher try-catch
    throw err;
  }
};

exports.handler = async (event, context) => {
  // need to provide these through env variables
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  Airtable.configure({
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base(AIRTABLE_BASE_ID);
  const volunteerTable = base('Volunteers');
  const fbGroupTable = base('FB Groups');

  // name | REQUIRED | (string, longer than 3 char???)
  // zipcode | REQUIRED. (string for now unless you can get fancy and validate it's real.)
  // role | REQUIRED. (checkbox)
  // email | REQUIRED. (validate is an email format at least)
  // skills | (text)
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
    // NEED TO CALL SENDGRID HERE
    SendGrid();
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
