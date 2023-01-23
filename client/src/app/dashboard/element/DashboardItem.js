import { useNavigate } from "react-router-dom";
import "../Dashboard.css";

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
    <div className="dashboard-item">
      <div className="dashboard-item-box" onClick={handleLink}>
        <div className="dashboard-item-img" style={divStyle} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default DashboardItem;
