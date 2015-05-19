// Team 9 (Adelaide)
// Jun Jen CHAN (341759)
// Daniel TEH (558424)
// Tou LEE  (656128)
// David MONROY (610346)
// Jaime MARTINEZ (642231)

//Check the day where the tweet was posted
function(doc) {

  var d = doc.created_at;
  var tweet_date = new Date(d);
  // set Adelaide hour
  tweet_date.setHours(tweet_date.getHours()+9);
  tweet_date.setMinutes(tweet_date.getMinutes()+30);
  var number_day = tweet_date.getDay();
  var day;
  switch(number_day){

    case 0:
    day="Sunday";
    break;
    case 1:
    day="Monday";
    break;
    case 2:
    day="Tuesday";
    break;
    case 3:
    day="Wednesday";
    break;
    case 4:
    day="Thursday";
    break;
    case 5:
    day="Friday";
    break;
    case 6:
    day="Saturday";
    break;
  }
    emit([day],1);
}
