import { useState } from "react";
import "./section.css";

const Section = (props) => {
  const [open, setOpen] = useState(!props.defaultCollapsed);

  const getClassName = () => {
    if (!this.props.title && !this.props.isCollapsible) return "";
    switch (this.props.sectionLevel) {
      case 1:
        return "section";
      case 2:
        return "sub-section";
      default:
        return "";
    }
  };

  const toggle = () => {
    //if (this.state) this.setState((state) => ({ open: !state.open }));
    if (this.state) setOpen((state) => ({ open: !state.open }));
    else this.props.onToggle();
  };

  const isOpen = () => {
    if (this.state) return this.state.open;
    else return this.props.open;
  };

  const { title, isCollapsible, children, onClose } = this.props;
  const openSection = isOpen();
  const toggleSection = openSection ? (
    <i className="far fa-minus-square"></i>
  ) : (
    <i className="far fa-plus-square"></i>
  );
  return (
    <div className={getClassName()}>
      {(isCollapsible || title) && (
        <h4 className="section-header">
          <span>{title}</span>
          <span>
            <span className="close-section" onClick={onClose}>
              {isCollapsible && onClose && <i className="fas fa-thumbtack"></i>}
            </span>
            <span className="toggle-section" onClick={toggle}>
              {isCollapsible && toggleSection}
            </span>
          </span>
        </h4>
      )}
      {open && <div className="children">{children}</div>}
    </div>
  );
};

export default Section;
