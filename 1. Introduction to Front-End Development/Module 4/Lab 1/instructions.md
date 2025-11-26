# Lab instructions

## Introduction:

In this lab, you will enhance your biographical webpage by integrating Bootstrap, a popular CSS framework.

## Goal:

The goal of this lab is to practice building responsive layouts and using Bootstrap components to improve the visual appearance of your webpage.

## Objectives:

* Implement a Bootstrap grid system for responsive design.
* Configure layout compatibility for mobile and desktop screens.
* Utilize Bootstrap utilities and components to enhance styling and functionality.
* Style links as Bootstrap buttons with appropriate modifiers.

## Instructions:

### Step 1:

Open the index.html file present under the PROJECT folder. The file includes a basic HTML structure and links to Bootstrap CSS and JS files.

### Step 2: Add a Bootstrap grid container:

Inside the <body> tag, create a <div> with the class="container".

```
<body>
    <div class="container">
    </div>
</body>
```

### Step 3: Define a row inside the container:

Add a <div> inside the container with the class="row".

```
<div class="container">
    <div class="row">
    </div>
</div>
```

### Step 4: Create two columns within the row:

Add two <div> elements inside the row. Assign id="bio" to the first <div> and id="more" to the second <div>.

```
<div class="container">
    <div class="row">
        <div id="bio"></div>
        <div id="more"></div>
    </div>
</div>
```

### Step 5: Make columns responsive:

Apply class="col-12 col-lg-6" to both columns to ensure they span 12 columns on mobile and 6 columns on desktop screens.

```
<div id="bio" class="col-12 col-lg-6"></div>
<div id="more" class="col-12 col-lg-6"></div>
```

### Step 6: Add a centered header to the bio section:

Inside the bio column, add an <h1> with your name as the content and apply the class="text-center".

```
<div id="bio" class="col-12 col-lg-6 text-center">
    <h1>Jane</h1>
</div>
```

### Step 7: Include a responsive image:

Below the <h1>, add an <img> element with src="photo.jpg" and apply the class="img-fluid" for responsiveness.

```
<img src="photo.jpg" class="img-fluid">
```

### Step 8: Add a heading and list for favorite music artists:

Inside the more column, add an <h2> with the text 'Favorite Music Artists', followed by an unordered list of your favorite artists.

```
<h2>Favorite Music Artists</h2>
<ul>
    <li>Metallica</li>
    <li>Bob Marley</li>
    <li>Madonna</li>
    <li>The Beatles</li>
    <li>Pink Floyd</li>
</ul>
```

### Step 9: Add another heading and an ordered list for favorite films:

Below the music list, add an <h2> with the text 'Favorite Films' and an ordered list of your top five films.

```
<h2>Favorite Films</h2>
<ol>
    <li>Pulp Fiction</li>
    <li>The Godfather</li>
    <li>The Lord of the Rings</li>
    <li>Iron Man</li>
    <li>Inception</li>
</ol>
```

### Step 10:

Below the film list, add an <a> tag linking to your Meta profile. Use the Bootstrap button component class="btn btn-primary" and set the text as 'My Meta Profile'.

```
<a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
```

### Step 11:

After successfully modifying the index.html file, navigate to File > Save to save changes in the file.

## Note for Learners:

When using the browser preview functionality in the machine environment, the webpage layout may initially appear with both columns stacked vertically, each taking up the full width (using the col-12 class). This is because the browser preview defaults to a smaller screen size (mobile view), which applies the col-12 class to each column, making them stack on top of each other.

However, if you want to see the two columns side by side (with each column taking up 50% of the width on large screens), you can expand the screen size of the browser preview panel. This will trigger the col-lg-6 class, which adjusts the layout to show the columns side by side on larger screens.

## Key Takeaways:

* Bootstrap's grid system simplifies responsive web design.
* Utility classes like text-center and img-fluid are powerful for quick styling.
* Bootstrap components, such as buttons, enhance the interactivity and appearance of your webpage.