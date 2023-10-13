const octokitModule = require("octokit")
const App = octokitModule.App;
require('dotenv').config()

const app = new App({
    appId: process.env.GITHUB_APP_ID,
    privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
});
async function main() {
    const octokit = await app.getInstallationOctokit(process.env.GITHUB_APP_INSTALLATION_ID);
    /*const data = await octokit.request("GET /meta");
    console.log(data);*/
    /*const data = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'martimmatias',
        repo: 'bmw-expert-training',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log(data);*/
    const data = await octokit.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: 'martimmatias',
        repo: 'bmw-expert-training',
        issue_number: '5',
        body: 'This description has been modified by Octokit!',
    });
    console.log(data);
}
main();