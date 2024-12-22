const findTheOldest = function(people) {
    people.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const aAge = a.yearOfDeath !== undefined ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        const bAge = b.yearOfDeath !== undefined ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
        return aAge - bAge;
   })
   return people[2];
}
// Do not edit below this line
module.exports = findTheOldest;
