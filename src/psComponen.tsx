import React from 'react';
import { Button } from './Button';

export const PsComponent: React.FC = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <div style={{ padding: '20px'}}>
      <h1>Button Variants</h1>
      <h3>Default Button</h3>
      <div style={{ marginBottom: '10px',width: "200px",height:"100px"}}>
        <Button label="Click Me" onClick={handleClick} />
      </div>
      <h3>Disabled Button</h3>
      <div style={{ marginBottom: '10px' ,width: "200px",height:"60px"}}>
        <Button label="Can't Click" disabled />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h3>Loading Button</h3>
        <Button label="Click Me" loading />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h3>Link Button</h3>
        <Button label="Go to Google" href="https://google.com" target="_blank" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h3>Submit Button</h3>
        <Button label="Submit" type="submit" icon={2}/>
      </div>
    </div>
  );
};

