const totalBooksCount = books => books.length

const totalAccountsCount =accounts => accounts.length

const booksBorrowedCount = books => {
 const all = books.filter(a => a.borrows[0].returned=== false)
 return all.length
}

function getMostCommonGenres(books) {
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
  arr.sort((a, b) => (a.count < b.count ? 1 : -1));
  return arr.slice(0, 5);
}

const getMostPopularBooks = books => {}
// console.log(getMostPopularBooks(books))
function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
