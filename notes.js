const fs = require("fs");
const chalk = require("chalk");

// const getNotes = function () {
//   return "This is my notes...";
// };

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNote = notes.filter(function (note) {
  //   return note.title == title;
  // });

  const duplicateNote = notes.filter((note) => note.title == title);

  if (duplicateNote.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse.bold("Success : Note added!"));
  } else {
    console.log(chalk.red.inverse.bold("Note : title already taken"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const deleteNote = (title) => {
  const notes = loadNotes();
  const newNotes = [];
  notes.forEach((element) => {
    if (element.title != title) {
      newNotes.push(element);
    }
  });
  saveNotes(newNotes);
  console.log(chalk.green.inverse.bold("Note removed successfully"));
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const findNote = notes.find((e) => e.title == title);

  if (findNote) {
    console.log(chalk.inverse(title));
    console.log(findNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

module.exports = {
  addNote: addNote,
  deleteNote: deleteNote,
  listNote: listNote,
  readNote: readNote,
};
