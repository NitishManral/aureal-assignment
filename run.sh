#!/bin/bash

# Kill process running on port 3000
fuser -k 3000/tcp

# Start the Node.js application
node index.js