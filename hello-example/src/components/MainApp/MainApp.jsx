import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reduxAutobahn from 'redux-autobahn-js';


const isConnected = props => {
    return props.autobahn.connection.isConnected;
};

const isSubscribed = (props, topic) => {
    return props.autobahn.subscriptions.filter(s => s.topic === topic).length > 0;
};

class MainApp extends Component {
    componentWillMount() {
        console.log('open connection');
        this.props.actions.openConnection();
    }

    componentWillReceiveProps(newProps) {
        if (this.isNewConnection(newProps)) {
            console.log('connected');
            this.props.actions.subscribe('com.example.oncounter');
            // this.props.actions.call();

            // this.props.actions.subscribe('BTC_XMR');
        }
        if (this.isNewSubscription(newProps, 'com.example.oncounter')) {
            console.log('com.example.oncounter');
        }
    }

    isNewConnection(newProps) {
        return !isConnected(this.props) && isConnected(newProps);
    }

    isNewSubscription(newProps, topic) {
        return !isSubscribed(this.props, topic) && isSubscribed(newProps, topic);
    }

    constructor(props){
        super(props);

        this.state = { response: 'com.example.add2'};

        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ response: event.target.value });

    };

        onButtonPress(event){
            event.preventDefault();
            console.log("Button was pressed!");
            this.props.actions.call(this.state.response, [4,2])
            }
            render() {
                console.log(this.state.result);
                return <div>
                    <div>
                        <form onSubmit={this.onButtonPress} className="input-group">
                            <input placeholder="Response"
                                 className="form-control"
                                 value={this.state.response}
                                 onChange={this.onInputChange}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-secundary">Press me</button>
                            </span>
                        </form>
                </div>
                <div>
                    <h1>Responses: </h1>

                    <li>RPC: {JSON.stringify(this.props.MainApp.rpc)}</li>
                    <li>PUB/SUB: {JSON.stringify(this.props.MainApp.pubsub)}</li>

                </div>
            </div>;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(reduxAutobahn.actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
