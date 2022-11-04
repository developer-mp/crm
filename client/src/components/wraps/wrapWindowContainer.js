import { connect } from "react-redux";
import {
  closeWindow,
  minimizeWindow,
  maximizeWindow,
  topWindow,
} from "../../action/window";
import window from "./window.js";
import {
  getWindow,
  isEditing,
  hasFocus,
  getWindowConfirmation,
} from "../../reducers";

const mapStateToProps = (state, ownProps) => {
  const window = getWindow(state, ownProps.windowId);
  return {
    title: window.name,
    type: window.type,
    loading: window.loading,
    isEditing: isEditing(state, ownProps.windowId),
    hasFocus: hasFocus(state, ownProps.windowId),
    confirmation: getWindowConfirmation(state, ownProps.windowId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleWindow: () => dispatch(topWindow(ownProps.windowId)),
  closeWindow: () => dispatch(closeWindow(ownProps.windowId)),
  minimizeWindow: () => dispatch(minimizeWindow(ownProps.windowId)),
  maximizewindow: () => dispatch(maximizeWindow(ownProps.windowId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(window);
