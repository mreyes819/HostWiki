getFormattedTime = function(fourDigitTime) {
  var hours24 = parseInt(fourDigitTime.substring(0, 2));
  var hours = ((hours24 + 11) % 12) + 1;
  var amPm = hours24 > 11 ? 'pm' : 'am';
  var minutes = fourDigitTime.substring(2);

  return hours + ':' + minutes + amPm;
};