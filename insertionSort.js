// Insertion Sort Function

const insertionSort = async () => {
    updateColorLegend();

    const bars = document.querySelectorAll(".array-bar");
    for (let i = 1; i < bars.length; i++) {
        let j = i - 1;
        let keyHeight = bars[i].style.height;
        bars[i].style.backgroundColor = "#e07b39"; // Current element being compared

        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(keyHeight)) {
            bars[j].style.backgroundColor = "#c92a2a"; // Bar being shifted
            bars[j + 1].style.height = bars[j].style.height; // Shift the larger element to the right
            await wait(100); // Delay for better visualization
            bars[j].style.backgroundColor = "#3b3b98"; // Reset color after shift
            j--;
        }

        bars[j + 1].style.height = keyHeight; // Place the key element at its correct position
        bars[i].style.backgroundColor = "#3b3b98"; // Reset color of the key element
        bars[j + 1].style.backgroundColor = "#40c057"; // Mark the element as sorted
    }
    
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "#40c057"; // Mark all elements as sorted at the end
    }
};

/* 
"#e07b39": Current element being compared.
"#c92a2a": Bars being shifted to the right. -----> Red
"#3b3b98": Reset color for bars after comparison.
"#40c057": Mark the element as sorted.
wait(100): Increased the delay to make the animation smoother and more visible.
*/
