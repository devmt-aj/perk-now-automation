module.exports = {
    user: {
        home: {
            categories: {
                food: 'div[class="category-icon food"]',
                concierge: 'div[class="category-icon concierge"]',
                fun: 'div[class="category-icon fun"]',
                service: 'div[class="category-icon service"]'
            },
            featuredDeal: 'h4[class="featured-footer-text ng-binding"]'
            //might be feauturedDeals: 'div[class=featured-deal]'
        },
        vendors: {
            vendorListItem: 'div[class=vendors-list]'



        },
        dealRedemption: {
            deal: 'div[class=deal-header]',
            description : 'h4[id=modal-description]',
            address: 'a[class=center ng-binding]',
            hours: 'p[class=ng-binding]',
            website: 'span[id=browser-icon]',
            call: 'span[id=phone-icon]',
            redeemButton: '[id=redeem-button]',
            cancelButton: '[id=redeem-cancel]'
        },
        login: {
            emailInput: 'input[id="email"]',
            passwordInput: 'input[id=pass]',
            signInButton: 'button[type=button]',
            createAccountLink: 'a[id="signButton"]',
            forgotPasswordLink: 'a[ui-sref="forgot"]'
        },
        accountCreation: {
            haveWorkEmail: {
                yesButton:'button[ng-click="goToSignupEmail()"',
                noCodebutton:'button[ng-click="goToSignupCode()"',
                privacyPolicy:'a[class=legalLinks]',
                termAndConditions:'a[ui-sref=tos]'                
            },
            yesEmailScreen: {
                nextButtonEmail: 'div[ng-click="nextSignupEmail()"]',
                workEmailField:'input[type=email]'
            },
            noCodeScreen: {
                nextButtonEmail: 'div[ng-click="nextSignupEmail()"]',
                codeBox1:'input[ng-model="user.company_code1"]',
                codeBox2:'input[ng-model="user.company_code2"]',
                codeBox3:'input[ng-model="user.company_code3"]',
                codeBox4:'input[ng-model="user.company_code4"]',
                personalEmail:'input[type=email]'
            },
            insertInfoScreen:{
                firstName: 'input[ng-model="user.first_name"]',
                lastName: 'input[ng-model="user.last_name"]',
                password: 'input[ng-model="user.password"]',
                showPassword:'input[type=checkbox]',
                nextButtonCreateYourAccount: 'div[ng-click="nextSignupInfo()"'
            },
            zipCode:{
                enterZip:'input[type=number]',
                getPerksButton:'button[ng-click="signup()"]'
            },
            progressBar: {
                backButtonHome:'div[class=backArrow button icon-left ion-chevron-left button-clear]',
                backbutton:'div[id=backArrowLeft]',
                forwardButton:'div[id=backArrowRight]',
                firstProgressButton:'a[ui-sref="signupLanding"]',
                //secondProgressButton:'', //not enough info to pull selecor
                thirdProgressButton:'a[ui-sref="signupInfo"]',
                fourthProgressButton:'a[ui-sref="signupZip"]'
            }

        },
        menuBar: {
            catagories: {
                itemTag: 'a[class=item-content]',
                
                requestAPerk: 'request a perk',
                referAVendor: 'Refer a Vendor',
                contactSupport: 'contact support',
                privacyPolicy: 'privacy policy',
                termsAndConditionsOfUse: 'terms and condtions of use',
                logout: 'logout'
            }
        }
    },
    admin: {
        menuBar: {
            adminMenuTag: 'button[class=button-icon ion-navicon]'
        },
        companyScreen: {
            companyNameTag: 'td',
            text: 'View Companies',

            companyNameTag: 'td',
            text:'Facebook',

            companyNameTag: 'td',
            text:'Microsoft',

            companyNameTag: 'td',
            text: 'Apple',

            companyNameTag:'td',
            text: 'Google'
        },
        userScreen: {
            adminUserTag: 'td',
            adminUserText: '24',
            userEditTag: 'input',
            userEditText: '84005'

        },
        vendorScreen: {
            adminVendorTag: 'td',
            adminVendorText: 'wizard dresden',
            vendorEditTag: 'input',
            vendorEditText: 'chicago'

        },
        dealScreen: {
            dealTag: 'td',
            text1: '2 20% off',
            text2: 'free food', 
            text3:'50% off',
        },
        transactionScreen: {
            transactionTag:'td',
            transactionText1:'6',
            transactionText2:'15',
            transactionModifyScreen:{
                //there is a bug present, not allwoing you to view the individual transaction.
            }

        }
    }
}