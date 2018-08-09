import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import client from './graphql/client'
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

class App extends Component {
    render() {
        const { posts } = this.state;

        return (
            <ApolloProvider client={client}>
                <Rehydrated>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>

                    </div>
                </Rehydrated>
            </ApolloProvider>
        );
    }
}

export default App;