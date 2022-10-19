# color-scheme-generator
An app that uses the Color API to generate different types of color schemes


Key techniques learnt:

- This project was a very good practice of extracting data from an API using the fetch API adn .then and extracting the necessary data needed to display the relevant information. Once again, it was also a good practice using .map() and .forEach when refactoring

Challenges faced:

- I was facing issues in trying to obtain the hex value from the color picker since it kept reverting to black. I discovered that the problem was a scope problem. I declared a variable to contain the color value outside of the fetch function (the function to send the data to the color API) and was struggling to try and get the color value. 
However, after declaring it within the fetch function, I was able to get the hex value. 

- Refactoring; I faced a significant obstacle where I wasn't able to reference the index of the hex colors from the API and use the data to set the background color and text content of the color strips as I struggled with the flow of the forEach and map function. However, with the help of a friend, I was shown that the missing link was referencing the index of the color data by using a square bracket. 

Additional feature added:

- Added the ability to be able to copy the hex colour to clipboard and copy the rgb values to copy clipboard after clicking on the colour itself. 

Future implementation: 

- Enable a tooltip to show user that the colour is successfully copied to clipboard. 