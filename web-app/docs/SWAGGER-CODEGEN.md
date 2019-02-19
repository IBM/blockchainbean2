# Loopback
## Using swagger to generate code
If you have a REST API already, it's possible you have
a swagger.json file.  If so it's relatively easy to download the file and generate your models and controllers.

### download the swagger.json
For example suppose I have a swagger test form.  In Firefox or Chrome, right mouse click on the screen and `inspect element` this sould bring up your browsers debug panel.  Simply go to the network tab, and reload your page.
You should see an http/s call to swagger.json

![FindingSwagger](https://raw.githubusercontent.com/Grant-Steinfeld/beanClientLoopBack/master/docs/resources/finding-swagger-json.jpg)

Copy the swagger.json link to your clipboard.

### use loopback command line tooling to generate code
Make sure you have [an existing loopback application setup ](LOOPBACK-GETTING-STARTED.md)
first before generating code.

using the swagger.json URL generate code by using the following command in a terminal


```sh
lb4 openapi --url http://<<ipaddress/hostname>>/swagger.json --validate true
```

After successfully running this command you should have stub code in your src/controller directory and in your src/models directory

```sh
npm start
```

By going to

[The localhost swagger REST explorer  ](http://127.0.0.1:3000/explorer/#/)

you will be able to see the endpoints and test your endpoints  ... they will all throw a not implemented exception until you wire up your controllers to something meaningful.


## Troubleshooting and resources


 Checkout the [loopback documentation about lb4 OpenAPI code generation](https://loopback.io/doc/en/lb4/OpenAPI-generator.html)

[back to Loopback notes](.//)
