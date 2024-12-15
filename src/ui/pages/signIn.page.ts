class SignInPage {
    readonly emailInput = "#emailinput";
    readonly passwordInput = "#passwordinput";
    readonly loginButton = 'button[type="submit"]';
  
    get emailField() {
      return $(this.emailInput);
    }
  
    get passwordField() {
      return $(this.passwordInput);
    }
  
    get loginBtn() {
      return $(this.loginButton);
    } 
    async fillCredentials(email: string, password: string): Promise<void> {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
      }
    
      async clickLoginButton(): Promise<void> {
        await this.loginBtn.click();
      }
    }
    
    export const signInPage = new SignInPage();
