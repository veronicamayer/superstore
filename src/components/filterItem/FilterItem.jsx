const FilterItem = (props) => {
  return (
    <div>
      <input type="checkbox" name={props.category} id="" />
      <label htmlFor="">{props.category}</label>
    </div>
  );
};

export default FilterItem;
