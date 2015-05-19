// Team 9	(Adelaide)
// Jun Jen CHAN	(341759)
// Daniel TEH	(558424)
// Tou LEE	(656128)
// David MONROY	(610346)
// Jaime MARTINEZ	(642231)

//Checks where the tweet was post from either webpage or cellphone among others
function(doc) {
	
	source= (doc.source.toLowerCase().split(">")[1]).split("<")[0];
 	emit(source,1);
	
}
