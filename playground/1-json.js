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
//fs.writeFileSync('1-json.json',bookJson) 

//to get data from json file 
// data from redfilesync comes as binary
const databuffer = fs.readFileSync('1-json.js')
//console.log(databuffer)
const stringdata =databuffer.toString()
const parseddata = JSON.parse(stringdata)
console.log(parseddata)