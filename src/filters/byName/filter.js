export function filter(name, people) {
  if (!name) {
    return people;
  }
  return people.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
}
