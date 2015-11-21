import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';


import CodeEditor from './CodeEditor';
import ObjectInspector from 'react-object-inspector';

import CodePlayground from './CodePlayground';

// import '../css/react-object-inspector.css';

import GithubCorner from './GithubCorner';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <GithubCorner url="https://github.com/xyc/react-object-inspector" />

        {/*
          <Counter increment={1} color={NICE} />
          <Counter increment={5} color={SUPER_NICE} />*/}
        <div className="container">
          <section className="header">
            <h2 className="title" style={{
                                          textAlign: 'center',
                                          marginTop: '10rem',
                                          letterSpacing: '0.2em',
                                          // textTransform: 'uppercase'
                                          // transform: 'scale(1.5,1)'
                                        }}>
              react-object-inspector
            </h2>
          </section>
        </div>

        <CodePlayground />

      </div>
    );
  }
}