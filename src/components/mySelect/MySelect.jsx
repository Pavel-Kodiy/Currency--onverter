import classes from './mySelect.module.css'

export const MySelect = (props) => {
   const { defaultCurrencies, onChangeCurrency, currency } = props;

   return (
      <ul className={classes.currencies}>
         {defaultCurrencies.map((cur) => (
            <li
               onClick={() => onChangeCurrency(cur)}
               className={ currency === cur ? 'active' : ''}
               key={cur}>
               {cur}
            </li>
         ))}
      </ul>
   )
}