import './FilterItem.scss';

const FilterItem = (props) => {
  return (
    <div id="filterItem">
      <input type="checkbox" name={props.category} id={props.category} />
      <label htmlFor={props.category}> {props.category}</label>
    </div>
  );
};

export default FilterItem;
