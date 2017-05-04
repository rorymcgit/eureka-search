## Eureka Search Engine!

Final project (weeks 11 & 12) at Makers Academy. Tasked with working on a project of our design in languages and testing frameworks of our choice.

Team:

- [Clem Capel-Bird](https://github.com/ClemCB)
- [Nicholas Leacock](https://github.com/marudine)
- [Vicky Ledsom](https://github.com/ledleds)
- [Rory McGuinness](https://github.com/rorymcgit)

Central throughout the project: TDD/BDD, XP values and agile practices.

## Epic User Stories

```
As a user of the web,
So that I can find interesting webpages,
I want to be able to search with multiple words.
```
```
As a user of the web,
So that I can find interesting webpages,
I want to be able to see all the webpages with titles, keywords and descriptions which contain my search word.
```

## Technologies

- Express
- Node.js
- JavaScript
- Mocha & Chai for testing
- PostgreSQL Database
- pg promise

## How to Run

- Follow the instructions and run [Eureka Crawler](https://github.com/ledleds/beetle-crawler)
- `git clone` this project directory and `cd eureka-search-engine` into it on your local machine
- `npm install` to install project dependencies
- `npm test` to run Mocha and Chai tests
- Run `nodemon` to run Eureka Search Engine locally
- Visit `localhost:3000` on your favourite browser and search the websites from your crawl with Eureka Crawler!

## Challenges

- Working in Node's asynchronous environment was challenging for the requirements of this project. We used Promises to halt execution of subsequent functions before the necessary information had been retrieved by pg promises from the PostgreSQL database.
