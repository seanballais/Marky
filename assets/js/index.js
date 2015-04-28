if (typeof jQuery === "undefined") { throw new Error("Marky requires jQuery") }

// Global variables
var links = [
    [
        "intro-link",
        "basics-link",
        "headings-link",
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
    $("p#topic-instructions").html("According to Wikipedia, Markdown is a markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.<br><br>To start learning about markdown, press the 'Next' button below or choose an item from the menu above.");
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
    $("button#next-md").attr("class", "btn btn-primary disabled");
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
            $("p#topic-instructions").html("<strong>Bold words</strong> in text emphasize a remark or comment. To turn a word or group of words into bold, place two stars (*) before and after the word/s.<br><br>For example:<br><strong>Marky is awesome</strong><br>in markdown is<br>**Marky is awesome**.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "bold";
            break;
        case "subtopic-2":
            $("#topic-title").html("Basics<small>Italic</small>");
            $("p#topic-instructions").html("<em>Italicized words</em> in text emphasize a key point or, according to Wikipedia, quote a speaker as a way to show which words they stressed. To turn a word or group of words into italicized text, place one star (*) before and after the word/s.<br><br>For example:<br><em>\"It's not called being gay, it's called being FABULOUS!\"</em><br>in markdown is<br>*\"It's not called being gay, it's called being FABULOUS!\"*.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "italic";
            break;
        case "subtopic-3":
            $("#topic-title").html("Basics<small>Strikethrough</small>");
            $("p#topic-instructions").html("<em>Strikethrough words</em> in text meant that those words are not meant for inclusion. To strikethrough a word or words, place two tildes (~) before and after the word/s.<br><br>For example:<br><s>A MacBook Pro costs $199.99</s><br>in markdown is<br>~~A MacBook Pro costs $199.99~~.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "strikethrough";
            break;
    }

    console.log("Passed by basicsPage()");
}

function initHeadings() {
    resetThenColor("#headings-link");
    $("#topic-title").html("Headings<small>Heading 1</small>");
    $("span#info-text > ul li#subtopic-1").css("display", "inline");
    $("span#info-text > ul li#subtopic-2").css("display", "inline");
    $("span#info-text > ul li#subtopic-3").css("display", "inline");
    $("span#info-text > ul li#subtopic-4").css("display", "inline");
    $("span#info-text > ul li#subtopic-5").css("display", "inline");
    $("span#info-text > ul li#subtopic-6").css("display", "inline");
    $("span#info-text > ul li#subtopic-1").html("Heading 1");
    $("span#info-text > ul li#subtopic-2").html("Heading 2");
    $("span#info-text > ul li#subtopic-3").html("Heading 3");
    $("span#info-text > ul li#subtopic-4").html("Heading 4");
    $("span#info-text > ul li#subtopic-5").html("Heading 5");
    $("span#info-text > ul li#subtopic-6").html("Heading 6");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    headingsPage("subtopic-1");
    currentPage = "headings";
}

function headingsPage(subtopic) {
    resetThenColor("#" + subtopic);
    setTextArea("Your code here...");
    $("button#next-md").attr("class", "btn btn-info disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    switch(subtopic) {
        case "subtopic-1":
            $("#topic-title").html("Headings<small>Heading 1</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of most importance, place one octothorpe (#) before the word/s.<br><br>For example:<br><h1>Most Important</h1><br>in markdown is<br># Most Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h1";
            break;
        case "subtopic-2":
            $("#topic-title").html("Headings<small>Heading 2</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of second importance, place two octothorpes (#) before the word/s.<br><br>For example:<br><h2>Second Most Important</h2><br>in markdown is<br>## Second Most Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h2";
            break;
        case "subtopic-3":
            $("#topic-title").html("Headings<small>Heading 3</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of third importance, place three octothorpes (#) before the word/s.<br><br>For example:<br><h3>Third Most Important</h3><br>in markdown is<br>### Third Most Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h3";
            break;
        case "subtopic-4":
            $("#topic-title").html("Headings<small>Heading 4</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of fourth importance, place four octothopres (#) before the word/s.<br><br>For example:<br><h4>Fourth Most Important</h4><br>in markdown is<br>#### Fourth Most Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h4";
            break;
        case "subtopic-5":
            $("#topic-title").html("Headings<small>Heading 5</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of fifth importance, place five octothopres (#) before the word/s.<br><br>For example:<br><h5>Fifth Most Important</h5><br>in markdown is<br>##### Fifth Most Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h5";
            break;
        case "subtopic-6":
            $("#topic-title").html("Headings<small>Heading 6</small>");
            $("p#topic-instructions").html("Headings can be used as a title of a page or a section. Headings come in importance, with the largest heading being the most important and the smallest heading being the least important. To create a heading of least importance, place six octothopres (#) before the word/s.<br><br>For example:<br><h6>Least Important</h6><br>in markdown is<br>###### Least Important.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "h6";
            break;
    }

    console.log("Passed by headingsPage()");
}

function initLinks() {
    resetThenColor("#links-link");
    setTextArea("Your code here...");
    $("#topic-title").html("Links");
    $("p#topic-instructions").html("Links connect one web page to another, or to a section of the same or a different page. To create a link, place the text to be used as the link with square brackets. Then after the brackets, place the page or section to link to inside parentheses.<br><br>For example:<br><a href=\"http://www.codinghorror.com\">Coding Horror</a><br>in markdown is<br>[Coding Horror](http://www.codinghorror.com).<br><br>Now try it on your own using the code editor below.")
    $("span#info-text > ul li").css("display", "none");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    currentPage = "links";
    subtopicPage = "";
}

function initCodes() {
    resetThenColor("#codes-link");
    $("#topic-title").html("Codes<small>Inline</small>");
    $("span#info-text > ul li#subtopic-1").css("display", "inline");
    $("span#info-text > ul li#subtopic-2").css("display", "inline");
    $("span#info-text > ul li#subtopic-3").css("display", "none");
    $("span#info-text > ul li#subtopic-4").css("display", "none");
    $("span#info-text > ul li#subtopic-5").css("display", "none");
    $("span#info-text > ul li#subtopic-6").css("display", "none");
    $("span#info-text > ul li#subtopic-1").html("Inline");
    $("span#info-text > ul li#subtopic-2").html("Blocks");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    codesPage("subtopic-1");
    currentPage = "codes";
}

function codesPage(subtopic) {
    resetThenColor("#" + subtopic);
    setTextArea("Your code here...");
    $("button#next-md").attr("class", "btn btn-info disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    switch(subtopic) {
        case "subtopic-1":
            $("#topic-title").html("Codes<small>Inline</small>");
            $("p#topic-instructions").html("Codes can be inserted within a sentence. These are called 'inline codes.' To insert an inline code inside a sentence, place the one backtick (`) before and after the code to be inlined.<br><br>For example:<br>The code,<code>printf(\"Hello World!\");</code>, can be used in C.<br>in markdown is<br>The code,`printf(\"Hello World!\");`, can be used in C.<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "inline-code";
            break;
        case "subtopic-2":
            $("#topic-title").html("Codes<small>Block</small>");
            $("p#topic-instructions").html("Codes can be separate from the paragraph. These are called 'block codes.' To specify a block code, place the four spaces before code to be included in the block.<br><br>For example:<br><pre><code>printf(\"Sean Is Handsome!\");</code><br><code>printf(\"Not really!\");</code></pre><br>in markdown is <br><space><space><space><space>;printf(\"Hello World!\");<br><space><space><space><space>;printf(\"Not really!\").<br><br>Now try it on your own using the code editor below.");
            subtopicPage = "block-code";
            break;
    }

    console.log("Passed by codesPage()");
}

function initLists() {
    resetThenColor("#lists-link");
    $("#topic-title").html("Lists<small>Unordered Lists</small>");
    $("span#info-text > ul li#subtopic-1").css("display", "inline");
    $("span#info-text > ul li#subtopic-2").css("display", "inline");
    $("span#info-text > ul li#subtopic-3").css("display", "none");
    $("span#info-text > ul li#subtopic-4").css("display", "none");
    $("span#info-text > ul li#subtopic-5").css("display", "none");
    $("span#info-text > ul li#subtopic-6").css("display", "none");
    $("span#info-text > ul li#subtopic-1").html("Unordered");
    $("span#info-text > ul li#subtopic-2").html("Ordered");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    listsPage("subtopic-1");
    currentPage = "lists";
}

function listsPage(subtopic) {
    resetThenColor("#" + subtopic);
    setTextArea("Your code here...");
    $("button#next-md").attr("class", "btn btn-info disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    switch(subtopic) {
        case "subtopic-1":
            $("#topic-title").html("Lists<small>Unordered Lists</small>");
            $("p#topic-instructions").html("You can create unordered lists (lists that don't use numbers) using Markdown. To create an unordered list, place one asterisk, plus, or hyphen (*, +, or -) before the word/s to be included in the list.<br><br>For example:<br><ul style=\"width: 100px;\"><li>Emmanuel</li><li>Berto</li><li>Josefina</li></ul><br>in markdown is<br><span style=\"width: 100px;\">+&nbsp;&nbsp;&nbsp;&nbsp;Emmanuel<br>+&nbsp;&nbsp;&nbsp;&nbsp;Berto<br>+&nbsp;&nbsp;&nbsp;&nbsp;Josefina</span><br><br>Now try it on your own using the code editor below.");
            subtopicPage = "unordered";
            break;
        case "subtopic-2":
            $("#topic-title").html("Lists<small>Ordered Lists</small>");
            $("p#topic-instructions").html("You can create ordered lists (lists that use numbers) using Markdown. To create an ordered list, place a number, followed by a period, before the word/s to be included in the list.<br><br>For example:<br><ol style=\"width: 100px;\"><li>Epic Games</li><li>Up Down Games</li><li>Valve Software</li></ol><br>in markdown is<br><span style=\"width: 100px;\">1.&nbsp;&nbsp;&nbsp;Epic Games<br>2.&nbsp;&nbsp;&nbsp;Up Down Games<br>3.&nbsp;&nbsp;&nbsp;Valve Software</span><br><br>Now try it on your own using the code editor below.");
            subtopicPage = "ordered";
            break;
    }

    console.log("Passed by listsPage()");
}

function initQuotes() {
    resetThenColor("#quotes-link");
    setTextArea("Your code here...");
    $("#topic-title").html("Block Quotes");
    $("p#topic-instructions").html("Block quotes can be used to quote a speech. To create a block quote, place an angle bracket (>) before each line that will be included in the quote. <br><br>For example:<br><blockquote><p>Don't be a salad. Be the best brocolli you could ever be.<br>- PewDiePie (2012)</p></blockquote><br>in markdown is<br>> Don't be a salad. be the best brocolli you could ever be.<br>> - PewDiePie (2012)<br><br>Now try it on your own using the code editor below.")
    $("span#info-text > ul li").css("display", "none");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    currentPage = "quotes";
    subtopicPage = "";
}

function initImages() {
    resetThenColor("#images-link");
    setTextArea("Your code here...");
    $("#topic-title").html("Images");
    $("p#topic-instructions").html("Images can be placed inside text with Markdown. To insert an image, type in an exclamation point (!). Then, place square brackets ([]) next to the exclamation point. You may insert text inside the brackets to create an alternate text when the image doesn't load but this is optional. Lastly, add parentheses next to the brackets with the URL or directory of the image inside the parentheses.<br><br>For example:<br><img src=\"http://img2.wikia.nocookie.net/__cb20080802051949/harrypotter/images/thumb/2/21/150px-Beedle_Collectors.jpg/120px-150px-Beedle_Collectors.jpg\"><br>in markdown is<br><span style=\"word-wrap: break-word;\">![](http://img2.wikia.nocookie.net/__cb20080802051949/harrypotter/images/thumb/2/21/150px-Beedle_Collectors.jpg/120px-150px-Beedle_Collectors.jpg)</span><br><br>Now try it on your own using the code editor below.")
    $("span#info-text > ul li").css("display", "none");
    $("div#markdown-playground").css("display", "inline");
    $("button#next-md").attr("class", "btn btn-primary disabled");
    $("button#submit-md").attr("class", "btn btn-primary");

    currentPage = "images";
    subtopicPage = "";
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

    /**********************************/
    /*   Functions to handle events   */
    /**********************************/
    $("li#intro-link").click(function() {
        initPage();
        resetThenColor("#intro-link");
        console.log("Intro");
    });

    $("li#basics-link").click(function() {
        initBasics();
        resetThenColor("#basics-link");
        console.log("Basics");
    });

    $("li#headings-link").click(function() {
        initHeadings();
        resetThenColor("#headings-link");
        console.log("Headings");
    });

    $("li#links-link").click(function() {
        initLinks();
        resetThenColor("#links-link");
        console.log("Links");
    });

    $("li#codes-link").click(function() {
        initCodes();
        resetThenColor("#codes-link");
        console.log("Codes");
    });

    $("li#lists-link").click(function() {
        initLists();
        resetThenColor("#lists-link");
        console.log("Lists");
    });

    $("li#quotes-link").click(function() {
        initQuotes();
        resetThenColor("#quotes-link");
        console.log("Quotes");
    });

    $("li#images-link").click(function() {
        initImages();
        resetThenColor("#images-link");
        console.log("Images");
    })

    $("li#subtopic-1").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-1");
        } else if (currentPage == "headings") {
            headingsPage("subtopic-1");
        } else if (currentPage == "codes") {
            codesPage("subtopic-1");
        } else if (currentPage == "links") {
            listsPage("subtopic-1");
        }

        resetThenColor("#subtopic-1");
        console.log("Subtopic 1");
    });

    $("li#subtopic-2").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-2");
        } else if (currentPage == "headings") {
            headingsPage("subtopic-2");
        } else if (currentPage == "codes") {
            codesPage("subtopic-2");
        } else if (currentPage == "lists") {
            listsPage("subtopic-2");
        }

        resetThenColor("#subtopic-2");
        console.log("Subtopic 2");
    });

    $("li#subtopic-3").click(function() { // Points to "bold"
        if (currentPage == "basics") {
            basicsPage("subtopic-3");
        } else if (currentPage == "headings") {
            headingsPage("subtopic-3");
        }

        resetThenColor("#subtopic-3");
        console.log("Subtopic 3");
    });

    $("li#subtopic-4").click(function() { // Points to "bold"
        if (currentPage == "headings") {
            headingsPage("subtopic-4");
        }

        resetThenColor("#subtopic-4");
        console.log("Subtopic 4");
    });

    $("li#subtopic-5").click(function() { // Points to "bold"
        if (currentPage == "headings") {
            headingsPage("subtopic-5");
        }

        resetThenColor("#subtopic-5");
        console.log("Subtopic 5");
    });

    $("li#subtopic-6").click(function() { // Points to "bold"
        if (currentPage == "headings") {
            headingsPage("subtopic-6");
        }

        resetThenColor("#subtopic-6");
        console.log("Subtopic 6");
    });

    /*********************************/
});