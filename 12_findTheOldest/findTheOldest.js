const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = "";
    let index = 0;

    for (let person in people) {
        let age = people[person].yearOfDeath - people[person].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = people[person].name;
            index = person;
        }
    }
    return people[index];
}
// Do not edit below this line
module.exports = findTheOldest;
