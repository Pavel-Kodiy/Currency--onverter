import React from 'react';
import classes from './convertor.module.css'
import { MyInput } from '../myInput/MuInput';
import { MySelect } from '../mySelect/MySelect';

const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP'];

export const Convertor = ({ value, currency, onChangeValue, onChangeCurrency }) => (
   <div className={classes.wrapper}>
      <MySelect
         defaultCurrencies={defaultCurrencies}
         currency={currency}
         onChangeCurrency={onChangeCurrency}
      />
      <MyInput
         onChangeValue={onChangeValue}
         value={value}
      />
   </div>
);