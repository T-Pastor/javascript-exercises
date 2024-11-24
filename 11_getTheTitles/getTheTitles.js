const getTheTitles = function(obj) {
    //convert key/value pairs to array
    let entries = Object.entries(obj);
    let titles = [];

    //iterate through key/value pairs and get the value of only the titles
    entries.filter(() => {
        if(entries.keys === 'title') {
            titles.push(entries.title);
        }
    })

   // return the titles
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;