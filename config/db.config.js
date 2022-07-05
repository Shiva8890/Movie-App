var mongoClient = require("mongodb").MongoClient;

var dbUrl = "mongodb://localhost:27017/moviebooking";

var client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect((err, dbInstance) => {
    if (err) {
        console.log("Connection Failed :", err);
    } else {
        console.log("Connection Established");
        let db = dbInstance.db("moviebooking");
    }
}); 