const pf = require('../');

const testOne = () => {
    const payload = {
        ct_email: "ok+ok@testingdomain.com",
        ct_monto: 500,
        ct_order_id: "23206",
        ct_token_service: "4d7125805cc51e3789e20ca679bc392c",
        ct_token_tienda: "5b4b9075934512b49e0d8f114da4836d",
        ct_firma: "04f67063165a184850c8b473cf3a2f96"
    };

    const secret = '739a97427044a8d2b77436bd07f59a76';

    const prefix = 'ct_';

    pf(secret, payload, prefix).then(signature => {
        console.log("Your signature is", signature);
    });
};

const testTwo = () => {
    const payload = {
        x_reference: 3352338301017,
        x_account_id: "1dc400be61304bea7d4c6f043de694fd",
        x_amount: 1000000,
        x_currency: "CLP",
        x_url_callback: "https://turtles.xyz/callback/3352331101017",
        x_url_complete: "https://turtles.xyz/complete/3352331101017",
        x_shop_country: "CL",
        x_shop_name: "Turtles shop",
        x_test: true,
        x_customer_first_name: "I like",
        x_customer_last_name: "Turles",
        x_customer_email: "turtles+test@testingdomain.com",
        x_customer_billing_country: "CL",
        x_customer_billing_city: "Santiago",
        x_customer_billing_address1: "The fake street 123",
        x_customer_billing_address2: "",
        x_customer_billing_zip: "00000",
        x_invoice: "#3352331101017",
        x_description: "The best gateway ever",
        x_url_cancel: "https://turtles.xyz/cancel/3352331101017",
    };

    const secret = 'db527a377b019d89ea90f3f33801042d';

    const prefix = 'x_';

    pf(secret, payload, prefix).then(signature => {
        console.log("Your signature is", signature);
    });
};

testOne();
testTwo();