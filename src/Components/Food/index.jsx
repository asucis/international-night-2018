import React, { Component } from 'react'
import ReactHyperResponsiveTable from 'react-hyper-responsive-table'
import IdealImage from 'react-ideal-image'

class food extends Component {
    render() {
        const headers = {
            image: '',
            item: 'Food Item',
            type: 'Type',
        }

        const row = [
            {
                image: <IdealImage
                        placeholder="assam milk tea"
                        srcSet={[{ src: 'https://i.imgur.com/n8vzly1.jpg', width: 50 }]}
                        alt="assam milk tea"
                        width={20}
                        height={20}
                        />,
                item: 'Assam Milk Tea',
                type: 'Drink'
            },
            {
                image: <IdealImage
                        placeholder="jasmine tea"
                        srcSet={[{ src: 'https://i.imgur.com/mEmhq3H.jpg', width: 50 }]}
                        alt="jasmine tea"
                        width={20}
                        height={20}
                        />,
                item: 'Jasmine Tea',
                type: 'Drink'
            },
            {
                image: <IdealImage
                        placeholder="mango lassi"
                        srcSet={[{ src: 'https://i.imgur.com/PlOr12z.jpg', width: 50 }]}
                        alt="mango lassi"
                        width={20}
                        height={20}
                        />,
                item: 'Mango Lassi',
                type: 'Drink'
            },
            {
                image: <IdealImage
                        placeholder="fish pakora"
                        srcSet={[{ src: 'https://i.imgur.com/kkc7KjV.jpg', width: 50 }]}
                        alt="fish pakora"
                        width={20}
                        height={20}
                        />,
                item: 'Fish Pakora',
                type: 'Meat'
            },
            {
                image: <IdealImage
                        placeholder="veggie pakora"
                        srcSet={[{ src: 'https://i.imgur.com/Kxk0bP9.jpg', width: 50 }]}
                        alt="veggie pakora"
                        width={20}
                        height={20}
                        />,
                item: 'Veggie Pakora',
                type: 'Ⓥ Vegetarian'
            },
            {
                image: <IdealImage
                        placeholder="egg rice"
                        srcSet={[{ src: 'https://i.imgur.com/NM9X6cA.jpg', width: 50 }]}
                        alt="egg rice"
                        width={20}
                        height={20}
                        />,
                item: 'Egg Fried Rice',
                type: 'Meat / Ⓥ Vegetarian'
            },
            {
                image: <IdealImage
                        placeholder="veggie rice"
                        srcSet={[{ src: 'https://i.imgur.com/3rO4yBM.jpg', width: 50 }]}
                        alt="veggie rice"
                        width={20}
                        height={20}
                        />,
                item: 'Veggie Fried Rice',
                type: 'Ⓥ Vegetarian'
            },
            {
                image: <IdealImage
                        placeholder="mini chimichangas"
                        srcSet={[{ src: 'https://i.imgur.com/93XLBHh.jpg', width: 50 }]}
                        alt="mini chimichangas"
                        width={20}
                        height={20}
                        />,
                item: 'Mini Chimichangas',
                type: 'Meat'
            },
            {
                image: <IdealImage
                        placeholder="hummus and chicken"
                        srcSet={[{ src: 'https://i.imgur.com/sjpE1kU.jpg', width: 50 }]}
                        alt="hummus and chicken"
                        width={20}
                        height={20}
                        />,
                item: 'Hummus & Chicken',
                type: 'Meat'
            },
            {
                image: <IdealImage
                        placeholder="hummus cilantro and jalapeno"
                        srcSet={[{ src: 'https://i.imgur.com/RGBzNJs.jpg', width: 50 }]}
                        alt="hummus cilantro and jalapeno"
                        width={20}
                        height={20}
                        />,
                item: 'Hummus Cilantro & Jalapeno',
                type: 'Ⓥ Vegan'
            },
            {
                image: <IdealImage
                        placeholder="blue corn chips"
                        srcSet={[{ src: 'https://i.imgur.com/ZGJplBf.jpg', width: 50 }]}
                        alt="blue corn chips"
                        width={20}
                        height={20}
                        />,
                item: 'Blue Corn Chips',
                type: 'Ⓥ Vegan'
            },
            {
                image: <IdealImage
                        placeholder="pita bread"
                        srcSet={[{ src: 'https://i.imgur.com/vhZW1UA.jpg', width: 50 }]}
                        alt="pita bread"
                        width={20}
                        height={20}
                        />,
                item: 'Pita Bread',
                type: 'Ⓥ Vegetarian'
            },
            {
                image: <IdealImage
                        placeholder="firecracker roll"
                        srcSet={[{ src: 'https://i.imgur.com/zrlPxuP.jpg', width: 50 }]}
                        alt="firecracker roll"
                        width={20}
                        height={20}
                        />,
                item: 'Firecracker Rolls',
                type: 'Meat'
            },
            {
                image: <IdealImage
                        placeholder="veggie pizza"
                        srcSet={[{ src: 'https://i.imgur.com/hcTQvYm.jpg', width: 50 }]}
                        alt="veggie pizza"
                        width={20}
                        height={20}
                        />,
                item: 'Veggie Pizza',
                type: 'Ⓥ Vegan'
            },
            {
                image: <IdealImage
                        placeholder="veggie skewer"
                        srcSet={[{ src: 'https://image.ibb.co/gUD5cq/in-food-075.jpg', width: 50 }]}
                        alt="veggie skewer"
                        width={20}
                        height={20}
                        />,
                item: 'Veggie Skewer',
                type: 'Ⓥ Vegetarian'
            },
            {
                image: <IdealImage
                        placeholder="tikil gomen"
                        srcSet={[{ src: 'https://i.imgur.com/zCt3UM7.jpg', width: 50 }]}
                        alt="tikil gomen"
                        width={20}
                        height={20}
                        />,
                item: 'Tikil Gomen',
                type: 'Ⓥ Vegetarian'
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
