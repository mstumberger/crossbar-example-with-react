## About

This is a good react-redux example for connecting to crossbar.io
WAMP router, with it we can call remote procedures and also subscribe
to publish/subscribe topics. Also we can do about everything 
autobahn.js can.

I used this project https://github.com/brycedarling/poloniex-ticker
as a base to create a full example of using crossbar.io WAMP router with
redux-autobahn-js (also written by https://github.com/brycedarling/)
in react with redux store.

To start crossbar server type:
    
    cd backend
    crossbar start

The server is now listening to localhost:8000


To start react dev server open another tab in Konsole and type:
    
    cd hello-example
    npm install # only first time to install dependencies
    npm start

Look at pubsub messages and if you press the button you call a
RPC add with two int arguments, function adds them and returns
the result to rpc field