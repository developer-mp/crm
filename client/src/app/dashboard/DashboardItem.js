import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const DashboardItem = (props) => {
  const navigate = useNavigate();

  const handleLink = () => {
    let { data } = props;
    navigate(data.urlLink);
  };

  const { img, title, bgColor } = props.data;

  const divStyle = {
    backgroundColor: bgColor,
    backgroundImage: "url(" + img + ")",
  };
  return (
    <div className="dashboardItem" onClick={handleLink}>
      <h3>{title}</h3>
      <div className="dashboardImg" style={divStyle}></div>
    </div>
  );
};

export default DashboardItem;
