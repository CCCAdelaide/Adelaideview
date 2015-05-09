function(doc) {

	if(doc.coordinates){

		var moods= [
	{name: "negative", count: 0, synonyms: ["sad", "anxious", "awful", "frustrated"]},
	{name: "positive", count: 0, synonyms: ["happy", "elated","extraordinary"]}
	];
	var i;
	var words= doc.text.toLowerCase().split("");
	for (i in words) {
		if (moods[0].synonyms.indexOf(words[i]) > -1) moods[0].count++;
		if (moods[1].synonyms.indexOf(words[i]) > -1) moods[1].count++;
	}
	var coordinates= doc.coordinates.type.coordinates;
	var username= doc.user.screen_name;		
	var timeofday;
	if (Number(((doc.created_at.split(":")[0]).split(" ")[3]) < 12)) {
		timeofday= "am";
	} else {
		timeofday= "pm";
	}
	emit([username,timeofday,coordinates], moods[1].count - moods[0].count);


	}


	
}