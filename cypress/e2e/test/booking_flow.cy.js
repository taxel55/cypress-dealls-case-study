import SignIn from "../pages/sign_in_page"
import BookingFlow from "../pages/booking_flow_page"

describe('Test Booking Flow', () => {
    beforeEach(() => {
        cy.visit("/mentoring");
        cy.viewport(1920, 1080);
    });

    it('Booking as Mentee', () => {
        SignIn.SignInAsMentee("joni@mail.com" , "Joni123.")
        BookingFlow.GoToMentoringPage()
        BookingFlow.SearchMentor()
        BookingFlow.MentoringDetailPage()
        BookingFlow.BookSessionWithMentorStep1()
        BookingFlow.BookSessionWithMentorStep2("1011" , "1212" , "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \
        It has survived not only five centuries, but also the leap into electronic typesetting")
        BookingFlow.BookSessionWithMentorStep3()
    });
});