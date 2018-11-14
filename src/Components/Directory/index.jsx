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
                organization: 'Taiwanese Student Association',
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
                organization: 'Falun Dafa',
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
                organization: 'Emirates Students Association',
                table: 13
            },
            {
                organization: 'Residence Hall Association',
                table: 14
            },
            {
                organization: 'Alliance of Indigenous Peoples',
                table: 15
            },
            {
                organization: 'Fun-Fun Student Organization',
                table: 16
            },
            {
                organization: 'K-Pop Dance Evolution (KoDE)',
                table: 17
            },
            {
                organization: 'Iranian Student Association',
                table: 18
            }
        ]

        const second = [
            {
                organization: 'Hawai\'i & Pacific Islander Club (HPIC)',
                table: 19
            },
            {
                organization: 'Saudi Student Club',
                table: 20
            },
            {
                organization: 'W. P. Carey Global Education Center',
                table: 21
            },
            {
                organization: 'Malaysian Students Association',
                table: 22
            },
            {
                organization: 'Muslim Students Association',
                table: 23
            },
            {
                organization: 'Southeast Asian American Student Association',
                table: 24
            },
            {
                organization: 'Sun Devil Fitness Center (SDFC)',
                table: 25
            },
            {
                organization: 'Chinese English Language Bridge',
                table: 26
            },
            {
                organization: 'Vietnamese Student Union',
                table: 27
            },
            {
                organization: 'Best Buddies',
                table: 28
            },
            {
                organization: 'Sponsored Students Advisory Committee',
                table: 29
            },
            {
                organization: 'The Global Council of Diplomats',
                table: 30
            },
            {
                organization: 'Indian Student Organization',
                table: 31
            },
            {
                organization: 'ASU Study Abroad Office',
                table: 32
            },
            {
                organization: 'Nepalese Student\'s Association',
                table: 33
            },
            {
                organization: 'El Concilio',
                table: 34
            },
            {
                organization: 'ASU Chinese Student & Scholar Association',
                table: 35
            },
            {
                organization: 'Office of Zero Waste',
                table: 36
            }
        ]

        const keyGetter = row => row.name


        return (
            <div>
                <div className="container">
                    <div className="section-heading">
                        <h2>Directory</h2>
                        <IdealImage
                            placeholder="international night map"
                            srcSet={[{ src: 'https://i.imgur.com/eBOkVcl.png', width: 3500 }]}
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