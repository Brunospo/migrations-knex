# Master Class knex

## Preencher os campos no knexfile.js:

database, user e password

## Criar Migrations:

```bash
npx knex migrate:make create_name_table
```
## Criar Seed:

```bash
npx knex seed:make 001_tableName
```
### Rodar uma Seed especifica:

```bash
npx knex seed:run --specific seedName.js
```

## Resetar todas as migrations:

```bash
npx knex migrate:rollback --all
```