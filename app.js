const express = require("express");
const app = express();
const PORT = 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = require("./src/routes/index");

async function main() {
  await prisma.$connect();
  console.log("Database connected successfully");

  app.listen(PORT, () =>
    console.log(`app is running on port http://localhost:${PORT}`)
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.use(router);

module.exports = app;
