function bricksCalculator(floor){
    let bricks = 1000;
    if( floor == 0 ){
        console.log("Please Enter Your Valid Floor Number");
    }
    else if( floor <= 10 ){
        let floorFeet = floor*15;
        bricks = bricks*floorFeet;
        return bricks;
    }else if( floor <= 20 ){
        floorFeet = floor*12;
        bricks = bricks*floorFeet;
        return bricks;
    }
    else{
        floorFeet = floor*10;
        bricks = bricks*floorFeet;
        return bricks;
    }
};

let result = bricksCalculator(45);
console.log("Total Bricks = ", result);
