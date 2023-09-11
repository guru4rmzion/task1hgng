const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your endpoint route
app.get('/api', (req, res) => {
    // Get query parameters
    const slackName = req.query.slack_name || 'Alexander Oseji'; // Use your provided Slack name as a default
    const track = req.query.track || 'Backend'; // Use 'Backend' as a default track

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    // Get the current UTC time with a +/-2 minute window
    const now = new Date();
    const utcTime = now.toISOString().replace(/\.\d{3}Z$/, 'Z');

    // Define your response JSON
    const response = {
        slack_name: slackName,
        utc_time: utcTime,
        track : track,
        github_file_url: 'https://github.com/guru4rmzion/task1hgng/blob/main/app.js',
        github_repo_url: 'https://github.com/guru4rmzion/task1hgng.git', // Update with your GitHub details
        current_day: currentDay,
        status_code: 200,
        contenttype: 'application/json'          
    };

    // Send the JSON response
    res.status(response.status_code)
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app