# Sheeter

> This project is for study purposes only!

Sheeter is an Excel like application, made with Vue 3, Vite and Typescript

## Features

- Cells text positioning
	+ Cell selection
	+ Multiple cells selection
- Cells functions like *sumif* for example
- Export as csv
- Import as csv

## List of supported commands

> The commando will only be executed if you use an ">" when calling the command, ex: sumif(A1, A5, > 5, A9)

> The commands are in portuguese

- somase: Makes a sum with given cells values that attend some condition and output it to another cell

	Ex: 
	
	\> somase(A1, A8, > 100, B1)
	
	The command above will sum values of cells A1 to A8 that are above 100, then the result will be showed in cell B1

## How to run

### Requirements

- Nodejs & NPM
- Git
- System that supports unix like paths("/")

### Steps

First of all, you need to download the code, it will be downloaded to the directory where you executed the command below

``` bash
git clone https://github.com/LucasTody3535/sheeter.git
```

Now you move inside the the downloaded code

``` bash
cd sheeter
```

Install the dependencies

``` bash
npm i
```

Run in development mode

``` bash
npm run dev
```

The url to access it will be showed in the terminal, copy/paste the url in the search bar of a browser and click enter, now test it :D

## Screenshots

![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic1.png)
![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic2.png)
![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic3.png)
![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic4.png)
![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic5.png)
![](https://raw.githubusercontent.com/LucasTody3535/projects-screenshots/main/sheeter/pic6.png)