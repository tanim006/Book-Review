const getStoredBook = () =>{
    const storedBooks = localStorage.getItem('save-book')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return[]
}

const savedBook = id => {
    const storedBook = getStoredBook()
    const exists = storedBook.find(bookId => bookId == id)
    if(!exists){
        storedBook.push(id)
        localStorage.setItem('save-book',JSON.stringify(storedBook))

    }

}
export {getStoredBook,savedBook}