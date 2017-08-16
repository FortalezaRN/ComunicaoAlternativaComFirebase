
module.exports = function() {
    firebase.initializeApp({
        
    });
    var db = firebase.database();
    retrive();
    function retrive(){
        return firebase.database().ref('/Users/Terapeuta').once('value').then(function(snapshot) {
            var username = snapshot.val();
            console.log("db", username);
        });
    }

    return db;
}