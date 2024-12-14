
 export const FIELD_LOCATORS: Record<string, string> = {
     //field locators
    registerButton: "//*[@id='registerOnLogin']",
    registerUsernameField: "//*[@id='userNameOnRegister']",
    registerPasswordField: "//*[@id='passwordOnRegister']",
    confirmRegisterButton: "//*[@id='register']",
     //Notification messages locator
    RegistrationMessageLocator: "//*[@id='errorMessageOnRegister']"
 }

 interface ILoginTestData {
   username: string;
   password: string;
   dataDescription: string;
 }

export const INVALID_REGISTRATION_USERNAME_TEST_DATA: ILoginTestData[] = [
   {
    username: 'ts',
    password: 'testPassword',
    dataDescription: "less than three symbols in username"
   },
   {
     username: 'testUsertestUsertestUsertestUsertestUsertestUser',
     password: 'testPassword',
     dataDescription: "more than forty symbols in username"
   },
   {
     username: ' test',
     password: 'testPassword',
     dataDescription: "prefix space symbols in username"
   },
   {
     username: 'test ',
     password: 'testPassword',
     dataDescription: "postfix space symbols in username"
   },
   {
     username: 'test ',
     password: 'testPassword',
     dataDescription: "only space symbols in username"
   },
 ];

export const INVALID_REGISTRATION_PASSWORD_TEST_DATA: ILoginTestData[] = [
   {
    username: 'testUser',
    password: 'test',
    dataDescription: "less than eight symbols in password"
   },
   {
     username: 'testUser',
     password: 'testPasswordtestPassword',

     dataDescription: "more than twenty symbols in password"
   },
   {
     username: 'testUser',
     password: 'TESTPASSWORD',
     dataDescription: "only uppercase symbols in password"
   },
   {
     username: 'testUser',
     password: 'testpassword',
     dataDescription: "only lowercase symbols in password"
   },
   {
     username: 'testUser',
     password: '   ',
     dataDescription: "only space symbols in username"
   },
 ];

export const POSSIBLE_FAILED_MESSAGES = [
   "Username should contain at least 3 characters",
   "Username should contain less than 40 characters",
   "Prefix and postfix spaces are not allowed is username",
   "Please, provide valid data",
   "Password should contain at least 8 characters",
   "Password should contain at least one character in lower case",
   "Password should contain at least one character in upper case",
   "Password is required",
   //"Successfully registered! Please, click Back to return on login page"
 ];
 