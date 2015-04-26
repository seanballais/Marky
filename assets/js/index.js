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

function initPage() {
    resetThenColor("#intro-link");
    $("#topic-title").html("Introduction<small>What is Markdown?</small>");
    $("span#info-text > ul li").css("display", "none");
    $("p#topic-instructions").html("According to Wikipedia, Markdown is a markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.<br><br>To start learning about markdown, press the 'Next' button on the lower right.");
    $("div#markdown-playground").css("display", "none");
    $("button#submit-md").prop("class", "btn btn-primary disabled");
}

// User interactions with Marky
$(document).ready(function() {
    initPage(); // Initial set-up
    
    // Make the selected <li> 'active'
    $("li").click(function() {
        var li_ID = $(this).attr("id");
        resetThenColor("#" + li_ID);
    });
});