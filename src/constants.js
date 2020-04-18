let STRIPE_KEY = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY_TEST;
let API_PATH = process.env.GATSBY_EXPRESS_API_PATH;

let context = process.env.CONTEXT || 'development';
let netlify = process.env.NETLIFY || false;
if (netlify && context === 'production') {
  STRIPE_KEY = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY_PROD;
}

// console.log('STRIPE_KEY', STRIPE_KEY);
// console.log('API_PATH', API_PATH);
if (!STRIPE_KEY) throw new Error('STRIPE_KEY not configured correctly');
if (!API_PATH) throw new Error('API_PATH not configured correctly');

module.exports = {
  STRIPE_KEY,
  API_PATH,
};
