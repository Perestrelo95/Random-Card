window.onload = () => {
  let container = document.createElement("div");
  container.classList.add(
    "container",
    "pt-5",
    "d-flex",
    "justify-content-center"
  );

  let carta = document.createElement("div");
  carta.classList.add("d-flex", "flex-nowrap");
  carta.style.background = "white";
  carta.style.width = "15rem";
  carta.style.height = "20rem";
  carta.style.position = "relative";
  carta.style.fontSize = "50px";

  let top = document.createElement("div");
  top.style.position = "absolute";
  top.style.height = "1rem";
  top.style.width = "1rem";
  top.style.left = "50%";
  top.style.top = "50%";
  top.style.transform = "translate(-600%, -800%)";
  let bottom = document.createElement("div");
  bottom.style.position = "absolute";
  bottom.style.height = "1rem";
  bottom.style.width = "1rem";
  bottom.style.left = "50%";
  bottom.style.top = "50%";
  bottom.style.transform = "translate(500%, 700%)";

  carta.innerHTML = `    
      <div class="w-100 h-100 justify-content-center d-flex align-items-center">
      </div>
  `;

  top.innerHTML = `    
     <div class="w-100 h-100 justify-content-center d-flex align-items-center">
      </div>
  `;

  bottom.innerHTML = `    
     <div class="w-50 h-100 justify-content-center d-flex align-items-center">
      </div>
  `;

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let simbolos = ["♠", "♣", "♥", "♦"];

  let randomIndex = Math.floor(Math.random() * numbers.length);
  let randomIndex2 = Math.floor(Math.random() * simbolos.length);
  for (child of carta.children) {
    child.style.height = "10rem";
    child.classList.add(`${numbers[randomIndex]}`);
    child.innerHTML = `<p class="text-center">${numbers[randomIndex]}</p>`;
  }
  let child;
  for (child of top.children) {
    child.classList.add(`${simbolos[randomIndex2]}`);
    child.innerHTML = `${simbolos[randomIndex2]}`;
  }
  for (child of bottom.children) {
    child.classList.add(`${simbolos[randomIndex2]}`);
    child.innerHTML = `${simbolos[randomIndex2]}`;
  }
  carta.appendChild(bottom);
  carta.appendChild(top);
  container.appendChild(carta);
  document.body.appendChild(container);
};
