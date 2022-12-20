const day = prompt("lutfen bir gun giriniz:").toLowerCase();
switch (day) {
  case "pazartesi":
  case "sali":
  case "carsamba":
  case "persembe":
    console.log("inclass");
    break;
  case "cuma":
    console.log("teamwork");
    break;
  case "cumartasi":
    console.log("inclass+workshop");
    break;
  case "pazar":
    console.log("self study");
    break;
  default:
    console.log("yanlis bir gun girdiniz");
}
