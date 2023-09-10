const express = require('express');
   const app = express();
   const port = process.env.PORT || 3000;

   // Middleware to parse JSON request bodies
   app.use(express.json());

   // Define your endpoint route
   app.get('/api', (req, res) => {
     // Get query parameters
     const slackName = req.query.slack_name;
     const track = req.query.track;

     // Get the current day of the week
     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const currentDay = daysOfWeek[new Date().getDay()];

     // Get the current UTC time with a +/-2 minute window
     const now = new Date();
     const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000).toISOString();

     // Define your response JSON
     const response = {
       slack_name: slackName,
       current_day: currentDay,
       utc_time: utcTime,
       track: track,
       github_file_url: 'https://github.com/guru4rmzion/task1hgng/blob/main/app.js',
       github_repo_url: 'https://github.com/guru4rmzion/task1hgng.git',
       status_code: 200,
     };

     // Send the JSON response
     res.json(response);
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   