var database = require('./database');
var tableName = 'projects';


function showAllProjects(req, res) {
    console.log("Getting project data");
    database.getProjects(tableName, function(err, result) {
        if(err) {
            console.log("Error: " + err);
        }
        else {
            res.json({Projects:result});
        }
    });
}

exports.showAllProjects = showAllProjects;
//module.exports = router;