export function filter(name, people) {
  return people.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
}
