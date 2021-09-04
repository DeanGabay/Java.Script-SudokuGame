// register for the game with password and username
//if its correct forwad the 2nd screen, else show Error
function register() {
  document.getElementById("Error").innerHTML = "";
  let UsernameV = document.getElementById("Username").value;
  let passwordV = document.getElementById("password").value;
  if (UsernameV == "abcd" && passwordV == "1234") {
    window.location = "sudokuscreen2.html";
  }
  if (UsernameV == "" && passwordV == "") {
    document.getElementById("Error").innerHTML =
      "Please enter a password and username";
  } else if (UsernameV !== "abcd" && passwordV !== "1234") {
    document.getElementById("Error").innerHTML =
      "Username and password are incorrect";
  } else if (UsernameV !== "abcd") {
    document.getElementById("Error").innerHTML = "Username is incorrect";
  } else if (passwordV !== "1234") {
    document.getElementById("Error").innerHTML = "password is incorrect";
  }
}

// Function for playing music on a button
function play1() {
  var audio1 = document.getElementById("audio1");
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
    audio1.currentTime = 0;
  }
}

function play2() {
  var audio2 = document.getElementById("audio2");
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
    audio2.currentTime = 0;
  }
}

function play3() {
  var audio3 = document.getElementById("audio3");
  if (audio3.paused) {
    audio3.play();
  } else {
    audio3.pause();
    audio3.currentTime = 0;
  }
}

function play4() {
  var audio4 = document.getElementById("audio4");
  if (audio4.paused) {
    audio4.play();
  } else {
    audio4.pause();
    audio4.currentTime = 0;
  }
}

function play5() {
  var audio5 = document.getElementById("audio5");
  if (audio5.paused) {
    audio5.play();
  } else {
    audio5.pause();
    audio5.currentTime = 0;
  }
}

function play6() {
  var audio6 = document.getElementById("audio6");
  if (audio6.paused) {
    audio6.play();
  } else {
    audio6.pause();
    audio6.currentTime = 0;
  }
}

function play7() {
  var audio7 = document.getElementById("audio7");
  if (audio7.paused) {
    audio7.play();
  } else {
    audio7.pause();
    audio7.currentTime = 0;
  }
}

function play8() {
  var audio8 = document.getElementById("audio8");
  if (audio8.paused) {
    audio8.play();
  } else {
    audio8.pause();
    audio8.currentTime = 0;
  }
}

function play9() {
  var audio9 = document.getElementById("audio9");
  if (audio9.paused) {
    audio9.play();
  } else {
    audio9.pause();
    audio9.currentTime = 0;
  }
}

function play10() {
  var audio10 = document.getElementById("audio10");
  if (audio10.paused) {
    audio10.play();
  } else {
    audio10.pause();
    audio10.currentTime = 0;
  }
}
// Functions that move the user to the next level at the touch of a button (next level).
function next_to_level_1() {
  window.location = "sudokuscreen3(level1).html";
}
function next_to_level_2() {
  window.location = "sudokuscreen3(level2).html";
}

function next_to_level_3() {
  window.location = "sudokuscreen3(level3).html";
}

// Refreshes the sudoku grid by the level
function again() {
  document.getElementById("alert").innerHTML = "";
  document.getElementById("B_clue").style.display = "inline";
  refresh_grid();
  showDiv();
}
function again2() {
  document.getElementById("alert").innerHTML = "";
  document.getElementById("B_clue").style.display = "inline";
  refresh_grid();
  showDiv2();
}
function again3() {
  document.getElementById("alert").innerHTML = "";
  document.getElementById("B_clue3").style.display = "inline";
  refresh_grid();
  showDiv3();
}

// // Beginning of the sudoku code
var matrix = [
  5,
  3,
  4,
  6,
  7,
  8,
  9,
  1,
  2,
  6,
  7,
  2,
  1,
  9,
  5,
  3,
  4,
  8,
  1,
  9,
  8,
  3,
  4,
  2,
  5,
  6,
  7,
  8,
  5,
  9,
  7,
  6,
  1,
  4,
  2,
  3,
  4,
  2,
  6,
  8,
  5,
  3,
  7,
  9,
  1,
  7,
  1,
  3,
  9,
  2,
  4,
  8,
  5,
  6,
  9,
  6,
  1,
  5,
  3,
  7,
  2,
  8,
  4,
  2,
  8,
  7,
  4,
  1,
  9,
  6,
  3,
  5,
  3,
  4,
  5,
  2,
  8,
  6,
  1,
  7,
  9,
];

