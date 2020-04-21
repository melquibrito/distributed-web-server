# Distributed Web Server - Prototype
This is a prototype of a distributed web server built with [Node js](https://github.com/nodejs/node) alongside Node js Framework [Express](http://expressjs.com/) with the purpose of demonstrating how a web server may be distributed internally.

## Architecture
We have built three distinct web servers distributed locally. __Server Distributer__ as the main server, being the one responsible for handling client requests and feching files that are all hosted on the other two servers, __Server A__ and __Server B__. As a matter of security, __Server A__ and __Server B__ will only allow requests coming from __Server Distributer__ even though they are not necessarily connected to the internet. Servers __A__ and __B__ work as File Servers serving files to __Server Distributer__, which then send them to the clients accordingly.

This prototype project has its architecture entirely based on the one illustrated below.
![illustration](assets/img/web-server-illustration.png)

### File Structure
* Distributer Server
```
       |--- conf 
src ---|--- controller 
       |--- routes 
```
* Internal Servers _(host servers A and B)_
```
       |--- conf
src ---|
       |--- public
```
In Distributer Server conf.js file in conf folder you will find the following configuration:
* Host: Distributer HOST;
* Port: Distributer PORT;
* Servers: Object with all the __Internal Servers__ available to fetch files from.

In Internal Servers conf.js files you will find the following configuration:
* Host: Internal Server HOST;
* Port: Internal Server PORT;
* Distributer: Domain to allow requests from (__Distributer Server__ domain).

> Files to be provided go in public folder of __Internal Servers__.

## Hosted Applications
These below are the relative paths of each of the hosted applications we have included in our project.
* ```/spotify/home```: PWA mini-player using Spotify data, with a search area for artists or songs and a 30-second audio player. This application is being hosted on __Internal Server B__ and serves as an example on how widely distrubuted a distributed server can be, conceptually speaking. It brings up data from distributed web servers on the web while being hosted on an internal server that is part of another distributed web server. See more details about this project in particular [here](https://github.com/Dheyson/spotify-player);

![spotify](assets/img/spotify-player-screenshot.png)

* ```/aria/home```: Html template downloaded from [onepagelove](https://onepagelove.com/aria). Hosted on __Internal Server A__;
* ```/dazzle/home```: Html template donwloaded from [onepagelove](https://onepagelove.com/dazzle). Hosted on __Internal Server B__.

## Getting Started
### Prerequisites
* [nodejs](https://github.com/nodejs/node) >= 10.0
* [npm](https://github.com/npm/cli) >= 6.10.0  __OR__  [yarn@latest](https://github.com/yarnpkg/yarn)

### Installing
Follow the steps below
1. Download the project or clone it;
2. Run ```npm install``` or ```yarn install``` on terminal on each server root directory;
3. Run ```npm run dev``` or ```yarn run dev``` on terminal on each server root directory.

## Contributing
Please read [CONTRIBUTING.md](https://github.com/melquibrito/distributed-web-server/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors
* **[Melqui Brito](https://github.com/melquibrito)**
* **[Dheyson Alves](https://github.com/Dheyson)**
* **[Átila Assunção](https://github.com/AtilaAssuncao)**

See also the list of [contributors](https://github.com/melquibrito/distributed-web-server/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
