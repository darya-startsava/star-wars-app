export function filter(minMass, maxMass, people) {
  if (!minMass && !maxMass) {
    return people;
  }
  return people.filter((character) => {
    if (!minMass) {
      return +character.mass <= +maxMass;
    }
    if (!maxMass) {
      return +character.mass >= +minMass;
    }
    return +character.mass >= +minMass && +character.mass <= +maxMass;
  });
}
