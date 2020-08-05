
// Changing the colors based on the time of day
document.getElementById("currentDay").innerHTML = moment().format('dddd, MMMM Do YYYY')
time = document.getElementById("clock").innerHTML = moment().format('hh:mm:ss')
currentHour = moment().format('h') // .subtract(8, 'hours')
futureTime = currentHour
currentHour = parseInt(currentHour)

// Empty variables
info = ""
input = ""

// If statement that decides red color depending on the time of day
if (currentHour <= 18 && currentHour >= 9) {
    document.getElementById(currentHour).style.backgroundColor='#ff6961' // red color
}

// Saving data to the local storage
$(document).ready(function() {
    if (currentHour < 18 && currentHour > 9) {
        for (i = 9; i < 18; i++) {
            if (!localStorage.getItem("input" + i)) {
                localStorage.setItem("input" + i, "")
            }
            retrievedInfo = localStorage.getItem("input" + i)
            document.getElementById("info" + i).setAttribute("value", localStorage.getItem("input" + i))
        }
}
        else {
            for (i = 9; i < 18; i++) {
                if (!localStorage.getItem("input" + i)) {
                    localStorage.setItem("input" + i, "")
                }
                retrievedInfo = localStorage.getItem("input" + i)
                document.getElementById("info" + i).setAttribute("value", localStorage.getItem("input" + i))
            }
        }
});

// Function to save our input so it refreshes to the next page
function save(info, input) {
    inputValue = document.getElementById(info).value
    localStorage.setItem(input, inputValue)
}

// Changing the colors based on the time of day
$(document).ready(function() {
    futureTime = parseInt(futureTime)
    if (currentHour <= 18 && currentHour >= 9) {
        for (i = futureTime + 1; i < 18; i++) {
            document.getElementById(i).style.backgroundColor='#77dd77' // green color
        }
}
});



























