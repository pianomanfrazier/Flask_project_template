#!/usr/bin/env bash

npm install

virtualenv flask && source flask/bin/activate

pip install -r requirements.txt

deactivate

echo "\e[1;32mYour project is now all setup :)\e[0m"
