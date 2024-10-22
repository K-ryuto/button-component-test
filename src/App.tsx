import React from 'react';
import { Button } from './Button';
import { mediaQuery, SwitchDevice } from './SwitchDevice'
import { PcComponent } from './pcComponent'
import { PsComponent } from './psComponen'
const App  = () => {
  if(SwitchDevice(mediaQuery.sp)){
    return <PsComponent />
  }
  return <PcComponent />
  
};

export default App;
