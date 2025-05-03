const rows = document.querySelectorAll(".rows");
let flag = false;

for (let i = 0; i < rows.length; i++) {
  rows[i].addEventListener("click", function () {
    if (flag) return;
    flag = true;
    if (i == 0) {
      document.getElementById("t1").innerHTML = "N";
      document.getElementById("t2").innerHTML = "N";
      document.getElementById("t3").innerHTML = "N";
      document.getElementById("t4").innerHTML = "N";
      document.getElementById("t5").innerHTML = "N";
    } else if (i == 1) {
      document.getElementById("t1").innerHTML = "Nq";
      document.getElementById("t2").innerHTML = "Nq";
      document.getElementById("t3").innerHTML = "Nq";
      document.getElementById("t4").innerHTML = "Nq";
      document.getElementById("t5").innerHTML = "Nq";
    } else if (i == 2) {
      document.getElementById("t1").innerHTML = "text!";
      document.getElementById("t2").innerHTML = "text!";
      document.getElementById("t3").innerHTML = "text!";
      document.getElementById("t4").innerHTML = "text!";
      document.getElementById("t5").innerHTML = "text!";
    } else if (i == 3) {
      document.getElementById("t1").innerHTML = "New text!";
      document.getElementById("t2").innerHTML = "New text!";
      document.getElementById("t3").innerHTML = "New text!";
      document.getElementById("t4").innerHTML = "New text!";
      document.getElementById("t5").innerHTML = "New text!";
    } else if (i == 4) {
      document.getElementById("t1").innerHTML = "ext!";
      document.getElementById("t2").innerHTML = "ext!";
      document.getElementById("t3").innerHTML = "ext!";
      document.getElementById("t4").innerHTML = "ext!";
      document.getElementById("t5").innerHTML = "ext!";
    }
    // setTimeout(function () {
    //   flag = false;
    // }, 1000);
  });
}
//for speech to text
document.querySelector(".leftmic").addEventListener("click", function () {
  const texts = document.querySelector(".q");

  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement("p");

  recognition.addEventListener("result", (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    p.innerText = text;
    //  document.getElementById("j").innerHTML = text;

    if (e.results[0].isFinal) {
      if (text.includes("how are you")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "I am fine";
        texts.appendChild(p);
      }
      if (text.includes("Aadhar centres near me")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening bhuvan Adhaar");
        window.open("https://bhuvan-app3.nrsc.gov.in/aadhaar/");
      }
      if (text.includes("show highlights")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening bhuvan Adhaar");
        window.open("highlights.html");
      }
      if (text.includes("open nrsc")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening NRSC website");
        window.open("https://bhuvan-app3.nrsc.gov.in/data/download/index.php");
      }
      if (text.includes("open Bhuvan 2D")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening bhuvan 2D website");
        window.open(
          "https://bhuvan-app1.nrsc.gov.in/bhuvan2d/bhuvan/bhuvan2d.php"
        );
      }
      if (text.includes("open API")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening Bhuvan API");
        window.open("https://bhuvan-app1.nrsc.gov.in/api/");
      }
      if (text.includes("open Bhuvan tourism")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening bhuvan tourism");
        window.open("https://bhuvan-app1.nrsc.gov.in/tourism/tourism.php");
      }
      if (text.includes("open Bhuvan home page")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening bhuvan homepage");
        window.open("https://bhuvan.nrsc.gov.in/home/index.php");
      }
      if (text.includes("show your features")) {
        p = document.createElement("p");
        p.classList.add("replay");
        console.log("opening features page");
        window.open("features.html");
      } else {
        fetch("http://localhost:5005/webhooks/rest/webhook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        })
          .then((response) => response.json())
          .then((data) => {
            p = document.createElement("p");
            p.classList.add("replay");
            const botMessage = data[0]
              ? data[0].text
              : "No reply from the bot.";
            p.innerText = botMessage;
            texts.appendChild(p);
          })
          .catch((error) => {
            console.error("Error:", error);
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Error fetching response";
            texts.appendChild(p);
          });
      }
      p = document.createElement("p");
    }
  });

  recognition.addEventListener("end", () => {
    recognition.start();
  });

  recognition.start();
});
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  document.getElementById("j").innerHTML = input.value;
});
