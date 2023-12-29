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
                console.log(elem)
                console.log(elem.name)
                const newItem = document.createElement('p')
                newItem.textContent = elem.name
                
                frameDiv.appendChild(newItem)
            })
        })
})