const findAccountById = (accounts, id)=> accounts.find(a => a.id === id)

const sortAccountsByLastName = accounts =>  accounts.sort((a,b)=> a.name.last > b.name.last ? 1 : -1)

function numberOfBorrows(account, books) {
  const acId = account.id
  let total = 0;
 for(let book in books){
   const borrowed = books[book].borrows;
   for(let borrow in borrowed){
     if(borrowed[borrow].id === acId){
       total += 1;
     }
   }
 }
 return total;
}
  
// const numberOfBorrows = (account, books)=>  {
//   const all = books.filter(book =>  book.borrows[0].id===account.id)
//   return all.length
// }

const booksInPossession = (account, books, authors) =>  {
 let posees =[];
 for(let i =0 ; i < books.length; i++){
   let book = books[i];
   const {ide,title,genre,borrows} =book
   for (let j = 0 ; j<borrows.length ; j++){
    if (borrows[j]===account.id && borrows[j].returned ===false){
      for(let k =0 ; k<authors.length; k++){
        let author = authors[k]
        if(author.id === book.authorId){
          let tempB = {id,title,gnre,author,borrows}
          posees.push(tempB)
        }
      }
    }
   }
 }
 console.log(posees)
}
console.log(booksInPossession({
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
