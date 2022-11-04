import { Button } from "react-bootstrap";
import "./windowConfirmation.css";

const WindowConfirmation = () => {
  const { message, onYes, onNo } = this.props;
  if (!message) return null;
  return (
    <div className="confirmation-form">
      <div className="confirmation-form-box">
        <div className="confirmation-message">{message}</div>
        <Button onClick={onNo}>No</Button>
        <Button onClick={onYes}>Yes</Button>
      </div>
    </div>
  );
};

export default WindowConfirmation;

// import {connect} from "react-redux";
// import WindowConfirmation from "./windowConfirmation";
// import Confirmations from "../../confirmations";
// import {closeWindowConfirmation, confirmWindowConfirmation} from "../../actions/window";
// import Window from "./window";

// const mapStateToProps = (state, ownProps) => ({
// message: Confirmations[ownProps.confirmation].message,
//   });

// const mapDispatchToProps= (dispatch, ownProps) => ({
//   onYes: () => dispatch(confirmWindowConfirmation(ownProps.windowId, ownProps.confirmation, Confirmations[ownProps.confirmation].closeConfirmation)),
//   onNo: () => dispatch(closeWindowConfirmation(ownProps.windowId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(windowConfirmation)
