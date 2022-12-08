// Завдання 1
const months = prompt("Please, enter month of year");
switch (months) {
  case "1":
    alert("January");
    break;

  case "2":
    alert("February");
    break;

  case "3":
    alert("March ");
    break;

  case "4":
    alert("April ");
    break;

  case "5":
    alert("May ");
    break;

  case "6":
    alert("June");
    break;

  case "7":
    alert("July ");
    break;

  case "8":
    alert("August ");
    break;

  case "9":
    alert("September ");
    break;

  case "10":
    alert("October ");
    break;

  case "11":
    alert("November ");
    break;

  case "12":
    alert("December ");
    break;

  default:
    alert("You enter incorrect data");

    break;
}

// Завдвння 2

let tmp = prompt("Де зараз проходить ЧМ з футболу?");

console.log(typeof tmp);

console.log(tmp);

let count = 0;

if (tmp === "Катар") {
  count++;
  alert("Відповідь правильна ");
} else {
  alert("Відповідь не правильна ");
}

tmp = prompt("Хто призидент України?");

console.log(tmp);

if (tmp === "Зеленский") {
  count++;
  alert("Відповідь правильна");
} else {
  alert("Відповідь не правильна ");
}

tmp = prompt("Куди пішов рускій корабль?");

console.log(tmp);

if (tmp === "На х*й") {
  count++;
  alert("Відповідь правильна");
} else {
  alert("Відповідь не правильна ");
}

tmp = prompt("Хто перший призидент України?");

console.log(tmp);

if (tmp === " Кравчук") {
  count++;
  alert("Відповідь правильна");
} else {
  alert("Відповідь не правильна ");
}

tmp = prompt("Україна переможе?");

console.log(tmp);

if (tmp === "ТАК") {
  count++;
  alert("Відповідь правильна");
} else {
  alert("Відповідь не правильна ");
}
