export default function mdlClassName(props, config) {
  let {blockClassName, modifierClassNameFns} = config;

  let propClassNameFn = (prop) => modifierClassNameFns[prop];
  let propValue = (prop) => props[prop];

  let prepareClassName = (prop) => {
    let classNameFn = propClassNameFn(prop);
    let value = propValue(prop);

    return classNameFn(value);
  };

  let modifiersClassName = Object.keys(modifierClassNameFns)
    .filter(propValue)
    .map(prepareClassName)
    .join('  ');

  return `${blockClassName}  ${modifiersClassName}  ${props.className || ''}`;
}
