//activate JQuerry library
$(document).ready(function () {

    // calling the current time using moment.js
    const now = moment().format('MMMM DD YYYY');
    //append the current date to header
    $("#note").prepend(now + "<br><br>");


    // values for current hours
    let now24 = moment().format('H');
    // now24 = 11; // activate this line to test with different time of the day

    //access localstorage plan text array and save as planstorage
    let storedTextArray = JSON.parse(localStorage.getItem("storedTextArray"));
    // If plans array cant be found in local storage build an array to store text box elements
    if (storedTextArray !== null) {
        textArray = storedTextArray;
    } else {
        // on the first time this page ever loads create a new array 
        textArray = new Array(9);
        textArray[4] = "Picnic lunch outside";
    }


    // Building the DOM Elements 
    //varibale form class containers
    let $container = $(".container");
    $container.empty();
    //loop through using hours as the values for indexing
    for (var hour = 9; hour <= 17; hour++) {
        var index = hour - 9; //index relative to hour

        //build the row element
        let $eachrow = $('<div>');
        $eachrow.addClass('row'); 
        //this puts an ID used for Time Markup
        $eachrow.attr("hour-index", hour);

        //create a col to house to timebox
        //Had to create cols to fill the body
        let $TimeDiv = $('<div>');
        $TimeDiv.addClass('col-md-2')
        // create a box to house the timedisplay
        const $timebox = $('<span>');
        $timebox.addClass('hour');

        // formatt hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour >= 12) {
            displayHour = hour - 12;
            ampm = "pm";
        } else {
            displayHour = hour;
            ampm = "am";
        };
        //mark up the hours in timebox 
        $timebox.text(displayHour + ampm);

        //after creating each row, append to the container
        $container.append($eachrow);
        //append each timebox and the div that houses it to eachrow
        $eachrow.append($TimeDiv);
        $TimeDiv.append($timebox);

        // building the middle textarea 
        //make an textarea input div in the html
        let $textArea = $('<input>');
        // build an idea using noation that refences a varible into a string to name the current id
        $textArea.attr('id', `input-${index}`);
        $textArea.attr('class', 'textarea')
        $textArea.attr('type', 'text');
        $textArea.attr('hour-index', index);
        $textArea.val(textArray[index])
        //create a colume to section the textarea
        let $TextAreaDiv = $('<div>');
        $TextAreaDiv.addClass('col-md-9');
        //add the text area to each row div
        $eachrow.append($TextAreaDiv);
        $TextAreaDiv.append($textArea);
        // building the save button 
        let $saveBtn = $('<button>');
        $saveBtn.addClass('saveBtn');
        // build an idea using noation that refences a varible into a string to name the current id
        $saveBtn.attr('id', `saveid-${index}`); 
        $saveBtn.attr('save-id', index);
        $saveBtn.text('save');
        //create a col to house the button
        let $saveDiv = $('<div>');
        $saveDiv.addClass('col-md-1');
        //mark up 
        $eachrow.append($saveDiv);
        $saveDiv.append($saveBtn);

        updateRowColor($eachrow, hour);

    };
    // updates the row color
    function updateRowColor($eachrow, hour) {
        //change moement programed values to numbers 24hr clocks
        now24 = parseInt(now24);//exact moment right now
        hourint = parseInt(hour);//hour used in indexing 

        //if condition is met add the style to the eachrow element
        if (hourint < now24) {
            $eachrow.addClass('past');
        } else if (hourint > now24) {
            console.log("greaterthan");
            $eachrow.addClass('future');
        } else {
            $eachrow.addClass('present');

        }

    };
    // when a button is pressed
    $(document).on('click', 'button', function (e) {
        e.preventDefault();
        //refrence the value of save-id for the clicked button
        let $index = $(this).attr('save-id');
        //console.log($index)
        //refrences the input at the respective textbox
        let inputId = '#input-' + $index;
        //console.log(inputId)
        //calls on the text in the textbox
        let $value = $(inputId).val();
        //console.log($value)
        //store the text into the respecitive index of the array
        textArray[$index] = $value;
        console.log(textArray);
        //Save the textArray to local storage as storedTextArry which we will call
        //call in the begging to populated the Textboxes
        localStorage.setItem("storedTextArray", JSON.stringify(textArray));

    })
    //add the hovering litsener to the saveBtn class
    $('.saveBtn').hover(function () {
        //when this buttion is chosen
        $(this).addClass('saveBtnHover');
        //stuff to do on mouse enter
        console.log('hovering');
    },
        function () {
            //stuff to do on mouse leave
            $(this).removeClass("saveBtnHover");
        });

});
