// const { title } = require("process");
// const validator = require('validator');
const yargs = require("yargs");

const notes = require("./notes.js");

// const command = process.argv[2];

// const command = process.argv[3];   // node app.js add --title="This is my title"

//Costomize yargs version
// yargs.version('1.1.0');

//create add command
yargs.command({
  command: "add",
  describe: "add a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  }, // node app.js add --title="buy" --body="These are the things to buy"
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  }, // node app.js remove --title="buy"
  handler(argv) {
    notes.deleteNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "list the notes!",
  handler() {
    notes.listNote();
  }, // node app.js list
});

//create read command
yargs.command({
  command: "read",
  describe: "read a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  }, // node app.js read --title="buy"
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse(); // console.log(yargs.argv);




// try{
//     console.log(validator.isEmail('sagarshukla840@gmail.com'));
//     if(command == "add"){  // (node app.js add)
//         console.log('The command passed as add');
//     }else if(command  == "remove"){  //(node app.js remove)
//         console.log('The command passed as remove');
//     }
// }catch{
//     console.log('The control get into the error');
//     console.log(chalk.red('The control gone into error'));
// }
