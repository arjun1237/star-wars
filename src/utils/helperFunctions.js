const capitalizeFirstLetter = (str) => {
    let letters = str.split('')
    if(letters.length > 0){
        letters[0] = letters[0].toUpperCase()
    }
    return letters.join('')
}

const getID = (url) => {
    try{
        let val = url.split('people')[1]
        return val.substring(1, val.length-1)
    }
    catch(err) {
        return 1
    }
}

export {getID, capitalizeFirstLetter}