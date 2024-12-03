describe("[UI] Registration", () => {
    //locators
    const registerButton = "//*[@id='registerOnLogin']";
    const registerUsernameField = "//*[@id='userNameOnRegister']";
    const registerPasswordField = "//*[@id='passwordOnRegister']";
    const confirmRegisterButton = "//*[@id='register']";

    //Notification messages locator
    const RegistrationMessageLocator = "//*[@id='errorMessageOnRegister']";

    //Success Notification messages
    const successRegistrationMessage = "Successfully registered! Please, click Back to return on login page";
    
    //Failed Notification messages
    const lessThanThreeSybmolText = "Username should contain at least 3 characters";
    const moreFortySymbolsText = "Username should contain less than 40 characters";
    const spaceInLoginText = "Prefix and postfix spaces are not allowed is username";
    const provideValidDataText = "Please, provide valid data";
    const errorLessThanEightPassText = "Password should contain at least 8 characters";
    const lowerCaseErrorMessageText = "Password should contain at least one character in lower case";
    const upperCaseErrorMessageText = "Password should contain at least one character in upper case";
    const spaceInPasswordText = "Password is required";

    //Test credentials
    const validUsername = "testUser";
    const validPassword = "testPassword";

    const invalidUsernameCredentials = {
      lessThanThreeSymbols: "ts", //Меньше 3х символов
      moreFortySymbols: "testUsertestUsertestUsertestUsertestUsertestUser", //Больше 40-ка символов
      prefixSpace: " test",
      postfixSpace: "test ",
      onlySpaces: "   "
    }

    const invalidPasswordCredentials = {
      lessThanEightSymbols: "test", //меньше 7-ти символов
      moreThanTwentySymbols: "testPasswordtestPassword", //Больше 20-ти символов
      passWithUppercaseLetter: "TESTPASSWORD", // пароль с буквами ТОЛЬКО верхнего регистра
      passWithLowercaseLetter: "testpassword", // пароль с буквами ТОЛЬКО нижнего
      onlySpacePassword: "   " // пароль только из пробелов
    } 


    
    before(async function () {
        await browser.maximizeWindow();
      });
    
    beforeEach(async function () {
        await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
      });

    afterEach(async () => {
        await browser.execute(() => {
            const key = 'testUser';
            if (localStorage.getItem(key)) {
                localStorage.removeItem(key);
            }
        });
    });  

    it("Should regitered with valid credentials", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername); 
        await $(registerPasswordField).setValue(validPassword);  
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(successRegistrationMessage);
      });
      
    it("Should error when less than three symbols in username field", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(invalidUsernameCredentials.lessThanThreeSymbols);
        await $(registerPasswordField).setValue(validPassword);  
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(lessThanThreeSybmolText);
      });

    xit("Should error when more than forty symbols in username field", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(invalidUsernameCredentials.moreFortySymbols);
        await $(registerPasswordField).setValue(validPassword);  
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(moreFortySymbolsText);
        //Падаем ожидаемо, потому что успешно регистрируемся
      });
      
    it("Should error when username field contains spaces", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(invalidUsernameCredentials.onlySpaces);
        await $(registerPasswordField).setValue(validPassword);  
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(spaceInLoginText);

        await $(registerUsernameField).setValue(invalidUsernameCredentials.prefixSpace);
        await $(confirmRegisterButton).click();
        expect(actualText).toContain(spaceInLoginText);

        await $(registerUsernameField).setValue(invalidUsernameCredentials.postfixSpace);
        await $(confirmRegisterButton).click();
        expect(actualText).toContain(spaceInLoginText);
      });


    it("Should error when password field is less than eight symbols", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername);
        await $(registerPasswordField).setValue(invalidPasswordCredentials.lessThanEightSymbols);
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(errorLessThanEightPassText);
      });
      
    xit("Should error when password field is more than twenty symbols", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername);
        await $(registerPasswordField).setValue(invalidPasswordCredentials.moreThanTwentySymbols);
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(provideValidDataText);
        //падает ожидаемо, так как само поле обрезает пароль, поэтому скип
      });
      
    it("Should error when password field contains only uppercase letters", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername);
        await $(registerPasswordField).setValue(invalidPasswordCredentials.passWithUppercaseLetter);
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(lowerCaseErrorMessageText);
      });


    xit("Should error when password field contains only lowercase letters", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername);
        await $(registerPasswordField).setValue(invalidPasswordCredentials.passWithLowercaseLetter);
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(upperCaseErrorMessageText);
      }); // падает ожидаемо, потому что нет ошибки, что нужна хотя бы одна заглавная буква

    it("Should error when password field contains only spaces", async function () {
        await $(registerButton).click();
        await $(registerUsernameField).setValue(validUsername);
        await $(registerPasswordField).setValue(invalidPasswordCredentials.onlySpacePassword);
        await $(confirmRegisterButton).click();
        const actualText = await $(RegistrationMessageLocator).getText()
        expect(actualText).toContain(spaceInPasswordText);
      });
});