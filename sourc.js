var form=document.getElementById("sheetdb")
form.addEventListener("submit", e=>{
e.preventDefault();
fetch(form.action,{
    method:"POST",
    body: new FormData(document.getElementById("sheetdb")),
}).then((html) => {
    window.open('thanks.html');
});
})