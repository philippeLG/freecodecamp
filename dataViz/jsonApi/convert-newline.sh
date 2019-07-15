#!/bin/bash

for i in *.json; do sed -i 's/\\n/\
/g'  $i ; done

for f in *.json; do mv "$f" $(echo "$f" | sed 's/\.json$/\.html/g'); done
