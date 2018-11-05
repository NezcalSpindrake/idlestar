var helium = 0; //main currency
var reactions = 0; //additional currency per click
var heat = 0; //creates currency every game loop
var darkMatter = 0; //currency gained for restarting a star

function updateDisplay(){
	
	document.getElementById("heat").innerHTML = heat;
	document.getElementById("reactions").innerHTML = reactions;
	document.getElementById("helium").innerHTML = helium;
	var nextHeat = Math.floor(10 * Math.pow(1.1,heat));
	document.getElementById("heatCost").innerHTML = nextHeat;
	var nextReaction = Math.floor(100 * Math.pow(1.5,reactions));
	document.getElementById("reactionCost").innerHTML = nextReaction;
}

//each reaction adds 1 to your clicks

function reactionClick(){
	
	heliumClick((1 + reactions))
	
}

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

//function for buying reactions

function buyReaction(){
	var reactionCost = Math.floor(100 * Math.pow(1.5,reactions)); //calculates cost of reactions
	if(helium >= reactionCost){
		reactions = reactions + 1;
		helium = helium - reactionCost;
		document.getElementById("reaction").innerHTML = reactions;
		document.getElementById("helium").innerHTML = helium;
	}
	var nextCost = Math.floor(100 * Math.pow(1.5,reactions));
	document.getElementById("reactionCost").innerHTML = reactionCost;
}

//game loop for autoclickers

window.setInterval(function(){
	
	heliumClick(heat);
	updateDisplay();
	
}, 1000);

//save function saves to local storage using JSON string

function save(){
	
	var save = {
		helium: helium,
		reactions: reactions,
		heat: heat,
		darkMatter: darkMatter
	}
	
	localStorage.setItem("save", JSON.stringify(save));
	
};

//load function loads from local storage using JSON parsing of the save string

function load(){
	
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.helium !== "undefined") helium = savegame.helium;
	
	if (typeof savegame.reactions !== "undefined") reactions = savegame.reactions;
	
	if (typeof savegame.heat !== "undefined") heat = savegame.heat;
	
	if (typeof savegame.darkMatter !== "undefined") darkMatter = savegame.darkMatter;
	
};

function deleteSave(){
	
	var saveDelete = prompt('Are you sure?\nType "delete" to confirm',"");
	
	if(saveDelete = "delete"){
		localStorage.setItem("save", null)
		location.reload()
	}
	
};
