# Famish - MERN stack project


This project was created with the intention to learn more about Gatsby's framework for building static sites with javascript. Coupled with the rest of the Jamstack architecture, its easy to see why it's so popular.

I built a full-stack static recipe index. I did this using GraphQL, configuring some plugins, and reducing everything to a single REST API. This means you can pull data from multiple sources with a single query.

After I got this project off the ground, I wanted to build and deploy on a few Cloud Service Providers. Hosting on Netlify and Gatsby Cloud took minimal effort as they both provide similar hosting and scaling services.

Next task was to create an EC2 instance on AWS

Here's a look at the major tech I used:

### Front End

* Gatsby JS
  * plugins
  * MDX
* React JS
* SASS
* React-Bootstrap

### Server, Query & Database

* GraphQL
* Node JS
  * Express JS
  * Mongoose ODM
  * REST API
* Basic Authentication
* .env
* MongoDB
  * Atlas

### Deploy and Hosting

* Netlify
* Gatsby Cloud
* AWS
  * IAM
  * EC2
  * Cloud Formation


<br />

# Conclusion:

I decided to use Gatsby and Material-UI for my personal portfolio-page and spent more time with the theme, design, and features.

Some of the future updates I would like to make include:

* tag links
* search filter
* API's
  * create user
  * upload or create recipe
* like recipes
* comment on recipes

