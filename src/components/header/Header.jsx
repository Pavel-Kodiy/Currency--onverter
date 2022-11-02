import classes from './header.module.css';

export const Header = (props) => {
   const { usd, eur } = props;
   return (
      <div className={classes.wrapper}>
         <h1 className={classes.title}>Your Currency Convertor</h1>
         <div>
            <p className={classes.info}>EUR: {eur}</p>
            <p className={classes.info}>USD: {usd}</p>
         </div>
      </div>
   );
};
