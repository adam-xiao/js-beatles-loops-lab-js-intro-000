var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var i = 0;
  var bp = [];
  for (i = 0; i < 4; i++) {
  bp.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return bp;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while ( i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    ++i;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var love = [];
  var i = 0;
  function incVar(){
    i = i + 1;
    return i;
  }
  do{
    love.push("I love the Beatles!");
  while (incVar() < 15);
  }
  return love;
}
