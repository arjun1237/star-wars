import axios from 'axios'

const SWABI_URL = "https://swapi.dev/api"

const getSearchResults = async (search) => {
    return axios.get(`${SWABI_URL}/people/?search=${search}`)
    .then(res => res.data.results)
    .catch(err => false)
}

const getPerson = async (id) => {
    return axios.get(`${SWABI_URL}/people/${id}`)
    .then(res => res.data)
    .catch(err => false)
}

const getHomeWorld = async (url) => {
    return axios.get(url)
    .then(res => res.data)
    .catch(err => false)
}

const getFilms = async (urlSet) => {
  let res = []

  for(let i=0; i<urlSet.length; i++){
    res.push(axios.get(urlSet[i]))
  }

  return axios.all(res)
    .then(data => data.map(el => el.data.title))
    .catch(err => false)
}

export {getSearchResults, getPerson, getHomeWorld, getFilms}