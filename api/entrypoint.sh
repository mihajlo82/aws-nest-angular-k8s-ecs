#!/bin/sh
# wait for postgres
until nc -z -v -w30 postgres 5432
do
  echo "Waiting for Postgres..."
  sleep 2
done

# run migrations, generate Prisma client, and start backend
npx prisma migrate deploy
npx prisma generate
node dist/src/main.js
