import SignIn from "../pages/sign_in_page"

describe('Test Login Flow', () => {
    beforeEach(() => {
        cy.visit("/mentoring");
        cy.viewport(1920, 1080);
    });

    it('Login as Mentee', () => {
        SignIn.SignInAsMentee('joni@mail.com' , 'Joni123.')
    });

});