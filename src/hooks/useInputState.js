import { useState } from "react";
export default initialVal => {
  const [values, setValue] = useState({
    name: '',
    amount: '',
    category: '',
 
  });
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [values, handleChange, reset];
};
