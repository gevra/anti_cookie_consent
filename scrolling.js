// A cookie consent form remover by @gevra (created in the time when I should have been writing my thesis) with a help from @b3by

$(document).ready(function() {
    console.log('ready')
})

// for Quantcast overlays e.g. on doodle.com atlantic.com etc.
document.querySelector('body').classList.remove("qc-cmp-ui-showing");
$(".qc-cmp-ui-container").remove();

// remove TrustE overlays e.g. on forbes.com and alike
$(".truste_box_overlay").remove();
$(".truste_overlay").remove();

// remove Optanon overlays https://www.cookielaw.org/optanon-eprivacy/ e.g. on thesaurus.com
$("#optanon").remove();
$(".optanon-alert-box-wrapper").remove();

