    // level 1
    let row  = 4 ;
    let pattern = "";

    for(let i = 1; i <= row ;  i++){
        for(let j = 1; j <= row -i;  j++){
            pattern += " ";
        }
        for(let k = 1 ; k <= 2 * i -1 ; k++ ){
        if( i ===2 && k === 3){
            k -= 1
        } 
        if( i === 3 &&  k === 4){
            k-= 2
        }
        if( i === 3 &&  k === 5){
            k-= 4
        }if( i=== 4 && k ===5 ){
            k-= 2
        }
        if( i=== 4 && k ===6 ){
            k-= 4
        }
        if( i=== 4 && k ===7 ){
            k-= 6
        }
        pattern += k;
        }
        pattern += "\n";

    }

    console.log(pattern);
