/* This stores the expected values */
var expectedValues;

/* This stores the cutoff values */
var cutoffs;

/**
 * This is the main function.
 */
function runSimulation() {
  
  expectedValues = [];
  cutoffs = [];
  
  for(var cutoff = 1; cutoff < 100; cutoff++)
    simulate(cutoff);
	
  outputResults();
}

/**
 * This function performs the simulation for the given cutoff value.
 */
function simulate(cutoff) {
  
  console.log("Simulating: " + cutoff)
  
  var trialPresses = [];
	
  for(var i = 0; i < 1000000; i++) {
    var track = randomTrack(100);
    var presses = 0;
    while(track !== 0) {
      presses++;
      if(track < cutoff) track--;
      else track = randomTrack(100);
    }
    trialPresses.push(presses)
  }

  var sum = 0;
  for(i = 0; i < trialPresses.length; i++) {
    sum += trialPresses[i];
  }

  expectedValues.push(sum/trialPresses.length);
  cutoffs.push(cutoff)
}

/**
 * This function picks a track at random.
 */
function randomTrack(n) { return Math.floor(Math.random() * n); }

/**
 * This function outputs the results.
 */
function outputResults() {
  
  var output = "<table><tr><th>Cutoff</th><th>Expected Button Pushes</th></tr>"
	
  for(var i = 0; i < cutoffs.length; i++) {
    output += "<tr><td>" + cutoffs[i] + "</td><td>" + expectedValues[i] + "</td></tr>";
  }
  output += "</table>"
  document.getElementById("results").innerHTML = output;
}
