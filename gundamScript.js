document.addEventListener('DOMContentLoaded', function(){
    const frameDiv = document.getElementById('gundam-models')


    fetch('http://localhost:3000/frames')
        .then(resp =>{
            if(resp.ok)
            {
                return resp.json()
            }
            throw new Error('NETWORK ERROR POINT #1')
        })
        .then(result =>{
            result.forEach(function(elem){
               
                const newItem = document.createElement('p')
                newItem.textContent = elem.name
                newItem.addEventListener('mouseover',function(){
                    for(let [key,value] of Object.entries(elem)){
                        console.log(key,value)
                    }
                })
                frameDiv.appendChild(newItem)
            })
        })
})