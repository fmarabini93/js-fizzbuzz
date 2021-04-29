var num = [];

for (i=1; i<101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
            num.push("FizzBuzz");
            console.log("FizzBuzz");

      } else if (i % 3 == 0) {
            num.push("Fizz");
            console.log("Fizz");
      } else if (i % 5 == 0) {
            num.push("Buzz");
            console.log("Buzz");
      } else {
            num.push(i);
            console.log(i);
      }
}

for (i=0; i<num.length; i++) {
      document.getElementById("numbers").innerHTML += "<li>" + num[i] + "</li>";
}
