import React from 'react';
import { Button } from './Button';

export const PcComponent: React.FC = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Button Variants</h1>
      <h3>Default Button (left icon true and height / width changed)</h3>
      <div style={{ marginBottom: '10px',width: "300px",height: "80px"}}>
        <Button label="Click Me" onClick={handleClick} icon={1}/>
      </div>
      <h3>Disabled Button</h3>
      <div style={{ marginBottom: '10px' }}>
        <Button label="Can't Click" disabled />
      </div>
      <h3>Loading Button</h3>
      <div style={{ marginBottom: '10px' }}>
        <Button label="Click Me" loading />
      </div>
      <h3>Link Button</h3>
      <div style={{ marginBottom: '10px' }}>
        <Button label="Go to Google" href="https://google.com" target="_blank" />
      </div>
      <h3>Submit Button (right icon)</h3>
      <div style={{ marginBottom: '10px' }}>
        <Button label="Submit" type="submit" icon={2}/>
      </div>
    </div>
  );
};

