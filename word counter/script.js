let txtarea = document.getElementById("txtarea");
let totalchar = document.getElementById("totalchar");
let remainchar = document.getElementById("remainchar");
let maxLength = 200;
let clr = document.getElementById("clear-btn");
let save = document.getElementById("save-btn")
let progress = document.getElementById("progress-bar")


txtarea.addEventListener("keyup", () => {
    updateCount();
});

function updateCount() {
    //count length of string
    let currentlenght = txtarea.value;
    totalchar.innerHTML = currentlenght.length;

     //count reamining word 
    let remaining = maxLength - currentlenght.length;
    remainchar.innerHTML = remaining;


 //increase bar line 
    const progressWidth = (currentlenght.length / maxLength) * 100;
    progress.style.width = `${progressWidth}%`;


    // warning light will genrate when reaminiing word is less than 10
    progress.style.background = remaining < 10 ? "red" : "#4c1d95";

}
//clear whole string
clr.addEventListener("click", () => {
    txtarea.value = "";
    updateCount();
})

//save the content
save.addEventListener("click", () => {
    const mytextcontent = new Blob([txtarea.value], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(mytextcontent);
    link.download = "mytext.txt";
    link.click();

})
