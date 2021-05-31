# Signsay-backend

This app is the backend for `SignSay's` data collection.

## Two API endpoints

1. Receiving videos
   >> POST /video - Uses video upload middleware to collect video and store under req.files. Then used to store the video under src/videos. Returns true on success and false on failure.
2. Retrieving list of video names 
    >> GET /video - Reads all filenames in the src/video folder into an array. Returns this array of these filenames.
   <br>

## Important information

- videos are available as static files.