// The function causes the sudoku board and buttons to appear
function showDiv() {
  document.getElementById("play").style.display = "block";
  document.getElementById("play1").style.display = "block";
  document.getElementById("Move_to_play").style.display = "none";
  level(matrix);
  // The function selects random numbers between 0-80,
  //  the numbers are the specific ID of the INPUT and the location in the prepared sudok (matrix),
  //   the function actually takes a number from the METRIX and inserts it into the user's sudoku input.
  function level(mat) {
    let counter = 0;
    while (counter != 60) {
      let x = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
      if (document.getElementById("cell-" + x).value != 0) {
        document.getElementById("cell-" + x).style.color = "#ffffff";
        counter = counter - 1;
      }
      document.getElementById("cell-" + x).value = mat[x];
      document.getElementById("cell-" + x).style.color = "#ff776f";
      counter++;
    }
  }
}
// Same function for level 2 (the function selects 40 numbers for the user's sudoku board)
function showDiv2() {
  debugger;
  document.getElementById("play").style.display = "block";
  document.getElementById("play1").style.display = "block";
  document.getElementById("Move_to_play").style.display = "none";
  level2(matrix);
  // The function selects random numbers between 0-80,
  //  the numbers are the specific ID of the INPUT and the location in the prepared sudok (matrix),
  //   the function actually takes a number from the METRIX and inserts it into the user's sudoku input.
  function level2(mat) {
    let counter = 0;
    while (counter != 40) {
      let x = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
      if (document.getElementById("cell-" + x).value != 0) {
        document.getElementById("cell-" + x).style.color = "#ffffff";
        counter = counter - 1;
      }
      document.getElementById("cell-" + x).value = mat[x];
      document.getElementById("cell-" + x).style.color = "#ff776f";
      counter++;
    }
  }
}
// Same function for level 3 (the function selects 20 numbers for the user's sudoku board)
function showDiv3() {
  document.getElementById("play").style.display = "block";
  document.getElementById("play1").style.display = "block";
  document.getElementById("Move_to_play").style.display = "none";
  level3(matrix);
  // The function selects random numbers between 0-80,
  //  the numbers are the specific ID of the INPUT and the location in the prepared sudok (matrix),
  //   the function actually takes a number from the METRIX and inserts it into the user's sudoku input.
  function level3(mat) {
    let counter = 0;
    while (counter != 20) {
      let x = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
      if (document.getElementById("cell-" + x).value != 0) {
        document.getElementById("cell-" + x).style.color = "#ffffff";
        counter = counter - 1;
      }
      document.getElementById("cell-" + x).value = mat[x];
      document.getElementById("cell-" + x).style.color = "#ff776f";
      counter++;
    }
  }
}
// The function goes through all the INPUT of the sudoku board one by one and inserts " " (no value) into them and this is how it refreshes it
function refresh_grid() {
  for (let i = 0; i < 81; i++) {
    document.getElementById("cell-" + i).value = "";
    document.getElementById("cell-" + i).style.color = "#ffffff";
  }
}

// The function takes the values from the INPUT entered by the user and inserts them in the order in the array we defined.

var array = [];
function grid() {
  for (let i = 0; i < 81; i++) {
    array.push(document.getElementById("cell-" + i).value);
  }
  console.log(array);
  Test_solution(array);
  if (counter == 9 && counter1 == 9 && counter2 == 9) {
    document.getElementById("alert1").innerHTML =
      "Congratulations You won the level!, Click the button to go to the next level";
  } else {
    document.getElementById("alert").innerHTML = "oops, try again!";
  }
}
// The function takes the values from the INPUT entered by the user and inserts them in the order in the array we defined.
function grid_level3() {
  for (let i = 0; i < 81; i++) {
    array.push(document.getElementById("cell-" + i).value);
  }
  console.log(array);
  Test_solution(array);
  if (counter == 9 && counter1 == 9 && counter2 == 9) {
    window.location = "sudokuscreen4(Winners page).html";
  } else {
    document.getElementById("alert").innerHTML = "oops, try again!";
  }
}

