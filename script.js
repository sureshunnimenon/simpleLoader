console.log("connected");

const boxes = {
    box1: document.querySelector("#box1"),
    box2: document.querySelector("#box2"),
    box3: document.querySelector("#box3"),
    box4: document.querySelector("#box4")
  };

let currentBoxNumber = 0;
const colorChangeIntervalInMs = 200;
// We create a mapping from the keys in the box object to box
// numbers. ["box1", "box2", ... ] becomes [1, 2, ... ]
const listOfBoxNumbers = Object.keys(boxes).map((_, index) => index+1);
const defaultColor = "#9eedff";
const highlightColor = "#1fcdf5";

// Save the interval into a constant so we can clear it later as needed
var loadingInterval = setInterval(() => {
    currentBoxNumber+=1;
    if (currentBoxNumber === 5) {
    listOfBoxNumbers.forEach(boxNumber => {
        boxes[`box${boxNumber}`].style.backgroundColor = highlightColor;  
      });
      currentBoxNumber = 0;
      return;
    }
    
    listOfBoxNumbers.forEach(boxNumber => {
      boxes[`box${boxNumber}`].style.backgroundColor = defaultColor;  
    });
    
    boxes[`box${currentBoxNumber}`].style.backgroundColor = highlightColor;
  }, colorChangeIntervalInMs);

  document.onload=loadingInterval;