//Variables

var user = $context.currentClip.propertyList.getPropertyValue("user_account");
prntln(user);
var custom_properties = ["user_name","user_password", "streamable_entitled_channel","rotate_accounts","streamable_channels","title_Ids","vod_featured","vod_folders", "VODfolder_loop_count", "title_loop_count","movies","series","episodes","movie"];

//Functions

function custLength(pProplist)
{
//Basically Array.Length(),  we needed to make a custom function for this due to property behavior
var length = 0;

while (pProplist)
{
    
    if (pProplist[length] == null)
    {
      
        return length;
    }
    length++; 
}

return length; 
}//custlength



function proplistContains(pString)
{

//Checks if the property names array (pPropArray) contains the given string (pString)
var proplist = $context.currentTrack.propertyList.propertyNames;
var contains = false; 
var arraylength = custLength(proplist);

for (var x=0; x<arraylength; x++)
{
    if (proplist[x] === pString)
    {
    contains = true;
    return contains;
    }
}

return contains;
}//function proplistContains(pPropArray, pString)



function prntln(pString)
{
var prntln = $context.result.postMessage;
var level = $context.result.LEVEL_INFO; 

prntln(level,pString);

}//function prntln(pString)



function createProperties(pProperties)
{
    
    for (var x=0; x<pProperties.length;x++)
    {
        
        var prop = pProperties[x];   
        
        if (proplistContains(prop) == false)//contains will let us know if the the track already contains this prop, if not lets make it
        {
           $context.currentTrack.propertyList.createProperty(prop);
        }
        
        
    }
    
}//function createProperties(pProperties)


//Logic
createProperties(custom_properties);



// Set the properties on the track

var username = user[1] + "@charter.net";

$context.currentTrack.propertyList.setPropertyValue("user_name", username);
$context.currentTrack.propertyList.setPropertyValue("user_password", user[2]);

//Set dynamic delay(s)
     // nrichardson SOASTA Employee
var nextObject = $context.currentItem.nextItem;
    
// Walk through entire clip
while(null !== nextObject)
{
    // Only operate on Delays
    if(nextObject.type == "Delay")
    {
        // Random number between 80 and 120 (80+40)
        var RandomPercentage = Math.floor(Math.round(Math.random()*40))+80; 
        
        // Convert to decimal (percentage) 
        RandomPercentage = RandomPercentage / 100; // Convert to decimal (percentage) 
        $context.result.postMessage($context.result.LEVEL_INFO, "RandomPercent: " + RandomPercentage);
        
        //Get current value of Delay, and modify by percentage.
        var currentDelayValue = nextObject.systemPropertyList.getPropertyValue("Duration");
        var newCalculatedDelay = 0//Math.floor(currentDelayValue * RandomPercentage);
        var duration = ""+newCalculatedDelay;
        $context.result.postMessage($context.result.LEVEL_INFO, "Next Delay == "+duration);
        nextObject.systemPropertyList.setPropertyValue("Duration",duration.split(".")[0]);
    }
    nextObject = nextObject.nextItem;
}




