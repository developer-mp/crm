const MenuItem = (props) => {
  const { title } = props.data;

  return (
    <div className="menuItem">
      <h3>{title}</h3>
    </div>
  );
};

export default MenuItem;
