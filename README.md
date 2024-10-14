# FSearchBox Module

## Overview

The **FSearchBox** module is a lightweight JavaScript component designed to turn any HTML element into a searchable interface. It enables users to filter through the content dynamically, enhancing the user experience in applications that require searching through text content.

## Features

- Simple to integrate with existing HTML elements
- Lightweight and customizable
- Responsive design
- Easy-to-use API for initialization

## Installation

### Prerequisites

Ensure you have a modern web browser that supports HTML5 and JavaScript.

### Include the Files

To use the FSearchBox module, include the CSS and JavaScript files in your HTML document:

```html
<link rel="stylesheet" href="fsearchbox/index.css">
<script src="fsearchbox/index.js"></script>



### Example HTML File

Here is an example HTML file that demonstrates how to use the FSearchBox module:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FSearchBox Example</title>
    <link rel="stylesheet" href="fsearchbox/index.css">
</head>
<body>
    <div id="wrapper">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        It has been the industry's standard dummy text ever since the 1500s.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
    </div>
    
    <script src="fsearchbox/index.js"></script>
    <script>
        FSearchBox.init({
            targetEleId: 'wrapper',
            width: '200px',
        });
    </script>
</body>
</html>
