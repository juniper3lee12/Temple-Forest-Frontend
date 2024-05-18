import React, {useState} from 'react';
import { CheckBox } from '@ui-kitten/components';

export default function Status () {

  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      checked={checked}
      onChange={nextChecked => setChecked(nextChecked)}
    >
      {`Is the goal achieved today?: ${checked}`}
    </CheckBox>
  );
};