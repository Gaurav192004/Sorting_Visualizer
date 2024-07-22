const arrayContainer = document.getElementById("array-container");
const colorLegend = document.getElementById("color-legend");


const generateArray = () => {
    arrayContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const barHeight = ~~(Math.random() * 80) + 10; // To calculate the random height between 20% and 100%
        const arrayBar = document.createElement("div");
        arrayBar.classList.add("array-bar");
        arrayBar.style.height = `${barHeight}%`;
        arrayContainer.appendChild(arrayBar);
    }
    colorLegend.style.display = "none"; // Hide the legend when a new array is generated
};

const swap = (bar1, bar2, delay ) => {
    return new Promise((resolve) => {
        const tempHeight = bar1.style.height; // swap heights
        bar1.style.height = bar2.style.height;
        bar2.style.height = tempHeight;
        setTimeout(() => {
            resolve();
        }, delay); // delay for visualization purpose
    });
};

const wait = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};

generateArray(); // generate initial array

const updateColorLegend = () => {
    colorLegend.style.display = "flex"; // Show the legend
    colorLegend.innerHTML = `
        <div><div class="color-box" style="background-color: #e07b39;"></div> Current bars being compared</div>
        <div><div class="color-box" style="background-color: #3b3b98;"></div> Bars after comparison</div>
        <div><div class="color-box" style="background-color: #40c057;"></div> Sorted bars</div>
    `;
};
