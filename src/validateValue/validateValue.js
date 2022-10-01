const validateValue = (value) => {
  if (value < 0 || value > 1000) {
    return false;
  }
  return true;
};

module.exports = validateValue;
