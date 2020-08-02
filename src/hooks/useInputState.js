import { useState } from "react";


export default initialVal => {
  const [values, setValues] = useState({
    title: '',
    amount: '',
    icon: '',
    note: '',
    id: '',
    accountId: '', 
    mainAccount:'',
    goal: '',
    selectedDate: '',
    calenderFocused: false   
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
      id: '',
      mainAccount:'',
      selectedDate: '',
      calenderFocused: false 
    });
  };
  return [values, handleChange, reset];
  
};
