const checkBtn = document.querySelector("#check");
const outPutDiv = document.querySelector(".output");
const formDataInp = document.querySelector("#formDataInp");

formDataInp.addEventListener("submit" , (e)=>{
	e.preventDefault();
	let formInfo = new FormData(formDataInp);
	let purchasePrice;
	let stockQuantity;
	let currentPrice;
	let inpData=[];

	for(data of formInfo){
		//console.log(data);
		inpData.push(data[1]);
	}
	//console.log(inpData);
	purchasePrice = inpData[0];
	stockQuantity = inpData[1];
	currentPrice = inpData[2];

	if(!Number(purchasePrice) || !Number(stockQuantity) || !Number(currentPrice) ){
		//console.log("input wrong");
		outPutDiv.innerText = "please enter proper input";
	} else {
		let result = checkStock(purchasePrice , stockQuantity , currentPrice);
		outPutDiv.innerText = result;
	}

	

})

function checkStock(pp , sq , cp){
	//console.log("in check");
	let totalPurchasePrice = pp*sq;
	let presentTotalPrice = cp*sq;

	if(totalPurchasePrice > presentTotalPrice){
		let lossPercentage = Math.floor(((totalPurchasePrice - presentTotalPrice)*100)/totalPurchasePrice);
		return "loss is "+ lossPercentage + "%";
	} else if (presentTotalPrice > totalPurchasePrice){
		let profitPercentage = Math.floor(((presentTotalPrice - totalPurchasePrice)*100)/totalPurchasePrice);
		return "profit is "+ profitPercentage + "%";
	} else{
		return "no profit or loss";
	}
}
