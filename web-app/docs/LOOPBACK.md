## install the Loopback command line tool
```s
npm i -g @loopback/cli
```

## how to add a REST enpoint with loopback version 4
In loopback the REST crud enpoints for example POST/GET/DELETE etc
are in the controller and the type of data that is used by the controller is
in the model.

## Code Generation

### using existing swagger

What is swagger? Simply put it's the definition
of your API in a language agnostic way, usally represented in JSON or YAML. OpenAPI is

If you have an existing swagger.json url you can use the lb4 tool

```sh
lb4 openapi --url http://<<ipaddress/hostname>>/swagger.json --validate true
```

[details on using loopback OpenAPI code generation](./docs/SWAGGER-CODEGEN.md)

### using the lb4 command line tool
we assume you are making a Foo Controller and a Foo Model ( with properties `id` and `descripton`)

at the terminal make sure you are at the root of the project
then typer `lb4 model`
this will prompt you with

```bash
 ? Model class name: Foo

 ? Please select the model base class (Use arrow keys)
 ```

Choose

`> model (A business domain object)`

Now it will ask you for free-form properties, reply N(No)

` ? Allow additional (free-form) properties? N`

It will now say

`Let's add a property to Foo`

`Enter an empty property name when done`

` ? Enter the property name: id`

using the arrow keys select the type `number`

it will ask you if this is the ID of the Foo Model, say yes.

` ? Is id the ID property? y`

it will ask you is it required?  say yes

` ? Is it required?: y`

it will ask you for a default value, leave this blank

` ? Default value [leave blank for none]:`

Now it will say

`Let's add another property to Foo`

`Enter an empty property name when done`

` ? Enter the property name: description`

Continue by selecting `string`  required  `N`
and default value blank

Hit return twice to finish the process.

You should see a success message

`Model Foo was created in src/models/

you should now see the following TypeScript code in src/models/foo.models.ts

``` TypeScript
import {Model, model, property} from '@loopback/repository';

@model()
export class Foo extends Model {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Foo>) {
    super(data);
  }
}
```

### Great, now lets add a controller

type `lb4 controller`

it will prompt you for the controller name
which will be Foo

` ? Controller class nae: Foo`

This will create a blank controller class, which you
can wire up to your models ( hopefully this will change to generate all REST crud verbs in the future )



### Additional Resources

https://loopback.io/doc/en/lb4/todo-tutorial.html


[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
