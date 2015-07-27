# Button

http://www.getmdl.io/components/index.html#buttons-section


## Usage

```javascript
// import { Button } from 'material-design-react';
import Button from 'material-design-react/button';

let myButton = <Button display="raised" ripple accent>Label</Button>;
```

## Properties
Property | Type | Default | Effect | Remarks
-------- | ---- | ------- | ------ | -------
ripple | bool | undefined | Add ripple effect | JS effect
rippleEffect | bool | undefined | Add ripple effect | Alias for `rippleEffect`
raised | bool | undefined | Add shadow | Mutually exclusive with `fab`, `miniFab`, `icon`
fab | bool | undefined | Make floating action button | Mutually exclusive with `raised`, `miniFab`, `icon`
miniFab | bool | undefined | Make mini floating action button | Mutually exclusive with `raised`, `fab`, `icon`. MDL needs you to also apply `fab` class, we do this implicitly
icon | bool | undefined | Make icon button | Mutually exclusive with `raised`, `fab`, `miniFab`
display | one of: `raised`, `fab`, `miniFab`, `icon` | undefined | *See above* | Mutually exclusive with `raised`, `fab`, `miniFab`, `icon`
colored | bool | undefined | Add background color | Mutually exclusive with `accent`
accent | bool | undefined | Add accent background color  | Mutually exclusive with `colored`
disabled | bool | undefined | Disable button | Adds `disabled` prop to `<button>`


## Notes
*none*
