import React from 'react';
import { Dialog, FlatButton, Styles } from 'material-ui';

const ThemeManager = Styles.ThemeManager();
const Colors = Styles.Colors;

require('./styles');

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: null
    }
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() {
    return (
      <div className='Application'>
        <h1 className='Application-title'>Timesheet 2 Application!</h1>
        <FlatButton primary={true}>Hi There</FlatButton>
      </div>
    )
  }
}

Application.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Application;