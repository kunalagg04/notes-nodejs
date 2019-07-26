const fs = require('fs')
const chalk = require('chalk')


/* Adding a note */
const addNote = function(title , body){

    const notes = loadNotes()
    const duplicateNote = notes.filter((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
        console.log(duplicateNote);
    }

}

 /* Removing a note */
 const removeNote = (title) => {

     const notes = loadNotes()
     const notesToKeep = notes.filter(function(note){
         return note.title !== title
     })

     if(notes.length > notesToKeep.length){
         console.log(chalk.green("Note was removed"))
     }
     else{
         console.log(chalk.red("Note not found"))
     }
     saveNotes(notesToKeep)
     console.l

}

/* Helper Functions */

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote : removeNote
}
