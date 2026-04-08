//for each dont return value
// filter
//filter also cobntain call back function butn with return val
const lang = ["urdu","english","isl"]
 const anynum = lang.forEach( function (val){
    console.log(val)
    return val
})
console.log(anynum) // wont return a val
//filter is a call back that return val
const num = [1,2,3,4,5,6,7,8,9,10]
const printnum = num.filter( (val) => {
    let greaterval = val>4
    return greaterval
})
console.log(printnum)
//example
const books = [
  {
    bookName: "To Kill a Mockingbird",
    genre: "Fiction",
    edition: "1st",
    publishDate: "1960"
  },
  {
    bookName: "1984",
    genre: "Dystopian",
    edition: "1st",
    publishDate: "1949"
  },
  {
    bookName: "The Great Gatsby",
    genre: "Classic",
    edition: "1st",
    publishDate: "1925"
  },
  {
    bookName: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    edition: "1st",
    publishDate: "1997"
  },
  {
    bookName: "The Hobbit",
    genre: "Fantasy",
    edition: "2nd",
    publishDate: "1937"
  },
  {
    bookName: "Pride and Prejudice",
    genre: "Romance",
    edition: "3rd",
    publishDate: "1813"
  },
  {
    bookName: "The Catcher in the Rye",
    genre: "Fiction",
    edition: "1st",
    publishDate: "1951"
  },
  {
    bookName: "The Alchemist",
    genre: "Adventure",
    edition: "2nd",
    publishDate: "1988"
  },
  {
    bookName: "The Da Vinci Code",
    genre: "Mystery",
    edition: "1st",
    publishDate: "2003"
  },
  {
    bookName: "Atomic Habits",
    genre: "Self-help",
    edition: "1st",
    publishDate: "2018"
  }
];

const firstEditionBooks = books.filter((bk) => bk.edition === "1st")
console.log(firstEditionBooks)

const publishAfter2ooo = books.filter((bk) => bk.publishDate > "2000")
console.log(publishAfter2ooo )

const req = books.filter((bk) => bk.publishDate > "2000" && bk.genre === "Self-help")
console.log(req )
// will return undefined
console.log(" he val used with for each return undefined")
const req2 = books.forEach((bk) => bk.publishDate > "2000" && bk.genre === "Self-help")
console.log(req2 )