const arr = [1,2,3,4,5,6,7,8,9,10]
const filtered_nums = arr.filter( (nums)=> nums>4) // agr braces nhi lga rhe to
const filtered_nums2 = arr.filter( (nums)=> { // agr braces lga rhe to return use krna pdega functions me pdho isko
     return nums>4
})
// console.log(filtered_nums2)

//using for Each
const newarr = []
arr.forEach( (nums)=>{
    if(nums>4){
        newarr.push(nums)
    }
})
// console.log(newarr)

const books = [
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949,
      edition: "First"
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publish: 1813,
      edition: "Fourth"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 1951,
      edition: "Second"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: 1937,
      edition: "Revised"
    },
    {
      title: "Silent Spring",
      genre: "Environment",
      publish: 1962,
      edition: "First"
    },
    {
      title: "Beloved",
      genre: "Historical Fiction",
      publish: 1987,
      edition: "Second"
    }
  ];

let filter_books = books.filter((bk)=> bk.edition ==='First')
// console.log(filter_books)

filter_books = books.filter( (bk)=>{
    return bk.publish >= 1947
})
// console.log(filter_books)
