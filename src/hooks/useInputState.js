import { useState } from "react";
export default initialVal => {
  const [values, setValues] = useState({
    name: '',
    amount: '',
    category: '',
    note: ''
 
  });
  // const handleChange = e => {
  //   setValue({...state, e.target.value});
  // };
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const reset = () => {
    setValues({
      name: '',
      amount: '',
      category: '',
      note: ''
   
    });
  };
  return [values, handleChange, reset];
  
};
