((express, server, bodyParser, fs) => {
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(express.static("pub"));

    server.get('/', (req, res) => {
        fs.readFile("./templates/home.html", (err, results) => {
            res.send(results.toString());
        });
    });

    server.get('/success/:orderID', (req, res) => {
        var orderID = req.params.orderID;
    });

    server.get('/cancel/:orderID', (req, res) => {
        var orderID = req.params.orderID;
    });

    server.get('/orderfetails/:orderID', (req, res) => {
        var orderID = req.params.orderID;
    });

    server.get('/refund/:orderID', (req, res) => {
        var orderID = req.params.orderID;
    });

    server.get('/recurring_success/:planID', (req, res) => {
        var planID = req.params.planID;
    });

    server.get('/recurring_cancel/:planID', (req, res) => {
        var planID = req.params.planID;
    });

    server.get('/recurring_orderdetails/:agreementID', (req, res) => {
        var agreementID = req.params.agreementID;
    });

    server.post('/buysingle', (req, res) => {
        var quantity = req.body.Quantity;
    });

    server.post('/buyrecurring', (req, res) => {
 
    });

    server.listen(8082, "localhost", (err) => {
        console.log(err || "Server Online");
    });
})
(
    require('express'),
    require('express')(),
    require('body-parser'),
    require('fs')
);