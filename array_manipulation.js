function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}
//Given a string of a two word name formatted with any mix of capitalization,
// can you manipulate the string to ensure the first name has a capital first letter
//and the last name is totally capitalized? Assume there's a space between the names.
//For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN".
//Your answer should be a single string saved to the variable called finalName
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");


    // Don't delete this line!
    return finalName;
};

var names = oldName.split(" ")
//Here, we're creating an array of names by breaking the original name at the space.
 //At this point for our original example, names === ["AlbERt", "EINstEiN"]

names[1] = names[1].toUpperCase();
//The string.toUpperCase() method does exactly what its name describes.
// It's acting on names[1], which is "EINstEiN" in the original example.
// So here, we're reassigning the second element in the names array to the all caps version of "EINSTEIN".

names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//This line builds Albert. names[0].slice(0,1).toUpperCase() starts by acting on the first element in the names array
// which is "AlbERt" in the example. Then, we grab just the first letter by using .slice(0,1).
// Then we simply use the .toUpperCase() method again to make sure the first letter is capitalized.
// Also, notice how we chained two methods together here.

//The next part,
 names[0].slice(1).toLowerCase()
 //acts similarly, except this time we're using .slice(1) to grab the rest of the first string,
//which is "lbERt" in the example.
// Then we simply chain the .toLowerCase() method to make sure that the rest of the letters in the first name are lower case.
//Once we have the first letter capitalized and the rest of the name lower case, we concatenate them together with the +.

finalName = names.join(" ");
//array.join([chars]) lets us put array elements together into a single string. Each element will be separated by the optional chars. In this case, we want a space between the two names, so we made the chars a single space, " ". With that, we've joined "Albert" and "Einstein" to form "Albert EINSTEIN"!

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
