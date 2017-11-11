# Airbnb-Optimizer

Optimize and compare your Airbnb listing at a click of a button! Using real data, view the hottest trends and data in an exciting visual format.

Capital One Summit for Software Engineers Submission created by Kyle Lim.

[Mindsumo Challenge Link](https://www.mindsumo.com/contests/airbnb-sf)

---

### Technologies Used

**Computations:** Python with Pandas, NumPy, and Jupyter Notebook

**Front End:** Bootstrap 4, Bulma, jQuery, Gulp.js

**Visualization:** Chart.js, Google Maps API, Papa Parse

**Backend:** Node.js, Express, Socket.io

---

### How to run locally

Run the server

```
node server
```

Access the page by going to localhost:3000

---

### General Overview

While planning out my approach to this challenge, I split it up into three main categories to tackle. Computations, Visualization, and Functionality.

##### Computations and Analysis

I knew from the very beginning that I had to do something with the data
before beginning to even think about the web application. I wanted to pick
trends that were both interesting and unique. One would be a general overview
of everything across the board, another would be an overview of all the
neighborhoods, and the last would be an overview of a specific neighborhood.

Graph 1: Bar Graph of the Average Cost of Living in Each Neighborhood

Graph 2: Radar Graph of the 6 Review Values For Each neighborhood

Graph 3: Line Graph of the Bed to Bathroom Ratio Overall

All computations were done before any visualization using Pandas and NumPy in Jupyter Notebook. [View Computations Here](data/Import_Data.ipynb)


##### Front End Visualization

At this point I had my calculations, and I wanted to figure out a way to
visualize my data. The one thing I really wanted to include was Google Maps
because I believe location is the most important factor when finding a place
to stay. I wanted the experience to be as smooth as possible so I decided to
do a half and half design between the inputs and the map.

For my graphs I utilized Chart.js and Papa Parse to get my computations from my
Pandas notebook. I wanted to make my charts interactive. I accomplished this
by utilizing chart.js built in features and adding multiple graphs in one.
I know that it would be a pretty bad visualization if you only looked at the
data from one perspective so I added the interactive buttons to allow the user
to change the scope and view different datasets. In the end this worked out
perfectly as I was able to utilize sleek animations to generate new graphs.

##### Back End Functionality

js js js js js...

##### Bonus Stuff
