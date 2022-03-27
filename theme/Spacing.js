export function Padding(value, axis) {
  if (axis == "x") {
    return { paddingHorizontal: value };
  } else if (axis == "y") {
    return { paddingVertical: value };
  } else {
    return { padding: value };
  }
}

export function Margin(value, axis) {
  if (axis == "x") {
    return { marginHorizontal: value };
  } else if (axis == "y") {
    return { marginVertical: value };
  } else {
    return { margin: value };
  }
}
