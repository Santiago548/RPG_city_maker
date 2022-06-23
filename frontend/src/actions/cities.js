export const getCities = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CITIES"})
        fetch('/cities')
        .then(res => res.json())
        .then(npcs => dispatch({
            type:  "CITIES_LOADED",
            payload: cities
        }))
    }
}

export const addCity = (city) => {
    return (dispatch) => {
        dispatch({ type: "ADDING_CITY" })
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(city) 
        }
        fetch('/cities', configObj)
        .then(res => res.json())
        .then(npc => dispatch({
            type: "CITY_ADDED",
            payload: city
        }))
    }
}

export const deleteCity = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETING_CITY"})
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            } 
        }
        fetch(`/cities/${id}`, configObj)
        .then(() => dispatch({
            type: "CITY_DELETED",
            payload: id
        }))
    }    
}

export const getCityFullCard = (id) => {
    return(dispatch) => {
        dispatch({ type: "FETCH_CITY"})
        fetch(`/CITIES/${id}`)
        .then(res => res.json())
        .then(city => dispatch({
            type:  "CITY_FETCHED",
            payload: city
        }))
    }
}