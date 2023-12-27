#!/bin/bash

# pull last release on master
sudo git checkout master
sudo git pull

# build frontend into dist/
cd ./frontendstravaintegration
sudo ng build

# copy dist/ into nginx 
sudo cp -r ./dist/frontend-stravaintegration/* /var/www/stravaintegration/

# restart nginx
sudo service nginx restart