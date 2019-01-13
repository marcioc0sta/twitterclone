import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        {/* {loading ? <LoadingBar /> : <Dashboard />} */}
        {/* {loading ? <LoadingBar /> : <NewTweet />} */}
        {loading ? <LoadingBar /> : <TweetPage match={{params: { id: '5c9qojr2d1738zlx09afby' }}} />}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
