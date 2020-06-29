import { useState } from "react";


export default initialVal => {
  const [values, setValues] = useState({
    title: '',
    amount: '',
    iconName: '',
    note: '',
    id: ''
 
  });
  // const handleChange = e => {
  //   setValue({...state, e.target.value});
  // };
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const reset = () => {
    setValues({
      title: '',
      amount: '',
      iconName: '',
      note: '',
      id: ''
   
    });
  };
  return [values, handleChange, reset];
  
};
