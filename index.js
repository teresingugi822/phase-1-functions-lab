
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    return Math.abs(someValue - 42) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination) {
    let distanceInFeet = Math.abs(destination - start) * 264;
    console.log(`Start: ${start}, Destination: ${destination}, Distance: ${distanceInFeet}`);

    if (distanceInFeet <= 400) {
        console.log("Returning: 0 (Free ride)");
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        let fare = (distanceInFeet - 400) * 0.02;
        console.log(`Charging: ${fare} for ${distanceInFeet} feet`);
        return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        console.log("Charging: 25 (Flat rate)");
        return 25;
    } else {
        console.log("Returning: cannot travel that far");
        return "cannot travel that far";
    }
}


