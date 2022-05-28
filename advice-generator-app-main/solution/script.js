const btn=document.getElementById('btn')
const bodyEl=document.getElementById('advice-text')
const numEl=document.getElementById('num')
function handleClick(){
    fetch('https://api.adviceslip.com/advice')
        .then(response=>response.json())
        .then(data=>{
            const id=data.slip.id
            const advice=data.slip.advice
            bodyEl.textContent=advice
            numEl.textContent=id
        })
}
btn.addEventListener('click',handleClick)