
    function answer(){

        while (true){
            let result = prompt ('Enter words');
            for (let words = 0; words < 3; words++){
                words = prompt ('Enter words');
                result = result+words;
                console.log(result);
            }  
              
            let question = confirm ('Сontinue or not?');
            if (question === false){
                break;
            }

        }
    
}

answer();



    
    





  

    





