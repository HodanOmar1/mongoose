require ('./db/connection');
const { add } = require ('./utils');
const { list } = require ('./utils');
const { update } = require ('./utils');
const { remove } = require ('./utils');

const yargs = require ('yargs');
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput= yargs.argv.actor;
const watchedInput = yargs.argv.watched;


const app = () => {
    if (command === "add") {
        //add function goes here from utils/index.js //
       if (actorInput) {
        add ({title: titleInput, actor: actorInput});
       } else {
           add ({title: titleInput});
       }

    } else if  (command === "list" ) {
        list ();

    }
    else if (command === "update") {
        if (watchedInput) {
        filter ({title: titleInput}), update ({watched:true});
        }
    }
    else if (command === "remove" ) {
        if (actorInput) {
     search ({title: titleInput}), cancel ({title: titleInput});
    }
}
        // list function goes here //
    // } else if ( command === "update" ) {
    
    //     // update function goes here //
    // } else if (command === "delete") {
    //     // delete function goes here //
    // }
};


    app();