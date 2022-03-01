#!/bin/sh
# delete all node modules and reinstall after dependabot
rm -rf ./node_modules yarn.lock && yarn
