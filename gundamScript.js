document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:3000/gundams')
        .then(resp =>{
            if(resp.ok)
            {
                return resp.json()
            }
            throw new Error('NETWORK ERROR POINT #1')
        })
        .then(result =>{
            result.forEach(function(elem){
                console.log(elem.weapon+": "+elem['weapon grade'])
            })
        })
})