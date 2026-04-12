// Recursive

// problem 1 

function get(val) {
    if (val > 5) return; 

    console.log(val);
    
    get(val + 1);       
}

get(1);
