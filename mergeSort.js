// Merge Sort Function
const mergeSort = async () => {
    updateColorLegend();
    const bars = document.querySelectorAll(".array-bar");
    await mergeSortHelper(bars, 0, bars.length - 1);
};

const mergeSortHelper = async (bars, low, high) => {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        await mergeSortHelper(bars, low, mid);
        await mergeSortHelper(bars, mid + 1, high);
        await merge(bars, low, mid, high);
    }
};

const merge = async (bars, low, mid, high) => {
    let left = [];
    let right = [];

    for (let i = low; i <= mid; i++) {
        left.push(bars[i].style.height);
        bars[i].style.backgroundColor = "#e07b39"; // Sorting is Happening on left part
    }
    for (let i = mid + 1; i <= high; i++) {
        right.push(bars[i].style.height);
        bars[i].style.backgroundColor = "#3b3b98"; // Sorting is Happening on Right part
    }

    await wait(100); // Add delay to visualize 

    let i = 0;
    let j = 0;
    let k = low;

    while (i < left.length && j < right.length) {
        bars[k].style.backgroundColor = "#e07b39"; // Highlight the current bar being merged
        await wait(100); // Add delay to see the animation

        if (parseInt(left[i]) <= parseInt(right[j])) {
            bars[k].style.height = left[i];
            i++;
        } else {
            bars[k].style.height = right[j];
            j++;
        }
        bars[k].style.backgroundColor = "#40c057"; // Mark the merged bar as sorted
        k++;
    }

    while (i < left.length) {
        bars[k].style.height = left[i];
        bars[k].style.backgroundColor = "#40c057"; // Mark the merged bar as sorted
        i++;
        k++;
    }

    while (j < right.length) {
        bars[k].style.height = right[j];
        bars[k].style.backgroundColor = "#40c057"; // Mark the merged bar as sorted
        j++;
        k++;
    }

    for (let i = low; i <= high; i++) {
        bars[i].style.backgroundColor = "#40c057"; // Ensure all merged bars are marked as sorted
    }
};

/*
"#e07b39": Highlight left part of the array during merge.
"#948f03": Highlight right part of the array during merge.
"#40c057": Mark the merged bars as sorted.
Added delays with await wait(100); for smoother animation and better visualization.
*/