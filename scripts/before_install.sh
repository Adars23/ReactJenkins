#!/bin/bash

# Exit immediately if any command fails
set -e

# Install Node.js
apt-get update
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

# Optionally, log output and errors
exec > >(tee /var/log/before_install.log|logger -t before_install -s 2>/dev/console) 2>&1
