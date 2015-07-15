# Button

## Usage
Include the Material Design Lite CSS and JavaScript files in each HTML page in your project.  
More info: http://www.getmdl.io/started/index.html#download
```html
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css" />
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js"></script>
```
In your project's JS files import the components you need.
```javascript
import React from 'react';
// import { Button } from 'material-design-react';
import Button from 'material-design-react/lib/button';

let myButton = <Button display="raised" ripple accent>Label</Button>;
```

## Properties
Property | Type | Effect | Remarks
-------- | ------ | ------ | -------
ripple | bool | Add ripple effect | JS effect
raised | bool | Add shadow | Mutually exclusive with fab, miniFab, icon
fab | bool | Make floating action button | Mutually exclusive with raised, miniFab, icon
miniFab | bool | Make mini floating action button | Mutually exclusive with raised, fab, icon
icon | bool | Make icon button | Mutually exclusive with raised, fab, miniFab
display | one of: raised, fab, miniFab, icon | *See above* | Mutually exclusive with raised, fab, miniFab, icon
colored | bool | Add background color | Mutually exclusive with accent
accent | bool | Add accent background color  | Mutually exclusive with colored
disabled | bool | Disable button | Adds `disabled` prop to `<button>`

## MDL Docs

http://www.getmdl.io/components/index.html#buttons-section


## Notes
-
