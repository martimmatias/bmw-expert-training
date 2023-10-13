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

app.post("/events", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Stop forwarding events
events.close()
