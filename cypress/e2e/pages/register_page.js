class RegisterPage {
    getSelectors() {
        return {
            registerButton: "//a[@id='dealls-navbar-register-btn' and normalize-space(text()='Daftar')]",
            signUpWithEmailMentee: "//div[h3[text()='Job-Seeker / Mentee']]//a[contains(text(), 'Sign Up With Email')]",
            inputFullName: "//input[@id='fullName']",
            jobSearchStatus: "//input[@id='jobSearchStatus' and @aria-owns='jobSearchStatus_list']",
            dropDownJobStatus: "//div[normalize-space(@name)='Actively looking for the next 3 months']",
            inputWhatsAppNumber: "//input[@id='whatsapp']",
            inputEmailAddress: "//input[@id='email']",
            inputLinkedin: "//input[@id='linkedInUrl']",
            inputLastEducation: "//input[@id='campus']",
            experienceLevel: "//input[@id='eligibility' and @aria-owns='eligibility_list']",
            dropDownExperienceLevel: "//div[@title='Freshgrad']",
            nextButton: "//button[@type='submit' and span[normalize-space(text()='Selanjutnya')]]",
            skipCV: "//button[@type='button' and p[normalize-space(text()='Skip for now, my CV is not ready')]]",
            organizationExperienceTab: "//button[span[normalize-space(text())='Organisasi']]",
            inputOrganizationName: "//input[@id='organizationName']",
            inputOrganizationPosition: "//input[@id='organizationPosition']",
            addSpecializationBtn: "//button[span[normalize-space(text())='Add another specialization']]",
            specialization: "//input[@id='rc_select_8']",
            dropDownSpecialization: "//div[@title='IT & Engineering']",
            checkboxSpecialization: "//label[span[normalize-space(text())='Backend Developer']]",
            finishButton: "//button[@id='dealls-onboarding-finish']",
            inputPassword: "//input[@id='password']",
            inputPasswordConfirmation: "//input[@id='passwordConfirmation']",
            termsAndConditionBox: "//label[.//span/span/a[contains(text(), 'Syarat & Kondisi')] and .//span/span/a[contains(text(), 'Kebijakan Pribadi')]]",
            welcomeModal: "//div[@class='ant-modal-content']",
            signUpWithEmailMentor: "//div[h3[text()='Mentor']]//a[contains(text(), 'Sign Up With Email')]",
            inputFullNameMentor: "//input[@id='mentor-onboarding_fullName']",
            inputEmailMentor: "//input[@id='mentor-onboarding_email']",
            inputWhatsAppMentor: "//input[@id='mentor-onboarding_whatsapp']",
            expertiseKarirCheckbox: "//button[.//h1[normalize-space(text())='Karir']]",
            mentorExpertise: "//input[@id='expertise-list-form_careerPanels_0_category']",
            inputCompanyName: "//input[@id='companyName']",
            inputCompanyIndustry: "//input[contains(@aria-owns, 'rc_select')]",
            inputRoleLevel: "//input[@id='roleLevel']",
            inputRoleName: "//input[@id='roleName']",
            inputStartDate: "//input[@id='startDate']",
            inputEndDate: "//input[@id='endDate']",
            inputMentorInstitution: "//input[@id='institution']",
            tadikaInstitution: "//div[@title='Tadika']",
            inputMentorMajor: "//input[@id='major']",
            mentorAboutMe: "//textarea[@id='aboutMe']",
            linkedinPostRepostCheckbox: "//label[.//div[contains(text(), 'Saya telah membagikan')]]",
            nextButton2: "//button[span[normalize-space(text())='Next']]",
            inputPasswordConfirmation2: "//input[@id='confirmPassword']",
            checkPrivacyPolicyCheckbox: "//input[@id='checkPrivacyPolicy']",
            finishMentorButton: "//button[@id='mentoring-onboarding-finish-btn']"
        };
    }

    // Register Mentee //
    RegisterMenteeSignUpPage() {
        const element = this.getSelectors()
        cy.xpath(element.registerButton).should('not.be.disabled')
        cy.xpath(element.registerButton).click()
        cy.xpath(element.signUpWithEmailMentee).should('be.visible')
        cy.xpath(element.signUpWithEmailMentee, { timeout: 20000 }).should('not.be.disabled')
        cy.wait(1)
        cy.xpath(element.signUpWithEmailMentee).click()
        cy.xpath(element.inputFullName).should('be.visible')
    }

    RegisterMenteeOnboardingFullName(fullname) {
        const element = this.getSelectors();
        cy.xpath(element.inputFullName).should('not.be.disabled')
        cy.xpath(element.inputFullName).type(fullname)
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
    }

    RegisterMenteeOnboardingUserInformation(lastEducation) {
        const element = this.getSelectors();
        cy.xpath(element.jobSearchStatus).should('not.be.disabled')
        cy.xpath(element.jobSearchStatus).click()
        cy.xpath(element.dropDownJobStatus).should('be.visible')
        cy.xpath(element.dropDownJobStatus).should('not.be.disabled')
        cy.xpath(element.dropDownJobStatus).click()
        cy.xpath(element.inputWhatsAppNumber).should('not.be.disabled')
        cy.xpath(element.inputWhatsAppNumber).type(generateRandomNumberWith62())
        cy.xpath(element.inputEmailAddress).should('not.be.disabled')
        cy.xpath(element.inputEmailAddress).type(RandomEmailCreation())
        cy.xpath(element.inputLastEducation).should('not.be.disabled')
        cy.xpath(element.inputLastEducation).type(lastEducation).type('{enter}')
        cy.xpath(element.experienceLevel).should('not.be.disabled')
        cy.xpath(element.experienceLevel).click()
        cy.xpath(element.dropDownExperienceLevel).should('be.visible')
        cy.xpath(element.dropDownExperienceLevel).should('not.be.disabled')
        cy.xpath(element.dropDownExperienceLevel).click()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.skipCV).should('be.visible')
    }

    RegisterMenteeCVInformation() {
        const element = this.getSelectors();
        cy.xpath(element.skipCV).should('not.be.disabled')
        cy.xpath(element.skipCV).click()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.organizationExperienceTab).should('be.visible')

    }

    RegisterMenteeExperienceInformation(organizationName, organizationPosition) {
        const element = this.getSelectors();
        cy.xpath(element.organizationExperienceTab).should('not.be.disabled')
        cy.xpath(element.organizationExperienceTab).click()
        cy.xpath(element.inputOrganizationName).should('not.be.disabled')
        cy.xpath(element.inputOrganizationName).type(organizationName)
        cy.xpath(element.inputOrganizationPosition).should('not.be.disabled')
        cy.xpath(element.inputOrganizationPosition).type(organizationPosition)
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.addSpecializationBtn).should('be.visible')
    }

    RegisterMenteeSpecialization() {
        const element = this.getSelectors();
        cy.xpath(element.addSpecializationBtn).should('not.be.disabled')
        cy.xpath(element.addSpecializationBtn).click()
        cy.xpath(element.specialization).should('not.be.disabled')
        cy.xpath(element.specialization).click()
        cy.xpath(element.dropDownSpecialization).should('be.visible')
        cy.xpath(element.dropDownSpecialization).should('not.be.disabled')
        cy.xpath(element.dropDownSpecialization).click()
        cy.xpath(element.checkboxSpecialization).should('be.visible')
        cy.xpath(element.checkboxSpecialization).should('not.be.disabled')
        cy.xpath(element.checkboxSpecialization).click()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.inputPassword).should('be.visible')
    }

    RegisterMenteePassword(password) {
        const element = this.getSelectors();
        cy.xpath(element.inputPassword).should('not.be.disabled')
        cy.xpath(element.inputPassword).type(password)
        cy.xpath(element.inputPasswordConfirmation).should('not.be.disabled')
        cy.xpath(element.inputPasswordConfirmation).type(password)
        cy.xpath(element.termsAndConditionBox).should('not.be.disabled')
        cy.xpath(element.termsAndConditionBox).click()
        cy.xpath(element.finishButton).should('not.be.disabled')
        cy.xpath(element.finishButton).click()
        cy.xpath(element.welcomeModal, { timeout: 10000 }).should('be.visible');
    }
    // Register Mentee Done //


    // Register Mentor //
    RegisterMentorSignUpPage() {
        const element = this.getSelectors()
        cy.xpath(element.registerButton).should('not.be.disabled')
        cy.xpath(element.registerButton).click()
        cy.xpath(element.signUpWithEmailMentor).should('be.visible')
        cy.xpath(element.signUpWithEmailMentor, { timeout: 20000 }).should('not.be.disabled')
        cy.wait(1)
        cy.xpath(element.signUpWithEmailMentor).click()
        cy.xpath(element.inputFullNameMentor).should('be.visible')
    }

    RegisterMentorInformationPage(fullName) {
        const element = this.getSelectors()
        cy.wait(1)
        cy.xpath(element.inputFullNameMentor).should('not.be.disabled')
        cy.xpath(element.inputFullNameMentor).type(fullName)
        cy.xpath(element.inputEmailMentor).should('not.be.disabled')
        cy.xpath(element.inputEmailMentor).type(RandomEmailCreation())
        cy.xpath(element.inputWhatsAppMentor).should('not.be.disabled')
        cy.xpath(element.inputWhatsAppMentor).type(generateRandomNumberWith62())
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.expertiseKarirCheckbox).should('be.visible')
    }

    RegisterMentorExpertisePage() {
        const element = this.getSelectors()
        cy.xpath(element.expertiseKarirCheckbox).should('not.be.disabled')
        cy.xpath(element.expertiseKarirCheckbox).click()
        cy.xpath(element.mentorExpertise).should('not.be.disabled')
        cy.xpath(element.mentorExpertise).click()
        cy.xpath(element.dropDownSpecialization).should('be.visible')
        cy.xpath(element.dropDownSpecialization).should('not.be.disabled')
        cy.xpath(element.dropDownSpecialization).click()
        cy.xpath(element.checkboxSpecialization).should('be.visible')
        cy.xpath(element.checkboxSpecialization).should('not.be.disabled')
        cy.xpath(element.checkboxSpecialization).click()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.inputCompanyName).should('be.visible')
    }

    RegisterMentorJobExperience(companyName, companyIndustry, roleLevel, roleName, startDate, endDate) {
        const element = this.getSelectors()
        cy.xpath(element.inputCompanyName).should('not.be.disabled')
        cy.xpath(element.inputCompanyName).type(companyName).type('{enter}')
        cy.xpath(element.inputCompanyIndustry).should('not.be.disabled')
        cy.xpath(element.inputCompanyIndustry).type(companyIndustry).type('{enter}')
        cy.xpath(element.inputRoleLevel).should('not.be.disabled')
        cy.xpath(element.inputRoleLevel).type(roleLevel).type('{enter}')
        cy.xpath(element.inputRoleName).should('not.be.disabled')
        cy.xpath(element.inputRoleName).type(roleName).type('{enter}')
        cy.xpath(element.inputStartDate).should('not.be.disabled')
        cy.xpath(element.inputStartDate).type(startDate)
        cy.xpath(element.inputEndDate).should('not.be.disabled')
        cy.xpath(element.inputEndDate).type(endDate)
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.inputMentorInstitution).should('be.visible')
    }

    RegisterMentorEducation(major, startDate, endDate) {
        const element = this.getSelectors()
        cy.xpath(element.inputMentorInstitution).should('not.be.disabled')
        cy.xpath(element.inputMentorInstitution).type('Tadika')
        cy.xpath(element.tadikaInstitution).should('be.visible')
        cy.xpath(element.tadikaInstitution).should('not.be.disabled')
        cy.xpath(element.tadikaInstitution).click()
        cy.xpath(element.inputMentorMajor).should('not.be.disabled')
        cy.xpath(element.inputMentorMajor).type(major)
        cy.xpath(element.inputStartDate).should('not.be.disabled')
        cy.xpath(element.inputStartDate).type(startDate)
        cy.xpath(element.inputEndDate).should('not.be.disabled')
        cy.xpath(element.inputEndDate).type(endDate)
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.mentorAboutMe).should('be.visible')
    }

    RegisterMentorAboutMe() {
        const element = this.getSelectors()
        cy.xpath(element.nextButton).should('not.be.disabled')
        cy.xpath(element.nextButton).click()
        cy.xpath(element.linkedinPostRepostCheckbox).should('be.visible')
    }

    RegisterMentorConfirmation() {
        const element = this.getSelectors()
        cy.xpath(element.linkedinPostRepostCheckbox).should('not.be.disabled')
        cy.xpath(element.linkedinPostRepostCheckbox).click()
        cy.xpath(element.nextButton2).should('not.be.disabled')
        cy.xpath(element.nextButton2).click()
        cy.xpath(element.inputPassword).should('be.visible')
    }

    RegisterMentorPassword(password) {
        const element = this.getSelectors()
        cy.xpath(element.inputPassword).should('not.be.disabled')
        cy.xpath(element.inputPassword).type(password)
        cy.xpath(element.inputPasswordConfirmation2).should('not.be.disabled')
        cy.xpath(element.inputPasswordConfirmation2).type(password)
        cy.xpath(element.checkPrivacyPolicyCheckbox).should('not.be.disabled')
        cy.xpath(element.checkPrivacyPolicyCheckbox).click()
        cy.xpath(element.finishMentorButton).should('not.be.disabled')
        cy.xpath(element.finishMentorButton).click()
        cy.xpath(element.welcomeModal, { timeout: 10000 }).should('be.visible');
    }
    // Register Mentor Done //


}
 // Random Email //
function RandomEmailCreation() {
    const domains = ["example.com", "testmail.com", "email.net", "mail.org"]
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
    const usernameLength = Math.floor(Math.random() * 6) + 5
    let username = ""

    for (let i = 0; i < usernameLength; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    const randomNumber = Math.floor(Math.random() * 1000)
    const domain = domains[Math.floor(Math.random() * domains.length)]

    return `${username}${randomNumber}@${domain}`
}

// Random Phone Number //
function generateRandomNumberWith62() {
    const prefix = '62'
    const remainingDigits = 10 - prefix.length
    let randomPart = ''

    for (let i = 0; i < remainingDigits; i++) {
        randomPart += Math.floor(Math.random() * 10)
    }

    return prefix + randomPart
}

export default new RegisterPage()



