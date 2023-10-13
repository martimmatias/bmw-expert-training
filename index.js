const SmeeClient = require('smee-client')
const express = require("express")

const smee = new SmeeClient({
  source: 'https://smee.io/JzO668f7CNnkD2e',
  target: 'http://localhost:3000/events',
  logger: console
})
const app = express()
const port = 3000

const events = smee.start()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// testing the events
app.post("/events", (req, res) => {
  console.log(req);
  console.log(req.body);
  res.send(true);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('exit', code => {
  console.log("goodbye")
  // Stop forwarding events
  events.close()
});

