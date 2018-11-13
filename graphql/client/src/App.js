import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import BookList from './components/BookList';

//apolo client setup
const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div id="main">
          <h1>Ninja's Reading List</h1>
          <BookList> </BookList>
        </div>
      </ApolloProvider>

    );
  }
}

export default App;