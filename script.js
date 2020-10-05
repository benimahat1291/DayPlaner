//activate JQuerry library
$(document).ready(function () {

    // calling the current time using moment.js
    const now = moment().format('MMMM DD YYYY');
    //append the current date to header
    $("#note").prepend(now + "<br><br>");


    // values for current hours
    let now24 = moment().format('H');
    // now24 = 11; // activate this line to test with different time of the day

    //access localstorage array and save as storedPlans
    let planStorage = JSON.parse(localStorage.getItem("planStorage"));
    // If plans were retrieved from localStorage, update the plan array to it
    if (planStorage !== null) {
        textArray = planStorage;
    } else {
        // on the first time this page ever loads create a new array 
        textArray = new Array(9);
        textArray[4] = "Picnic lunch outside";
    }



    // Building the DOM Elements 
    //varibale form class containers
    let $container = $(".container");
    $container.empty();

    for (var hour = 9; hour <= 17; hour++) {
        var index = hour - 9; // define our index

        //build the row element
        let $eachrow = $('<div>');
        $eachrow.addClass('row'); //
        $eachrow.attr("hour-index", hour);

        //create a col to house to timebox
        let $TimeDiv = $('<div>');
        $TimeDiv.addClass('col-md-2')
        // create a box to house the time
        const $timebox = $('<span>');
        $timebox.addClass('hour');

        // formatt hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = "pm";
        } else {
            displayHour = hour;
            ampm = "am";
        };
        //mark up the hours in timebox 
        $timebox.text(displayHour + ampm);

        $container.append($eachrow);
        $eachrow.append($TimeDiv);
        $TimeDiv.append($timebox);

        // building the middle textarea 
        //make an textarea input div in the html
        let $textArea = $('<input>');
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
        now24 = parseInt(now24);
        hourint = parseInt(hour);

        if (hourint < now24) {
            $eachrow.addClass('past');
        } else if (hourint > now24) {
            console.log("greaterthan");
            $eachrow.addClass('future');
        } else {
            $eachrow.addClass('present');

        }

    };

    $(document).on('click', 'button', function (e) {
        e.preventDefault();
        //refrence the value of save-id index
        let $index = $(this).attr('save-id');
        console.log($index)
        let inputId = '#input-' + $index;
        console.log(inputId)
        let $value = $(inputId).val();
        console.log($value)

        textArray[$index] = $value;
        console.log(textArray);

        localStorage.setItem("planStorage", JSON.stringify(textArray));

    })

    $('.saveBtn').hover(function () {
        //stuff to do on mouse enter
        $(".saveBtn").addClass("saveBtnHover");
    },
        function () {
            //stuff to do on mouse leave
            $('.saveBtn').addClass('saveBtn')
        });

});
