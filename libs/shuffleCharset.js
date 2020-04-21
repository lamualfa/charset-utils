function shuffleCharset(charset) {
  const isStr = typeof charset === 'string';
  const charsetLength = charset.length;

  charset = isStr ? charset.split('') : charset;

  for (let i = charsetLength - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const tmp = charset[i];
    
    charset[i] = charset[newIndex];
    charset[newIndex] = tmp;
  }

  return isStr ? charset.join('') : charset;
}

module.exports = shuffleCharset;
