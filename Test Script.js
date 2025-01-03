const { chromium } = require('playwright');  // Import Playwright

// Login Test
async function loginTest() {
  const browser = await chromium.launch({ headless: true });  // Launch the browser in headless mode
  const page = await browser.newPage();  // Open a new browser page

  await page.goto('https://www.tractive.com/#/');  // Go to the login page of Tractive

  // Fill in the login form
  await page.fill('input[name="email"]', 'amel.khelifi93@gmail.com');  // Enter email
  await page.fill('input[name="password"]', '00000000');  // Enter password

  // Click the login button
  await page.click('button[type="submit"]');  

  // Wait for the page to load after login and check for successful login
  try {
    // Wait for the success condition (e.g., dashboard or logged-in element)
    await page.waitForSelector('.dashboard', { timeout: 5000 });  // Wait for the element that indicates login success

    console.log('Login Test Passed');  // Login is successful
  } catch (error) {
   
    // Check if the error message contains the text "Oops! look like you entered a wrong email or password."
    if (errorMessage && errorMessage.includes('Oops! look like you entered a wrong email or password')) {
      console.log('Login Failed: Incorrect email or password');  // Display the error message for incorrect login
    } else {
      console.log('Login Test Failed: Unknown error');  // If no specific error message is found
    }
  }

  await browser.close();  // Close the browser
}

// Run the login test
(async () => {
  await loginTest();  // Run the login test
})();
