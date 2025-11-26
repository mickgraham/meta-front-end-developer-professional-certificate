# Lab instructions
​
## Task

For this assessment, you will be building a calculator in React. You are provided with code snippets, and your task is to use these, plus any of your code to complete a calculator app that can perform the four basic mathematical operations: addition, subtraction, multiplication, and division.

## Before you begin

If you execute the npm start command before changing any code in this task, you'll get the notification in the code lab's terminal that reads "webpack compiled successfully".

You are now ready to start working on your app. Follow the comments in the code! They are your instructions on what you need to do to make this app work. For example, once you've added the imports, you should be able to serve the app. If still needs work, but at least you'll have the app showing in the browser.

## Steps

### Step 1.

In this assessment, your goal is to build a simple calculator app.

The app should be fully functional. However, since you do not have the App.css file in the root folder, you need to add it, with the following code:

* {
    font-family: sans-serif;
  }
  input,
  button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
  }
  input {

You'll also need to import the App.css file into App.js.

### Step 2. Here is the app's starting code:

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

* Addition (plus): This function is already provided. It adds the value from the input field to the current result. 
* Subtraction (minus): Implement this function to subtract the input value from the result.  
* Multiplication (times): Implement this function to multiply the result by the input value.  
* Division (divide): Implement this function to divide the result by the input value. Make sure to handle division by zero by showing an alert.  
* Reset Input (resetInput): This function will reset the input field when the user clicks the reset button.  
* Reset Result (resetResult): This function will reset the displayed result to 0.  

### Step 3.

* At the top of the lab environment, locate the Terminal menu. Click on it to open a dropdown, then select New Terminal.Use the npm start command to start the development server.
* If you encounter errors like File not found or Unexpected token, in the terminal, stop the server with Ctrl + C and restart it using npm start.
* You can now view the App in your lab browser. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.
* When your lab browser has launched, enter: http://localhost:3000 in the address bar to see the output.a fully working simple calculator app.  