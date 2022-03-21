export function Padding(value, axis) {
  if (axis == "x") {
    return { paddingHorizontal: value };
  } else if (axis == "l") {
    return { paddingLeft: value };
  } else if (axis == "r") {
    return { paddingRight: value };
  } else if (axis == "y") {
    return { paddingVertical: value };
  } else if (axis == "t") {
    return { paddingTop: value };
  } else if (axis == "b") {
    return { paddingBottom: value };
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
