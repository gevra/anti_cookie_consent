// A cookie consent form remover by @gevra (created in the time when I should have been writing my thesis) with a help from @b3by

$(document).ready(function() {
    console.log('ready')
})

// for doodle.com atlantic.com etc.
document.querySelector('body').classList.remove("qc-cmp-ui-showing");
$(".qc-cmp-ui-container").remove();

// for forbes.com etc
$(".truste_box_overlay").remove();
$(".truste_overlay").remove();

