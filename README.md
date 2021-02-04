# Work Day Planner



## Table of Contents

* [Description](#description)
* [Links](#links)
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies)
* [Questions](#questions)

## Description

A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML as it keeps track of the current time and date using moment.js library. JavaScript powered by jQuery.



## Links

[Deployed Day Planner](https://benimahat1291.github.io/DayPlaner/)


## Screenshots

![ Search:](images/sc1.png)
![ Search:](images/sc2.png)

## Installation Instructions

open index.html in you default web browser

## Usage

In the test area enter your plans for the specific hour and save with the button on the left side slot. 


## Technologies Used

HTML, CSS, JS, Jquerry, Moment.js

## Questions

If you have further projects and questions, you can find me on Github: [GITHUB](https://github.com/benimahat1291). 
please visit my portfolio to find contact information: [BENI MAHAT](https://benimahat1291.github.io/Portfolio_v2/#/). 








# Function

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

Use the [Moment.js](https://momentjs.com/) library to work with date and time. 

## Purpose

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## PsuedoCode

get current time and date using moment.js
create a row element inside out container
Append hourdisplay, textsection, and button to row
give each button an id that refrences its row index
use contionals to check if the hour value is save as the current hour
Depend on if true change add the class to style to the display

add Jquerry selector on button so that on click
create an array where we can store text with index values matching row ids
using the button index id retive the textbox index id of the same row.
get the value of the textbox index id and save that to the array
save the array to local storage
in the beggining of the function call on the local storage to retive saved data

## Improvements

Better styling
change to allow planes for the whole day
display weather location and quote of the day
create a save all button that saves all the text boxes at once
create a clear button that clears the textboxes

Build a Calander and use this as a template for the day planner for each day. 


## Developer 

Beni Mahat
date: 10/04/2020
