function alertUser(name){
	document.getElementById('el').innerHTML = name;
};

function consolSomething(){
	return console.log(name);
}

consolSomething("dog");

for(var i = 0; i<10; i++){
	console.log(i)
}

myFavThings = ["John", "Mike", "Steve"], ["Eating", "Swimming", "Watching Tv"]

for(var i = 0; i<myFavThings[0].length; i++){
	console.log(myFavThings[i]);
}

for(var i = 0; i<myFavThings[1].length; i++){
	console.log(myFavThings[i]);
}


x = 6;
while(x<10){
	console.log("On Number" + x)
	x++;
}