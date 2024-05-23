const stringList = ["radar", "hello", "madam", "world", "level"]
let numStrings = 5

//Iterating over stringlist to find Palindrome string.
for(let i=0;i<numStrings;i++){
    let check=""
    check+=stringList[i]

    let checkAgain=""
    //Another iteration to revrse the String.
    for(let j=(check.length)-1;j>=0;j--){
        checkAgain+=check[j]
    }
    

    //checking if stirng is Palindrome or not.
    if(stringList[i]===checkAgain){
        console.log(stringList[i])
    }
}
