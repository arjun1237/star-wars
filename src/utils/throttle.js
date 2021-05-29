export const throttle = (cb, wait) => {
    let time = null
    let previous = null

    return function(){
        if (!time) {
            time = Date.now()
            cb.apply(this, arguments)
        } else {
            clearTimeout(previous)
            previous = setTimeout(function() {
                if ((Date.now() - time) >= wait) {
                    cb.apply(this, arguments)
                    time = Date.now()
                }
            }, wait - (Date.now() - time))
        }
    }
}