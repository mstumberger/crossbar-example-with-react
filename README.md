## About

This is a good react-redux example for connecting to crossbar.io
WAMP router, with it we can call remote procedures and also subscribe
to publish/subscribe topics. Also we can do about everything 
autobahn.js can.

I used this project https://github.com/brycedarling/poloniex-ticker
as a base to create a full example of using crossbar.io WAMP router with
redux-autobahn-js (also written by https://github.com/brycedarling/)
in react with redux store.

# Install dependencies for crossbar:

## If you use any other operating system check

https://crossbar.io/docs/Installation/

### Debian¶
After a fresh install of Ubuntu 16.04 LTS 64-bit Server, first make sure your system packages are fully up to date:

    sudo apt-get update
    sudo apt-get -y dist-upgrade
    Then install the prerequisites:
    
    sudo apt-get -y install build-essential libssl-dev libffi-dev \
       libreadline-dev libbz2-dev libsqlite3-dev libncurses5-dev

## Install for CPython¶


Install Pip and make sure it is the latest version:

    python -m ensurepip
    python -m pip install -U pip
    
Install Crossbar and its dependencies from PyPI:

    pip install crossbar
    
Check the Crossbar installation:

    crossbar version

To start crossbar server type:
    
    cd backend
    crossbar start

The server is now listening to localhost:8000

# Run frontend

To start react dev server open another tab in Konsole and type:
    
    cd hello-example
    npm install # only first time to install dependencies
    npm start

Look at pubsub messages and if you press the button you call a
RPC add with two int arguments, function adds them and returns
the result to rpc field