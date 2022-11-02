import classes from './myInput.module.css';

export const MyInput = (props) => {
   const { onChangeValue, value } = props;
   return (
      <input
         className={classes.inputStyle}
         onChange={(e) => onChangeValue(e.target.value)}
         value={value}
         type="number"
         placeholder={0}
      />
   )
}