//JavaArray
function runStuff()
{
	document.getElementById("display-stuff").innerText = lottoPicks;
}
var x = prompt("How many lottery picks?");
var lotto = [];
var lottoPicks = "";

//fills the lotto aray
for (var i = 0; i < x; i++)
{
	lotto[i] = Math.ceil(Math.random() * 99);
	console.log(lotto);
}

//display the lotto array
for (var i = 0; i < lotto.length; i++)
{
	if (i == 0) lottoPicks += lotto[i];
	else lottoPicks += "-" + lotto[i];

}

console.log(lottoPicks);
