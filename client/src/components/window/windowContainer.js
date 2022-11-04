// import { connect } from "react-redux";
// import {
//   closeWindow,
//   minimizeWindow,
//   maximizeWindow,
//   topWindow,
// } from "../../actions/window";
// import Window from "./window.js";

// const mapStateToProps = (state, ownProps) => {
//   const window = getWindow(state, ownProps.windwoId);
//   return {
//     title: window.name,
//     type: window.type,
//     loading: window.loading,
//     isEditing: isEditing(state, ownProps.windowId),
//     hasFocus: hasFocus(state, ownProps.windowId),
//     confirmation: getWindowConfirmation(state, ownProps.windowId),
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   toggleWindow: () => dispatch(topWindow(ownProps.windowId)),
//   closeWindow: () => dispatch(closeWindow(ownProps.windowId)),
//   minimizeWindow: () => dispatch(minimizeWindow(ownProps.windowId)),
//   maximizeWindow: () => dispatch(maximizeWindow(ownProps.windowId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(window);
