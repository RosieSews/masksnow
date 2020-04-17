/**
 * PropStyles Mapping
 *
 * @param {String} propName The hex color code (with or without # prefix).
 * @param {Function} mapFunc
 */
const PropStyles = (propName, mapFunc) => props => {
  const theme = props.theme;
  const map = mapFunc(theme);
  const prop = props[propName];

  return map[prop];
};

export { PropStyles };
