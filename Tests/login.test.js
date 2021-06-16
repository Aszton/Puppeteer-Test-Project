const puppeteer = require("puppeteer");
import Navigaton_PO from "../PageObjects/Navigaton_PO";
import Login_PO from "../PageObjects/Login_PO";

describe("Login Tests", () => {
  let navigationHelper;
  let loginPageHelper;

  beforeAll(async () => {
      jest.setTimeout(15000)
      navigationHelper = new Navigaton_PO();
      loginPageHelper = new Login_PO();
  });
  it("Login with invalid creditantials", async () => {
    await navigationHelper.openHomepage();
    await navigationHelper.clickLoginOrRegister();
    await loginPageHelper.enterUserName("Ashton");
    await loginPageHelper.enterPassword("Test");
    await loginPageHelper.clickOnLoginButton();
    await loginPageHelper.loginErrorMessage();
  });
  it("Login with valid creditentials", async () => {
    await navigationHelper.openHomepage();
    await navigationHelper.clickLoginOrRegister();
    await loginPageHelper.enterUserName("AshtonScalac");
    await loginPageHelper.enterPassword("test1234");
    await loginPageHelper.clickOnLoginButton();
    await loginPageHelper.isUserloginCorrectly();
  });
});
