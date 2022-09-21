$("a.navbar-brand").click((e) => {
  e.preventDefault();
  alert("ကျွန်တော်၏  homepage  မှကြိုဆိုပါသည်။");
});

let url = window.location;
$("a.nav-link").removeClass("active");
$("a.nav-link").each(function () {
  if (this.href == url) {
    $(this).addClass("active");
  }
});

let rows = [
  "Scratch",
  "Hello",
  "Mario (Less)",
  "Mario (More)",
  "Cash ",
  "Credit",
  "Scrabble",
  "Readability",
  "Caesar",
  "Substitution",
  "Sort ",
  "Plurality",
  "Runoff",
  "Tideman",
  "Volume",
  "Filter (Less)",
  "Filter (More)",
  "Recover",
  "Inheritance",
  "Speller",
  "World Cup",
  "Hello ",
  "Mario (Less) ",
  "Mario (More)",
  "Cash",
  "Credit",
  "Readability",
  "DNA",
  "Songs",
  "Movies",
  "Fiftyville",
  "Trivia",
  "Homepage",
  "Birthdays",
  "Finance",
];

let zips = [
  "music.zip",
  "hello.zip",
  "marioLess.zip",
  "marioMore.zip",
  "cash.zip",
  "credit.zip",
  "scrabble.zip",
  "readability.zip",
  "caesar.zip",
  "substitution.zip",
  "sort.zip",
  "plurality.zip",
  "runoff.zip",
  "tideman.zip",
  "volume.zip",
  "filterLess.zip",
  "filterMore.zip",
  "recover.zip",
  "inheritance.zip",
  "speller.zip",
  "worldcup.zip",
  "helloPython.zip",
  "marioLessPython.zip",
  "marioMorePython.zip",
  "cashPython.zip",
  "creditPython.zip",
  "readabilityPython.zip",
  "dna.zip",
  "songs.zip",
  "movies.zip",
  "fiftyville.zip",
  "trivia.zip",
  "homepage.zip",
  "birthdays.zip",
  "finance.zip",
];

let count = 0;
let i = 0;
let weekArray = [0, 1, 6, 10, 14, 18, 20, 28, 31, 33];
let rowspans = [0, 5, 4, 4, 4, 2, 8, 3, 2, 2];
for (row of rows) {
  // Table row
  let tableRow = $("<tr>");

  // Name
  let tdataName = document.createElement("td");
  tdataName.innerText = row;

  // Link
  let link = $("<a>");
  link.attr("href", `zips/${zips[count]}`).text("Link");
  let tdataLink = $("<td>");
  tdataLink.append(link);

  // Week
  if (count === weekArray[i]) {
    let tdataWeek = document.createElement("td");
    tdataWeek.innerText = "Week " + i;
    if (count > 0) {
      tdataWeek.setAttribute("rowspan", `${rowspans[i]}`);
      tdataWeek.style.verticalAlign = "middle";
    }
    i++;
    tableRow.append(tdataWeek, tdataName, tdataLink);
  } else {
    tableRow.append(tdataName, tdataLink);
  }

  //combine
  $("tbody#my-tbody").append(tableRow);

  count++;
}
