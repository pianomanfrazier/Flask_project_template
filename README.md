#Flask project setup
This flask project template has been setup with Gulp task automation and the SASS
[Bourbon](http://bourbon.io/) libraries by [thoughtbot](https://thoughtbot.com/).
This all assumes you are using Ubuntu. A lot of this is just for my own notes so
I don't have to keep looking things up.

##Info for using GULP

###make sure you have NodeJS and Gulp installed

```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash  
sudo apt-get install -y nodejs
```

See [install nodejs for Ubuntu](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

###then make sure npm is installed

```
node -v
npm -v
```

For a new project: `npm init`

For an existing project with a package.json: `npm install`

###install gulp
```
npm install -g gulp
npm install --save-dev gulp
```

The -g installs gulp globally on the system
The --save-dev adds the package to the dependency list

##Notes for python virtual env and dependencies
To install dependencies:  

```
virtualenv flask
source flask/bin/activate
pip install -r requirements.txt
deactivate
```  

To save all current dependencies in the virtualenv:  

```
pip freeze > requirements.txt
```

###make a new virtual env

```
mkdir my_new_project
cd my_new_project
pip install virtualenv
virtualenv  -p </usr/bin/python2.7> <virtual environment>
source venv/bin/activate
deactivate
```

The -p flag specifies which version of python you want to use

You can also use "virtaulenvwrapper" to organize all the environments.
However I am choosing to setup a separate environment for each project and then
reference the correct python shell in the header:
```
#!/usr/bin/env <virtualenv_name>/bin/python
```

see <http://docs.python-guide.org/en/latest/dev/virtualenvs/>


##Notes about Bourbon/Bitters/Neat

you can install all of these globally with

```
gem install bourbon bitters neat
```

Then locally they can be installed into your project with
```
bourbon install
bitters install
neat install
```
The current versions are already in `/static/lib/`

Then you can go to the refills page to copy and paste workable chunks of code:
see <http://refills.bourbon.io/>
