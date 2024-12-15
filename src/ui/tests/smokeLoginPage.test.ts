import homePage from "../pages/home.page";

describe("[UI] [Login Page] Smoke", () => {
    beforeEach(async function () {
      await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/");
      const emailSelector = "#emailinput";
      const passwordSelector = "#passwordinput";
      const loginButtonSelector = 'button[type="submit"]';
  
      await $(emailSelector).setValue("");
      await $(passwordSelector).setValue("");
      await $(loginButtonSelector).click();
      await homePage.waitForPageOpened();
    });
});