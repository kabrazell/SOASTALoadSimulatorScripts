//var guide = JSON.parse($context.currentTrack.propertyList.getPropertyValue("guide_listing_filtered"));
//all Title ID's from GUide = $.GuidePeriod[*].ChannelLineup[*].Title[*].TitleId

var TitleIDs= $context.currentTrack.propertyList.getPropertyValue("TitleIDs");

prntln(TitleIDs);// This is working! Now we just need to parse Movies, Episodes, and shows! 
//P.S It's an Array (EP03293093,SH023093i09,MV039023032) so TitleIDs[1] would be item 1


var length = TitleIDs.length;
prntln(length);

var movies = [];
var episodes = [];
var shows = []; 

for (var x = 0; x<length; x++){
    
    var Title = TitleIDs[x];//A specific title
  
    var TitleTag = Title.substring(0,2);//First 2 chars tell us the type of title
    prntln(TitleTag);
    if (TitleTag === "EP"){
        prntln(Title + " Was found to be an episode, pushing");
        episodes.push(Title);
        
    }
    else if (TitleTag === "MV"){
         prntln(Title + " Was found to be a Movie, pushing");
        movies.push(Title);
        
    }
    else if (TitleTag === "SH"){
        prntln(Title + " Was found to be a show, pushing");
        shows.push(Title);        
    }
    
}



$context.currentTrack.propertyList.setPropertyValue("movies", movies);
$context.currentTrack.propertyList.setPropertyValue("series", shows);
$context.currentTrack.propertyList.setPropertyValue("episodes", episodes);


function prntln(pString)
{
var prntln = $context.result.postMessage;
var level = $context.result.LEVEL_INFO; 

prntln(level,pString);

}//function prntln(pString)
