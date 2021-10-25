class Rocket
{
    //Name states first
    constructor(
        fuelType,
        weight,
        power
    )
    { //Substantiate states
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }

    launch()
    {
        console.log("Launch sequence started.");
        alert("Launch sequence started.");    
        return true;    
    }

    landing()
    {
        console.log("Landing sequence started.");
        alert("Landing sequence started.");
        return true;
    }

    detachThruster(thrusterID)
    {
        console.log("detachThruster sequence started.");
        alert("Thruster " + thrusterID + " has been detached.");
        return true;
    }
}

class Mission
{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft
    )
    {
        this.objective = objective;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
    }

    displayMissionParams()
    {
        alert("The spacecraft " + this.spaceCraft + " will launch on " + 
            this.launchDateDay + " of " + this.launchDateMonth + ", " + this.launchDateYear);
    }
    
    displayMissionData()
    {

    }

    changeSpaceCraft(sSpaceCraft)
    {

    }
}