import { Gender } from './enum';

export function filter(gender, people) {
  if (!gender) {
    return people;
  }
  return people.filter((character) => {
    if (gender === Gender.Other) {
      return (
        character.gender !== Gender.Female && character.gender !== Gender.Male
      );
    }
    return character.gender === gender;
  });
}
