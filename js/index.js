const historyList = [];

// -----------------------reusable  function------------------------

function getNumber(id) {
    const data = document.getElementById(id).innerText;
    return parseInt(data);
}

function getText(id) {
    return document.getElementById(id).innerText;
}

function getClassList(id) {
    return document.getElementsByClassName(id);
}


// --------------------------increase heart-----------------------------

const heartList = getClassList("heart-btn");


for (const h of heartList) {
    h.addEventListener("click", function () {
        const heart = getNumber("heart");
        const newValue = heart + 1;

        console.log(newValue);
        document.getElementById("heart").innerText = newValue;
    })

}



// --------------------------Call Feature-----------------------------

const historyContainer = document.getElementById("history-container");
const callList = getClassList("call-btn");

for (const call of callList) {
    call.addEventListener("click", function () {

        const title = call.parentNode.parentNode.children[1].children[0].innerText;

        const number = call.parentNode.parentNode.children[2].children[0].innerText;
        console.log(title, number);
        let coin = getNumber("coin");

        if (coin >= 20) {
            alert(`📞 ${title} ${number} Calling.... `);
            coin = coin - 20;
            document.getElementById("coin").innerText = coin;


            /* 
                        const historyData = {
                            titleName: `${title}`,
                            callNumber: `${number}`,
                            date: new Date().toLocaleTimeString()
                        }
            
                        historyList.push(historyData);
                        console.log(historyList);
            
            
             */


            // add history

            const date = new Date().toLocaleTimeString();
            const newHistory = document.createElement("div");
            newHistory.innerHTML = `
            <div class="bg-gray-100 p-4 rounded-2xl flex justify-between items-center">
                    <div>
                        <h2>${title}</h2>
                        <h2>${number}</h2>
                    </div>
                    <h2>${date}</h2>
                </div>
            `

            // console.log(newHistory.innerHTML);
            historyContainer.appendChild(newHistory);




        }

        else {
            alert(` ❌ পর্যাপ্ত কয়েন নেই।  কমপক্ষে ২০ টি কয়েন থাকতে হবে। `);
        }

    })
}


// clear history

const clear = document.getElementById("clear-btn").addEventListener("click", function () {
    historyContainer.innerText = "";
})


// --------------------------Copy Number Feature-----------------------------
/* const copyButtons = getClassList("copy-btn");

for (const btn of copyButtons) {
    btn.addEventListener("click", function () {
        // get the number from the card
        const number = btn.parentNode.parentNode.children[2].children[0].innerText;

        // use Clipboard API
        navigator.clipboard.writeText(number);
    });
}
 */


const copyButtons = getClassList("copy-btn");
for (const btn of copyButtons) {
    btn.addEventListener("click", function () {
        const number = btn.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(number);
    })
}