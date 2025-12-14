#!/bin/bash

# ==============================
# 🚀 VITE FRONTEND DEPLOY SCRIPT
# ==============================
# Author: Diwash Bhattarai
# Description:
# Builds the Vite app, then copies build files and environment variables to EC2 via SSH.
# ==============================

# ==== CONFIGURATION ====
PEM_PATH="/home/diwashb/Desktop/Programming/WORK/FactDigi/themjon-traders/themjonkey.pem"
LOCAL_PROJECT_PATH="/home/diwashb/Desktop/Programming/WORK/FactDigi/fact-digi-portfolio"
REMOTE_USER="ubuntu"
REMOTE_HOST="13.233.7.146"
REMOTE_PATH="/var/www/factdigi"
ENV_FILE=".env.production"
BUILD_DIR="dist"

# ==== START DEPLOYMENT ====
echo "📦 Building project..."
cd "$LOCAL_PROJECT_PATH" || exit
pnpm build || { echo "❌ Build failed!"; exit 1; }

echo "🧹 Cleaning up old dist on EC2..."
ssh -i "$PEM_PATH" "$REMOTE_USER@$REMOTE_HOST" "sudo rm -rf $REMOTE_PATH/dist && sudo mkdir -p $REMOTE_PATH/dist && sudo chown -R $REMOTE_USER:$REMOTE_USER $REMOTE_PATH"

echo "🚀 Deploying dist folder to EC2..."
scp -i "$PEM_PATH" -r "$LOCAL_PROJECT_PATH/$BUILD_DIR" $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH || { echo "❌ Failed to upload dist!"; exit 1; }

# ==== POST DEPLOY ACTIONS ON EC2 ====
echo "🔁 Reloading Nginx on EC2..."
ssh -i "$PEM_PATH" "$REMOTE_USER@$REMOTE_HOST" "sudo systemctl reload nginx"

echo "✅ Deployment complete!"
