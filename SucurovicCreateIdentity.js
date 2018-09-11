



var fs = require('fs');

const Datum = require('datum-sdk');
console.log("proba");

identity = Datum.createIdentity("YourPassword").then(identity => {
    var temp1 = JSON.stringify(identity);
fs.appendFile('mynewfile3.txt', temp1, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
})