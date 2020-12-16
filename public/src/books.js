const findAuthorById =(authors, id) => authors.find(a => a.id ===id)
  

const  findBookById = (books, id) => books.find(a => a.id === id)
 

function partitionBooksByBorrowedStatus(books) {
  const all  = books.filter(b => b.borrows[0].returned)
  
  return [all]
}
// console.log(partitionBooksByBorrowedStatus(books))

function getBorrowersForBook(book, accounts) {
  let borrw = [];
  // console.log(book)
  // console.log(accounts)
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
