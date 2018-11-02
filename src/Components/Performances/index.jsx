import React, { Component } from 'react'
import ReactHyperResponsiveTable from 'react-hyper-responsive-table'

class performances extends Component {
    render() {
        const headers = {
            time: 'Time',
            activity: 'Performer',
            type: 'Type',
            genre: 'Genre'
        }

        const row = [
            {
                time: '6:00 - 6:03',
                activity: <b>Introduction</b>,
                type: '',
                genre: ''
            },
            {
                time: '6:05 - 6:10',
                activity: 'From Chengdu',
                type: 'Chinese',
                genre: 'Music'
            },
            {
                time: '6:12 - 6:16',
                activity: 'Bryce Hagenson',
                type: 'American',
                genre: 'Music'
            },
            {
                time: '6:18 - 6:20',
                activity: '25 Degree',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:22 - 6:29',
                activity: 'Prachi Sharma',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '6:31 - 6:34',
                activity: 'Softlove',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:36 - 6:39',
                activity: 'Sofya Pangburn',
                type: 'European',
                genre: 'Music'
            },
            {
                time: '6:41 - 6:46',
                activity: 'Hawai\'i & Pacific Islander',
                type: 'Hawaiian',
                genre: 'Dance'
            },
            {
                time: '6:48 - 6:50',
                activity: 'Jenny & Frnd',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:52 - 7:00',
                activity: 'Daniel Oh',
                type: 'Korean',
                genre: 'Music'
            },
            {
                time: '7:00 - 7:10',
                activity: <b>Baskins31 - Round 1</b>,
                type: '',
                genre: ''
            },
            {
                time: '7:12 - 7:19',
                activity: 'Roobaroo',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '7:21 - 7:26',
                activity: 'AZNA',
                type: 'Asian & American',
                genre: 'Dance'
            },
            {
                time: '7:28 - 7:33',
                activity: 'Chinese Culture',
                type: 'Chinese',
                genre: 'Culture'
            },
            {
                time: '7:33 - 7:43',
                activity: <b>Raffle Ticket - Round 1</b>,
                type: '',
                genre: ''
            },
            {
                time: '7:45 - 7:53',
                activity: 'Devils Dancesport',
                type: 'Salsa - Latin',
                genre: 'Dance'
            },
            {
                time: '7:55 - 8:02',
                activity: 'Omani Student Association',
                type: 'Omani',
                genre: 'Culture'
            },
            {
                time: '8:04 - 8:11',
                activity: 'Swarajathi',
                type: 'Indian',
                genre: 'Dance'
            },
            {
                time: '8:13 - 8:20',
                activity: 'PERMIAS Phoenix',
                type: 'Indonesian',
                genre: 'Music'
            },
            {
                time: '8:23 - 8:28',
                activity: 'KODE ASU',
                type: 'Korean',
                genre: 'Dance'
            },
            {
                time: '8:30 - 8:38',
                activity: 'Formosan',
                type: 'Chinese',
                genre: 'Music'
            },
            {
                time: '8:41 - 8:45',
                activity: 'Andaaz',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '8:47 - 8:51',
                activity: 'Nice to Meet You',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '8:53 - 9:00',
                activity: '25 Degree',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '9:00 - 9:10',
                activity: <b>Raffle Ticket - Round 2</b>,
                type: '',
                genre: ''
            },
            {
                time: '9:12 - 9:19',
                activity: 'African Praise Band',
                type: 'African',
                genre: 'Music'
            },
            {
                time: '9:22 - 9:25',
                activity: 'Philippine American Students Association',
                type: 'Philippine',
                genre: 'Dance'
            },
            {
                time: '9:25 - 9:35',
                activity: <b>Baskins31 - Round 2</b>,
                type: '',
                genre: ''
            },
            {
                time: '9:37 - 9:40',
                activity: 'Mot Long',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '9:42 - 9:48',
                activity: 'Ice Melon',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '9:48 - 9:53',
                activity: <b>Big Prize of the Night</b>,
                type: '',
                genre: ''
            },
            {
                time: '9:53 - 9:55',
                activity: 'Vote of Thanks',
                type: '',
                genre: ''
            },
            
        ]

        const keyGetter = row => row.name

        return (
            <div>
                <div className="container-performances">
                    <div className="section-heading">
                        <h2>Schedule</h2>
                    </div>
                    <div className="left">
                        <ReactHyperResponsiveTable
                            headers={headers}
                            rows={row}
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

export default performances