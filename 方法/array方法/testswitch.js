var a = "135";
for(i in a){
  console.log(a[i]);
  switch (a[i]) {
    case "1":
      console.log("in1")
      break;
    case "2":
      console.log("in2")
      break;
    case "3":
      console.log("in3")
      break;
    case "5":
      console.log("in5")
      break;
  }
}