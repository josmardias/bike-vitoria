# bike-vitoria
> Fetch Bike Vitoria stations status  

This project gets information from  
`http://www.bikevitoria.com/mapaestacao.aspx`  
and prints stations status on the console

# Screenshot
![Screenshot](/screenshot.png?raw=true "Screenshot")

# Usage:
```
$ ./index.js -s 17
Stations:
	17: SICOOB - Praia de Camburi
		(7 bikes, 5 free slots)

```

# Help
```
$ ./index.js -h

  Usage: index [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --station [id]  Filter by station number
```
