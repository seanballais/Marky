if (typeof jQuery === "undefined") { throw new Error("Marky requires jQuery") }

// Global variables
var links = [
    [
        "intro-link",
        "basics-link",
        "headers-link",
        "links-link",
        "codes-link",
        "lists-link",
        "quotes-link",
        "images-link",
        "paragraphs-link",
        "play-link"
    ],
    [
        "subtopic-1",
        "subtopic-2",
        "subtopic-3",
        "subtopic-4",
        "subtopic-5",
        "subtopic-6"
    ]
];

// Functions
function resetThenColor(element) {
    var listIndex = 0;

    // Check which nav list is the selected element in
    if (element.indexOf("subtopic") > -1) { listIndex = 1; } // Selected element is in the subtopic nav list

    for (var counter = 0; counter < links[listIndex].length; counter++) {
        $("#" + links[listIndex][counter]).css("border-bottom-color", "#ffffff");
        $("#" + links[listIndex][counter]).css("cursor", "pointer");
    }

    $(element).css("border-bottom-color", "#1c9041");
    $(element).css("cursor", "initial");
}

// User interactions with Marky
$(document).ready(function() {
    $("body").fadeIn("400");

    // Make the selected <li> 'active'
    $("li").click(function() {
        var li_ID = $(this).attr("id");
        resetThenColor("#" + li_ID);
    });
});