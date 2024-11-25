const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = "";
    let index = 0;
    let currentYear = new Date().getFullYear();

    for (let person in people) {
        if (!Object.keys(people[person]).includes('yearOfDeath')) {
            let age = currentYear - people[person].yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = people[person].name;
                index = person;
            }
        } else {
            let age = people[person].yearOfDeath - people[person].yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = people[person].name;
                index = person;
            }
        }
    }
    return people[index];
}
// Do not edit below this line
module.exports = findTheOldest;
