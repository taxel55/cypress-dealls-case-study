class SignInPage{
    getSelectors(){
        return{
            signInButtonHeader: "//a[@id='dealls-navbar-login-btn' and normalize-space(text())='Masuk']",
            inputEmailSignIn: "//input[@id='basic_email' and normalize-space(@placeholder='Enter your email')]",
            inputPasswordSignIn: "//input[@id='basic_password' and normalize-space(@placeholder='Enter your password')]",
            signInButtonForm: "//button[@type='submit' and span[normalize-space(text())='Sign In']]",
            signInSuccessNotif: "//div//span[normalize-space(text())='Sign in success']",
            changeMentorProfileBtn: "//a[normalize-space(text())='Ubah Profil']"
        }
    }
    

    SignInAsMentee(emailSignIn , passwordSignIn){
        const element = this.getSelectors()
        cy.xpath(element.signInButtonHeader).should('not.be.disabled')
        cy.xpath(element.signInButtonHeader).click()
        cy.xpath(element.inputEmailSignIn , {timeout: 20000}).should('be.visible')
        cy.xpath(element.inputEmailSignIn).should('not.be.disabled')
        cy.xpath(element.inputEmailSignIn).type(emailSignIn)
        cy.xpath(element.inputPasswordSignIn).should('not.be.disabled')
        cy.xpath(element.inputPasswordSignIn).type(passwordSignIn)
        cy.xpath(element.signInButtonForm).should('not.be.disabled')
        cy.xpath(element.signInButtonForm).click()
        cy.xpath(element.signInSuccessNotif , {timeout: 20000}).should('be.visible')
    }

    SignInAsMentor(emailSignIn , passwordSignIn){
        const element = this.getSelectors()
        cy.xpath(element.signInButtonHeader).should('not.be.disabled')
        cy.xpath(element.signInButtonHeader).click()
        cy.xpath(element.inputEmailSignIn , {timeout: 20000}).should('be.visible')
        cy.xpath(element.inputEmailSignIn).should('not.be.disabled')
        cy.xpath(element.inputEmailSignIn).type(emailSignIn)
        cy.xpath(element.inputPasswordSignIn).should('not.be.disabled')
        cy.xpath(element.inputPasswordSignIn).type(passwordSignIn)
        cy.xpath(element.signInButtonForm).should('not.be.disabled')
        cy.xpath(element.signInButtonForm).click()
        cy.xpath(element.changeMentorProfileBtn , {timeout: 20000}).should('be.visible')
    }
}

export default new SignInPage()