#/usr/bin/env bash

# bail out on first error
set +e;

serverless --version > /dev/null 2>&1

[ "$?" ] && echo "serverless: OK";
exit;

# set -e;

echo "serverless not found";
echo "Installing serverless globally..."
# npm i -g serverless@2.11.0

