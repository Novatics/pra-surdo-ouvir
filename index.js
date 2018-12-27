const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  // Create a new user with a new post
  const newUser = await prisma.createUser({
    name: "Flavio",
    email: "flavio@novatics.com.br",
    streams: {
      create: [
        {
          title: "Join us for GraphQL Conf in 2019",
          description: "Just a first description",
          category: "TECH",
          language: "pt-br"
        },
        {
          title: "Subscribe to GraphQL Weekly for GraphQL news",
          description: "A second description",
          category: "OTHER",
          language: "pt-br"
        }
      ]
    }
  });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users();
  console.log(allUsers);

  const allStreams = await prisma.streams();
  console.log(allStreams);

  // Read the previously created user from the database and print their posts to the console
  const streamsByUser = await prisma
    .user({ email: "flavio@novatics.com.br" })
    .streams();
  console.log(`All posts by that user: ${JSON.stringify(streamsByUser)}`);
}

main().catch(e => console.error(e));
