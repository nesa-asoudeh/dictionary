function findWords(inputString, dictionary){
    console.log("Input string is: " + inputString);
    console.log("Dictionary is: " + dictionary);

    result = []
    /* 
    Iterate through the given dictionary and run the following function to check if each member of
    the dictionary (word) can be be formed by rearranging some or all of the letters in the inputString
    */
    result = dictionary.reduce((output, word) => {
        let  found = false;
        
        // convert input string to an array of characters
        const chars = inputString.split(""); 

        for(let i=0; i<word.length; i++) {
            // check if word's ith character exists in inputString
            const index = chars.indexOf(word.charAt(i));
            /*if yes :
                1.remove that character from inputString (each letter can be used up to once)
                2.set found variable to true
            */
            if(index !== -1) {
                chars.splice(index, 1);
                found = true;
            // otherwise set found to false and exit the loop
            } else {
                found = false;
                break;
            }
        }
        // If after exiting the for loop "found" is still true add word to the output array
        if (found) {
            output.push(word);
        }
        
        return output;
    }, []);
    console.log("output is: " + result);
    return result;
};

exports.findWords = findWords;