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