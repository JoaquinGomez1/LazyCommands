# LazyCommands

First of all, thank you for taking interest in my small and very simple project.
The purpose of this app is very straight forward: to be able to run a couple windows commands in your machine whenever you press a button from your phone.

## Installation

```bash
$ git clone https://github.com/JoaquinGomez1/LazyCommands
$ cd LazyCommands
$ npm install && cd client && npm install
```

At this point you should go into the client/config.js file and change the default ipv4 value for your machine's ipv4 address

If you are not sure what your ipv4 address is you cant type the following command in your terminal

```bash
$ ipconfig
```

And copy the value on the ipv4 value row.

After you've completed these steps you need to run these commands from the root directory of this project

```bash
$ cd client && npm run build
$ cd .. & node createService
```

After doing these couple steps you should be good to go!
