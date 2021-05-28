import axios from 'axios'

const SWABI_URL = "https://swapi.dev/api"

const getSearchResults = async (search) => {
    return axios.get(`${SWABI_URL}/people/?search=${search}`)
    .then(function (response) {
      // handle success
      return response.data.results
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

const getPerson = async (id) => {
    return axios.get(`${SWABI_URL}/people/${id}`)
    .then(function (response) {
      // handle success
      return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}


export {getSearchResults, getPerson}