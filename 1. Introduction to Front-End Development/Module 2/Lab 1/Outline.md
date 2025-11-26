# Instructions

## Introduction:

In this lab, you will create a simple HTML document and then view it in a web browser using a local server.

## Goal:

The goal of this lab is to introduce you to the basics of creating a valid HTML document and understanding its structure. By the end of this lab, you will have created a simple HTML page that displays text and learned how to preview it in a web browser using a local server. This lab provides foundational skills in HTML, which are essential for any web development journey.

## Objectives:

* Understand HTML Document Structure.
* Create and Structure an HTML Document.
* Preview the HTML Document in the Browser.

## Instructions:

### Part 1: Creating the HTML Document:

* Open the index.html file present under the PROJECT folder. This is where you will write your HTML code.
* Start the document: Begin by specifying the document type, ensuring the browser recognizes this file as an HTML5 document.
* Add the html element on the next line. This will be the root element of the document.
* Add the head element inside the html element. The head element contains data about the HTML document that is not displayed in the web browser.
* Add the title element inside the head element.
* Add the text 'My First HTML Document' inside the title element. The content of the title element will be displayed in the web browser tab.
* Add the body element. The body element contains all displayable content of the webpage.  Add the text 'I successfully created my first document' inside the body element.
* After successfully modifying the index.html file, navigate to File > Save to save changes in the file.

### Part 2: Viewing Your HTML Document in the Browser:

* Start the live server:
  * At the bottom-right of the editor, click on the Go Live button.
  * Once the server is up and running, you will see an exposed port number (e.g., 5500). This means your server is now live.
* Open the browser preview: At the middle-left of the editor, click on the Browser Preview button to open a new Browser Preview tab.
* Enter the URL in the browser: In the browser, enter the following URL format (replacing <exposed port> with the actual port number shown in the editor): http://localhost:<exposed port>
* Check that the web page displays: Once the URL is entered correctly, the webpage will load, and you should see the text: "I successfully created my first document" displayed on the page.
* Close the server after completing the lab: Once you’re done with the lab, make sure to close the server to free up the port:
  * Click on the exposed port number (e.g., 5500) at the bottom-right of VSCode.
  * You should see a notification confirming that the server is now offline (stopped).

## Key Takeaways:

* The DOCTYPE declaration is essential for setting the document type to HTML5.
* HTML documents have a specific structure that includes the <html>, <head>, and <body> elements.
* The <title> element inside the <head> specifies the page title in the browser tab.
* Text displayed on the webpage should be inside the <body> element, using appropriate tags like <p> for paragraphs.
