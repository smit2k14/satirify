input = document.getElementById("input");
output = document.getElementById("output");
button = document.getElementById("satirify");

function satirify() {
  out_string = input.value.toLowerCase();
  let i;
  for (i = 0; i < out_string.length - 1; i++) {
    if (Math.random() < 0.5) {
      out_string =
        out_string.slice(0, i) +
        out_string.slice(i, i + 1).toUpperCase() +
        out_string.slice(i + 1, out_string.length);
    }
  }
  return out_string;
}
try {
  button.onclick = function () {
    output.innerHTML = satirify(input);
  };
} catch (err) {
  console.log("No input available");
}
