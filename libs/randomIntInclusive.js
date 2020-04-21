function randomIntInclusive(min, max) {
  min = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

module.exports = randomIntInclusive;
