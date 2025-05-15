class SignInPage{
    signInButtonHeader = "//a[@id='dealls-navbar-login-btn' and normalize-space(text())='Masuk']"
    inputEmailSignIn = "//input[@id='basic_email' and normalize-space(@placeholder='Enter your email')]"
    inputPasswordSignIn = "//input[@id='basic_password' and normalize-space(@placeholder='Enter your password')]"
    signInButtonForm = "//button[@type='submit' and span[normalize-space(text())='Sign In']]"
    signInSuccessNotif = "//div//span[normalize-space(text())='Sign in success']"

    SignInAsMentee(emailSignIn , passwordSignIn){
        cy.xpath(this.signInButtonHeader).should('not.be.disabled')
        cy.xpath(this.signInButtonHeader).click()
        cy.xpath(this.inputEmailSignIn , {timeout: 20000}).should('be.visible')
        cy.xpath(this.inputEmailSignIn).should('not.be.disabled')
        cy.xpath(this.inputEmailSignIn).type(emailSignIn)
        cy.xpath(this.inputPasswordSignIn).should('not.be.disabled')
        cy.xpath(this.inputPasswordSignIn).type(passwordSignIn)
        cy.xpath(this.signInButtonForm).should('not.be.disabled')
        cy.xpath(this.signInButtonForm).click()
        cy.xpath(this.signInSuccessNotif , {timeout: 20000}).should('be.visible')
    }
}

export default new SignInPage()