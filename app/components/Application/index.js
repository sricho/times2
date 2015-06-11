import React from 'react';

require('./styles');

class Application extends React.Component {
  render() {
    return (
      <div className='Application'>
        <h1 className='Application-title'>Timesheet 2 Application!</h1>
      </div>
    )
  }
}

export default Application;