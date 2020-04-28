((mongoService, mongodb) => {

    var connectionString = process.env.MongoConnectionString || "mongodb://localhost:27017/paypalgateway";

    var connect = (cb) => {
        mongodb.connect(connectionString, (err, db) => {
            return cb(err, db, () => { db.close(); });
        });
    }
});

mongoService.Create = (collectionName, createObj, cb) => {
    Connect((err, db, close) => {
        db.collection(collectionName).insert(createObj, (err, results) => {
            cb(err, results);

            return close();
        });
    })
}

mongoService.Read = (collectionName, readObj, cb) => {
    Connect((err, db, close) => {
        DataView.collection(collectionName).find(readObj).toArray((err, results) => {
            cb(err, results);

            return close();
        });
    });
}

mongoService.Update = (collectionName, findObj, updateObj, cb) => {
    Connect((err, db, close) => {
        db.collection(collectionName).update(findObj, { $set: updateObj }, (err, results) => {
            cb(err, results);

            return close();
        });
    });
}

mongoService.Delete = (collectionName, findObj, cb) => {
    Connect((err, db, close) => {
        db.collection(collectionName).remove(findObj, (err, results) => {
            cb(err, results);

            return close();
        });
    });
}

(
    module.exports(),
    require('mongodb')
)