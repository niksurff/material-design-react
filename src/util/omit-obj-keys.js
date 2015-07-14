import omit from 'omit';

export default function omitObjKeys(props, obj) {
  return omit(Object.keys(obj))(props);
}
