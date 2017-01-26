var currentMood;

var moods = document.querySelectorAll('.key')
var days = document.querySelectorAll('.day')

var mood = undefined; 

for(var i = 0; i < moods.length; i++){
	moods[i].addEventListener('click', function saveMood(event){
		currentMood = event.target.id;
		console.log(event.target.id);
	})
}

for(var j = 0; j < days.length; j++){
	days[j].addEventListener('click', function applyMood(event){
		event.target.className = "day";
		console.log(currentMood);
		event.target.classList.add(currentMood);
	})

}
