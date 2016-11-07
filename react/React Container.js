#set ($PRESENTATION_NAME = $NAME.substring(0, $NAME.indexOf('Container')))
import { connect } from 'react-redux';
import ${PRESENTATION_NAME) from './../components/${PRESENTATION_NAME}';

const mapStateToProps = (state) => {
  return {
    myProp: state.reducer.myStateProp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myProp: (arg) => {
      dispatch(action(arg));
    }
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps);
};

const {$NAME} = connect(mapStateToProps, mapDispatchToProps, mergeProps)(${PRESENTATION_NAME});

export default {$NAME};
