# Immediate TODOs

- add something to the database from a front end app
  - setup the add path
  - connect to the db
  - front end
  - try it on heroku
- password login

# Why

- be a better software developer
- I want to quantify how well I'm doing
- I want to keep track of things
  - expand beyond the capabilities of my company's issue tracking software

# What

- Postgres
  - be able to do a ton of queries on the data
  - Heroku doesn't save SQLite
- Node.js
  - it's what I know

## MIT (Most Important Tasks for today)

- 1-3 MIT (for the day)
- pick from the unfinished list
  - only in these states: (not started, working)
- sort by earliest to latest
- goal: get to this status by today
- why didn't you complete yesterday's MIT?
  - what got in the way?

## Weekly reporting

- picked up # defects, user stories
- these items are in DCUT
- these items are completed
- assign these items to the next iteration
  - be able to provide the list of iterations
- visualizations, graphs, charts
  - figure out what metrics I want to measure

## Auditing

- id: `status` on `date`
  - title if's a semantically meaningless UUID)

# Setup

## Database

1.  Install postgres
    1. sudo apt-get install postgresql
2.  `psql postgres`
3.  Create a new role

        CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
        ALTER ROLE api_user CREATEDB;

4.  Exit `\q`
5.  Create a file called `.env` in the repo directory.

**Reference that I used for setting up my PSQL**

https://www.taniarascia.com/node-express-postgresql-heroku/#set-up-postgresql-database

```sql
DB_USER=api_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=whatidid
```

Possible new tables

- BuildBreaks
- VerifyFailed

### Nice to have

- given an ID, go to RTC and scrape & auto fill the results
  - some automation tool
  - https://www.maketecheasier.com/extensions-automating-repetitive-browsing-tasks/
- https://www.taniarascia.com/node-express-postgresql-heroku/s
