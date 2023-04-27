let icon=document.getElementsByClassName("sri");
let services=document.getElementsByClassName("services");
let count=document.getElementsByTagName("p")[0];
icon[0].addEventListener("click",function(){
	this.parentNode.getElementsByClassName("services")[0].classList.remove("hide");
	var a=parseInt(count.innerHTML);
	a+=1;
	document.getElementsByTagName("p")[0].innerHTML=a+" Likes";
	
});
services[0].addEventListener("click",function(){
	this.classList.add("hide");
	var a=parseInt(count.innerHTML);
	a-=1;
	document.getElementsByTagName("p")[0].innerHTML=a+" Likes";
});