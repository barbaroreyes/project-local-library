const findAccountById = (accounts, id)=> accounts.find(acount => acount.id === id)

const sortAccountsByLastName = accounts =>  accounts.sort((last1,last2)=> last1.name.last > last2.name.last ? 1 : -1)


const numberOfBorrows = (account, books) => {
  let result = books.reduce((borrowCount, book) => {
    book.borrows.filter(bookID => {if(bookID.id === account.id) borrowCount+= 1 })
    return borrowCount
  }, 0)
  return result
}  
const booksInPossession = (account, books, authors) =>  {
 let posees =[];
 for(let i =0 ; i < books.length; i++){
   let book = books[i];
   const {id,title,genre,borrows} =book
   for (let j = 0 ; j<borrows.length ; j++){
    if (borrows[j].id===account.id && borrows[j].returned ===false){
      for(let k =0 ; k<authors.length; k++){
        let author = authors[k]
        if(author.id === book.authorId){
          let tempB = {id,title,genre,author,borrows}
          posees.push(tempB)
        }
      }
    }
   }
 }
 return posees
}
// const booksInPossession = (account, books, authors)=> {
//    const info = books.filter(book => book.borrows[0].id=== account.id )
//    return info
//   }

// const booksInPossession = (account, books, authors)=> {
// const info = books.filter(book => book.borrows[0].id === account.id )
// return info
// }

console.log(booksInPossession(   {
  id: "5f446f2ed46724f41c9fc431",
  picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
  age: 35,
  name: {
    first: "Ferrell",
    last: "Morris",
  },
  company: "ECOLIGHT",
  email: "ferrell.morris@ecolight.com",
  registered: "Thursday, February 8, 2018 1:16 PM",
},books,authors))

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
