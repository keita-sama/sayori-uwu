'use strict';

const app = require('express')();

function server() {
  app.get('/', async (req,res) => {
    res.send('Hello');
  });

  app.listen(3000, async () => {
    // ...
  });
}

exports.server = server;