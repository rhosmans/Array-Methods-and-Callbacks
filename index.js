import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
(a) Home Team name for 2014 world cup final 
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// console.log(fifaData);

/*const twentyFourteenArr = [];
function gettwentyFourteen(arr){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].Year === 2014){
            twentyFourteenArr.push(arr[i]);
        }
    }
}
gettwentyFourteen(fifaData);
console.log(twentyFourteenArr);*/

const twentyFourteenArr = [];

fifaData.forEach(function(element){
    if (element.Year === 2014){
        return twentyFourteenArr.push(element);
    }
});
console.log(twentyFourteenArr);

// (a)
const homeTeamName = twentyFourteenArr.map(function(item){
    return item["Home Team Name"];
});
console.log(homeTeamName);

//(b)
const awayTeamName = twentyFourteenArr.map(function(item){
    return item["Away Team Name"];
});
console.log(awayTeamName);

//(c)
const homeTeamGoals = twentyFourteenArr.map(function(item){
    return item["Home Team Goals"];
});
console.log(homeTeamGoals);

//(d)
const awayTeamGoals = twentyFourteenArr.map(function(item){
    return item["Away Team Goals"];
});
console.log(awayTeamGoals);

//(e)
const twentyFourteenFinals = [];

twentyFourteenArr.forEach(function(element){
    if (element.Stage === "Final"){
        return twentyFourteenFinals.push(element);
    }
});

const twentyFourteenWinner = twentyFourteenFinals.map(function(item){
    if(item["Home Team Goals"] > item["Away Team Goals"]) {
        return item["Home Team Name"];
    } else {
        return item["Away Team Name"];
    }
});

console.log(twentyFourteenWinner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns 
an array of objects with only finals data */
function getFinals(data) {
    return data.filter(function(data){
        return data["Stage"] === "Final";
    });
}
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all of the years in the 
dataset */

function getYears(cb) {
    const years = [];
    cb.forEach(function(final){
        years.push(final.Year);
    });
    return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. Return 
the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    const winners = [];
    cb.forEach(function(finalTotal){
        if (finalTotal["Home Team Goals"] > finalTotal["Away Team Goals"]){
            winners.push(finalTotal["Home Team Name"]);
        } else {
            winners.push(finalTotal["Away Team Name"]);
        }
    });
    return winners;
}
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the 
following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb, cb2) {
    for(let i = 0; i < cb.length; i++){
        console.log(`In ${cb2[i]}, ${cb[i]} won the world cup!`);
    }
};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and 
returns the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeAverageGoals = data.reduce(function(adder, element){
        return adder + ((element['Home Team Goals'])/data.length);
    }, 0);
    const awayAverageGoals = data.reduce(function(adder, element){
        return adder + ((element['Away Team Goals'])/data.length);
    }, 0);

    return `Average # of home goals/match: ${homeAverageGoals} and Average # of away goals/match: ${awayAverageGoals}`;
};
console.log(getAverageGoals(fifaData));



/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` 
and `team initials` and returns the number of world cup wins that country has had. 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins() {


}

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns 
the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and 
calculates the team with the most goals scored against them per appearance 
(average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing 
as listed in the README file. */