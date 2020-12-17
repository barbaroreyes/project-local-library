const findAccountById = (accounts, id)=> accounts.find(acount => acount.id === id);

const sortAccountsByLastName = accounts => accounts.sort((last1,last2)=> last1.name.last > last2.name.last ? 1 : -1);


const numberOfBorrows = (account, books) => {
  let result = books.reduce((borrowCount, book) => {
    book.borrows.filter(bookID => {if(bookID.id === account.id) borrowCount+= 1 });
    return borrowCount;
  }, 0)
  return result;
}  
const booksInPossession = (account, books, authors) => {
  let booksArray = [];
  books.forEach(book => {
    const {id, title, genre, borrows} = book;
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id && borrow.returned === false){
        authors.forEach(author => {
          if(author.id === book.authorId){
            let tempArray = {id, title, genre, author, borrows};
            booksArray.push(tempArray);
          }
        })
      }
    })
  })
  return booksArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
