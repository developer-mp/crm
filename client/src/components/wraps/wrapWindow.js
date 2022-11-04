import { Rnd } from "react-rnd";
import windowContainer from "../window/windowContainer.js";

const WrapWindow = () => {
  const {
    visible,
    windowId,
    zInd,
    toggleWindow,
    positionWindow,
    sizeWindow,
    position,
    size,
    name,
  } = this.props;

  if (!name) return null;

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "grey",
    visibility: visible ? "visible" : "hidden",
    zIndex: parseInt(zInd),
  };

  return (
    <Rnd
      style={style}
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      dragHndleClassName="window-bar"
      onDragStop={(e, d) => {
        positionWindow(d.x, d.y);
      }}
      onDragStart={toggleWindow}
      onResize={(e, direction, ref, delta, position) => {
        sizeWindow(ref.style.width, ref.style.height, position);
      }}
      bound=".sideB"
    >
      <windowContainer key={windowId} windowId={windowId}></windowContainer>
    </Rnd>
  );
};

export default WrapWindow;
