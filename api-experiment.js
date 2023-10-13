const GitHub = require("github-api")
const Issue = require("github-api/dist/components/Issue")
require('dotenv').config()

const auth = {
    username: "martimmatias",
    token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
}

const gh = new GitHub(auth);

newIssue = new Issue("martimmatias/bmw-expert-training", auth)

newIssue.createIssue({
    title: "Test Issue"
}, (err, result, request) => {
    console.log(err, result, request);
})
