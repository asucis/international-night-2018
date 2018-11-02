import React, { Component } from 'react'
import ReactHyperResponsiveTable from 'react-hyper-responsive-table'
import IdealImage from 'react-ideal-image'

class food extends Component {
    render() {
        const headers = {
            item: 'Food Item',
            type: 'Type',
        }

        const row = [
            {
                item: 'Fish Pakora',
                type: 'Meat'
            },
            {
                item: 'Veggie Pakora',
                type: 'Vegetarian'
            },
            {
                item: 'Mango Lassi',
                type: 'Vegetarian'
            },
            {
                item: 'Egg Rice',
                type: 'Vegetarian'
            },
            {
                item: 'Veggie Rice',
                type: 'Vegan'
            },
            {
                item: 'Mini Chimichangas',
                type: 'Meat'
            },
            {
                item: 'Quesadillas',
                type: 'Meat'
            },
            {
                item: 'Hummus & Chicken',
                type: 'Meat'
            },
            {
                item: 'Hummus Cilantro & Jalapeno',
                type: 'Vegan'
            },
            {
                item: 'Blue Corn Chips',
                type: 'Vegan'
            },
            {
                item: 'Pita Bread',
                type: 'Vegetarian'
            },
            {
                item: 'Firecracker Rolls',
                type: 'Meat'
            },
            {
                item: 'Cheese Pizza',
                type: 'Vegetarian'
            },
            {
                item: 'Veggie Pizza',
                type: 'Vegan'
            }
        ]

        const keyGetter = row => row.name

        return (
            <div>
                <div className="container-food">
                    <div className="section-heading">
                        <h2>Food</h2>
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

export default food