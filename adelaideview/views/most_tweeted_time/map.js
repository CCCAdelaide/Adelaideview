// Team 9 (Adelaide)
// Jun Jen CHAN (341759)
// Daniel TEH (558424)
// Tou LEE  (656128)
// David MONROY (610346)
// Jaime MARTINEZ (642231)

//Check the times where twitters tweet the most at Adelaide time
function(doc) {

  var d = doc.created_at;
  var tweet_date = new Date(d);

  // set Adelaide hour
  tweet_date.setHours(tweet_date.getHours()+9);
  tweet_date.setMinutes(tweet_date.getMinutes()+30);
  tweet_date.getHours();
  emit([tweet_date.getHours()],1);
}
