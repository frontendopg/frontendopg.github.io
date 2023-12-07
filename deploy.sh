#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git add .
git commit -m 'deploy'
git checkout master
git branch -m main

# if you are deploying to https://<USERNAME>.github.io
 git push -f https://github.com/frontendopg/frontendopg.github.io.git main:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -