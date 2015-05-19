function(keys, values, rereduce) {
  //count
  if (rereduce) {
    return sum(keys);
  } else {
    return values.length;
  }
}
