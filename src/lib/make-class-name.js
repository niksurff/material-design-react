/**
 * Return className with mdl css classes and className from props
 * @param  {Object} props   props defined on Component
 * @param  {Object} config  config for className creation
 * @return {String}         the final className
 */
export default function makeClassName(props, config) {
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
