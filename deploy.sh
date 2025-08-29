#!/bin/bash

# Build the static site
echo "Building static site..."
npm run build

# Deploy to GitHub Pages using gh-pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist/public

echo "Deployment complete! Your site will be available at:"
echo "https://heenakhan122.github.io/[repository-name]"