// set a handler function for the form's submission event
  $("#draw-form").on("input", function(event) {
    // prevent the form from submitting (otherwise page will refresh)
    event.preventDefault();

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    var input = $('input').val();
    
    updateNumber();
    $('.rangeNumber').append(input);
    
    
    heightStr = input;

    // convert the string to an int
    height = parseInt(heightStr);

    // draw pyramid with the specified height
    drawPyramid(height);
});







/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function updateNumber(message) {
    
    $(".rangeNumber").text("");
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // clear the old content from the #pyramid container
    $('#pyramid').text("");

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row
        rowElem = $("<p>").html(rowStr);

        // TODO 1
        // insert the paragraph into the #pyramid container
        $('#pyramid').append(rowElem);
		
		
    }
}
