import React, {useState,useEffect} from 'react';
import { CheckBox } from '@ui-kitten/components';


export default function Status ({onStatusChange}) {

  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    if(onStatusChange){      
      onStatusChange(checked ? 1 : 0);
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