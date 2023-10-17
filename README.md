# Simplisty

Simplisty is a small React component library with various reusable components. It was created to refresh React skills while applying best practices in JavaScript, TypeScript, and clean code.


# Installation

To install this library, you can use npm or yarn.

```bash
npm install your-component-library
# or
yarn add your-component-library
```

# Components

1. [Button](#button)
2. [Text Input](#input)
3. [Select Input](#select)
4. [Card](#card)
5. [Counter](#counter)

## Button

The Button component is designed for various user interface interactions. It offers customization options for labels, disabled state, and visual variants.



### Usage

#### Props

|Prop	|Type	|Description
|----------|:-------------:|------:|
|label	|string	|The label text to display on the button.
|disabled	|boolean	|Determines if the button is disabled.
|variant	|"primary" or "secondary"	|Sets the visual variant of the button.
|onClick	|(e: React.MouseEvent) => void (optional)	|A callback function to handle button clicks.


```jsx
import React from 'react';
import { Button } from 'your-component-library'; // Replace 'your-component-library' with the correct import path.

function MyComponent() {
  const handleClick = () => {
    alert('Button clicked!');
  }

  return (
    <div>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
}
```
