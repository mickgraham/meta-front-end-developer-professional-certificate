# Lab instructions
​
## Introduction:

In this lab, you will work with a basic form and enhance its structure and design using only HTML and CSS. You will follow step-by-step instructions to improve the form layout, align form elements, and apply styling to make it more user-friendly and visually appealing.

### Goal:

The goal of this lab is to enhance and improve the usability of a basic web form using HTML and CSS. By following the provided steps, learners will modify and style the form to make it more user-friendly, accessible, and visually appealing. This will help them gain hands-on experience in applying best practices for web forms, which are essential for user interaction on websites and applications.  

### Objectives:

* Modify form layout.
* Add form field validation. 
* Improve input field design.
* Make the form accessible.
* Evaluate and improve overall form usability. 

### Instructions:

Part 1: Examine the Existing Form Layout Structure:

Step 1: Open the lab files:

* Open the form.html and form.css files, respectively, present under the PROJECT folder.

Step 2: Analyze the default script layout structure given in both files. 

Step 3: Switch back to the form.html file. 

Part 2: Modify the form.html and form.css files:

Step 1: The initial form structure is provided with labels and placeholders for inputs. Modify the form fields to:

* Ensure each field has a descriptive label (e.g., "Full Name", "Email Address").
* Include placeholder text inside the input fields to guide users.
* Modify the input types (e.g., use type="email" for email field).

<label for="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Enter your full name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Enter your email address" required>

<label for="phone">Phone Number:</label>
<input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

<label for="address">Shipping Address:</label>

Step 2: After successfully modifying the form.html file, navigate to File > Save to save changes in the file.  

Step 3: Close the form.html file and open the form.css file. 

Step 4: Style the form elements:

* Add CSS rules to style the form: 
* Style the input fields to make them visually distinct (e.g., padding, border-radius).
* Customize the button to make it stand out (e.g., background color, hover effect).
* Ensure the form elements have adequate spacing and alignment.

/* Style for the input fields */
input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style for the submit button */

Step 5: Make the form responsive:

* Use media queries to adjust the layout on smaller screens. 
* Ensure the form is user-friendly on both desktop and mobile devices by making the input fields and buttons responsive.

/* Media query to make the form responsive for mobile devices */
@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input, button {
    padding: 10px;
  }
}

Step 6: After successfully modifying the form.css file, navigate to File > Save to save changes in the file. 

The modified and completed form.html script should be like this:

Note: Before looking at the given solution, it is highly recommended to try writing the code yourself based on the steps that are provided and concepts you have learned.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Enhancement Lab</title>
    <link rel="stylesheet" href="form.css">
</head>


The modified and completed form.css script should be like this:

Note: Before looking at the given solution, it is highly recommended to try writing the code yourself based on the steps that are provided and concepts you have learned.

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  margin: 0;
}

form {
  background-color: #fff;
  padding: 20px;
}
