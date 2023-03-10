const FilterItem = (props) => {
  return (
    <div className={props.className}>
      <input type="checkbox" name={props.category} id="" />
      <label htmlFor="">{props.category}</label>
    </div>
  );
};

export default FilterItem;
