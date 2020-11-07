#!/usr/bin/env bas

[[ -nz $VERBOSE ]] && VERBOSE=--verbose; 
APPNAME=$(ls out);

pushd out/$APPNAME > /dev/null 2>&1;

serverless $VERBOSE;