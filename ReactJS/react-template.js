import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class ReactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      _obj: Object.assign({}, props._obj)
    };
    
  }
  
  redirect() {
    // this.context.router.push('/_name');
  }

  render() {
    return (
    );
  }
}

ReactPage.propTypes = {
  // myString: PropTypes.string.isRequired,
  // myArray: PropTypes.array.isRequired,
  // myProp: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ReactPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactPage);
