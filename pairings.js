
$(document).ready(function() {
	
	const emojisAll = [
		{ "num": 128018, "desc": "Monkey"},
		{ "num": 129421, "desc": "Gorilla"},
		{ "num": 129447, "desc": "Orangutan"},
		/*{ "num": 128021, "desc": "Dog"},*/
		{ "num": 128005, "desc": "Tiger"},		
		{ "num": 128006, "desc": "Leopard"},
		{ "num": 128017, "desc": "Wolf/Sheep"},	
		{ "num": 129420, "desc": "Deer"},
		{ "num": 128042, "desc": "Camel"},		
		{ "num": 129433, "desc": "Lama"},		
		{ "num": 128024, "desc": "Elephant"},		
		{ "num": 129423, "desc": "Rhinocerous"},
		{ "num": 129452, "desc": "Buffalo"},
		{ "num": 129413, "desc": "Eagle"},	
		{ "num": 129414, "desc": "Duck"},
		{ "num": 128641, "desc": "Helicopter"},		
		{ "num": 129430, "desc": "T-Rex"},
		{ "num": 128009, "desc": "Dragon"},
		{ "num": 128032, "desc": "Fish"},
		{ "num": 129416, "desc": "Shark"},		
		{ "num": 129428, "desc": "Hedgehog"},		
		{ "num": 129432, "desc": "Kangaroo"},
		{ "num": 129445, "desc": "Sloth"},
		{ "num": 129448, "desc": "Skunk"},
		{ "num": 128060, "desc": "Panda"},		
		{ "num": 128039, "desc": "Penguin"},
		{ "num": 129453, "desc": "Seal"},		
		{ "num": 129417, "desc": "Owl"},
		{ "num": 128010, "desc": "Crocodile"},
		{ "num": 129422, "desc": "Lizard"},
		{ "num": 128013, "desc": "Snake"},
		{ "num": 128044, "desc": "Dolphin"},
		{ "num": 128375, "desc": "Spider"},	
		{ "num": 129410, "desc": "Scorpion"},
		{ "num": 128025, "desc": "Octopus"},	
		{ "num": 129419, "desc": "Butterfly"},	
		{ "num": 128027, "desc": "Bug"},	
		{ "num": 128028, "desc": "Ant"},	
		{ "num": 128029, "desc": "Bee"},	
		{ "num": 128030, "desc": "Ladybug"},
		//{ "num": 129419, "desc": "Butterfly"},
		{ "num": 129415, "desc": "Bat"}		
	];  
	 
	var emojis = []; //will hold emojis actually selected
	
	var tableCount=Number($("#selectTotalPlayers option:selected").val()) / 4;
	$("#totals").html(" &nbsp ("+(tableCount*2) + " teams / " + (tableCount) + " tables)");  //e.g. "(16 teams / 8 tables)"
	
	var printTeamNumbers=false;
	var printTeamEmojis=true;
	var movement=$("#movement option:selected").val()
	var roundOneStartTime=Number( $("#startTime option:selected").val() );
	var roundLength=Number( $("#roundLength option:selected").val() );
	var notes=$("#notes").val().replace(/\n/g, "<br />");
	var printAllPages=false;
	
	buildEmojiCheckList();
	updateSelectedEmojiList();
	makeTables();
			
	// ============================================================================
	// event handlers
	// 
	// all these functions modify one of the variables above and make new tables (by calling makeTables)
	
	$("#selectTotalPlayers").on('click', function (event) { 
		var totalPlayers=$("#selectTotalPlayers option:selected").val()
		tableCount=totalPlayers/4;
		$("#totals").html(" &nbsp ("+(tableCount*2) + " teams / " + (tableCount) + " tables)");  //e.g. "(16 teams / 8 tables)"
		makeTables();
    });
		
	$("#selectTeamRepresentation").on('click', function (event) { 
		teamRepresentation=$("#selectTeamRepresentation option:selected").val()
		if (teamRepresentation == "emojis" || teamRepresentation == "both") 
			printTeamEmojis=true;
		else 
			printTeamEmojis=false;
		if (teamRepresentation == "numbers" || teamRepresentation == "both") 
			printTeamNumbers=true;
		else 
			printTeamNumbers=false;	
		makeTables();
    });
	
	$("#movement").on('click', function (event) { 
		movement=$("#movement option:selected").val();
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

	$(".emojiSelectionCheckbox").on('click', function (event) {
		//alert(event.target.id);
		//alert($(this).attr('id'));
		updateSelectedEmojiList();
		makeTables();
    });
	
	//=========================================================================
	
	//-------------------------------------------------------------------------
	//builds emoji checklist from emojiAll array	
	function buildEmojiCheckList() {
		htmlCode="";
		col=1;
		colCount=0;
		for(x=0;x<emojisAll.length;x++) {
			//htmlCode+="<span class='emojis'>";

			emojiID="Emoji"+x;
			htmlCode+="<input type='checkbox' id='" + emojiID + "' name='"+emojiID
			+ "' class='emojiSelectionCheckbox' checked value="+x+" >\n"
			htmlCode+="<label for='"+ emojiID + "'>&#" + emojisAll[x].num + " " + emojisAll[x].desc + "</label><br>\n";
			colCount++;
			if(colCount>=12) {
				$("#emojiListCol"+col).html(htmlCode);
				htmlCode="";
				colCount=0;
				col++;
			}
			//htmlCode+=("&#" + emojis[team1].num);
			//htmlCode+=("&#" + emojis[team2].num);
			//htmlCode+="</span>";
		}
	}
	
	//-------------------------------------------------------------------------
	//copies all selected emojis to the emoji list used to create tables
	function updateSelectedEmojiList() {
		emojis = [];
		for(x=0;x<emojisAll.length;x++) {
			emojiID="#Emoji"+x;		
			if ($(emojiID).is(":checked")) {
				emojis.push(emojisAll[x]);
			}
		}
	}
	
	//-------------------------------------------------------------------------
	//puts html-formatted tables at end of the page (replacing any that currently exist)
	function makeTables() {
		//var tableCount=pairings[0].length;
		var pairings=makePairings(tableCount, movement);
		tableHtmlCode = makeTableHtml(pairings,printTeamEmojis,printTeamNumbers, roundOneStartTime, roundLength);
		
		var tablesToPrint=tableCount;
		if (!printAllPages)
			tablesToPrint=1;
		
		$("#tables").html("");
		for (var table=0;table<tablesToPrint; table++) {
			$("#tables").append("<h1>" + (table+1) + "</h1>");
			$("#tables").append(tableHtmlCode);
			$("#tables").append("<br />");
			$("#tables").append(notes);
			$("#tables").append("<hr>");
		}
	}
	
		
	//-------------------------------------------------------------------------
	// makes table html code from pairings
	// returns string with html code that is the table
	function makeTableHtml(pairings, showEmoji, showNumber, roundOneStartTime, roundLength) {
		var htmlCode = "<table>\n";
		
		var roundCount=pairings.length;  
		var tableCount=pairings[0].length/2;
		endTime=roundOneStartTime+roundLength;
			
		//print heading line
		htmlCode+="<thead><tr><td>Round</td>";
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
			htmlCode+="<td>Table<br>" + (tableNum+1) + "</td>";
		}
		htmlCode+="<td>Ending<br>Time</td>";
		htmlCode+="</tr></thead><tbody>";
		
		//print table data
		for (var roundNum=0; roundNum<roundCount; roundNum++) {
			console.log(roundNum);
			//round number
			htmlCode+="<tr><td>";
			htmlCode+=(roundNum+1);
			htmlCode+="</td>";
			//pairings
			for (var tableNum=0; tableNum<tableCount; tableNum++) {
				htmlCode+="<td>";
				var team1=pairings[roundNum][tableNum*2];
				var team2=pairings[roundNum][tableNum*2+1];
				if (showEmoji) {	
					htmlCode+="<span class='emojis'>";
					htmlCode+=("&#" + emojis[team1].num);
					htmlCode+=("&#" + emojis[team2].num);
					htmlCode+="</span>";
				}
				if (showEmoji && showNumber)
					htmlCode+="<br>";
				if (showNumber) {
					htmlCode+=(team1+1);
					htmlCode+="<span class='vs'> vs </span>";
					htmlCode+=(team2+1);
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
	
	//=======================================================================
	//update Seating chart
	// returns 2-D array tables[tableNum][seatNum]
	function makePairings(tableCount, movement) {
		// Build a 2-d array to hold players for all rounds
		// There will be one row for each round 
		//     first two entries play at first table, next two next round, etc.

		var teamCount=tableCount*2;
		var roundCount=4;
		var rows=roundCount;
		
		var pairings = new Array(rows);
		for (var row=0; row<rows; row++) {
			pairings[row] = new Array(teamCount);
		}

		
		//fill in round 0 with teams in order 
		teamNum=0; //first team is team 0, 1 is added when printing
		row=0;
		for (var teamNum=0; teamNum<teamCount; teamNum++) {
			pairings[0][teamNum] = teamNum;
		}
		
		//for all subsequent rounds, copy previous round and modify as requested
		//   each round is 2 rows (round*2 and round*2+1)
		for (var toRound=1; toRound<roundCount; toRound++) {
			var fromRound=toRound-1;
			
			if (movement=="moveE2U") {
				copyRound(pairings,fromRound,toRound); 	//copy previous round
				shiftOddRight(pairings[toRound],2);	    //shift odd entries in row right 2
			} else if (movement=="moveE2D") {
				copyRound(pairings,fromRound,toRound);	//copy previous round
				shiftOddLeft(pairings[toRound],2);	    //shift odd entries in row left 2
			}
			else if (movement=="randomExLast" || movement == "randomAll") {
				copyRound(pairings,fromRound,toRound);
				var omitLast=false;
				if (movement=="randomExLast")
					omitLast=true;
				do {
					randomize(pairings, toRound, omitLast);
				} while (checkForRepeats(pairings, toRound) == true); //while their is a repeat pairing, we do it over
			}
		}	
		
		//alert(pairings);
		return pairings;
	}

	function swapTeams(arr, ndx1, ndx2) {
		var tmp=arr[ndx1];
		arr[ndx1]=arr[ndx2];
		arr[ndx2]=tmp;
	}
	
	//randomly assign teams for round.  round CANNOT be 0. (row 0 must be full);
	// may create a pairing that is a duplicate of a previous rounds pairings
	function randomize(pairings, round, omitLast) {
		var teamCount=pairings[0].length;
		
		//alert(pairings[round]);
		
		//randomize them (except for last item, always leave it alone)
		var teamsToRandomize=teamCount;
		if (omitLast)
			teamsToRandomize--;
		for (var swap=0;swap<100;swap++) {
			var ndx1=Math.floor(Math.random() * teamsToRandomize);
			var ndx2=Math.floor(Math.random() * teamsToRandomize);
			swapTeams(pairings[round],ndx1,ndx2);
		}
		
		//arrange teams at each table so low number team is first
		for (var ndx=0; ndx<teamCount; ndx+=2) {
			if (pairings[round][ndx]>pairings[round][ndx+1]) //always make low number team first
				swapTeams(pairings[round],ndx,ndx+1);
		}
		
		//note, current pairings my duplicate some previos pairings!
		//alert(pairings[round]);
	}
	

	
	//checks if any of the pairings in the current Round are repeat pairings from previous Rounds
	//returns true if repeat is found
	function checkForRepeats(pairings, currRound) {
		if (currRound==0)
			return false; //round 0, no previous rounds, no repeats!
	
		for(var table=0;table<tableCount;table++) {
			var currPlayer1=pairings[currRound][table*2];
			var currPlayer2=pairings[currRound][table*2+1];
			var currPairing=""+currPlayer1+currPlayer2;
			for (prevRound=0;prevRound<currRound;prevRound++) {
				for(var t2=0;t2<tableCount;t2++) {
					var prevPlayer1=pairings[prevRound][t2*2];
					var prevPlayer2=pairings[prevRound][t2*2+1];
					var prevPairing=""+prevPlayer1+prevPlayer2;
					if (currPairing==prevPairing) {
						//alert(currPairing+" | "+(prevRound+1)+" | "+(t2+1));
						return true;
					}
				}
			}	
		}
		return false; //no repeats found!
	}
	
	function copyRound(pairings,fromRound,toRound) {
		for (var ndx=0; ndx<pairings[0].length; ndx++) {
				pairings[toRound][ndx] = pairings[fromRound][ndx]; 
			}
	}
	
	function shiftOddLeft(arr, shiftAmt) {
		shiftAmt*=2;
		var fromArr=[...arr]; //make a copy of the array
		var len=arr.length;
		for (var ndx=0; ndx<len; ndx+=2) 
			arr[ndx] = fromArr[(ndx+shiftAmt)%len];
	}
	
	function shiftOddRight(arr, shiftAmt) {
		shiftAmt*=2;
		var fromArr=[...arr]; //make a copy of the array
		var len=arr.length;
		for (var ndx=0; ndx<len; ndx+=2) 
			arr[(ndx+shiftAmt)%len] = fromArr[ndx];
	}
	
}); //.ready
