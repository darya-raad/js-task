// 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}

// 2
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// 3
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function min(a, c) {
  if (a < c) {
    return a;
  } else {
    return c;
  }
}

function min(a, c) {
  return a < c ? a : c;
}