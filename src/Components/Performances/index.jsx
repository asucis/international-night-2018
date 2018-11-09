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
                time: '6:05 - 6:09',
                activity: 'From Chengdu',
                type: 'Chinese',
                genre: 'Music'
            },
            {
                time: '6:12 - 6:14',
                activity: '25 Degree',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:16 - 6:23',
                activity: 'Prachi Sharma',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '6:23 - 6:26',
                activity: 'Superlove',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:28 - 6:31',
                activity: 'Sofya Pangburn',
                type: 'European',
                genre: 'Music'
            },
            {
                time: '6:33 - 6:38',
                activity: 'Hawai\'i & Pacific Islander',
                type: 'Hawaiian',
                genre: 'Dance'
            },
            {
                time: '6:40 - 6:41',
                activity: 'Jenny & Frnd',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '6:44 - 6:52',
                activity: 'Daniel Oh',
                type: 'Korean',
                genre: 'Music'
            },
            {
                time: '6:53 - 7:03',
                activity: <b>Prize Drawing - Round 1</b>,
                type: '',
                genre: ''
            },
            {
                time: '7:06 - 7:14',
                activity: 'Roobaroo',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '7:16 - 7:21',
                activity: 'AZNA',
                type: 'Asian & American',
                genre: 'Dance'
            },
            {
                time: '7:23 - 7:28',
                activity: 'Chinese Culture',
                type: 'Chinese',
                genre: 'Culture'
            },
            {
                time: '7:29 - 7:39',
                activity: <b>Baskins31 - Round 1</b>,
                type: '',
                genre: ''
            },
            {
                time: '7:41 - 7:48',
                activity: 'Omani Student Association',
                type: 'Omani',
                genre: 'Culture'
            },
            {
                time: '7:50 - 7:57',
                activity: 'Swarajathi',
                type: 'Indian',
                genre: 'Dance'
            },
            {
                time: '7:59 - 8:06',
                activity: 'KODE ASU',
                type: 'Korean',
                genre: 'Dance'
            },
            {
                time: '8:08 - 8:15',
                activity: 'Formosan',
                type: 'Chinese',
                genre: 'Music'
            },
            {
                time: '8:17 - 8:21',
                activity: 'Andaaz',
                type: 'Indian',
                genre: 'Music'
            },
            {
                time: '8:23 - 8:27',
                activity: 'Nice to Meet You',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '8:29 - 8:36',
                activity: '25 Degree',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '8:38 - 8:48',
                activity: <b>Prize Drawings - Round 2</b>,
                type: '',
                genre: ''
            },
            {
                time: '8:50 - 8:57',
                activity: 'African Praise Band',
                type: 'African',
                genre: 'Music'
            },
            {
                time: '9:00 - 9:03',
                activity: 'Philippine American Students Association',
                type: 'Philippine',
                genre: 'Dance'
            },
            {
                time: '9:03 - 9:06',
                activity: 'Mot Long',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '9:08 - 9:14',
                activity: 'Ice Melon',
                type: 'Chinese',
                genre: 'Dance'
            },
            {
                time: '9:15 - 9:25',
                activity: <b>Big Prize of the Night</b>,
                type: '',
                genre: ''
            },
            {
                time: '9:25 - 9:30',
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