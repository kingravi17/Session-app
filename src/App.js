import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Shaktiman from './Shaktiman';
import MySample from './Sample';
import MyGame from './MyGame';
import React from 'react';
import ScoreCard from './ScoreCard';
import ErrorBoundry from './Error';
import FragmentDemo from './FragmentDemo';
class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ErrorBoundry>
          <Hero name="Shaktiman"  country = "India"/>
        </ErrorBoundry>

        <ErrorBoundry>
            <Hero name="CC"  country = "India"/>
        </ErrorBoundry>

        <ErrorBoundry>
              <Hero name="Nagraj"  country = "India"/>
        </ErrorBoundry>

        <ErrorBoundry>
              <Hero name="Shakal"  country = "India"/>
        </ErrorBoundry>

        <FragmentDemo/>
      </div>
     
    );
  }
  
}

export default App;
