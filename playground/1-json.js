const fs= require('fs')


const book = {
    title:'Rich Dad',
    author:'Kiyosaki'
}


//Json stringify converts any object/array to JSON string.
const bookJson = JSON.stringify(book)
//console.log(bookJson)

//Json parse converts json data back to normal js object/array
//const parsed = JSON.parse(bookJson)
//console.log(parsed.title)


//this will add my data to json file.
fs.writeFileSync('1-json.json',bookJson) 