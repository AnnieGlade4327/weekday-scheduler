var SpecialToDate = '01/03/2021';
var SpecialTo = moment(SpecialToDate, "01/03/2021");
if (moment() > SpecialTo) {
  alert("date is Today or in Future")
} else {
    alert('date is in the past');
}
$("#currentDay").text(moment().format("28th February 2021, 09:17:35 a"));

setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container | select all of the buttons | Array time and numbers
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// for loop to iterate through the timeList and timeId array and appends the data 
for (let i = 0; i < timeList.length; i++) {
    // let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>")

    let createTextarea = $("<textarea class=''>");
    createTextarea.attr("id", timeList[i]);

    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    createTime.text(timeList[i]);
    // createRow.append(createTime);

    // this create the textarea where user input content
    // createTextarea.text();
    // createRow.append(createTextarea);

    // this create the buttons from 9am to 5pm
    createButton.text();
    createButton.append(createButton);
}

    //call the localStorage Function
    localStorage.getItem;

//store the data from the textarea into localStorage
function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

//save the stored data that has been entered into the textarea
$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

function updateByTheHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        if (blockHour <= currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
updateByTheHour();