# Optbnb

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

##### Dependencies

Node.js, Express, Socket.io

##### Run

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
neighbourhoods, and the last would be an overview of a specific neighbourhood.

Graph 1: Bar Graph of the Average Cost of Living in Each neighbourhood

Graph 2: Radar Graph of the 6 Review Values For Each neighbourhood

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

The front end also included all of the text I added to explain my graphs. I
went in and added enough text that would fit in beside the graph and give the
website a nicer and detailed feel. I feel like this was the element that really
made my website seem like a real website.

##### Back End Functionality

Functionality is the main component to the web application, and I had to think
of a way to find this optimal price. At first I thought the only way to
determine a price was to average out the listings in the neighbourhood, but I
also wanted a way to optimize based on the radius of a certain listing. To get
the best of both worlds I allow the user to input either a neighbourhood or
coordinates. This way if the user only has the neighbourhood, the optimal
price would be based on the neighbourhood. If the user uses coordinates,
the optimal price would be based on all listings within ~1 mile away from the
location.

For my Google Maps functionality, I wanted it to go to the location and create
a marker when you optimize the price. To accomplish this I set a default
coordinate value for each neighbourhood, so if the user only inputs a
neighbourhood it will go to the center of the neighbourhood. If the user inputs
coordinates, it will go directly to those coordinates and zoom in.

Additionally because the dataset only included San Francisco data, I did not
want the user to enter coordinates that were not in San Francisco. To do this
I set boundaries slightly around the edge of San Francisco, and if the user
entered coordinates outside of the boundary, I would prompt them to enter
coordinates in San Francisco.

##### Bonus Stuff

I didn't want to stop working once I just got the basic functionality done. I
wanted to spice it up with something unique!

One interesting thing I thought of was a chat box. When I thought about this
project I envisioned those websites that have live chat support, and I thought
it would be a fun task to implement that. I wanted the user to be able to
communicate with other hosts on the website in real time. Of course in reality
the web app will most likely not be used my many people at once so it was just
a fun task for me to do. I used socket.io to keep track of people connecting
to the web app and used jquery functions to send their messages to everyone
on the site.
