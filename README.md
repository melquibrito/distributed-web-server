# Distributed Web Server - Prototype
This is a prototype of a distributed web server built with [Node js](https://github.com/nodejs/node) alongside Node js Framework [Express](http://expressjs.com/) with the purpose of demonstrating how a web server may be distributed internally.

## Architecture
We have built three distinct web servers distributed locally. __Server Distributer__ as the main server, being the one responsible for handling client requests and feching files that are all distributed through the other two servers, __Server A__ and __Server B__. As a matter of security, __Server A__ and __Server B__ will only allow requests coming from __Server Distributer__ even though they are not necessarily connected to the internet. Servers __A__ and __B__ work as File Servers serving files to __Server Distributer__, which then send them to the clients accordingly.

This prototype project has its architecture entirely based on the one illustrated below.
![illustration](/Distributed-Web-Server-Illustration.png)

## Getting Started
Our initial motivation was to create a PWA mini-player using Spotify data, with a search area for artists or songs and a 30-second 'player'. Think about rendering HTML pages from two distributed servers, and using a distributor server as middleware between client and server.

### Prerequisites
What things you need to install the software and how to install them

```
nodejs >= 10.0
npm or yarn
```

### Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be
```
- Download the project
- npm install or yarn install
- npm run dev or yarn run dev in the distributed server, server A and server B
```

## Deployment
Add additional notes about how to deploy this on a live system

## Contributing
Please read [CONTRIBUTING.md](https://github.com/melquibrito/distributed-server/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors
* **[Melqui Brito](https://github.com/melquibrito)** - _Web Servers_
* **[Dheyson Alves](https://github.com/Dheyson)** - _[PWA Spotify Player](https://github.com/Dheyson/spotify-player)_
* **[Átila Assunção](https://github.com/AtilaAssuncao)** - _Web Servers_

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Hat tip to anyone whose code was used
* Inspiration
* etc
