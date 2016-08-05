#!/usr/bin/env flask/bin/python
"""runs the flask server or freezes the app
"""
import sys

from app import app, freezer

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == "lan":
        #if you want it available on the network
        app.run(debug=True, host='0.0.0.0')
    elif len(sys.argv) > 1 and  sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(debug=True)
