module.exports = {
    signIn: {
        username: 'admin@perknow.com',
        password: 'whatever',


        username1: 'maxfield.douglas+test1@gmail.com',
        password1: 'test1pass',

        username2: 'douglas.maxfield+test1@devmtn.com',
        password2: 'test1pass',

        badUsername: '',
        badPassword: ''

    },
    accountCreation: {
        goodData: {
            account1: {
                haveWorkEmail: 'Yes',
                workEmail: 'tjbob@devmountain.com',
                firstname: 'TJ',
                lastname: 'Bob',
                password: 'whatever',
                zipCode: '48568'
            },
            account2: {
                haveWorkEmail: 'No',
                workCode: 'code',
                firstname: 'Josephine',
                lastname: 'Loveless',
                password: 'whatever',
                zipCode: '84111'
            }
        },
        badData: {
            account1B: {
                haveWorkEmail: 'Yes',
                workEmail: 'tjbob@juno.com',
                firstname: 'TJ',
                lastname: 'Bob',
                password: 'test1Fail',
                zipCode: '84111'
            },
            account2B: {
                haveWorkEmail: 'No',
                workCode: '4312',
                firstname: 'tj',
                lastname: 'bobby',
                password: 'test2Fail',
                zipCode: '84100'

            },
        }


    },
    deals: {
        category: {
            fun: {
                deal1: {
                    vendor: 'Fun 1',
                    title: 'Gameboy',
                    description: 'Free Gameboy',
                    location: '123 NJHUYTG St KLN, UT 84043',
                    hours: 'Weekday hours: 9-5 Saturday hours: 9-5 Sunday hours: Closed'
                },
                deal2: {
                    vendor: 'Fun 3',
                    title: '15 50% off',
                    description: '15 Come in today for 50% off Fun 3',
                    location: '123 NJHUYTG St KLN, UT 84043',
                    hours: 'Weekday hours: 9-5 Saturday hours: 9-5 Sunday hours: Closed'
                }
            },
            food: {
                food1: {
                    title: '3 20% off',
                    vendor: 'Food 1',
                    deal: '3 20% off',
                    description: '3 Come in today for 20% off Food 1',
                    location: '123 NJHUYTG St KLN, UT 84043',
                    hours: 'Weekday hours: 9-5, Saturday hours: 9-5, Sunday hours: Closed',
                },
                Concierge4: {
                    title: 'free food',
                }

            }

        }
    }
}
