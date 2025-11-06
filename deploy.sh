#!/bin/bash
# === Auto Deployment Script for cignumsolutions.ng ===
# This script builds the Next.js app locally and uploads it to the server.

# === CONFIGURATION ===
REMOTE_USER="cignaadz"
REMOTE_HOST="66.29.153.202"
REMOTE_PORT="21098"
REMOTE_PATH="/home/cignaadz/public_html/cignumsolutions.ng"

echo "🚀 Building Next.js project..."
yarn install --frozen-lockfile
yarn build
yarn export

echo "🗜️ Zipping exported site..."
cd out || exit
zip -rq ../site.zip .
cd ..

echo "📤 Uploading to server..."
scp -P $REMOTE_PORT site.zip $REMOTE_USER@$REMOTE_HOST:~/deploy/cignumsolutions-ng/

echo "📦 Extracting on server..."
ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST <<EOF
  cd ~/deploy/cignumsolutions-ng
  unzip -o site.zip -d $REMOTE_PATH
  rm -f site.zip
  echo "✅ Deployment completed to $REMOTE_PATH"
EOF

echo "🎉 Done!"
