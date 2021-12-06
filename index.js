
    function answer(){
    let result = prompt ('Enter words'); 
    console.log (result); 
    
    for (let newWords = 0; newWords < 2; newWords++){
    newWords = prompt ('Enter words');
    result = result + newWords;
    console.log(result);
    }    

}
do {
    answer();
    let question = confirm ('Сontinue or not?');
} 
while (question === false)


    
    





  

    





