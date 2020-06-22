import { useState } from "react";
export default initialVal => {
  const [values, setValues] = useState({
    name: '',
    amount: '',
    category: ''
 
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
      category: ''
   
    });
  };
  return [values, handleChange, reset];
  
};
