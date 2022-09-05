function distanceFromHqInBlocks(distance){
    return (`${distance} -42 `);

}
function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264
}
function distanceTraveledInFeet(start, destination){
    if(start< destination){
        return(destination-start)*264
    }else{
        return(start-destination)*264
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTraveledInFeet(start, destination)
    if (distance<= 400){
        return 0
    } else if (distance>400 && distance<=2000){
        return .02 *distance
    }else if (distance> 2000 && distance < 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}