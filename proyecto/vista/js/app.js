let btnCargar = document.getElementById('btnCargar');
btnCargar.addEventListener('click',()=>{
    fetch('localhost:1340/api/productos')
    .then(response => response.json())
    .then(json => {
        let info = "";
        for (let i=0; i<json.length; i++)
        {
            info+=`<option value = '${json[i+10].id}'> ${json[i+10].name}</option>`
        };
        const mnuProductos = document.getElementById("mnuProductos");
        mnuProductos.innerHTML=info;
    })
})