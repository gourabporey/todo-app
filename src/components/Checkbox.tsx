const Checkbox = (props: {
  checked: boolean;
  label: string;
  onClick: Function;
  id: string;
}) => {
  return (
    <div
      className='checkbox-wrapper px-2 flex gap-2'
      onClick={() => props.onClick(props.id)}>
      <div>
        <input
          type='checkbox'
          className='checkbox'
          name={props.label}
          value={props.label}
          id={props.id}
          checked={props.checked}
        />
      </div>
      <div>
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
