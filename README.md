# hacked-website

This is a treasure hunt type activity for a team day that i have run.

The idea is to embed a bunch of clues into this "hacked" website for developers to find by using the browser developer tools.
All the answers are to be submitted to a central area, with instructions to do that within the website also. 

To run the website locally using docker got to directory then run 

`docker build -t {tag-name-for-build} .`

`docker run --name {name-to-call-running-container} -d -p 8080:80 -v .:/usr/share/nginx/html {tag-name-for-build}`

Open the browser at localhost:8080
