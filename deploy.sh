#!/bin/bash

cd build/
git init
git remote add origin https://github.com/mikeydlane/mikeydlane.com.github
git add .
git commit -m "deploy to gh-pages"
git checkout -b gh-pages
git push origin gh-pages -f
cd ..
rm -rf build
