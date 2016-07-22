// src="novel.js"
	function henkan(){
	aa=document.form1.textarea1.value;
	var newstr = aa.replace(/\{(.+?)\}\((.+?)\)/mg, "｜$1《$2》");
	document.form1.textarea2.value=newstr;
	}
