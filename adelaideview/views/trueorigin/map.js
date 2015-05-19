// Team 9	(Adelaide)
// Jun Jen CHAN	(341759)
// Daniel TEH	(558424)
// Tou LEE	(656128)
// David MONROY	(610346)
// Jaime MARTINEZ	(642231)

//Shows where tweeter account was originally created but tweets from Adelaide
function(doc) {

	
	if(doc.user.time_zone){
		var zone;
		var username= doc.user.screen_name;
		if(doc.user.time_zone=="Adelaide" && doc.user.time_zone=="Australia/Adelaide"){
			zone = "Adelaide";
		}else{
			zone = doc.user.time_zone;	
		}
		
		
 		emit([zone,username],1);	
	}
	
}