// -----------------------reusable  function------------------------

function getNumber(id) {
    const data = document.getElementById(id).innerText;
    return parseInt(data);
}

function getText(id) {
    return document.getElementById(id).innerText;
}




// --------------------------increase heart-----------------------------

const heartList = document.getElementsByClassName("heart-btn")


for (const h of heartList) {
    h.addEventListener("click", function () {
        const heart = getNumber("heart");
        const newValue = heart + 1;

        console.log(newValue);
        document.getElementById("heart").innerText = newValue;
    })

}

