if (typeof jQuery === "undefined") { throw new Error("Marky requires jQuery") }

// User interactions with Marky
$(document).ready(function() {
    $("body").load(function() {
        $("body").fadeIn("400");
    });
});