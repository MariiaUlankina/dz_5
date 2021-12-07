function answer(){
    let isConfirm = true;
    let words = '';

            for (let step = 0; ; step++){
                if (step !== 0 && step % 3 === 0){
                    isConfirm = confirm ('Сontinue or not?');
                    
                }
                if (!isConfirm){
                    break;
                }
                
                let result = prompt ('Enter words');
                words = `${words} ${result}`;
            } 
            console.log(words);
                         
}

answer();



    
    





  

    





