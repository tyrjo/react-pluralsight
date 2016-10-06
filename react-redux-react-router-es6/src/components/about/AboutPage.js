import React from 'react';

// Using class here to make sure that lower stateless functional components work around
// current bug in hot reloading
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About Snarf</h1>
        <p>Some stuff about the app</p>
      </div>
    );
  }
}

export default AboutPage;
