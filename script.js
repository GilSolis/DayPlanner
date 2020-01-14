var time = moment();

console.log(time.utc);
$("h1").append(` ${time._d}`);
$("h1").fadeOut(2000);
console.log(time._d);
// $("h1").text(`${time._d}`);
// $("<p>").text(`${time._d}`)
// document.getElementById("parent").innerHTML = time._d
