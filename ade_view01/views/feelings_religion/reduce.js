function(keys, values, rereduce) {
  //count
  if (rereduce) {
    return sum(values);
  } else {
    return values.length;
  }
}
