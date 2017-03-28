$(document).ready(function() {

  $("#formOne").submit(function(event){
  event.preventDefault();



  var groArr = [];

  groArr.push($("#input1").val());
  groArr.push($("#input2").val());
  groArr.push($("#input3").val());

  var orderedGroArr = groArr.sort();

  var this1 = orderedGroArr.map(function(arritem) {
    return arritem.toUpperCase();
  });

  $("#buyme1").text(this1[0]);
  $("#buyme2").text(this1[1]);
  $("#buyme3").text(this1[2]);

  $("#formOne").hide();
  });
  // grocery list fuctions

  $("#formTwo").submit(function(event){
    event.preventDefault();

    var initialWd = $("#words1").val();
    var splitWd = initialWd.split(" ");
    console.log(splitWd);

    var wdThree = splitWd.map(function(tmpindex) {

      // for (var count = 0; count <= splitWd.length; count += 1 ) {
      //   console.log(count);
      // }
      if (tmpindex.length >= 3) {
        return tmpindex;
        console.log(tmpindex);
      } else {
        console.log(tmpindex >= 3);
      }
      console.log("wdThree: " + wdThree);

    });
    $("#poetry").text(initialWd);

  });
  // end word play
  $("#formThree").submit(function(event){
    event.preventDefault();

    var input = parseInt($("#factorial-input").val());
    var factor = function(input) {
      if (input === 0) {
        return 1;
      } else (return input * factorial(n - 1);
      }
      alert(number);
  });
});
