import React, { useEffect, useState } from 'react'
import { getFilms, getHomeWorld } from '../../utils/api-calls';
import {v4 as uuid} from 'uuid'

export const Bio = ({person}) => {

	let [homeWorld, setHomeWorld] = useState("")
	let [films, setFilms] = useState([])

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

	useEffect(() => {
		
		(async function(){
			let home = await getHomeWorld(person.homeworld)
			if(home){
				setHomeWorld(home.name)
			}

			let films = await getFilms(person.films)
			if(films){
				setFilms(films)
			}
		})()

	}, [])


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