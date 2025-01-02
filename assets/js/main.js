



function changeMode (){
    document.querySelector("body").classList.toggle("dark");
}

document.querySelector(".BtnChangeMode").onclick = changeMode;

alert("Are you sure you want to refresh the page?");

console.log();

document.querySelector('.BtnChangeMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

