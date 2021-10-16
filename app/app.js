function initListeners() {
    $("a").click(function(e){
        // This stores the id from the anchor tag
        let aID = e.currentTarget.id;
        MODEL.changePageContent(aID);
    });
}


$(document).ready(function() {
    initListeners();
    MODEL.changePageContent("home");
});