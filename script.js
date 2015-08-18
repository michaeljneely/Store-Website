//Validates Form 
function validate() {
	var missing_fields = false;
	var strFields = "";
	var name_input_check = document.forms["contact_form"]["name_input"].value;
	var email_input_check = document.forms["contact_form"]["email_input"].value;
	var text_area_check = document.forms["contact_form"]["text_input"].value;
	if (name_input_check.length < 10){
		missing_fields = true;
		strFields += "	Name must be at least 10 characters\n";}
	if (email_input_check.length < 10){
		missing_fields = true;
		strFields += "	Email address must be at least 10 characters\n";}
	if (email_input_check.indexOf("@") == -1){
		missing_fields = true;
		strFields += "	Email address must contain an '@' symbol\n";}
	if (email_input_check.indexOf(".") == -1){
		missing_fields = true;
		strFields += "	Email address must contain a '.' symbol\n";}
	if (contact_form.category.selectedIndex==0){
		missing_fields = true;
		strFields += "	Please select a question type\n";}
	if (text_area_check.length < 25){
		missing_fields = true;
		strFields += "	Text area must contain at least 25 characters\n";}
	if (missing_fields){
		alert("There were errors in the following fields:\n\n" + strFields);
		return false;}
	else {
		alert("Thank you. Your Question will be dealt with as soon as possible");}
}

//Resets Form
function reset(){
	document.getElementById("contact_form").reset();
}

//Real-time Clock
function clock() {
	var myDate = new Date;
	var currentHours = myDate.getHours();
	var currentMinutes = myDate.getMinutes();
	var currentSeconds = myDate.getSeconds();
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	document.getElementById("clock").innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	window.setTimeout("clock()", 500);
}

//Animated Picture in Header
var imgAT = "images/jakehead.png";
function animatePicture() {
	if (imgAT == "images/jakehead.png")
		imgAT="images/wavingbmo.png";
	else if (imgAT == "images/wavingbmo.png")
		imgAT="images/lsp.png";
	else if (imgAT == "images/lsp.png")
		imgAT="images/pepbutler.png";
	else if (imgAT == "images/pepbutler.png")
		imgAT="images/starchy.png";
	else
		imgAT="images/jakehead.png";
	document.getElementById("changingpic").src = imgAT;
	window.setTimeout("animatePicture()", 5000);
}

//Captions appear on mouseover of Special Offers image
function captionAppear(index) {
	var x=document.getElementsByClassName("caption");
	x[index].style.visibility = "visible";
}
	
//Default of Special Offers image captions
function captionDisappear(index) {
	var x=document.getElementsByClassName("caption");
	x[index].style.visibility = "hidden";
}
	
//Replaces text of Special Offers image captions
function ReplaceContentInContainer(index,content) {
		var x=document.getElementsByClassName("caption");
		x[index].innerHTML = content;
}
