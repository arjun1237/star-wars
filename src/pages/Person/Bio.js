import React from 'react'
import {v4 as uuid} from 'uuid'

export const Bio = ({person, homeWorld, films}) => {

    const bioDetail = [
        {
            title: "Home World",
            value: homeWorld.length === 0 ? "Not Known" : homeWorld
        },
        {
            title: "Films",
            value: films.join(", ")
        },
        {
            title: "Birth year",
            value: person.birth_year
        },
        {
            title: "Height",
            value: person.height
        },
        {
            title: "Weight",
            value: person.mass
        },
        {
            title: "Hair Color",
            value: person.hair_color
        },
        {
            title: "Skin Color",
            value: person.skin_color
        }
    ]

    return (
        <div>
            <div>
                <h1>Bio</h1>
            </div>
            <table>
                <tbody>
                    {bioDetail.map(detail => 
                        <tr key={uuid()}>
                            <td>{detail.title}</td>
                            <td>{detail.value}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}