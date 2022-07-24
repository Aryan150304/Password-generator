const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

//generating random numbers for both the divs
document.querySelector(".btn").addEventListener("click", function() {
  animation(".btn");
  let listItems = '';
  let list2 = '';
  for (let i = 0; i < (15); i++) {
    let pass = Math.floor(Math.random() * 91);
    listItems += characters[pass];
    let pass2 = Math.floor(Math.random() * 91);
    list2 += characters[pass2];
  }
  console.log(listItems);
  document.querySelector(".pass1").textContent = listItems;
  document.querySelector(".pass2").textContent = list2;
});

function animation(name) {
  document.querySelector(name).classList.add("pressed")
  setTimeout(function() {
    document.querySelector(name).classList.remove("pressed")
  }, 100)
}

// event listener on icon
document.querySelector(".fa-cloud-moon").addEventListener("click",function(){
animation("i");
document.querySelector("body").classList.toggle("dark");
document.querySelector(".heading-1").classList.toggle("heading-dark");
document.querySelector("hr").classList.toggle("hr-class");
document.querySelector(".main-para").classList.toggle("p-dark");
});
document.querySelector("body").classList.toggle("light");
