# Some helpful references

## Seeding schools:

To run the schools seed: `npm run seed`

### I recently fixed this bug, so you will only have to run the above command

Leaving below for reference either way:

There is an interesting problem when attempting to bulk insert into postgres, so you will also have to manually reset the primary key counter through the db cli. 

An appropriate command would be something like:

`SELECT setval('schools_id_seq', (SELECT MAX(id) FROM schools) + 1);`
