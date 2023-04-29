const getcolor=()=>
{
    const randomNumber=Math.floor(math.random()*1677215);
    const randomCode= "#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)