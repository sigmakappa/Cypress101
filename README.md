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

## Contributor

* [Shagun Kaushik](https://github.com/sigmakappa)
