#!/usr/bin/env flask/bin/python
import sys

from app import app

if __name__=='__main__':
    app.run(debug=True)
    #if you want it available on the network
    #app.run(debug=True, host='0.0.0.0')
