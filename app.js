var loki = require("lokijs");

var db = new loki('loki.json');
var children = db.addCollection('children');
children.insert({name:'Sleipnir', legs: 8});
children.insert({name:'Jormungandr', legs: 0});
children.insert({name:'Hel', legs: 2});
// children.get(1); // returns Sleipnir
// children.find( {'name':'Sleipnir'} )
// children.find( { legs: { '$gt' : 2 } } )

var result = children.find({ legs : { $lte: 35 } });


db.saveDatabase(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("saved... it can now be loaded or reloaded with up to date data");
    }
  });


// dumps array with 1 doc (thor) to console
//console.log(result);

//console.log(db.data);
//console.log(children.data());