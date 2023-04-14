function count(string) {
  if(string === ''){
    return {};
  }
  let counts = {};
  for (let char of string) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

console.log(count("aba"));

