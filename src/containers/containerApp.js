import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../App";
import * as actions from "../redux/actions";

const mapStateToProps = state => {
  const { language } = state;
  return {
    language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
