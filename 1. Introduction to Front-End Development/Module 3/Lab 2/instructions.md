# Lab instructions
​
## Introduction:

In this lab, you will practice using Bootstrap components to improve the functionality and appearance of a webpage.

## Goal:

The goal of this lab is to enhance the Little Lemon webpage by incorporating key Bootstrap components such as badges, alerts, and buttons.

## Objectives:

* Add a Badge to highlight the new "Falafel" dish.
* Insert an Alert to notify customers about the restaurant's closure on New Year’s Day.
* Add a Button for customers to order online.

## Instructions:

### Step 1: Open the index.html file present under the PROJECT folder. The starting index.html already contains the structure for the menu and logo.

### Step 2: Add an Alert Component to notify customers about the restaurant's closure.

* Locate the div containing the 'Our Menu' text and add another div element below it.
* Add the following attributes to this div:
  * class="alert alert-info"
  * role="alert"
  * Add the message: 'Our restaurant will be closed on New Year's Day'

```
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <h1>Our Menu</h1>
        </div>
        <div class="alert alert-info" role="alert">
            Our restaurant will be closed on New Year's Day
        </div>
    </div>
</div>
```

### Step 3: Add a Badge Component to highlight the new Falafel dish.

* Inside the <h2> tag for 'Falafel,' add a <span> element before the closing </h2> tag.
* Assign the span the following attributes:
  * class="badge bg-secondary"
* Add the text 'New ' inside the span.

```
<h2>Falafel <span class="badge bg-secondary">New</span></h2>
```

### Step 4: Add a Button Component for customers to place an online order.

* Add another div after the last row element.
* Assign the new div a class="row".
* Add a nested div with class="col-12" inside the row.
* Add another nested div with class="text-center".
* Inside the text-center div, add a <button> element with the following attributes:
  * type="button"
  * class="btn btn-primary"
* Add the text 'Order Online' inside the button.

```
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <button type="button" class="btn btn-primary">Order Online</button>
        </div>
    </div>
</div>
```

### Step 5: Save changes.

After successfully modifying the index.html file, navigate to File > Save to save changes in the file.

## Note for Learners:

When using the browser preview functionality in the machine environment, the webpage layout may initially appear with both columns stacked vertically, each taking up the full width (using the col-12 class). This is because the browser preview defaults to a smaller screen size (mobile view), which applies the col-12 class to each column, making them stack on top of each other.

However, if you want to see the two columns side by side (with each column taking up 50% of the width on large screens), you can expand the screen size of the browser preview panel. This will trigger the col-lg-6 class, which adjusts the layout to show the columns side by side on larger screens.

## Key Takeaways:

* Use Bootstrap components to enhance web page functionality and aesthetics.
* Create visually appealing notifications with the alert component.
* Highlight new items effectively using the badge component.
* Ensure responsive layouts by integrating components seamlessly into the Bootstrap Grid system.