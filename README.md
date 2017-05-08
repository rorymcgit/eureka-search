## Eureka Search Engine!

This is a Makers Academy final project. We were tasked with working on a project of our choice in languages, testing frameworks and technologies of our choice.

We chose to build a search engine, writing the query engine in Node.js and the [crawler](https://github.com/rorymcgit/eureka-crawler) in Python.

Central throughout the project were TDD/BDD, XP values and agile practices. We used a Kanban workflow to manage the project's progression.

Team:

- [Clem Capel-Bird](https://github.com/ClemCB)
- [Nicholas Leacock](https://github.com/marudine)
- [Vicky Ledsom](https://github.com/ledleds)
- [Rory McGuinness](https://github.com/rorymcgit)

![](https://github.com/rorymcgit/eureka-search/blob/master/scrngrb_home.png)

## Epic User Stories

```
As a user of the web,
So that I can find interesting webpages,
I want to be able to search with multiple words.
```
```
As a user of the web,
So that I can find interesting webpages,
I want to be able to see all the webpages with titles, descriptions and keywords which contain my search term.
```

## How to Run

- Follow the instructions on [Eureka Crawler](https://github.com/rorymcgit/eureka-crawler) to run a crawl
- `git clone` this project directory
- `npm install` to install dependencies from within the project root
- `npm test` to run Mocha and Chai tests
- Run `nodemon` to run Eureka Search Engine locally
- Visit `localhost:3000` on your favourite browser and search the websites from your crawl with Eureka Crawler!


## Technologies

- JavaScript
- Node.js
- Express
- Mocha & Chai (testing framework/assertion library)
- PostgreSQL
