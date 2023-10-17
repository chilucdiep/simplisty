# Simplisty

Simplisty is a small React component library with various reusable components. It was created to enable developers to easily build clean, simple & minimalist UI's without a lot of design and CSS pain points.


# Installation

To install this library, you can use npm or yarn.

```bash
npm install simplisty
# or
yarn add simplisty
```

# Components

1. [Button](#button)
2. [Text Input](#input)
3. [Select Input](#select)
4. [Card](#card)
5. [Counter](#counter)

## <a name="button"></a>Button Component

The `Button` component is designed for various user interface interactions. It offers customization options for labels, disabled state, and visual variants.

### Usage

#### Props

| Prop         | Type                                      | Default             | Description                                      |
| ------------ | ----------------------------------------- | ------------------- | ------------------------------------------------ |
| `label`      | `string`                                  | N/A                 | The label text to display on the button.        |
| `disabled`   | `boolean`                                 | `false`             | Determines if the button is disabled.           |
| `variant`    | `"primary"` or `"secondary"`              | `"secondary"`       | Sets the visual variant of the button.           |
| `onClick`    | `(e: React.MouseEvent) => void` (optional) | N/A                 | A callback function to handle button clicks.     |

</br>

#### Example 1: Default Button

This example demonstrates a default Button with no additional props.

<img width="145" alt="Default Button" src="https://github.com/chilucdiep/simplisty/assets/43826291/6e18229e-6bd0-4aad-aa4d-bf18805db0cc">

*Code Example:*

```jsx
import React from 'react';
import { Button } from 'your-component-library';

function MyComponent() {
  return (
    <div>
      <Button label="Click me" />
    </div>
  );
}
```
</br>

#### Example 2: Primary Button

This example shows a Button with the variant prop set to "primary."

<img width="164" alt="Primary Button" src="https://github.com/chilucdiep/simplisty/assets/43826291/be3b770f-8231-4603-aa01-adec16275c92">

*Code Example:*

```jsx
import React from 'react';
import { Button } from 'your-component-library';

function MyComponent() {
  return (
    <div>
      <Button label="Click me" variant="primary" />
    </div>
  );
}
```
</br>

#### Example 3: Disabled Button

This example illustrates a disabled Button.

<img width="170" alt="SDisabled Button" src="https://github.com/chilucdiep/simplisty/assets/43826291/088335d4-fc67-4371-90a9-2bc4c70685e5">

*Code Example:*

```jsx
import React from 'react';
import { Button } from 'your-component-library';

function MyComponent() {
  return (
    <div>
      <Button label="Click me" disabled />
    </div>
  );
}
```

## <a name="select"></a>Single & Multi Select Component

The `Select` component provides a customizable dropdown select input that allows users to choose from a list of options.

### Usage

#### Props

| Prop         | Type                                      | Default             | Description                                      |
| ------------ | ----------------------------------------- | ------------------- | ------------------------------------------------ |
| `maxWidth`      | `string`                                  | N/A                 | Sets the maximum width of the select container.        |
| `options`      | `SelectOption[]`                                  | N/A                 | An array of options to populate the select dropdown.|
| `multiple`      | `boolean`                                  | `false`              | Indicates whether multiple options can be selected.|
| `selectedOption`      | `SelectOption or SelectOption[]`                                  | `undefined`              | The currently selected option(s) in the select dropdown.|
| `onChange`      | `(selectedOption?: SelectOption`               | `SelectOption[]) => void`              | N/A |

</br>

#### Example 1: Single Select

This example demonstrates a single select configuration.
<div align="center"><img src="https://github.com/chilucdiep/component-library/blob/main/public/SingleSelect.gif" width="50%"></div>

*Code Example:*
```jsx
import React, { useState } from 'react';
import { Select } from 'your-component-library';

function SingleSelectExample() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };

  return (
    <Select
      maxWidth="400px"
      options={options}
      selectedOption={selectedOption}
      onChange={handleSelectChange}
    />
  );
}
```

</br>

#### Example 1: Multiple Select

This example demonstrates a multiple select configuration.

<div align="center"><img src="https://github.com/chilucdiep/component-library/blob/main/public/MultiSelect.gif" width="50%"></div>

*Code Example:*
```jsx
import React, { useState } from 'react';
import { Select } from 'your-component-library';

function MultipleSelectExample() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([options[0]]);

  const handleSelectChange = (newOptions) => {
    setSelectedOptions(newOptions);
  };

  return (
    <Select
      maxWidth="400px"
      multiple
      options={options}
      selectedOption={selectedOptions}
      onChange={handleSelectChange}
    />
  );
}
```

</br>
