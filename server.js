const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("bucket_list");

  console.log('Connected to database');

  server.post('/api/countries', function(req, res) {
    db.collection('countries').insert(req.body, function(err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("saved to database");
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.get('/api/countries', function(req, res) {
    db.collection('countries').find().toArray(function(err, results) {
      if (err) {
        console.log(err);
        res.status(500);
      }
      res.json(results);
    });
  });

  server.delete('/api/countries', function(req, res) {
    db.collection('countries').remove({}, function(err, result) {
      if (err) {
        console.log(err);
      }
      res.status(204);
      res.send();
    });
  });

  server.put('/api/countries/:id', function(req, res) {
    db.collection('countries').update({_id: ObjectID(req.params.id)}, req.body, function(err, result) {
      if (err) {
        console.log(err);
      }
      res.status(204);
      res.send();
    });
  });

  server.listen(3000, function() {
    console.log("Listening on port 3000");
  });
});
