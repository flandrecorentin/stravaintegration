#!/bin/bash

# access to code
cd /stravaintegration/

# pull last release on master
sudo git checkout master
sudo git pull

# build into dist/
sudo ng build

# copy dist/ into nginx 
sudo cp -r /stravaintegration/frontendstravaintegration/dist/frontend-stravaintegration/* /var/www/stravaintegration/

# restart nginx
sudo service nginx restart