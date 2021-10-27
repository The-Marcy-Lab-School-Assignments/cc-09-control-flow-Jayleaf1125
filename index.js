//1

/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if 5 is less than number && number is less than 
	10, return true, else return false
	Console log the function call
*/

function betweenFiveAndTen(num) {
		if (5 <= num && num <= 10) {
			return true;
		} else {
			return false;
		}
}

// console.log(betweenFiveAndTen(2));


/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if 10 is less than number && number is less than 
	30, return true, else return false
	Console log the function call
*/

//2
function betweenTenAndThirty(num){
        if (10 <= num && num <= 30) {
			return true;
		} else {
			return false;
		}
}

// console.log(betweenTenAndThirty(35));

/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if 30 is less than number && number is less than 
	50, return true, else return false
	Console log the function call
*/


//3
function betweenThirtyAndFifty(num){
        if (30 <= num && num <= 50) {
			return true;
		} else {
			return false;
		}
}

// console.log(betweenThirtyAndFifty(55));


/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if (0 is less than number AND number is less than 
	30) OR (30 is less that number AND number is less than 50) , return true, else return false
	Console log the function call
*/

//4
function betweenThirtyFiftySeventy(num){
        if ((0 <= num && num <= 30) || (30 <= num && num <= 50)) {
            return true;
        } else {
            return false;
        }
}

// console.log(betweenThirtyFiftySeventy(170));


/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if (0 is less than number AND number is less than 
	20) OR (50 is less that number AND number is less than 60) , return true, else return false
	Console log the function call
*/

//5
function betweenTwentyFiftySixty(num){
        if ((0 <= num && num <= 20) || (50 <= num && num <= 60)) {
            return true;
        } else {
            return false;
        }
}

// console.log(betweenTwentyFiftySixty(61))


/*
    Add a paramter for number
    Create and if / else statement
    Create the condition if (0 is less than number AND number is less than 
	10) OR (20 is less that number AND number is less than 30) , return true, else return false
	Console log the function call
*/

//6
function betweenTenTwentyThirty(num){
        if ((0 <= num && num <= 10) || (20 <= num && num <= 30)) {
            return true;
        } else {
            return false;
        }
}

// console.log(betweenTenTwentyThirty(31));