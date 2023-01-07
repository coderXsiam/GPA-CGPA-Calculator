/****Declaring basic variables****/
var arrmain = new Array();
var innhtm = (str1 = "");
var spy = new Array();
var search = (I = grade = swc = count = visit = sh = 0);
var totgpa = 0.0,
  totcgpa = 0.0,
  total = 0,
  avggpa = 0,
  avgcgpa = 0,
  avgmark = 0;
var stravggpa = "F",
  stravgcgpa = "F";
var arr = new Array();
var marks = new Array();
var base = 100,
  countavg;
var swcbase;
var alert1 = "You haven't entered anything!";
var alert2 = "You can't enter 0!";
var alert3 = "Max length of digit is 15!";
/***********Function:::1**********/
function showhide(x) {
  el3 = document.getElementById("inp1").style;
  el4 = document.getElementById("inp2").style;
  el5 = document.getElementById("newline1").style;
  el7 = document.getElementById("tooltip1").style;
  el8 = document.getElementById("newline3").style;
  el6 = document.getElementById("fst").style;
  el9 = document.getElementById("snd").style;
  if (x == 0) {
    el3.display = "none";
    el4.display = el5.display = el7.display = el8.display = "block";
    el6.height = el9.height = "30px";
    arrwcont2(0);
    sh = 0;
  } else {
    el3.display = "block";
    el4.display = el5.display = el7.display = el8.display = "none";
    el6.height = el9.height = "29px";
    arrwcont(0);
    sh = 1;
  }
}
/***********Function:::2**********/
function bas(z) {
  el1 = document.getElementById("fst").style;
  el2 = document.getElementById("snd").style;
  if (z == 0) {
    arrwcont(0);
    arrwcont2(0);
    el1.backgroundColor = "#00bc63";
    el1.color = el2.backgroundColor = "black";
    el2.color = "white";
    base = 100;
    showhide(0);
    if (swc == 1) {
      visit = 1;
    }
    if (count != 1) {
      count++;
    }
    rv();
    showdata();
    document.getElementById("data2").innerText = str1;
    document.getElementById("data").innerText = str1;
  } else {
    arrwcont(0);
    arrwcont2(0);
    el2.backgroundColor = "#00bc63";
    el2.color = "black";
    el1.backgroundColor = "black";
    el1.color = "white";
    if (swc == 0) {
      base = 100;
      showhide(1);
    } else {
      base = swcbase;
      if (count != 1) {
        count++;
      }

      if (count % 2 == 0 || visit == 1) {
        showhide(0);
        if (count % 2 == 0 && visit == 1) {
          count--;
        }
        if (visit == 1) {
          visit = 0;
          count++;
        }
      } else {
        showhide(1);
      }

      if (count == 1) {
        count += 2;
      }
    }
    rv();
    showdata();
    document.getElementById("data").innerText = str1;
    document.getElementById("data2").innerText = str1;
  }
}
/***********Function:::3**********/
function butn(z) {
  el1 = document.getElementById("btn1").style;
  el2 = document.getElementById("btn2").style;
  if (z == 0) {
    el1.backgroundColor = "#00bc63";
    el1.color = "black";
    el2.backgroundColor = "black";
    el2.color = "white";
    grade = 0;
  } else {
    el2.backgroundColor = "#00bc63";
    el2.color = "black";
    el1.backgroundColor = "black";
    el1.color = "white";
    grade = 1;
  }
}
/***********Function:::4**********/
function typing(x) {
  if (str1.length <= 15) {
    arrwcont(0);
    arrwcont2(0);
  }
  var y = x.toString();

  if (y != "x" && y != "ac") {
    str1 += y;
  } else {
    if (y == "x") {
      str1 = str1.substring(0, str1.length - 1);
    }
    if (y == "ac") {
      str1 = "";
    }
  }

  if (str1.length > 15) {
    document.getElementById("content").innerText = alert3;
    document.getElementById("content2").innerText = alert3;
    if (sh == 0) {
      arrwcont(1);
    } else {
      arrwcont2(1);
    }
  }
  str1 = str1.substring(0, 15);
  document.getElementById("data2").innerText = str1;
  document.getElementById("data").innerText = str1;
}
/***********Function:::5**********/
function add2() {
  var num = parseInt(str1, 10);
  string = document.getElementById("content2");
  if (str1 != "" && num != 0) {
    swc = 1;
    count++;
    rv();
    if (isNaN(num) == true) {
      num = 0;
    }
    base = num;
    swcbase = base;
    showdata();
    rv();
    document.getElementById("data").innerText = str1;
    document.getElementById("data2").innerText = str1;
    document.getElementById("snd").innerText = base;
    showhide(0);
  } else {
    if (str1 == "") {
      string.innerText = alert1;
      arrwcont2(1);
    }
    if (num == 0) {
      string.innerText = alert2;
      arrwcont2(1);
    }
  }
}
/***********Function:::6**********/
function rv() {
  str1 = "";
}
/***********Function:::7**********/
function arrwcont(x) {
  elarrw = document.getElementById("arrow").style;
  elcont = document.getElementById("content").style;
  if (x == 0) {
    elarrw.opacity = "0";
    elcont.width = "0px";
    elcont.opacity = "0";
  } else {
    elarrw.opacity = "1";
    elcont.width = "213px";
    elcont.opacity = "1";
  }
}
/***********Function:::8**********/
function arrwcont2(x) {
  elarrw = document.getElementById("arrow2").style;
  elcont = document.getElementById("content2").style;
  if (x == 0) {
    elarrw.opacity = "0";
    elcont.width = "0px";
    elcont.opacity = "0";
  } else {
    elarrw.opacity = "1";
    elcont.width = "215px";
    elcont.opacity = "1";
  }
}
/***********Function:::9**********/
function add() {
  var num = parseInt(str1, 10);
  string = document.getElementById("content");
  if (str1 != "") {
    if (isNaN(num) == true) {
      num = 0;
    }
    marks[I] = num;
    I++;
    arrwcont(0);
  } else {
    string.innerText = alert1;
    arrwcont(1);
  }
  rv();
  document.getElementById("data").innerText = str1;
}
/***********Function:::10*********/
function cgpacal(grd, grade) {
  var cgpa;
  var strcgpa;
  if (grd < 40) {
    cgpa = 0.0;
    strcgpa = "F";
  }
  if (grd >= 40 && grd < 45) {
    cgpa = 2.0;
    strcgpa = "D";
  }
  if (grd >= 45 && grd < 50) {
    cgpa = 2.25;
    strcgpa = "D+";
  }
  if (grd >= 50 && grd < 55) {
    cgpa = 2.5;
    strcgpa = "C";
  }
  if (grd >= 55 && grd < 60) {
    cgpa = 2.75;
    strcgpa = "C+";
  }
  if (grd >= 60 && grd < 65) {
    cgpa = 3.0;
    strcgpa = "B";
  }
  if (grd >= 65 && grd < 70) {
    cgpa = 3.25;
    strcgpa = "B+";
  }
  if (grd >= 70 && grd < 75) {
    cgpa = 3.5;
    strcgpa = "A-";
  }
  if (grd >= 75 && grd < 80) {
    cgpa = 3.75;
    strcgpa = "A";
  }
  if (grd >= 80 && grd < 90) {
    cgpa = 4.0;
    strcgpa = "A+";
  }
  if (grd >= 90) {
    cgpa = 4.0;
    strcgpa = "AE";
  } //CGPA Grading System

  if (grade == 0) {
    return cgpa;
  } else {
    return strcgpa;
  }
}
/***********Function:::11*********/
function gpacal(grd, grade) {
  var gpa;
  var strgpa;
  if (grd < 33) {
    gpa = 0.0;
    strgpa = "F";
  }
  if (grd >= 33 && grd < 40) {
    gpa = 1.0;
    strgpa = "D";
  }
  if (grd >= 40 && grd < 50) {
    gpa = 2.0;
    strgpa = "C";
  }
  if (grd >= 50 && grd < 60) {
    gpa = 3.0;
    strgpa = "B";
  }
  if (grd >= 60 && grd < 70) {
    gpa = 3.5;
    strgpa = "A-";
  }
  if (grd >= 70 && grd < 80) {
    gpa = 4.0;
    strgpa = "A";
  }
  if (grd >= 80) {
    gpa = 5.0;
    strgpa = "A+";
  } //GPA Grading System

  if (grade == 0) {
    return gpa;
  } else {
    return strgpa;
  }
}
/***********Function:::12*********/
function getgpa(grade) {
  var str = "";
  if (grade < 1) {
    str = "F";
  }
  if (grade >= 1 && grade < 2) {
    str = "D";
  }
  if (grade >= 2 && grade < 3) {
    str = "C";
  }
  if (grade >= 3 && grade < 3.5) {
    str = "B";
  }
  if (grade >= 3.5 && grade < 4) {
    str = "A-";
  }
  if (grade >= 4 && grade < 5) {
    str = "A";
  }
  if (grade >= 5) {
    str = "A+";
  }
  return str;
}
/***********Function:::13*********/
function getcgpa(grade) {
  var str = "";
  if (grade < 2.0) {
    str = "F";
  }
  if (grade >= 2.0 && grade < 2.25) {
    str = "D";
  }
  if (grade >= 2.25 && grade < 2.5) {
    str = "D+";
  }
  if (grade >= 2.5 && grade < 2.75) {
    str = "C";
  }
  if (grade >= 2.75 && grade < 3.0) {
    str = "C+";
  }
  if (grade >= 3.0 && grade < 3.25) {
    str = "B";
  }
  if (grade >= 3.25 && grade < 3.5) {
    str = "B+";
  }
  if (grade >= 3.5 && grade < 3.75) {
    str = "A-";
  }
  if (grade >= 3.75 && grade < 4.0) {
    str = "A";
  }
  if (grade >= 4.0) {
    str = "A+";
  }
  return str;
}
/***********Function:::14*********/
function destroy(x) {
  var count1,
    count2,
    count3 = 1,
    inform,
    grd;
  (totgpa = 0.0), (totcgpa = 0.0), (total = 0);
  innhtm =
    "<div class='subject fstsub'>Subject</div><div class='mark fstmrk'>Mark</div><div class='gpa fstgpa'>GPA</div><div class='cgpa fstcgpa'>CGPA</div><div><button class='remove dif fstrmv'></button></div>";
  spy[search] = x;
  marks[x - 1] = "x";
  var dvd = base / 100,
    gpa,
    cgpa;

  for (count1 = 0; count1 < 11; count1++) {
    arrmain[(x - 1) * 11 + count1] = "";
  }

  for (count1 = 0; count1 < arrmain.length / 11; count1++) {
    for (count2 = 0; count2 < spy.length; count2++) {
      if (spy[count2] == count1 + 1) {
        inform = 1;
        break;
      } else {
        inform = 0;
      }
    }

    if (inform == 0) {
      arrmain[count1 * 10 + (count1 + 1)] = count3;
      grd = arrmain[count1 * 10 + (count1 + 3)];
      cgpa = cgpacal(grd / dvd, 0);
      gpa = gpacal(grd / dvd, 0);
      totgpa += gpa;
      totcgpa += cgpa;
      total += grd;
      count3++;
    }
  }

  for (count1 = 0; count1 < arrmain.length; count1++) {
    innhtm += arrmain[count1];
  }

  countavg = count3;
  innhtm +=
    "<div class='subject lstsub'>Total</div><div class='mark lstmrk'>" +
    total +
    "</div><div class='gpa lstgpa'>" +
    totgpa.toFixed(2) +
    "</div><div class='cgpa lstcgpa'>" +
    totcgpa.toFixed(2) +
    "</div><div><button class='remove copy lstrmv' onclick='copy(0)'></button></div>";
  avggpa = totgpa / (countavg - 1);
  stravggpa = getgpa(avggpa);
  avgcgpa = totcgpa / (countavg - 1);
  stravgcgpa = getcgpa(avgcgpa);
  avgmark = total / (countavg - 1);

  if (isNaN(avgmark) == true) {
    avgmark = 0.0;
  }
  if (isNaN(avggpa) == true) {
    stravggpa = "F";
    avggpa = 0.0;
  }
  if (isNaN(avgcgpa) == true) {
    stravgcgpa = "F";
    avgcgpa = 0.0;
  }

  if (grade == 0) {
    innhtm +=
      "<div class='subject lstsub'>Average</div><div class='mark lstmrk'>" +
      avgmark.toFixed(2) +
      "</div><div class='gpa lstgpa'>" +
      avggpa.toFixed(2) +
      "</div><div class='cgpa lstcgpa'>" +
      avgcgpa.toFixed(2) +
      "</div><div><button class='remove copy lstrmv' onclick='copy(1)'></button></div>";
  } else {
    innhtm +=
      "<div class='subject lstsub'>Average</div><div class='mark lstmrk'>" +
      avgmark.toFixed(2) +
      "</div><div class='gpa lstgpa'>" +
      stravggpa +
      "</div><div class='cgpa lstcgpa'>" +
      stravgcgpa +
      "</div><div><button class='remove copy lstrmv' onclick='copy(1)'></button></div>";
  }

  search++;
  document.getElementById("showdata").innerHTML = innhtm;
}
/***********Function:::15*********/
function showdata() {
  innhtm =
    "<div class='subject fstsub'>Subject</div><div class='mark fstmrk'>Mark</div><div class='gpa fstgpa'>GPA</div><div class='cgpa fstcgpa'>CGPA</div><div><button class='remove dif fstrmv'></button></div>";
  arr = [
    "<div class='subject'>",
    1,
    "</div><div class='mark'>",
    100,
    "</div><div class='gpa'>",
    5.0,
    "</div><div class='cgpa'>",
    4.0,
    "</div><div class='lst'><button class='remove' onclick='destroy(",
    1,
    ")'></button></div>",
  ];
  var count1,
    count2,
    count3 = 0,
    grd;
  (totgpa = 0.0), (totcgpa = 0.0), (total = 0);
  var gpa,
    cgpa,
    dvd = base / 100;
  var strgpa, strcgpa;

  for (count1 = 0; count1 < marks.length; count1++) {
    if (marks[count1] != "x") {
      grd = marks[count1] / dvd;
      cgpa = cgpacal(grd, 0);
      strcgpa = cgpacal(grd, 1);
      gpa = gpacal(grd, 0);
      strgpa = gpacal(grd, 1);
      totgpa += gpa;
      totcgpa += cgpa;
      total += marks[count1];

      arr[1] = count3 + 1;
      arr[3] = marks[count1];
      if (grade == 0) {
        arr[5] = gpa.toFixed(2);
        arr[7] = cgpa.toFixed(2);
      } else {
        arr[5] = strgpa;
        arr[7] = strcgpa;
      }
      arr[9] = count1 + 1;

      for (count2 = 0; count2 < 11; count2++) {
        arrmain[count1 * 10 + (count1 + count2)] = arr[count2];
      }
      count3++;
    }
  }
  for (count1 = 0; count1 < arrmain.length; count1++) {
    innhtm += arrmain[count1];
  }

  countavg = count3;
  innhtm +=
    "<div class='subject lstsub'>Total</div><div class='mark lstmrk'>" +
    total +
    "</div><div class='gpa lstgpa'>" +
    totgpa.toFixed(2) +
    "</div><div class='cgpa lstcgpa'>" +
    totcgpa.toFixed(2) +
    "</div><div><button class='remove copy lstrmv' onclick='copy(0)'></button></div>";
  avggpa = totgpa / countavg;
  stravggpa = getgpa(avggpa);
  avgcgpa = totcgpa / countavg;
  stravgcgpa = getcgpa(avgcgpa);
  avgmark = total / countavg;
  if (isNaN(avgmark) == true) {
    avgmark = 0.0;
  }
  if (isNaN(avggpa) == true) {
    stravggpa = "F";
    avggpa = 0.0;
  }
  if (isNaN(avgcgpa) == true) {
    stravgcgpa = "F";
    avgcgpa = 0.0;
  }
  if (grade == 0) {
    innhtm +=
      "<div class='subject lstsub'>Average</div><div class='mark lstmrk'>" +
      avgmark.toFixed(2) +
      "</div><div class='gpa lstgpa'>" +
      avggpa.toFixed(2) +
      "</div><div class='cgpa lstcgpa'>" +
      avgcgpa.toFixed(2) +
      "</div><div><button class='remove copy lstrmv' onclick='copy(1)'></button></div>";
  } else {
    innhtm +=
      "<div class='subject lstsub'>Average</div><div class='mark lstmrk'>" +
      avgmark.toFixed(2) +
      "</div><div class='gpa lstgpa'>" +
      stravggpa +
      "</div><div class='cgpa lstcgpa'>" +
      stravgcgpa +
      "</div><div><button class='remove copy lstrmv' onclick='copy(1)'></button></div>";
  }
  document.getElementById("showdata").innerHTML = innhtm;
}
/***********Function:::16*********/
function copy(x) {
  var copyText;
  var copy = document.getElementById("copy");
  if (x == 0) {
    copyText = "Total Mark: ";
    copyText += total.toString();
    copyText += " || Total GPA: ";
    copyText += totgpa.toFixed(2).toString();
    copyText += " || Total CGPA: ";
    copyText += totcgpa.toFixed(2).toString();
  } else {
    if (grade == 0) {
      copyText = "Average Mark: ";
      copyText += avgmark.toFixed(2).toString();
      copyText += " || Average GPA: ";
      copyText += avggpa.toFixed(2).toString();
      copyText += " || Average CGPA: ";
      copyText += avgcgpa.toFixed(2).toString();
    } else {
      copyText = "Average Mark: ";
      copyText += avgmark.toFixed(2).toString();
      copyText += " || Average GPA: ";
      copyText += stravggpa;
      copyText += " || Average CGPA: ";
      copyText += stravgcgpa;
    }
  }
  copy.innerText = copyText;
  copy.style.display = "block";
  var range = document.createRange();
  range.selectNode(copy);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copy.style.display = "none";
}
