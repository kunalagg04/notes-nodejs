//const fs= require('fs')
//fs.writeFileSync('notes.txt','HI') 
//fs.appendFileSync('notes.txt','Appended message')

//const name = require('./utils')
//const sum = require('./utils')
//func = sum(7,-9)
//console.log(func)

//const validator = require('validator')
//console.log(validator.isEmail('kunalagg04@gmail.com'))

//const chalk = require('chalk');
//console.log(chalk.green('Successs'));

//const getNotes = require('./notes')
//const notes = getNotes()
//console.log(notes)



const yargs = require('yargs')

//customizing yargs

 yargs.command({
    command:'add',
    describe:'Add a new note',
    builder : {
        title : {
            describe:"note-title",
            demandOption: true,
            type:'string'

        },
        body:{
            describe:"note body"
        }
    },
    handler: function(){
        console.log("Title" + argv.title)
    }
})

yargs.command({
    command:'remove',
    describe:'removing note',
    handler: function(){
        console.log("adding")
    }
})

yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler: function(){
        console.log("adding")
    }
})

yargs.command({
    command:'read',
    describe:'Reading a  note',
    handler: function(){
        console.log("adding")
    }
}) 
//yargs.parse()
//console.log(process.argv)
console.log(yargs.argv)