var total = 0,
	op = "",
	flag = "";
var mem = 0;

function getDisplay(){
	if($("#display").val().trim().length === 0){
		return 0;
	}else{
		try {
			return parseInt($("#display").val());
		}catch(e){
			console.error(e);
			return 0;
		}
	}
}

function clearAll(){
	total = 0;
	setDisplay(0);
}

function addToDisplay(num){
	console.log("add to display"+flag);
	if(getDisplay() === 0)setDisplay("");
	if(flag === "in"){
		$("#display").val($("#display").val()+""+num);
	}else{
		$("#display").val(num);
	}
	console.log(num);
}

function setDisplay(num){
	$("#display").val(num);
	console.log(num);''
	console.log("flag= "+flag);
	verifyList(num);
}

function soma(){
	console.log("sum flag= "+ flag);
 	if(flag === "in")
 		total += getDisplay();
	console.log(total,getDisplay());
	setDisplay(total);
	op = "+";
	flag = "";
}

function pow(){
	flag = "";
	op = "pow";
	Math.pow(getDisplay(),2);
	total = Math.pow(getDisplay(),2);
	setDisplay(total);
	console.log("pow");
}

function putNum(num){
	hideM();
	if(flag === "")
	setDisplay(0);
	flag = "in";
	addToDisplay(num);
}

function getTotal(){
	return parseInt(total);
}

function equal(){
	hideM();
	console.log("total:"+total+ ""+op+""+getDisplay());
	switch(op){
		case "+":
			setDisplay((getTotal() + getDisplay()));
		break;
		case "pow":
		setDisplay(Math.pow(getTotal(),getDisplay()));
		break;
	}
	flag = "";
}

function setMem(){
	mem = getDisplay();
}

function getMem(){
	$("#mem").show();
	setDisplay(mem);
}

function sumMem(){
	mem += getDisplay();
}

function hideM(){
	$("#mem").hide();
}

function verifyList(num){
	$("#list li").each(function(a,e){
		if(parseInt($(e).text()) === num){
			console.log("funfa");
			$(e).css("text-decoration", "line-through");
		}
		// console.log(a,$(e).text());
	});
}

$(document).ready(function(){
	$("#x53").click(function(){
		soma();
	});

	$("#x54").click(function(){
		equal();
	});

	$("#x24").click(function(){
		clearAll();
	});

	$("#x33").click(function(){
		pow();
	});

	$("#x42").click(function(){
		putNum(this.innerText);
	});

	$("#x11").click(function(){
		setMem();
	});

	$("#x12").click(function(){
		getMem();
	});

	$("#x13").click(function(){
		sumMem();
	});
});