import BasePage from "../PageObjects/BasePage";
class Login_PO extends BasePage {
    //selectors:
    loginInput = '[name="loginname"]';
    passwordInput = '[name="password"]';
    loginButton = '[title="Login"]';
    errorIncorrectLogin = ".alert-danger";
    loggedUser = ".maintext";
  
    async enterUserName(userName) {
      await page.waitForSelector(this.loginInput);
      await page.type(this.loginInput, userName);
    }
    async enterPassword(password) {
      await page.waitForSelector(this.passwordInput);
      await page.type(this.passwordInput, password);
    }
    async clickOnLoginButton() {
      await page.waitForSelector(this.loginButton);
      await page.click(this.loginButton);
    }
    async loginErrorMessage() {
      await page.waitForSelector(this.errorIncorrectLogin);
    }
    async isUserloginCorrectly() {
      await page.waitForSelector(this.loggedUser);
    }
  }
  export default Login_PO;