var twoHours = 7200000;

var OldStDate = parseInt($context.currentTrack.propertyList.getPropertyValue("start_date"));
var NewStDate = OldStDate + twoHours;

var OldStDate = $context.currentTrack.propertyList.setPropertyValue("start_date", NewStDate);
