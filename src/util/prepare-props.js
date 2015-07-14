import mdlClassName from './mdl-class-name';
import omitObjKeys from './omit-obj-keys';

export default function prepareProps(props, config) {
  return Object.assign(
    omitObjKeys(props, config.modifierClassNameFns),
    {className: mdlClassName(props, config)}
  );
}
