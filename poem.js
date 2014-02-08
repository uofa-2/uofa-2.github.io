function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(5)>Said the maintainer, 'Welcome to the club!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}
