var helium = 0;
var heat = 0;

function heliumClick(number){
	helium = helium + number;
	document.getElementById("helium").innerHTML = helium;
};

function buyHeat(){
	var heatCost = Math.floor(10 * Math.pow(1.1,heat));
	if(helium >= heatCost){
		heat = heat + 1;
		helium = helium - heatCost;
		document.getElementById("heat").innerHTML = heat;
		document.getElementById("helium").innerHTML = helium;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,heat));
	document.getElementById("heatCost").innerHTML = nextCost;
};

window.setInterval(function(){
	
	heliumClick(heat);
	
}, 1000);

function save(){
	
	var save = {
		helium: helium,
		heat: heat
		darkMatter: darkMatter
	}
	
	localStorage.setItem("save",JSON.stringify(save));
	
};

function load(){
	
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.helium !== "undefined") helium = savegame.helium;
	
	if (typeof savegame.heat !== "undefined") heat = savegame.heat;
	
	if (typeof savegame.darkMatter !== "undefined") darkMatter = savegame.darkMatter;
	
}