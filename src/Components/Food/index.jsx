import React, { Component } from 'react'

const food = () => (
    <div>
        <h2>Food</h2>
        <table class="table">
            <thead><tr><th>TIME</th><th>WAVE1</th><th>TIME</th><th>WAVE2</th></tr></thead>
            <tr><td>7:30 PM - 8:30 PM</td><td><span class="badge badge-info">Africa</span>
                <br/>Key Sega Wat, Tikil Gomen, Injera </td><td>8:30 PM - 9:30 PM</td><td><span class="badge badge-info">East Asia</span>
                    <br/>Fried Veggie Dumpling, Spicy Chicken
                                <br/>Sesame Balls, Shrimp Balls,
                                <br/>Boba Milk Tea</td></tr>
                        <tr><td>7:30 PM - 8:30 PM</td><td><span class="badge badge-info">Europe</span>
                            <br/>Pistachio Mozarella,Firecracker Rolls
                                <br/>Toasted Ravioli, Mista, Pasta Valducci
                                <br/>Thee Cheese Mac &amp; Cheese and
                                <br/>Garlic Cheese Crostini</td><td>8:30 PM - 9:30 PM</td><td><span class="badge badge-info">South East Asia</span>
                                            <br/>Lemongrass Chicken, Shrimp Fried Rice
                                <br/>Egg Fried Rice, Sauteed Vegetables
                                <br/>Thai Tea, Spring Rolls (Meat/Veggie) </td></tr>
                                                <tr><td>7:30 PM - 8:30 PM</td><td><span class="badge badge-info">Latin America</span>
                                                    <br/>Corn Tortilla Chips with Hot Sauce
                                <br/>Chicken, Rice, Beans
                                </td><td>8:30 PM - 9:30 PM</td><td><span class="badge badge-info">South Asia</span>
                                                            <br/>Chicken Pakora, Veggie Pakora</td></tr>
                                                        <tr><td>7:30 PM - 8:30 PM</td><td><span class="badge badge-info">Middle East</span>
                                                            <br/>Koobideh, Chicken Shish
                                <br/>Shirazi Salad, Persian Baklava</td><td></td><td></td></tr>
                            </table>
    </div>
)

export default food;