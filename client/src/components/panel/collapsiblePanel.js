import { Panel, Glyphicon } from "react-bootstrap";
import { useState } from "react";
import "./collapsiblePanel.css";

const CollapsiblePanel = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const { title, children, name = [], bs = "default" } = this.props;
  const stl =
    open && name.length > 0 ? name[0] : name.length > 1 ? name[1] : name[0];
  const glyphStyle = open ? "menu-down" : "menu-right";

  return (
    <div className={stl}>
      <Panel
        bsStyle={bs}
        style={{ marginTop: 5 }}
        expanded={open}
        onToggle={() => {}}
      >
        <Panel.Heading onClick={handleToggle}>
          <Panel.Title>
            {title}
            <Glyphicon style={{ float: "right" }} glyph={glyphStyle} />
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>{children}</Panel.Body>
        </Panel.Collapse>
      </Panel>
    </div>
  );
};

export default CollapsiblePanel;
