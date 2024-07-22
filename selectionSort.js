// Selection Sort Function
const selectionSort = async () => {
    updateColorLegend();
    const bars = document.querySelectorAll(".array-bar");
    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "#e07b39"; // Highlight the current minimum bar
        
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = "#948f03"; // Highlight the comparing bar
            
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                if (minIndex !== i) {
                    bars[minIndex].style.backgroundColor = "#3b3b98"; // Reset the previous minimum bar color
                }
                minIndex = j;
                bars[minIndex].style.backgroundColor = "#e07b39"; // Highlight the new minimum bar
            } else {
                bars[j].style.backgroundColor = "#3b3b98"; // Reset color after comparison
            }
        }
        
        if (minIndex !== i) {
            await swap(bars[i], bars[minIndex], 200); // Swap the minimum element with the current element
        }
        bars[i].style.backgroundColor = "#40c057"; // Mark the element as sorted
    }
    
    // Mark the last element as sorted
    bars[bars.length - 1].style.backgroundColor = "#40c057";
};

/*
"#e07b39": Highlight the current minimum bar.
"#948f03": Highlight the comparing bars.
"#3b3b98": Reset color for bars after comparison.
"#40c057": Mark the elements as sorted.
await swap(bars[i], bars[minIndex], 100)
*/
