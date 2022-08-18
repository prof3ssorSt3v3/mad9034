#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# Upload the whole site to the private personal repo
git pull origin f2022
#git branch -m f2021
git add -A
git commit -m 'course update'
# REPLACE NEXT LINE with your own private repo link
git push -f git@github.com:prof3ssorSt3v3/mad9034.git f2022
#  example url      git@github.com:<GITHUBUSERNAME>/mad9011-f20.git
# Upload the public github.io coursebook version
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git branch -M main
# REPLACE NEXT LINE with public link for coursebook repo
git push -f git@github.com:MAD9034/F2022.git main

# if you are deploying to https://<ORG>.github.io/<REPO>
# git push -f git@github.com:<ORG>/<REPO>.git main

# Link to set up SSH key for Github
# https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

cd -

