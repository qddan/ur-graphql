const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// comment

app.listen(4000, () => {
  console.log('listening');
});
