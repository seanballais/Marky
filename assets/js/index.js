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

var currentPage = "intro";
var subtopicPage = "";

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

function setTextArea(string) {
    console.log("Am I working?");
    $("textarea#md-editor").val(string);
    $("div#md-output").html(string);
}

function initPage() {
    resetThenColor("#intro-link");
    $("#topic-title").html("Introduction<small>What is Markdown?</small>");
    $("span#info-text > ul li").css("display", "none");
    $("p#topic-instructions").html("According to Wikipedia, Markdown is a markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.<br><br>To start learning about markdown, press the 'Next' button on the lower right.");
    $("div#markdown-playground").css("display", "none");
    $("button#submit-md").attr("class", "btn btn-primary disabled");
    currentPage = "intro";
}

function initBasics() {
    resetThenColor("#basics-link");
    $("#topic-title").html("Basics<small>Bold</small>");
    $("span#info-text > ul li#subtopic-1").css("display", "inline");
    $("span#info-text > ul li#subtopic-2").css("display", "inline");
    $("span#info-text > ul li#subtopic-3").css("display", "inline");
    $("span#info-text > ul li#subtopic-1").html("Bold");
    $("span#info-text > ul li#subtopic-2").html("Italic");
    $("span#info-text > ul li#subtopic-3").html("Strikethrough");
    $("div#markdown-playground").css("display", "inline");
    $("button#submit-md").attr("class", "btn btn-primary disabled");
    basicsPage("subtopic-1");
    currentPage = "basics";
}

function basicsPage(subtopic) {
    resetThenColor("#" + subtopic);
    setTextArea("Your code here...");
    $("button#next-md").attr("class", "btn btn-info disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    switch(subtopic) {
        case "subtopic-1":
            $("#topic-title").html("Basics<small>Bold</small>");
            $("p#topic-instructions").html("<strong>Bold words</strong> in text emphasize a remark or comment. To turn a word or group of words into bold, place two stars (*) before and after the word/s.<br><br>For example:<br><strong>Marky is awesome</strong><br>in markdown is<br>**Marky is awesome**.<br><br>Now try it on your own.");
            subtopicPage = "bold";
            break;
        case "subtopic-2":
            $("#topic-title").html("Basics<small>Italic</small>");
            $("p#topic-instructions").html("<em>Italicized words</em> in text emphasize a key point or, according to Wikipedia, quote a speaker as a way to show which words they stressed. To turn a word or group of words into italicized text, place one stars (*) before and after the word/s.<br><br>For example:<br><em>\"It's not called being gay, it's called being FABULOUS!\"</em><br>in markdown is<br>*\"It's not called being gay, it's called being FABULOUS!\"*.<br><br>Now try it on your own.");
            subtopicPage = "italic";
            break;
        case "subtopic-3":
            $("#topic-title").html("Basics<small>Strikethrough</small>");
            $("p#topic-instructions").html("<em>Strikethrough words</em> in text meant that those words are not meant for inclusion. To strikethrough a word or words, place two tildes (~) before and after the word/s.<br><br>For example:<br><s>A MacBook Pro costs $199.99</s><br>in markdown is<br>~~A MacBook Pro costs $199.99~~.<br><br>Now try it on your own.");
            subtopicPage = "strikethrough";
            break;
    }

    console.log("Passed by basicsPage()");
}

// User interactions with Marky
$(document).ready(function() {
    initPage(); // Initial set-up
    
    // Make the selected <li> 'active'
    $("li").click(function() {
        var li_ID = $(this).attr("id");
        li_ID = "#" + li_ID;
        resetThenColor(li_ID);
    });

    /******************************************************/
    /*   Events to handle events with the "Basics" page   */
    /******************************************************/
    $("li#basics-link").click(function() {
        initBasics();

        if (subtopicPage == "") {
            basicsPage("bold");
        }

        resetThenColor("#basics-link");
        console.log("Basics");
    });

    $("li#subtopic-1").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-1");
        }

        resetThenColor("#subtopic-1");
        console.log("Bold");
    });

    $("li#subtopic-2").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-2");
        }

        resetThenColor("#subtopic-2");
        console.log("Italic");
    });

    $("li#subtopic-3").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-3");
        }

        resetThenColor("#subtopic-3");
        console.log("Strikethrough");
    });

    /******************************************************/
});