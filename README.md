# color-scheme-generator
An app that uses the Color API to generate different types of color schemes

Challenges faced:

- I was facing issues in trying to obtain the hex value from the color picker since it kept reverting to black. I discovered that the problem was a scope problem. I declared a variable to contain the color value outside of the fetch function (the function to send the data to the color API) and was struggling to try and get the color value. 
However, after declaring it within the fetch function, I was able to get the hex value. 
