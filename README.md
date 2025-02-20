
# News Case Study Application

Features covered:
- User interface for a news aggregator website that pulls articles from various sources ( NewsApi.org, Guardian, NewYorkTimes ) and displays news content.
- Implemented Search and Filtering option for news articles.
- Implemented category filters for news articles and defaults to all.

- (*Note: Due to security reason, news data source APIKeys has been removed here, and Added dummy keys, Please make sure to use the respective api keys for working prototype*)

## Prerequistes
Before installing the App, ensure that your system meets the following requirements:

- Node.js (v14 or later)
- npm  
- Git


## Installation

Follow these steps to install the App.

Step 1: Clone the Repository

```bash
git clone https://github.com/dgokul19/innoscripta-case-study.git
```
Alternatively, you can download the zip file from the repository and extract it to your local machine.

Step 2: Install Dependencies

Once you have the project files, open a terminal/command prompt and navigate to the project directory. Run the following command to install all required dependencies:

```bash
    npm install
```
This will install the necessary libraries and packages specified in the package.json file.


Step 3: Run Application

Once all the dependencies has been installed,  Run the following command in terminal under same directory.

```bash
    npm run dev
```

This will run the application in your local machine:

visit **http://localhost:5173/**

## Tech Stack

**Client:** React, Sass, Typescript


## Deployment

open a terminal/command prompt and navigate to the project directory. Run the following command to build a docker image:

```bash
    docker build -t <image-name> .

    (e.g) docker build -t case-study-app .
```

It will take some time to execute the all the commands in Dockerfile. once all docker image has been created. you can verify that, using the command 

```
    docker images
```
you can see the *case-study-app* name in images list.

Next you can run the application in docker using, the following command

```
    docker run -p 5173:5173 <image-name>

```
