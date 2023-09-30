# Cypress101

Ready-to-use Cypress framework 

## Description

A ready to use automation framework which puts into use the key concepts of Page Object Model (POM) and is easy to use and maintain.

## Getting Started

### Dependencies

* For the entire list of dependencies and requirements, refer this link: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

### Installing

* Installing instructions as here:
https://docs.cypress.io/guides/getting-started/installing-cypress#Installing

### Executing the main script

Once the Cypress Window is open, click the 'events_spec.js' file in red as below:

![Framework Structure Image](https://github.com/sigmakappa/Cypress101/blob/main/Images/running.png)

### Project Structure and POM Dependencies

Framework structure is as in the image specified above.

The main dependencies can be categorized as of now in the following 3 areas:

* **Page Objects (under directory 'Locators')**
As of now, 2 pages have been dedicated for holding the page objects as below:
  - **Page Locators** 
  [https://github.com/sigmakappa/Cypress101/blob/main/cypress/integration/Locators/PageLocators.js]
  - **Event Card**
   [https://github.com/sigmakappa/Cypress101/blob/main/cypress/integration/Locators/EventCard.js]

* **Much required Utilities (under directory 'Utilities')**
As of now, we have 1 page which holds the date and calendar utilities [https://github.com/sigmakappa/Cypress101/blob/main/cypress/integration/Utilities/utilities.js]

* **System Under Test (SUT) related configurations**
As of now, only the URL for access has been specified in the file (https://github.com/sigmakappa/Cypress101/blob/main/cypress.json) but Cypress allows to configure multiple entries to be configured in this JSON file.

**And the main spec file containing the scripts for the [expected specified specs for testing](https://github.com/sigmakappa/Cypress101/blob/main/cypress/integration/Specs.txt) is here -> [events_spec.js](https://github.com/sigmakappa/Cypress101/blob/main/cypress/integration/events_spec.js)** 


### Example Scenarios A Covered here

### Scenario #1
* When I access www.amazon.in Home Page
* I should see that its Amazon India Home Page

### Scenario #2
* Go to www.amazon.science/
* Search for 'machine learning' in jobs
* Select Country as 'United States'
* Verify all results found are based in the US only

### Scenario #3
* Go to www.amazon.in/
* Select 'Books' from Search Dropdown
* And select 'English' from language options
* In Price Range TextBoxes, put 100 as Min and 200 as Max and click 'Go' button
* Verify all results found are based on the above critaria only

### Scenario #4
* Go to www.amazon.in/
* Select 'Books' from Search Dropdown
* In Search Box, enter 'Neil Gaiman' and press 'Enter' key
* Verify all results found are based on the above critaria only

## Contributor

* [Shagun Kaushik](https://github.com/sigmakappa)






# .
# .
# **New text goes from here**
# .
# .

# Cypress 101

Yo, what's up! Welcome to the Cypress UI Testing Repo! This is the place to be if you want to learn about UI testing using Cypress and take your testing game to the next level. 

## Table of Contents

- [What's Cypress?](#whats-cypress)
- [Why Cypress for UI Testing?](#why-cypress-for-ui-testing)
- [Getting Started](#getting-started)
- [Example Scenarios Covered here](#example-scenarios-covered-here)
- [Contribute to the Fun](#contribute-to-the-fun)
- [License](#license)

## What's Cypress?

Cypress is a super slick front-end testing tool made for the modern web. It's fast, reliable, and easy to use. You can write end-to-end tests that run in a real browser. 

## Why Cypress for UI Testing?

Cypress is an excellent tool for UI testing because it is specifically designed for this purpose. It provides a powerful and intuitive API that makes it easy to write tests for even the most complex web applications. Additionally, Cypress comes with a variety of features that make it an excellent choice for UI testing, including:

- Automatic waiting: Cypress automatically waits for elements to appear on the page before interacting with them, which makes tests more reliable and less flaky (**UI Automation folks know what big mess are flaky tests**).
- Real-time reloading: Cypress provides real-time reloading, which means that you can see the results of your tests as you write them.
- Debugging tools: Cypress provides an intuitive debugging interface that allows you to easily debug your tests.
- Cross-browser testing: Cypress supports all major browsers, including Chrome, Firefox, and Edge.

## Getting Started

To get started with Cypress, you can follow these steps:

1. Clone this repository: `git clone https://github.com/sigmakappa/Cypress101.git`
2. Install the dependencies: `npm install`
3. Open Cypress: `npm run cypress:open`

This will open the Cypress Test Runner, where you can see all of the tests in the `cypress/integration` folder. From here, you can run individual tests or the entire suite.



## Example Scenarios Covered here

### **Scenario #1**
* When I access www.amazon.in Home Page
* I should see that its Amazon India Home Page

### **Scenario #2**
* Go to www.amazon.science/
* Search for 'machine learning' in jobs
* Select Country as 'United States'
* Verify all results found are based in the US only

### **Scenario #3**
* Go to www.amazon.in/
* Select 'Books' from Search Dropdown
* And select 'English' from language options
* In Price Range TextBoxes, put 100 as Min and 200 as Max and click 'Go' button
* Verify all results found are based on the above critaria only

### **Scenario #4**
* Go to www.amazon.in/
* Select 'Books' from Search Dropdown
* In Search Box, enter 'Neil Gaiman' and press 'Enter' key
* Verify all results found are based on the above critaria only


## Contribute to the Fun

We're all about community and collaboration here, so if you've got some ideas or want to add some code, hit us up with an issue or pull request. We're always down to work together and make this repo the ultimate resource for Cypress UI testing.


## License

Yo, listen up! This repository is licensed under the MIT License. That means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you include the original copyright notice and disclaimer. 

But let's be real, you're gonna use this repo to make some sick UI testing magic happen, so we won't hold you back. So go ahead, make your wildest dreams come true and create the most badass UI tests ever seen! 🚀🔥💥