class RegistrationPage {
  constructor(page) {
    this.page = page;
    //Each input field and button on the registration page
    this.firstNameInput = 'input[name="firstName"]';  // First name input 
    this.lastNameInput = 'input[name="lastName"]';  // Last name input 
    this.emailInput = 'input[name="email"]';  // Email input 
    this.passwordInput = 'input[name="password"]';  // Password input 
    this.submitButton = 'button[type="submit"]';  // Submit button selector
    this.successMessage = 'success-message[class="toast-message"]';  // Success message selector (if registration is successful)
    this.errorMessage = 'error-message[class="toast-message"]';  // Error message selector (if registration fails)
  }

  // Perform registration with first name, last name, email, and password
  async register(firstName, lastName, email, password, confirmPassword) {
    // Fill in the first name field
    await this.page.fill(this.firstNameInput, 'Amel');

    // Fill in the last name field
    await this.page.fill(this.lastNameInput, 'Khelifi');

    // Fill in the email field
    await this.page.fill(this.emailInput, 'amel.khelifi93@gmail.com');

    // Fill in the password field
    await this.page.fill(this.passwordInput, '00000000');

     // Click the submit button to submit the registration form
    await this.page.click(this.submitButton);
  }

  // Check if the success message is displayed after registration
  async getSuccessMessage() {
    return await this.page.textContent(this.successMessage);
  }

  // Method to check if the error message is displayed after registration attempt
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = RegistrationPage;