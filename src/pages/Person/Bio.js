import React, { useEffect, useState } from 'react'
import { getFilms, getHomeWorld } from '../../utils/api-calls';

export const Bio = ({person}) => {

	let [homeWorld, setHomeWorld] = useState("")
	let [films, setFilms] = useState([])

	useEffect(() => {
		
		(async function(){
			let home = await getHomeWorld(person.homeworld)
			if(home){
				setHomeWorld(home.name)
			}

			let films = await getFilms(person.films)
			console.log(films)
			if(films){
				setFilms(films)
			}
		})()

	}, [homeWorld, films])


    return (
        <div>
            <div>
                <h1>Bio</h1>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Home World</td>
                        <td>{homeWorld.length === 0 ? "Not Known" : homeWorld}</td>
                    </tr>
                    <tr>
                        <td>Films</td>
                        <td>{films.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Birth year</td>
                        <td>{person.birth_year}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{person.height}</td>
                    </tr>
                    <tr>
                        <td>Mass</td>
                        <td>{person.mass}</td>
                    </tr>
                    <tr>
                        <td>Hair Color</td>
                        <td>{person.hair_color}</td>
                    </tr>
                    <tr>
                        <td>Skin Color</td>
                        <td>{person.skin_color}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
