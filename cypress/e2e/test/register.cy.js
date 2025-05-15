import RegisterPage from "../pages/register_page"

describe('Test Register Flow', () => {
    beforeEach(() => {
        cy.visit("/mentoring");
        cy.viewport(1920, 1080);
    });

    it('Register as Mentee Success', () => {
        RegisterPage.RegisterMenteeSignUpPage()
        RegisterPage.RegisterMenteeOnboardingFullName("Kevin")
        RegisterPage.RegisterMenteeOnboardingUserInformation("Binus University")
        RegisterPage.RegisterMenteeCVInformation()
        RegisterPage.RegisterMenteeExperienceInformation("HIMSIS" , "Leader")
        RegisterPage.RegisterMenteeSpecialization()
        RegisterPage.RegisterMenteePassword("Demo2020.")
    });

    it('Register as Mentor Success', () =>{
        RegisterPage.RegisterMentorSignUpPage()
        RegisterPage.RegisterMentorInformationPage("Anderson")
        RegisterPage.RegisterMentorExpertisePage()
        RegisterPage.RegisterMentorJobExperience("Tokped", "Online", "Staff", "BE Dev", "062005", "092006")
        RegisterPage.RegisterMentorEducation("Bisnis" , "022002" , "032004")
        RegisterPage.RegisterMentorAboutMe()
        RegisterPage.RegisterMentorConfirmation()
        RegisterPage.RegisterMentorPassword("Demo2020.")
    });

});