// Start functions that check if the user's solution is correct:
var counter = 0;
var counter1 = 0;
var counter2 = 0;
function Test_solution(array) {
  Test_solution_row(array);
  Test_solution_col(array);
  Test_solution_3x3(array);
  console.log("row=", counter, "col=", counter1, "3x3=", counter2);
}

// The function checks whether the solution of the row is correct:
function Test_solution_row(mat) {
  let arr = [];
  let arr_sort = [];
  for (let i = 0; i < 81; i++) {
    arr.push(mat[i]);
    if (arr.length == 9) {
      arr_sort = arr.sort();
      if (
        arr_sort[0] == 1 &&
        arr_sort[1] == 2 &&
        arr_sort[2] == 3 &&
        arr_sort[3] == 4 &&
        arr_sort[4] == 5 &&
        arr_sort[5] == 6 &&
        arr_sort[6] == 7 &&
        arr_sort[7] == 8 &&
        arr_sort[8] == 9
      ) {
        counter++;
        arr = [];
        arr_sort = [];
      } else {
        break;
      }
    }
  }
}
// The function checks whether the solution of the col is correct:
function Test_solution_col(mat) {
  let arr = [];
  let arr_sort = [];
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 81; i = i + 9) {
      arr.push(mat[i + j]);
      if (arr.length == 9) {
        arr_sort = arr.sort();
        if (
          arr_sort[0] == 1 &&
          arr_sort[1] == 2 &&
          arr_sort[2] == 3 &&
          arr_sort[3] == 4 &&
          arr_sort[4] == 5 &&
          arr_sort[5] == 6 &&
          arr_sort[6] == 7 &&
          arr_sort[7] == 8 &&
          arr_sort[8] == 9
        ) {
          counter1++;
          arr = [];
          arr_sort = [];
        } else {
          break;
        }
      }
    }
    continue;
  }
}
// The function checks whether the solution of the 3x3 is correct:
function Test_solution_3x3(mat) {
  let arr = [];
  let arr_sort = [];
  for (let j = 0; j < 80; j = j + 27) {
    for (let i = 10; i < 17; i = i + 3) {
      arr.push(mat[i + j]);
      arr.push(mat[i + j - 10]);
      arr.push(mat[i + j - 9]);
      arr.push(mat[i + j - 8]);
      arr.push(mat[i + j - 1]);
      arr.push(mat[i + j + 1]);
      arr.push(mat[i + j + 8]);
      arr.push(mat[i + j + 9]);
      arr.push(mat[i + j + 10]);
      arr_sort = arr.sort();
      if (
        arr_sort[0] == 1 &&
        arr_sort[1] == 2 &&
        arr_sort[2] == 3 &&
        arr_sort[3] == 4 &&
        arr_sort[4] == 5 &&
        arr_sort[5] == 6 &&
        arr_sort[6] == 7 &&
        arr_sort[7] == 8 &&
        arr_sort[8] == 9
      ) {
        counter2++;
        arr = [];
        arr_sort = [];
        continue;
      } else {
        break;
      }
    }
  }
}
// The function gives the user a hint that three numbers appear on the sudoku board by pressing the CLUE button
// The function runs on each input in the user board and checks which input has not entered a value,
// as soon as it detects no value input it enters a number from the original board solution
function clue(mat) {
  document.getElementById("B_clue").style.display = "none";
  let counter = 0;
  while (counter < 3) {
    let x = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
    if (document.getElementById("cell-" + x).value == "") {
      document.getElementById("cell-" + x).value = mat[x];
      document.getElementById("cell-" + x).style.color = "#ff776f";
      counter++;
    }
  }
}

function clue_level3(mat) {
  document.getElementById("B_clue3").style.display = "none";
  let counter = 0;
  while (counter < 6) {
    let x = Math.floor(Math.random() * (80 - 0 + 1)) + 0;
    if (document.getElementById("cell-" + x).value == "") {
      document.getElementById("cell-" + x).value = mat[x];
      document.getElementById("cell-" + x).style.color = "#ff776f";
      counter++;
    }
  }
}
