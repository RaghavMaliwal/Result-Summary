let marks = document.querySelectorAll("#marks");
let total = document.querySelector("#large");

fetch("./data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    let score = data.map((item) => item.score);

    console.log(marks[0].innerHTML);
    console.log(score[0]);
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      marks[i].innerHTML = score[i];
      totalMarks += score[i];
    }

    total.innerHTML = (totalMarks / 4).toFixed(0);
  });
