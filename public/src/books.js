 const findAuthorById =(authors, id) => authors.find(book => book.id ===id)

 const  findBookById = (books, id) => books.find(book => book.id === id)
 
 const partitionBooksByBorrowedStatus = books => {
 const done= books.filter(book => book.borrows[0].returned ===true)
 const nYet = books.filter(book => book.borrows[0].returned ===false)
 return [nYet,done]
}

const getBorrowersForBook = (book, accounts) =>{
  let borrw = [];
  accounts.forEach( account=> {
  book.borrows.forEach(traking =>{
  if (traking.id ===account.id){
    let obj = {...account};
    obj.returned = traking.returned
    borrw.push(obj)
  }
})
  })
  return borrw.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
