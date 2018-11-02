import React, { Component } from 'react'
import ReactHyperResponsiveTable from 'react-hyper-responsive-table'
import IdealImage from 'react-ideal-image'

class directory extends Component {
    render() {
        const headers = {
            organization: 'Organization',
            table: 'Table',
        }

        const first = [
            {
                organization: 'Falun Dafa',
                table: 1
            },
            {
                organization: 'Philippine American Student Association',
                table: 2
            },
            {
                organization: 'SILC Attachés',
                table: 3
            },
            {
                organization: 'Ascend',
                table: 4
            },
            {
                organization: 'PERMIAS',
                table: 5
            },
            {
                organization: 'Asian / Asian Pacific Amercian Students\' Coalition (AAPASC)',
                table: 6
            },
            {
                organization: 'Japanese Student Association',
                table: 7
            },
            {
                organization: 'Bridge of Japan-America',
                table: 8
            },
            {
                organization: 'Taiwanese Student Association',
                table: 9
            },
            {
                organization: 'Omani Students Association',
                table: 10
            },
            {
                organization: 'African Students Association',
                table: 11
            },
            {
                organization: 'Pakistani Student Association',
                table: 12
            },
            {
                organization: 'Alliance of Indigenous Peoples',
                table: 13
            },
            {
                organization: 'Fun-Fun Student Organization',
                table: 14
            },
            {
                organization: 'K-Pop Dance Evolution (KoDE)',
                table: 15
            },
            {
                organization: 'Iranian Student Association',
                table: 16
            },
            {
                organization: 'Hawai\'i & Pacific Islander Club (HPIC)',
                table: 17
            }
        ]

        const second = [
            {
                organization: 'Saudi Student Club',
                table: 18
            },
            {
                organization: 'W. P. Carey Global Education Center',
                table: 19
            },
            {
                organization: 'Malaysian Students Association',
                table: 20
            },
            {
                organization: 'Muslim Students Association',
                table: 21
            },
            {
                organization: 'Southeast Asian American Student Association',
                table: 22
            },
            {
                organization: 'Sun Devil Fitness Center (SDFC)',
                table: 23
            },
            {
                organization: 'Chinese English Language Bridge',
                table: 24
            },
            {
                organization: 'Vietnamese Student Union',
                table: 25
            },
            {
                organization: 'Best Buddies',
                table: 26
            },
            {
                organization: 'Sponsored Students Advisory Committee',
                table: 27
            },
            {
                organization: 'The Global Council of Diplomats',
                table: 28
            },
            {
                organization: 'Indian Student Organization',
                table: 29
            },
            {
                organization: 'ASU Study Abroad Office',
                table: 30
            },
            {
                organization: 'Nepalese Student\'s Association',
                table: 31
            },
            {
                organization: 'El Concilio',
                table: 32
            },
            {
                organization: 'ASU Chinese Student & Scholar Association',
                table: 33
            },
            {
                organization: 'Office of Zero Waste',
                table: 34
            }
        ]

        const keyGetter = row => row.name


        return (
            <div>
                <div className="container">
                    <div className="section-heading">
                        <h2>Directory</h2>
                        <IdealImage
                            placeholder="hello"
                            srcSet={[{ src: 'https://i.imgur.com/1auNk8d.png', width: 3500 }]}
                            alt="doggo"
                            width={3500}
                            height={2095}
                        />
                    </div>
                    <div className="left">
                        <ReactHyperResponsiveTable
                            headers={headers}
                            rows={first}
                            keyGetter={keyGetter}
                            breakpoint={578}
                            tableStyling={({ narrow }) => (narrow ? 'narrowtable' : 'widetable')}
                        />
                    </div>

                    <div className="right">
                        <ReactHyperResponsiveTable
                            headers={headers}
                            rows={second}
                            keyGetter={keyGetter}
                            breakpoint={578}
                            tableStyling={({ narrow }) => (narrow ? 'narrowtable' : 'widetable')}
                        />
                    </div>
                </div>


            </div>
        )

    }

}

export default directory