import { INVALID_REGISTRATION_USERNAME_TEST_DATA, 
  INVALID_REGISTRATION_PASSWORD_TEST_DATA,
  POSSIBLE_FAILED_MESSAGES,
  FIELD_LOCATORS } from '../data/register.data.ts'
describe("[UI] Registration and login negative cases", () => {
   
    beforeEach(async function () {
        await browser.maximizeWindow();
        await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
      });


    context("Negative scenarios with username", async function () {
      INVALID_REGISTRATION_USERNAME_TEST_DATA.forEach(({ username, password, dataDescription, }) => {
        it(`Should NOT register with ${dataDescription}`, async function () {
          await $(FIELD_LOCATORS.registerButton).click();
          await $(FIELD_LOCATORS.registerUsernameField).setValue(username);
          await $(FIELD_LOCATORS.registerPasswordField).setValue(password);
          await $(FIELD_LOCATORS.confirmRegisterButton).click();
          const messageText = await $(FIELD_LOCATORS.RegistrationMessageLocator).getText();
          expect(POSSIBLE_FAILED_MESSAGES).toContain(messageText);
          await browser.execute(() => {
            localStorage.clear();
          });
        });
      });
    });
//ожидаемо падаем в 3х местах, потому что по условиям, должны отрабатывать уведомления, но вместо этого, мы успешно регаемся

    context("Negative scenarios with password", async function () {
      INVALID_REGISTRATION_PASSWORD_TEST_DATA.forEach(({ username, password, dataDescription }) => {
        it(`Should NOT register with ${dataDescription}`, async function () {
          await $(FIELD_LOCATORS.registerButton).click();
          await $(FIELD_LOCATORS.registerUsernameField).setValue(username);
          await $(FIELD_LOCATORS.registerPasswordField).setValue(password);
          await $(FIELD_LOCATORS.confirmRegisterButton).click();
          const messageText = await $(FIELD_LOCATORS.RegistrationMessageLocator).getText();
          expect(POSSIBLE_FAILED_MESSAGES).toContain(messageText);
          console.log(POSSIBLE_FAILED_MESSAGES)
          await browser.execute(() => {
            localStorage.clear();
          });
        });
      });
    });
 });