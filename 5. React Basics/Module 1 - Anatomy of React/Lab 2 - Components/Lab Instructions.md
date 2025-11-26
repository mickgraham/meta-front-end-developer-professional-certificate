# Lab instructions

## Task

You've learned that you can export a component either as a default export or as a named export. You've also learned how to import such components. 

Let's demonstrate this with a basic example. In this exercise, you'll practice saving a component to its own file and importing it into its parent component so that it can be rendered on the screen.

## Steps

### Step 1

Move the Heading function from App.js to a separate component file, named “Heading.js”. 

Create a new file:     

* Right-click on the src folder in your project. 
* Select the New File option. 
* Name the file  Heading.js  and press ENTER.  

Move the Heading function: 

* Copy the Heading function code from App.js. 
* Paste it into the new Heading.js file.  

### Step 2

* Import the Heading component into the App component.
* And export the Heading.js file to use in App component.

### Step 3

* Remove the sentence that reads: This is the starting code for “Your first component” ungraded lab - so that only the Heading JSX element remains in the return statement of the App component. 

### Step 4

* At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.Use the npm start command to start the development server.
* If you encounter errors like File not found or Unexpected token, in the terminal, stop the server with Ctrl + C and restart it using npm start.
* You can now view the App in your lab browser. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
* When your lab browser has launched, enter: http://localhost:3000 in the address bar to see the output. 
