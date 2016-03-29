var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TeamSchema = new Schema({
    name : {
        type : String,
        required : true,
    }
});

var EmployeeSchema = new Schema({
    name : {
        first : {
            type : String,
            required : true,
        },
        last : {
            type : String,
            required : true,
        }
    },
    team : {
        type: Schema.Types.ObjectId,
        ref : 'Team'
    },
    image : {
        type : String,
        default : 'images/user.png',
    },
    address : {
        lines : {
            type: [String]
        },
        postal : {
            type : String
        }
    }
});

/*
 * db.createUser(
 {
 user: "devsh",
 pwd: "1740",
 roles: [ "readWrite", "dbAdmin" ]
 }
 )
 *
 * */

var db = mongoose.connection;
var dbUrl = 'mongodb://devsh:1740@127.0.0.1:27017/humanresources';

var Team = mongoose.model('Team', TeamSchema);
//console.log('teamSchema : '+new Team());    //  teamSchema : { _id: 56e00ae9c84db5341d38bbc6 }

db.on('error', function() {
    console.log('there was an error communicating with the database');
});

var options = {
    user: 'devsh',
    pass: '1740',
    auth: {
        authdb: 'admin'
    }
};

mongoose.connect(dbUrl, options, function(err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }

    console.log('connected!');
    Team.create({
        name : 'Product Development'
    },{
        name : 'Dev Ops'
    },{
        name : 'Accounting'
    }, function(error, pd, devops, acct) {
        if (error) {
            console.log(error);
        } else {
            console.dir(pd);
            console.dir(devops);
            console.dir(acct);

            db.close();
            process.exit();
        }
    });


});