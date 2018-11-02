var helium = 0;
var heat = 0;

//basic click function

function heliumClick(number){
	helium = helium + number;
	document.getElementById("helium").innerHTML = helium;
};

//function used to buy heat and get cost of heat

function buyHeat(){
	var heatCost = Math.floor(10 * Math.pow(1.1,heat)); //calculates cost of heat based on amount owned
	if(helium >= heatCost){
		heat = heat + 1;
		helium = helium - heatCost;
		document.getElementById("heat").innerHTML = heat;
		document.getElementById("helium").innerHTML = helium;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,heat));
	document.getElementById("heatCost").innerHTML = nextCost;
};

//game loop for autoclickers

window.setInterval(function(){
	
	heliumClick(heat);
	
}, 1000);

//save function saves to local storage using JSON string

function save(){
	
	var save = {
		helium: helium,
		heat: heat
		darkMatter: darkMatter
	}
	
	localStorage.setItem("save",JSON.stringify(save));
	
};

//load function loads from local storage using JSON parsing of the save string

function load(){
	
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.helium !== "undefined") helium = savegame.helium;
	
	if (typeof savegame.heat !== "undefined") heat = savegame.heat;
	
	if (typeof savegame.darkMatter !== "undefined") darkMatter = savegame.darkMatter;
	
}