import React, {useState,useEffect} from 'react';
import { CheckBox } from '@ui-kitten/components';

// This child component provides a check box for the user to tell if they can complete the 1 hour or 2 hours goals.
export default function Status ({onStatusChange}) {

  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    if(onStatusChange){      
      onStatusChange(checked ? 1 : 0); // Needs to be a number 
    }
  },[checked,onStatusChange]);   

  return (
    <CheckBox 
      checked={checked}
      onChange={nextChecked => setChecked(nextChecked)}
    >
      {`Is the goal achieved today?: ${checked}`}
    </CheckBox>
  );
};