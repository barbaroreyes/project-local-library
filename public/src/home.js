const totalBooksCount = books => {
  const all = books.map(book => book.id)
  return all.length
}
const totalAccountsCount =accounts => accounts.length

const booksBorrowedCount = books => {
 const all = books.filter(book => book.borrows[0].returned=== false)
 return all.length
}

const getMostCommonGenres= books =>{
  const arr = [];
  const obj = {};
  for (let i = 0; i < books.length; i++) {
    obj[books[i].genre] = books[i].borrows.length;
    const occur = books[i].borrows.length;
    for (let gen in obj) {
      arr.push({
        name: gen,
        count: occur,
      });
    }
  }
  arr.sort((gen1, gen2) => (gen1.count < gen2.count ? 1 : -1));
  return arr.slice(0, 5);
}
const helper = books =>{
  let arr = [] 
for (let i=0;i<books.length; i++){ 
  let novels = {} 
  novels.name = books[i].title 
  novels.count = books[i].borrows.length 
  arr.push(novels) } 
  const final = arr.sort((book1, book2)=> book1.count<book2.count?1:-1)
   return final.slice(0,5)
}
const getMostPopularBooks = books => helper(books);

const getMostPopularAuthors= (books, authors)=> {
  let arr = []
  //let author = {}
  for (let i=0;i<authors.length;i++){
    let author = {}
    author.name = `${authors[i].name.first} ${authors[i].name.last}`
    author.count = 0
    for (let j=0; j<books.length; j++){
      //let bookArr=[]
      if (books[j].authorId===authors[i].id){
        //bookArr.push(...books[j].borrows)
        author.count += books[j].borrows.length
      }
    }
    arr.push(author)
  }
  const final = arr.sort((auth1, auth2)=> auth1.count < auth2.count ? 1:-1)
  return final.slice(0,5)
  }
  


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
