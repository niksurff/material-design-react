import makeClassName from './make-class-name';
import omit from 'omit';

export default function prepareProps(props, config) {
  let modKeys = Object.keys(config.modifierClassNameFns);
  let omitModKeys = omit(modKeys);

  return Object.assign(
    omitModKeys(props),
    {className: makeClassName(props, config)}
  );
}
