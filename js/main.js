/***************** 
       LOGIN
*****************/
// VARIBELS
let submit = $("#submit");
let warrning = $("#alert");
let loginInfo = {
    "arjun":"123",
    "yuva":"456"
};
// HIDE AND SHOW
warrning.hide()
// FUNCTIONS
function validateForm(){
    for (const [key, value] of Object.entries(loginInfo)) {
        let uname = $("#username").val();
        let pwd = $("#password").val();
        if(uname == key && pwd == value){
            window.location.replace("mainPage.html");
            break;
        } else {
            warrning.show()
        }
    }
}
// EVENT LISTENERS
submit.on("click", validateForm)

/***************** 
    MAIN PAGE
*****************/
// VARIBELS
let addItemRequest = $("#addItemRequest");
let addItemList = $("#addItemToList");
let itemTitle = $("#itemTitle");
// HIDE AND SHOW
addItemList.hide();
itemTitle.hide(); 
// FUNCTIONS
function addClassToItem(item, className){
    $(`${item}`).addClass(className)
}
function displayItemRequest(){
    addItemRequest.hide();
    addItemList.show();
    itemTitle.show();
}
function addItemToList(){
    let itemTitleVal = itemTitle.val();
    let listContent = $("#list")
    addItemRequest.hide();
    addItemList.show();
    itemTitle.show();
    listContent.append(`<li class="item">${itemTitleVal}</li>`)
    addItemRequest.show();
    addItemList.hide();
    itemTitle.hide();
    itemTitle.val("")
}
// EVENT LISTENERS
addItemRequest.on("click", displayItemRequest)
addItemList.on("click", addItemToList)
$("ul").on('click','li', function() {
    if($(this).hasClass("compleat") == true){
        console.log("has class")
        $(this).animate({
            paddingLeft: "+=200",
            opacity: "0.0"
        });
        setTimeout(function(){
                $(this).remove()
        }, 5000);
    } else {
        $(this).addClass("compleat")  
    }
})