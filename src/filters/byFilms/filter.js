export function filter(films, people) {
  if (!films?.length) {
    return people;
  }
  return people.filter((character) =>
    films.every((film) => {
      return character.films.includes(film);
    }),
  );
}
