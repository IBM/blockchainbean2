# Loopback
## Getting started
make sure you have nodeJS installed


## VScode - getting it
creating a empty project

## install loopback via npm
```sh
npm i -g @loopback/cli
```

## create loopback nodeJS project
Assume we are creating say an iotTracking application that needs a REST api.  Run this command
```sh
lb4 application
```

 Which will prompt you for the following:

![lb4 application create screenshot](https://raw.githubusercontent.com/Grant-Steinfeld/beanClientLoopBack/master/docs/resources/lb4-application-create.jpg)

This will create an empty loopback project, with a ping REST endpoint

You should now see in the application root ( e.g. in the iotTrackerClient dir )

![lb4 app root files](https://raw.githubusercontent.com/Grant-Steinfeld/beanClientLoopBack/master/docs/resources/lb4-application-files-gen-tree-1.jpg)

and in the src folder the models and controllers:

![lb4 app src files](https://raw.githubusercontent.com/Grant-Steinfeld/beanClientLoopBack/master/docs/resources/lb4-application-files-tree-2.jpg)

The ping.controller.ts, will appear in the controllers directory.

For detailed information checkout the [loopback lb4 tutorial](https://loopback.io/doc/en/lb4/todo-tutorial.html)

[back to Loopback notes](.//)
