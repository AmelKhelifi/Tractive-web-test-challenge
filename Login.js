class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[type="email"]';  // email input field selector
    this.passwordInput = 'input[type="password"]';  // Password input field selector
    this.submitButton = 'button[type="submit"]'; // Login button selector
    this.errorMessage = '.error-message[class="toast-message"]'; // Error message selector
  }

  // Perform login
  async login('amel.khelifi93@gmail.com', '00000000') {
    await this.page.fill(this.emailInput, 'amel.khelifi93@gmail.com');  // Fill the email input
    await this.page.fill(this.passwordInput, '00000000');  // Fill the password input
    await this.page.click(this.submitButton);  // Click the submit button to log in
  }

  // Method to check if error message is displayed
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = LoginPage;
