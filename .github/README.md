# Car Identifier Website

A simple website that allows the users to post a picture of a car and get back information about the car such as make and model and basic information.

I created this as I like looking at cars and different models and makes and researching about it and to make it easier for me to identify new cars that I have previously never seen.

The website using OpenAI API to get the image from the submited image URL as OpenAI is currently not able to read raw images from file uploads. The website will then ask the request the OpenAI to identify the make, model, year and details of the car which will then be extracted and neatly presented on the website.


## Front Page
![screenshot](car-identifier.png)


## An example after a car has been identified
![screenshot](car-identifier-honda.png)


## Run the website locally
To run the website locally you will need to have Node.JS installed on your device and just run the run_car_identifier.bat file that has been created which will run the server locally allowing you to open the URL [http://localhost:3000/](http://localhost:3000/) in your browser to view the website 

The bat file runs the npm install command to get the required node dependancies for the website to function automatically.
