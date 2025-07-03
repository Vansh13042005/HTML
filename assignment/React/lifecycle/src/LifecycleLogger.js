import React from 'react';

class LifecycleLogger extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated!');
    console.log('Previous props:', prevProps);
    console.log('Previous state:', prevState);
    console.log('Current props:', this.props);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Logger Component</h2>
        <p>Check the console for lifecycle messages.</p>
      </div>
    );
  }
}

export default LifecycleLogger;