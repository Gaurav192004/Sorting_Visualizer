// Bubble Sort Function
const bubbleSort = async () => {
    updateColorLegend();
    const bars = document.querySelectorAll(".array-bar");
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "#e07b39"; // To highlight the current bar being compared
            bars[j + 1].style.backgroundColor = "#e07b39"; // To highlight the next bar being compared
            
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1], 100); // Swap and delay for visualization
            }
            
            bars[j].style.backgroundColor = "#3b3b98"; // Reset color after comparison
            bars[j + 1].style.backgroundColor = "#3b3b98"; // Reset color after comparison
        }
        bars[bars.length - 1 - i].style.backgroundColor = "#40c057"; // Mark the element as sorted
    }
    
    // Mark all elements as sorted at the end
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "#40c057";
    }
};

/*
"#e07b39": Current bars being compared. ----> Orange
"#3b3b98": Reset color for bars after comparison. ----> Blue
"#40c057": Mark the elements as sorted. ----> green
await swap(bars[j], bars[j + 1], 100): Increased the delay to make the animation smoother and more visible.
*/
