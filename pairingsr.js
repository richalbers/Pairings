

$(document).ready(function() {
		//https://unicode.org/emoji/charts/full-emoji-list.html
		const emojisFood = [
		{ "num": 0x1f347, "desc": "grapes"}, // 0 entry isn't used
		
		{ "num": 0x1f347, "desc": "grapes"},
		{ "num": 0x1f353, "desc": "strawberry"}, //s
		{ "num": 0x1f349, "desc": "watermellon"},
//		{ "num": 0x1f34a, "desc": "tangerine"},
//		{ "num": 0x1f34c, "desc": "bananna"},
//		{ "num": 0x1f95d, "desc": "Kiwi"},
		
//		{ "num": 0x1f34d, "desc": "pineapple"},
		{ "num": 0x1f34e, "desc": "apple"},
//		{ "num": 0x1f952, "desc": "pickle"},


		
//		{ "num": 0x1f346, "desc": "eggplant"},	
//		{ "num": 0x1f951, "desc": "avocado"},	
		{ "num": 0x1fadb, "desc": "peas"},
		{ "num": 0x1f954, "desc": "potato"},
		{ "num": 0x1f955, "desc": "carrot"},
		{ "num": 0x1f33d, "desc": "corn"},
//		{ "num": 0x1f336, "desc": "hot pepper"},
		
//		{ "num": 0x1f96c, "desc": "lettuce"},
//		{ "num": 0x1fad1, "desc": "bell pepper"},		
//		{ "num": 0x1f966, "desc": "broccoli"},
//		{ "num": 0x1f95c, "desc": "peanut"},

		{ "num": 0x1f35e, "desc": "bread"},		
		{ "num": 0x1f950, "desc": "croissant"},
		{ "num": 0x1f968, "desc": "pretzel"},
		{ "num": 0x1f96f, "desc": "bagel"},

		{ "num": 0x1f969, "desc": "steak"},	
		{ "num": 0x1f356, "desc": "meat on a bone"},
		{ "num": 0x1f357, "desc": "drumstrick"},			
		{ "num": 0x1f953, "desc": "bacon"},	

		{ "num": 0x1f373, "desc": "egg in pan"},		
		{ "num": 0x1f9c7, "desc": "waffle"},
		{ "num": 0x1f95e, "desc": "pancake"},
		{ "num": 0x1f369, "desc": "donut"},
		
		{ "num": 0x1f377, "desc": "wine"},
		{ "num": 0x1f378, "desc": "cocktail"},
		{ "num": 0x1f37e, "desc": "champagne"},
		{ "num": 0x1f37a, "desc": "beer"},
		
//		{ "num": 0x1f36b, "desc": "choclate bar"},
		{ "num": 0x1f9cb, "desc": "bubbly tea"},
		{ "num": 0x1f9c1, "desc": "cupcake"},
		{ "num": 0x1f368, "desc": "ice cream"},
		{ "num": 0x1f36a, "desc": "cookie"},		
		
		{ "num": 0x1f32d, "desc": "hotdog"},
		{ "num": 0x1f35f, "desc": "fries"},
		{ "num": 0x1f354, "desc": "hamburger"},
		{ "num": 0x1f355, "desc": "pizza"},
				
//		{ "num": 0x1f357, "desc": "drumstrick"},
		{ "num": 0x1f96a, "desc": "sandwich"},
		{ "num": 0x1f32e, "desc": "taco"},
		{ "num": 0x1f371, "desc": "bento box"},
				
		{ "num": 0x1f37f, "desc": "popcorn"},
		{ "num": 0x1f9c2, "desc": "salt"},
		{ "num": 0x1f9c8, "desc": "butter"},
		{ "num": 0x1f964, "desc": "drink"},
		
		{ "num": 0x1f347, "desc": "grapes"},
		{ "num": 0x1f347, "desc": "grapes"},
		{ "num": 0x1f347, "desc": "grapes"},
		{ "num": 0x1f347, "desc": "grapes"}
		];  
		
		const emojisAnimals = [
		{ "num": 129447, "desc": "Orangutan"},
		{ "num": 128018, "desc": "Monkey"},
		{ "num": 129421, "desc": "Gorilla"},
		{ "num": 128005, "desc": "Tiger"},
		/*{ "num": 128021, "desc": "Dog"},*/	
		{ "num": 128006, "desc": "Leopard"},
		//{ "num": 128017, "desc": "Wolf/Sheep"},	
		//{ "num": 129420, "desc": "Deer"},
	
		//{ "num": 129433, "desc": "Lama"},		
		{ "num": 128024, "desc": "Elephant"},		
		{ "num": 129423, "desc": "Rhinocerous"},
		{ "num": 129452, "desc": "Buffalo"},
		{ "num": 129430, "desc": "T-Rex"},

		{ "num": 0x1f99c, "desc": "Parrot"},
		{ "num": 129413, "desc": "Eagle"},	
		{ "num": 129414, "desc": "Duck"},
		{ "num": 0x1f9a9, "desc": "Flamingo"},
	
		//{ "num": 128641, "desc": "Helicopter"},	
		//{ "num": 0x1f99a, "desc": "Peacock"},
		{ "num": 128039, "desc": "Penguin"},
		{ "num": 0x1F9A5, "desc": "Sloth"},
		{ "num": 128010, "desc": "Crocodile"},
		{ "num": 129416, "desc": "Shark"},

		{ "num": 128027, "desc": "catepiller"},
		{ "num": 128375, "desc": "Spider"},		
		{ "num": 128028, "desc": "Ant"},	
		{ "num": 128030, "desc": "Ladybug"},
		
		{ "num": 0x1f992, "desc": "Giraffe"},
		{ "num": 128042, "desc": "Camel"},
		{ "num": 128009, "desc": "Dragon"},
		{ "num": 129432, "desc": "Kangaroo"},
		
		//{ "num": 128032, "desc": "Fish"},
		//{ "num": 129428, "desc": "Hedgehog"},	
		//{ "num": 128060, "desc": "Panda"},	
			
		{ "num": 129417, "desc": "Owl"},
		{ "num": 129422, "desc": "Lizard"},
		{ "num": 128013, "desc": "Snake"},
		//{ "num": 128044, "desc": "Dolphin"},
		{ "num": 0x1f987, "desc": "Bat"},
	
		//{ "num": 129410, "desc": "Scorpion"},
		//{ "num": 128025, "desc": "Octopus"},	
		{ "num": 129419, "desc": "Butterfly"},	


		{ "num": 128029, "desc": "Bee"},
		//{ "num": 129419, "desc": "Butterfly"},
		{ "num": 129415, "desc": "Bat"}		
	];  	
	
	var pairingsData = [

	
	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16],
	[4,7,10,13,	3,8,9,14,	2,5,12,15,	1,6,11,16],
	[4,6,9,15,	2,8,11,13,	1,7,12,14,	3,5,10,16],
	[2,6,10,14,	1,5,9,13,	3,7,11,15,	4,8,12,16],

	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,	17,18,19,20],
	[14,18,6,9,	1,7,10,13,	11,15,3,17,	4,19,5,16,		8,12,2,20],
	[12,18,1,5,	11,19,8,13,	4,6,10,15,	2,9,16,17,		3,7,14,20],
	[7,15,9,19,	13,17,4,12,	11,14,2,5,	8,18,3,10,		6,16,1,20],
	
	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,21,22,23,24],
	[9,16,3,23,	12,22,4,18,	10,19,6,15,	13,17,5,21, 1,7,14,20,	8,11,2,24],
	[3,8,13,22,	16,17,2,10,	11,15,7,18,	9,21,1,19,	4,23,6,20,	5,12,14,24],
	[6,22,11,14,15,17,1,23,	3,18,5,10,	4,8,16,19,	2,21,12,20,	9,13,7,24],
	
	//25 (24+1)
	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,21,22,23,24, 25,25,25,25],
	[9,16,3,25,	12,22,4,18,	10,19,6,15,	13,17,5,21, 1,7,14,20,	8,11,2,23,   24,24,24,24],
	[3,8,13,25,	16,17,2,10,	11,15,7,18,	9,21,1,19,	4,22,6,20,	5,12,14,24,  23,23,23,23],
	[6,21,11,14,15,17,1,23,	3,18,5,10,	4,8,16,19,	2,25,12,20,	9,13,7,24,   22,22,22,22],
	
	// 28
	//[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,	21,22,23,24,	25,26,27,28],		
	//[8,11,15,19,10,21,4,18,	6,22,17,27,	2,23,12,14,	24,25,5,20,		1,13,7,26,		3,9,16,28],		
	//[12,25,1,8,	13,22,4,9,	3,19,14,27,	5,18,15,23,	2,16,7,20,		17,26,10,24,	6,11,21,28],			
	//[8,17,9,21,	22,26,3,11,	16,23,4,25,	2,19,5,13,	1,14,6,20,		2,18,24,27,		7,10,15,28],	


	//special 28
	//[1,3,4,2,  5,6,7,8,  9,10,11,12,  13,14,15,16,  17,18,19,20,  21,22,23,24,  25,26,27,28], 
	//[11,20,4,14,  15,27,7,17,  10,18,23,25,  5,21,13,22,  8,19,12,26,  6,1,2,24,  3,9,16,28],  
	//[6,10,15,26,  16,22,4,19,  8,18,9,14,   1,17,21,2,  20,25,7,13,11,27,3,24,  5,23,12,28],  
	//[4,27,8,13,  5,2,1,11,  9,21,6,20,  14,23,3,26,  12,25,16,17,  10,19,7,24,  18,22,15,28], 
	
	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,	21,22,23,24,	25,26,27,28,	29,30,31,32],	
	[3,19,11,15,22,30,8,17,	9,13,7,29,	6,10,23,25,	18,24,1,27,		4,20,5,16,		21,31,12,28,	14,26,2,32],		
	[2,20,8,10,	3,18,23,26,	14,31,1,9,	16,30,19,25,17,29,21,27,	7,24,12,15,		4,6,11,28,		5,22,13,32],		
	[11,16,18,21,1,23,7,20,	6,31,2,15,	4,26,19,22,	12,14,17,25,	3,13,27,30,		5,29,10,28,		8,9,24,32],		
	
	[1,2,3,4,	5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,	21,22,23,24,25,26,27,28,	29,30,31,32,	33,34,35,36],
	[3,15,7,27,	28,29,1,11,	9,17,23,26,	22,31,4,8,	12,18,5,25,		6,14,19,33,	10,13,20,35,	16,24,32,34,	2,21,30,36],	
	[9,27,1,22,	7,33,21,26,	5,35,4,29,	16,20,8,30,	12,31,2,13,		14,18,23,34,15,28,19,24,	6,25,11,32,		10,17,3,36],	
	[7,29,19,23,17,27,16,33,11,24,26,31,10,22,14,30, 4,9,21,25,		6,12,1,35,	13,34,3,5,		8,18,2,28,		20,32,15,36],	
	
	[1,2,3,4,		5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,	21,22,23,24,25,26,27,28,	29,30,31,32,	33,34,35,36,	37,38,39,40],
	[12,16,23,28,	9,27,20,21,	8,37,24,31,	35,38,2,25,	13,32,10,18,	3,19,15,22,	11,34,4,7,		29,33,6,26,		5,39,30,36,		1,17,14,40],
	[26,31,2,20,	5,23,14,35,	21,37,1,29,	3,7,25,30,	6,10,24,27,		13,17,12,39,19,28,32,34,	15,33,8,18,		9,38,4,36,		11,16,22,40],
	[9,32,22,37,	20,25,10,14,31,33,4,16,	5,12,19,38,	17,24,11,30,	18,39,1,6,	28,35,15,29,	21,34,2,13,		23,26,8,36,		7,27,3,40],
		
	[ 1,2,3,4,		5,6,7,8,	9,10,11,12,	13,14,15,16,17,18,19,20,21,22,23,24,	25,26,27,28,29,30,31,32,	33,34,35,36,37,38,39,40,	41,42,43,44],
	[ 1,29,34,41,	32,43,7,14,	17,33,27,38,25,36,10,31,5,21,16,39,	28,35,22,30,	6,18,12,15,	19,23,3,11,		8,13,9,26,	2,20,40,42,		4,24,37,44],
	[ 35,43,3,29,	12,37,1,30,	7,22,13,36,	28,38,2,32,	4,19,5,25,	14,24,11,39,	6,41,20,23,	21,33,10,42,	17,31,26,34,8,18,16,40,		9,15,27,44],
	[ 24,41,13,25,	14,22,10,26,17,36,6,32,	2,43,27,39,	4,38,12,16,	11,20,8,30,		29,42,19,37,1,9,7,21,		31,35,5,18,	3,34,15,40,		23,28,33,44]
	];
	
	var totalPlayers=$("#selectTotalPlayers option:selected").val()
	var tableCount=totalPlayers / 4;
	$("#totals").html(" &nbsp ("+(tableCount*2) + " teams / " + (tableCount) + " tables)");  //e.g. "(16 teams / 8 tables)"
	
	var printTeamNumbers=false;
	var printTeamEmojis=true;
	var movement=$("#movement option:selected").val()
	var roundOneStartTime=Number( $("#startTime option:selected").val() );
	var roundLength=Number( $("#roundLength option:selected").val() );
	var notes=$("#notes").val().replace(/\n/g, "<br />");
	var printAllPages=false;
	
	makeTables();
			
	// ============================================================================
	// event handlers
	// 
	// all these functions modify one of the variables above and make new tables (by calling makeTables)
	
	$("#selectTotalPlayers").on('click', function (event) { 
		totalPlayers=$("#selectTotalPlayers option:selected").val()
		if (totalPlayers>44) { //add to pairingsData array and emojis array to increase
			alert("44 is max players supported."); 
			totalPlayers=44;
		}
		tableCount=totalPlayers/4;
		$("#totals").html(" &nbsp ("+(totalPlayers) + " players / " + (tableCount) + " tables)");  
		makeTables();
    });
		
	$("#startTime").on('click', function (event) { 
		roundOneStartTime=Number( $("#startTime option:selected").val() );
		makeTables();
    });
	
	$("#roundLength").on('click', function (event) { 
		roundLength=Number( $("#roundLength option:selected").val() );
		makeTables();
    });
	
	$("#notes").change(function(){
		notes=$("#notes").val().replace(/\n/g, "<br />");
		makeTables();
    });
	  
	$("#printAll").on('click', function (event) { 
		if ($("#printAll").is(":checked")) 
			printAllPages=true;
		else
			printAllPages=false;
		makeTables();
    });

	
	//=========================================================================
	

	
	//-------------------------------------------------------------------------
	//puts html-formatted tables at end of the page (replacing any that currently exist)
	function makeTables() {

		tableHtmlCode = makeTableHtml(pairingsData,totalPlayers, roundOneStartTime, roundLength);
		
		var tablesToPrint=tableCount;
		if (!printAllPages)
			tablesToPrint=1;
		
		$("#tables").html("");
		for (var table=0;table<tablesToPrint; table++) {
			$("#tables").append("<h1>" + (table+1) + "</h1>");
			$("#tables").append(tableHtmlCode);
			$("#tables").append("<br />");
			$("#tables").append("<div id='notesPrinted'>" + notes + "</div>");
			$("#tables").append("<hr>");
		}
	}
	
		
	//-------------------------------------------------------------------------
	// makes table html code from pairings
	// returns string with html code that is the table
	function makeTableHtml(pairingData, playerCount, roundOneStartTime, roundLength) {
	
		var roundCount=4;
		var tableCount=playerCount/4;
		var endTime=roundOneStartTime+roundLength;
		var roundOffset=(playerCount-pairingData[0].length);
		
		var htmlCode = "<table>\n";
		
		//print heading line
		htmlCode+="<thead><tr><td>Round</td>";
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
			htmlCode+="<td>Table<br>" + (tableNum+1) + "</td>";
		}
		htmlCode+="<td>Ending<br>Time</td>";
		htmlCode+="</tr></thead><tbody>";
		
		//print table data
		for (var roundNum=0; roundNum<roundCount; roundNum++) {
			roundNdx=roundOffset+roundNum;
			//round number
			htmlCode+="<tr><td>";
			htmlCode+=(roundNum+1);
			htmlCode+="</td>";
			//pairings
			for (var tableNum=0; tableNum<tableCount; tableNum++) {

				var playerNdx=tableNum*4;
				var player1=pairingData[roundNdx][playerNdx];
				var player2=pairingData[roundNdx][playerNdx+1];		
				var player3=pairingData[roundNdx][playerNdx+2];
				var player4=pairingData[roundNdx][playerNdx+3];					
				
				var showEmoji=true;
				var emojis=emojisAnimals;
				//var emojis=emojisFood;
				htmlCode+=("<td>");
				if (showEmoji) {
					if (true) { //1 row per round
						htmlCode+="<span class='emojis'>";
						htmlCode+=("&#" + emojis[player1].num);
						htmlCode+=("&#" + emojis[player2].num);
						htmlCode+="<span class='vs'>vs</span>";
						htmlCode+=("&#" + emojis[player3].num);
						htmlCode+=("&#" + emojis[player4].num);
						htmlCode+="</span>";
					} else {
						htmlCode+="<div style='display: grid; grid-auto-rows: 1fr; grid-template-columns: 1fr 1fr 1fr'>";
						htmlCode+="<div class='emojis' style='padding: 0px; margin: 1px;  zborder: 1px solid lightgray; border-radius: 15px;'>";
						htmlCode+=("&#" + emojis[player1].num + "<br>");
						htmlCode+=("&#" + emojis[player2].num);
						htmlCode+=("</div>");
						htmlCode+=("<div class='vs'><br><br>⤬</div>");
						htmlCode+="<div class='emojis' style='padding: 0px; margin: 1px; zborder: 1px solid lightgray; border-radius: 15px;'>";
						htmlCode+=("&#" + emojis[player3].num + "<br>");
						htmlCode+=("&#" + emojis[player4].num);
						htmlCode+=("</div>");
						htmlCode+="</div>";
					}
				}
				else {				

					htmlCode+=("" + player1 + "<span classz='vs'>, </span>" + player2 );
					htmlCode+=("<span classz='vs'> vs </span>");
					htmlCode+=("" + player3 + "<span classz='vs'>, </span>" + player4 );
				}
				htmlCode+="</td>";
			}	
			//ending time
			htmlCode+=("<td>" + stringify(endTime) + "</td>");
			endTime+=roundLength;
					
			htmlCode+="</tr>\n";
		}
		htmlCode+="</tbody></table>\n";
		
		return htmlCode;
	}
	
	//=======================================================================
	//converts time to string.  Time is in minutes past noon so 100->"1:40"
	function stringify(time) {
		var hour = Math.floor(time/60);
		var min = time%60;
		var timeString=""+hour+":";
		if (min<10)
			timeString+=("0"+min);
		else
			timeString+=min;
		
		return timeString;
	}
	
	
}); //.ready

