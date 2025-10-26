function debounce(fn, delay) {
    let timer;
 
    return function (...args) {
        clearTimeout(timer);
    timer =  setTimeout(() => {
            fn(...args)
        },delay)
    }
    

}

const serach = (query) => {
    console.log(`search for ${query}`)
}

const searchWithDebounce = debounce(serach, 1000)

searchWithDebounce("O");
searchWithDebounce("On");
searchWithDebounce("One");
searchWithDebounce("One ");
searchWithDebounce("One P");
searchWithDebounce("One Pi");
searchWithDebounce("One Pie");
searchWithDebounce("One Piec");
searchWithDebounce("One Piece");