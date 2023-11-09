$(document).ready(function() {
	
	const emojis = [
		{ "num": 128018, "desc": "Monkey"},
		{ "num": 129421, "desc": "Gorilla"},
		/*{ "num": 129447, "desc": "Orangutan"},*/
		/*{ "num": 128021, "desc": "Dog"},*/
		{ "num": 128005, "desc": "Tiger"},		
		/*{ "num": 128006, "desc": "Leopard"},*/
		{ "num": 129420, "desc": "Deer"},
		{ "num": 128042, "desc": "Camel"},		
		/*{ "num": 129433, "desc": "Lama"},*/		
		/*{ "num": 128024, "desc": "Elephant"},	*/	
		{ "num": 129423, "desc": "Rhinocerous"},		
		{ "num": 129428, "desc": "Hedgehog"},		
		/*{ "num": 129415, "desc": "Bat"},*/		
		{ "num": 129432, "desc": "Kangaroo"},		
		{ "num": 128039, "desc": "Penguin"},		
		{ "num": 129413, "desc": "Eagle"},	
		/*{ "num": 129414, "desc": "Duck"},*/
		{ "num": 129417, "desc": "Owl"},
		{ "num": 128010, "desc": "Crocodile"},
		{ "num": 129422, "desc": "Lizard"},
		{ "num": 128013, "desc": "Snake"},
		{ "num": 129430, "desc": "T-Rex"},
		{ "num": 128009, "desc": "Dragon"},
		/*{ "num": 128044, "desc": "Dolphin"},*/
		{ "num": 128032, "desc": "Fish"},
		{ "num": 129416, "desc": "Shark"},
		{ "num": 128025, "desc": "Octopus"},	
		{ "num": 129419, "desc": "Butterfly"},	
		{ "num": 128027, "desc": "Bug"},	
		{ "num": 128028, "desc": "Ant"},	
		{ "num": 128029, "desc": "Bee"},	
		{ "num": 128030, "desc": "Ladybug"},	
		{ "num": 128375, "desc": "Spider"},	
		{ "num": 129410, "desc": "Scorpion"},	
		{ "num": 129440, "desc": "Microbe"}	
	];  
	 

	var tableCount=Number($("#selectTotalPlayers option:selected").val()) / 4;
	$("#totals").html(" &nbsp ("+(tableCount*2) + " teams / " + (tableCount) + " tables)");  //e.g. "(16 teams / 8 tables)"
	
	var printTeamNumbers=true;
	var printTeamEmojis=true;
	var movement=$("#movement option:selected").val()
	var roundOneEndTime=Number( $("#endTime option:selected").val() );
	var roundLength=Number( $("#roundLength option:selected").val() );
	var notes=$("#notes").val().replace(/\n/g, "<br />");
	var printAllPages=false;
	
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
	
	$("#endTime").on('click', function (event) { 
		roundOneEndTime=Number( $("#endTime option:selected").val() );
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
	
	function makeTables() {
		//var tableCount=pairings[0].length;
		var pairings=makePairings(tableCount, movement);
		tableHtmlCode = makeTableHtml(pairings,printTeamEmojis,printTeamNumbers, roundOneEndTime, roundLength);
		
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
	
		
	//=======================================================================
	// makes table html code from pairings
	// returns string with html code that is the table
	function makeTableHtml(pairings,showEmoji,showNumber,roundOneEndTime, roundLength) {
		var htmlCode = "<table>\n";
		
		var roundCount=pairings.length/2;  //two rows per round
		var tableCount=pairings[0].length;
		endTime=roundOneEndTime;
			
		//print heading line
		htmlCode+="<tr><td>Round</td>";
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
			htmlCode+="<td>Table<br>" + (tableNum+1) + "</td>";
		}
		htmlCode+="<td>Ending<br>Time</td>";
		htmlCode+="</tr>";
		
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
				var team1=pairings[roundNum*2][tableNum];
				var team2=pairings[roundNum*2+1][tableNum];
				if (showEmoji) {	
					htmlCode+=("&#" + emojis[team1].num);
					htmlCode+=("&#" + emojis[team2].num);
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
		htmlCode+="</table>\n";
		
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
		// There will be two rows for each round 
		//     row 0 & 1 are for round 1,
		//     row 2 & 3 are for round 2, 
		//     etc..
		var roundCount=4;
		var rows=roundCount*2;
		
		var pairings = new Array(rows);
		for (var row=0; row<rows; row++) {
			pairings[row] = new Array(tableCount);
		}

		
		//fill in round 0 (rows 0 & 1) with players in order (team1 vs team2, team3 vs team4, etc..)
		teamNum=0; //first team is team 0, 1 is added when printing
		row=0;
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
			pairings[0][tableNum] = teamNum;
			teamNum++;
			pairings[1][tableNum] = teamNum;
			teamNum++;
		}
		
		//for all subsequent rounds, copy previous round and modify as requested
		//   each round is 2 rows (round*2 and round*2+1)
		for (var toRound=1; toRound<roundCount; toRound++) {
			var fromRound=toRound-1;
			
			if (movement=="moveE2U") {
				copyRound(pairings,fromRound,toRound); 	//copy previous round
				shiftRowRight(pairings[toRound*2+1],2);	//shift 2nd row of round right 2
			} else if (movement=="moveE2D") {
				copyRound(pairings,fromRound,toRound);	//copy previous round
				shiftRowLeft(pairings[toRound*2+1],2);	//shift 2nd row of round left 2
			}
			else if (movement=="randomExLast" || movement == "randomAll") {
				var omitLast=false;
				if (movement=="randomExLast")
					omitLast=true;
				do {
					randomize(pairings, toRound, omitLast);
				} while (checkForRepeats(pairings, toRound) == true); //while their is a repeat pairing, we do it over
			}
		}	

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
		var tableCount=pairings[0].length;
		var teamCount=tableCount*2;
		
		//create an array of all the team numbers (0-n) in order
		var teams = new Array(teamCount); //array of all team numbers
		for (var team = 0; team<teamCount; team++) {
			teams[team]=team;
		}
		
		//randomize them (except for last item, always leave it alone)
		var teamsToRandomize=teamCount;
		if (omitLast)
			teamsToRandomize--;
		for (var swap=0;swap<100;swap++) {
			var ndx1=Math.floor(Math.random() * teamsToRandomize);
			var ndx2=Math.floor(Math.random() * teamsToRandomize);
			swapTeams(teams,ndx1,ndx2);
		}
		
		//copy random sequence of teams from teams arr to pairings
		ndx=0; 
		row=round*2;
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
			if (teams[ndx]>teams[ndx+1]) //always make low number team first
				swapTeams(teams,ndx,ndx+1);
			pairings[row][tableNum] = teams[ndx];
			ndx++;
			pairings[row+1][tableNum] = teams[ndx];
			ndx++;
		}
		
		//note, current pairings my duplicate some previos pairings!
	}
	
	//checks if any of the pairings in the current Round are repeat pairings from previous Rounds
	//returns true if repeat is found
	function checkForRepeats(pairings, currRound) {
		if (currRound==0)
			return false; //round 0, no previous rounds, no repeats!
	
		for(var table=0;table<tableCount;table++) {
			var currPairing=""+pairings[currRound*2][table]+pairings[currRound*2+1][table];
			for (prevRound=0;prevRound<currRound;prevRound++) {
				for(var t2=0;t2<tableCount;t2++) {
					var prevPairing=""+pairings[prevRound*2][t2]+pairings[prevRound*2+1][t2];
					if (currPairing==prevPairing) {
						//alert(currPairing+" "+(prevRound+1)+" "+(t2+1));
						return true;
					}
				}
			}	
		}
		return false; //no repeats found!
	}
	
	function copyRound(pairings,fromRound,toRound) {
		for (var tableNum=0; tableNum<tableCount; tableNum++) {
				pairings[toRound*2][tableNum] = pairings[fromRound*2][tableNum]; 
				pairings[toRound*2+1][tableNum] = pairings[fromRound*2+1][tableNum];
			}
	}
	
	function shiftRowLeft(arr, shiftAmt) {
		var fromArr=[...arr]; //make a copy of the array
		var len=arr.length;
		for (var tableNum=0; tableNum<len; tableNum++) 
			arr[tableNum] = fromArr[(tableNum+shiftAmt)%len];
	}
	
	function shiftRowRight(arr, shiftAmt) {
		var fromArr=[...arr]; //make a copy of the array
		var len=arr.length;
		for (var tableNum=0; tableNum<len; tableNum++) 
			arr[(tableNum+shiftAmt)%len] = fromArr[tableNum];
	}
	
}); //.ready
