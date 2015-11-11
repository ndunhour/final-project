$(function() {
  var houseTypes = [
    "Buy House",
    "Buy Condo",
    "Rent House",
    "Rent Condo"
  ];
  $( '#houseTypes' ).autocomplete({
    source: houseTypes
  });
});
