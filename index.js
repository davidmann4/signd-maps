
function menu_item(name,image){

    var element = $("<div></div>").data("image",image).addClass("signd-map-menu-item").text(name);

    element.click(function(){
        $(".signd-map-menu-item").removeClass("selected");
        $(this).addClass("selected");
        $("#signd-map-content img").attr("src", $(this).data("image"));
    });
    

    return element;
}



$( document ).ready(function(){

    let menu= $("<div></div>").attr("id","menu");

    menu.append(menu_item("KYB Coverage","https://davidmann4.github.io/signd-maps/img/kyb-coverage.png").addClass("selected"));
    menu.append(menu_item("KYC Coverage","https://davidmann4.github.io/signd-maps/img/kycid-coverage.png"));
    menu.append(menu_item("Open Banking Coverage","https://davidmann4.github.io/signd-maps/img/open-banking-coverage.png"));
    menu.append(menu_item("eKYC Coverage","https://davidmann4.github.io/signd-maps/img/ekyc-coverage.png"));
    menu.append(menu_item("NFC Coverage","https://davidmann4.github.io/signd-maps/img/nfc-document-coverage.png"));

    let content =  $("<div></div>").attr("id","signd-map-content").append($("<img></img>").attr("src","https://davidmann4.github.io/signd-maps/img/kyb-coverage.png"));


    $("#signd-map").append(menu);
    $("#signd-map").append(content);

    if (typeof onSigndTabsLoaded !== "undefined") { 
        onSigndTabsLoaded();
    }
});