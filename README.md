# Cypress 101

Yo, what's up! Welcome to the Cypress UI Testing Repo! This is the place to be if you want to learn about UI testing using Cypress and take your testing game to the next level. 

## Table of Contents

- [What's Cypress?](#whats-cypress)
- [Why Cypress for UI Testing?](#why-cypress-for-ui-testing)
- [Getting Started](#getting-started)
- [Executing the Test Scripts](#executing-the-main-script)
- [Example Scenarios Covered here](#example-scenarios-covered-here)
- [Contribute to the Fun](#contribute-to-the-fun)
- [License](#license)

## What's Cypress?

[Cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell) is a super slick front-end testing tool made for the modern web. It's fast, reliable, and easy to use. You can write end-to-end tests that run in real browser(s) [Chrome, FireFox, Edge & Electron so far]. 

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
3. Open Cypress: `npm cypress open`

This will open the Cypress Test Runner, where you can see all of the tests in the `cypress/e2e` folder. From here, you can run individual tests or the entire suite. 
* Or if you are intersted in running the tests via the command line, there's a plethora of options available [here](https://docs.cypress.io/guides/guides/command-line).

## Executing the main script

Once the Cypress Window is open, click the 'Amazon*.cy.js' files in red as below:

![Framework Structure Image](/Images/running_tests.png)

## Example Scenarios Covered here

### Scenario #1
* Go to www.amazon.in/
* Verify the Home Page contins the Amazon.in logo


### Scenario #2
* Go to www.amazon.science/
* Select Country as 'United States' and Category as 'Economics' 
* Verify all results found are based in the US only and are for 'Economics' only


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

<br>

![Screen Recording](/Images/screen_recording.gif)

## Contribute to the Fun

We're all about community and collaboration here, so if you've got some ideas or want to add some code, hit us up with an issue or pull request. We're always down to work together and make this repo the ultimate resource for Cypress UI testing.


## License

Yo, listen up! This repository is licensed under the MIT License. That means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you include the original copyright notice and disclaimer. 

But let's be real, you're gonna use this repo to make some sick UI testing magic happen, so we won't hold you back. So go ahead, make your wildest dreams come true and create the most badass UI tests ever seen! 🚀🔥💥