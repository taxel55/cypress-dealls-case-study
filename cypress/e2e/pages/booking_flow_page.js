class BookingFlowPage {
    constructor() {
        this.mentorName = "Vito Corleone";
        this.year = "2032";
        this.month = "December";
        this.startDay = "Monday";
        this.endDay = "Wednesday";
        this.startDate = "27";
        this.endDate = "29";
    }

    getSelector(){
        return{
            mentoringMenu: "//a[@href='/mentoring' and normalize-space(text())='Mentoring']",
            exploreTab: "//a[@href='/mentoring' and normalize-space(text())='Eksplor']",
            mySessionTab: "//a[@href='/mentoring/my-session' and normalize-space(text())='Sesi Saya']",
            mentorCard: `//a[.//h4[normalize-space(text())='${this.mentorName}']]`,
            searchMentor: "//input[@class='ant-input' and contains(@placeholder, 'Cari berdasarkan nama, perusahaan')]",
            makeScheduleBtn: "//button[normalize-space(text())='Ajukan Jadwal']",
            overviewTab: "//div[.//h3[normalize-space(text())='Statistics'] and @class='w-full']",
            bookSessionModal: "//div[@id='book-session-modal']",
            careerPlanning: "//button[div[normalize-space(text())='Career Planning']]",
            nextButton: "//button[span[normalize-space(text())='Selanjutnya']]",
            dateRangeDatePicker: "//div[contains(@class, 'rmdp-container')]//button",
            datePickerYearChange: "//div[@class='rmdp-header-values']//span[3]",
            selectYear: `//div[@aria-label='Select year ${this.year}']`,
            datePickerMonthChange: "//div[@class='rmdp-header-values']//span[1]",
            selectMonth: `//div[@aria-label='Select ${this.month} of ${this.year}']`,
            selectStartDate: `//div[@aria-label='Choose ${this.startDay} ${this.month} ${this.startDate} of ${this.year}']`,
            selectEndDate: `//div[@aria-label='Choose ${this.endDay} ${this.month} ${this.endDate} of ${this.year}']`,
            proposedStartTime: "//input[@id='proposedTimes_0_startTime']",
            proposedEndTime: "//input[@id='proposedTimes_0_endTime']",
            location: "//div[@class='ant-select-selector']",
            dropDownLocation: "//div[contains(@class, 'ProposeLocation_select_checkbox') and .//div[normalize-space(text())='Online']]",
            inputNotes: "//textarea[@id='notes']",
            inputWhatsAppNumber: "//input[@id='whatsapp']",
            confirmationCheckbox: "//input[@id='commitCheckbox']", 
            finishButton: "//button[span[normalize-space(text())='Selesai']]",
            finishBookModal: "//div[@class='ant-modal-content']"
        }   
    }

    GoToMentoringPage(){
        const element = this.getSelector()
        cy.xpath(element.mentoringMenu).should('not.be.disabled')
        cy.xpath(element.mentoringMenu).click()
    }

    SearchMentor(){
        const element = this.getSelector()
        cy.xpath(element.searchMentor).should('not.be.disabled')
        cy.xpath(element.searchMentor).type(this.mentorName)
        cy.wait(3000)
        cy.xpath(element.mentorCard, {timeout: 10000}).should('be.visible')
    }

    MentoringDetailPage(){
        const element = this.getSelector()
        cy.xpath(element.mentorCard).should('not.be.disabled')
        cy.xpath(element.mentorCard).click()
        cy.xpath(element.overviewTab, {timeout: 1000}).should('be.visible')
    }

    BookSessionWithMentorStep1(){
        const element = this.getSelector()
        cy.xpath(element.makeScheduleBtn).should('not.be.disabled')
        cy.xpath(element.makeScheduleBtn).click()
        cy.xpath(element.bookSessionModal , {timeout: 1000}).should('be.visible')
        cy.xpath(element.careerPlanning).should('not.be.disabled')
        cy.xpath(element.careerPlanning).click()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.dateRangeDatePicker, {timeout: 1000}).should('be.visible')        
    }

    BookSessionWithMentorStep2(startTime , endTime , notes){
        const element = this.getSelector()
        cy.xpath(element.dateRangeDatePicker).should('not.be.disabled')
        cy.xpath(element.dateRangeDatePicker).click()
        cy.xpath(element.datePickerYearChange).should('not.be.disabled')
        cy.xpath(element.datePickerYearChange).click()
        cy.xpath(element.selectYear).should('not.be.disabled')
        cy.xpath(element.selectYear).click()
        cy.xpath(element.datePickerMonthChange).should('not.be.disabled')
        cy.xpath(element.datePickerMonthChange).click()
        cy.xpath(element.selectMonth).should('not.be.disabled')
        cy.xpath(element.selectMonth).click()
        cy.wait(500)
        cy.xpath(element.selectStartDate).should('not.be.disabled')
        cy.xpath(element.selectStartDate).click()
        cy.wait(500)
        cy.xpath(element.selectEndDate).should('not.be.disabled')
        cy.xpath(element.selectEndDate).click()
        cy.xpath(element.proposedStartTime).should('not.be.disabled')
        cy.xpath(element.proposedStartTime).click()
        cy.xpath(element.proposedStartTime).type(startTime)
        cy.xpath(element.proposedEndTime).should('not.be.disabled')
        cy.xpath(element.proposedEndTime).type(endTime)
        cy.xpath(element.location).should('not.be.disabled')
        cy.xpath(element.location).click()
        cy.xpath(element.dropDownLocation).should('not.be.disabled')
        cy.xpath(element.dropDownLocation).click()
        cy.xpath(element.inputNotes).should('not.be.disabled')
        cy.xpath(element.inputNotes).clear()
        cy.xpath(element.inputNotes).type(notes)
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.inputWhatsAppNumber, {timeout: 1000}).should('be.visible')     
    }

    BookSessionWithMentorStep3(){
        const element = this.getSelector()
        cy.xpath(element.confirmationCheckbox).should('not.be.disabled')
        cy.xpath(element.confirmationCheckbox).click()
        cy.xpath(element.finishButton).should('not.be.disabled')
        cy.xpath(element.finishButton).click()
        cy.xpath(element.finishBookModal, {timeout: 1000}).should('be.visible')   
    }

}

export default new BookingFlowPage()
