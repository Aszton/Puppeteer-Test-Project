import BasePage from "../PageObjects/BasePage";
class Navigation_PO extends BasePage {

    async openHomepage() {
      await page.goto("https://automationteststore.com/");
    }
    async clickLoginOrRegister() {
      await page.waitForSelector("#customernav");
      await page.click("#customernav")
    }
  }
  export default Navigation_PO;