// JavaScript source code
const Datum = require('datum-sdk');
 

//your personal identity/keystore exported after creation
var keystore1 = '{"encSeed":{"encStr":"Lf/5iHcYlh2b5agV1IS9OmFoe+Xo309osSx6kSbNgyqP1ASjuhTCXaWU9f6iY/Z1QLencWOvMMutrcwz/Va9nvOpYQwadWzD5IEGp1sIY1UHC2dWixDmyK8nVqjtRq0v39Y252Dld2pVIj6zjyS/K3LSJB7hrPyYJHKul9tF7fDRWUm4X+Bujg==","nonce":"puraFI3vhpm0IoXeQKMMTf1xhDqVl7us"},"encHdRootPriv":{"encStr":"0u+XaSiirpKb5fkrphgyD1ErZAfIgb93o0Rr+JBHD5QtYnYJ5hGRueU/iyb5mNBSdZb+GCPqCgIqeRBKeYUHzQJDwPDDxx/qZtyW11cSVkM3WqLeYuxw5JwmGgGds+B+Xd5dZoXSG+8jtFtS390a3baaZlZ6/lxKJ7vMzBrEuw==","nonce":"MEh/7HIWGvfx3O0j/ko2JxxEvS4PagEs"},"addresses":["8dc568c865c83648453801c76bb3938d185a47d7"],"encPrivKeys":{"8dc568c865c83648453801c76bb3938d185a47d7":{"key":"3K0VMQWQbQ7h9RSivLaZRAFNSQmrhQrfc/hkWN+ZqZ+5OByA+H26uhF7YcgaU267","nonce":"BdJSnKAIdtLcDq+p/hic6m2wNBTpg9Ci"}},"hdPathString":"m/44\'/60\'/0\'/0","salt":"NGGrYKzoUoU7ttayJducKodwqSyVoRTI6Et8isYPBnc=","hdIndex":1,"version":3}';
var publicKeyToAdd = ["a1ed299db79a79fbdec883e5324afdf982094f24ea1c195d51650720576fb719"]

//sample data to store
var data = {
    "Position": {
        "Longitude": 9.93368,
        "Latitude": 53.55608
    }
}
var dateFormat = require('dateformat');
var now = new Date();
var now1 = new Date();
// Basic usage
now1 = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
console.log(JSON.stringify(now1));
var timestamp = JSON.stringify(now1);
//create new datum instance
datum = new Datum();
datum.initialize({
    identity: keystore1,
    defaultPublicKeys:  publicKeyToAdd
});

//set password for keystore during session
datum.identity.storePassword("YourPassword");

//set data
datum.set(timestamp).then(hash => {
    console.log(hash);//hash
}).catch(error => {
    console.log(error);
})


//store data with key name
datum.set(timestamp, "PIN_SEEDS")
.then(hash => {
    //returns the id of the stored data
    console.log(hash);
})
.catch(error => {
    console.log(error);
})
