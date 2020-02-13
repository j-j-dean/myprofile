
$(document).ready(function() {

    /**************************************************************************
     * the following function toggles the FDC testimonial popup under Careers 
     **************************************************************************/
    $("#fdc-div").click(function() {
        var popup = document.getElementById("fdcPopup");
        popup.classList.toggle("show");
    });

    /**************************************************************************
     * the following function toggles the CSC testimonial popup under Careers 
     **************************************************************************/
    $("#csc-div").click(function() {
        var popup = document.getElementById("cscPopup");
        popup.classList.toggle("show");
    });
});