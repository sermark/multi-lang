import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "../components/main";
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
)(Main);
