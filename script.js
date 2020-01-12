var time = moment()

console.log(time);
$("parent").append(time._d);
console.log(time._d);
// $("parent").text(time._d);
document.getElementById("parent").innerHTML = time._d