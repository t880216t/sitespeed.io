export function label(value, ok, warning) {
  value = value || 0;
  if (value > ok) {
    return 'ok';
  } else if (value > warning) {
    return 'warning';
  }
  return 'error';
}
