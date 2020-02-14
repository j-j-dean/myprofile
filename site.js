

var indexImage = {
    /*************************************************************
    * Update width of background image - removes horizontal scroll
    **************************************************************/
    UpdateImageWidth: function() {
        if (document.title == "Jeff Dean Profile") {
            $('#index-background-image').css("width",$('#index-main').css("width"));
        }
    }
}

$(document).ready(function() {

    /**************************************************************************
    * setup event listener to cut portion of image if resized
    ***************************************************************************/
    indexImage.UpdateImageWidth();
    window.addEventListener('resize', indexImage.UpdateImageWidth);

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
