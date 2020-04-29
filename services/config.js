((configRepo) => {
    configRepo.SetConfig = (paypal) => {

        var config = {
            host: "api.sandbox.paypal.com",
            port: "",
          
        };

        paypal.configure(config);
    };
});
(
    module.exports
)