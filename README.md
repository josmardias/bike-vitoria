# bike-vitoria
> Fetch Bike Vitoria stations status  

This project gets information from  
`http://www.bikevitoria.com/mapaestacao.aspx`  
and prints stations status on the console

# Screenshot
![Screenshot](/screenshot.png?raw=true "Screenshot")

# Install
1. Install Node and NPM (consider using [NVM](https://github.com/creationix/nvm) for the task)
  - I'm using Node v6.3.0 with NPM 3.10.3 but older versions should work
2. Clone this repo
  - `git clone git@github.com:josmardias/bike-vitoria.git`
3. Install dependencies
  - `cd bike-vitoria`
  - `npm install --production`
4. Now you can call `./index.js`

# Help
```
$ ./index.js -h

  Usage: index [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --station [id]  List station(s) (comma separated)
    -A, --all           List all stations
```
