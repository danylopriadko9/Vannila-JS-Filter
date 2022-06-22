const searchTheProduct = () => {
    const searchbox = document.querySelector('.search-item').value.toUpperCase()
    const storeitem = document.querySelector('.product-list')
    const product = document.querySelectorAll('.product')
    const pname = storeitem.getElementsByTagName('h2')

    //First way

    // for(let i = 0; i < pname.length; i++){
    //     let match = product[i].getElementsByTagName('h2')[0]

    //     match.innerHTML.toUpperCase().indexOf(searchbox) > -1 
    //     ? product[i].style.display = ''
    //     : product[i].style.display = 'none'
    // }


    //Second way
    for(let i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0].innerHTML.toUpperCase()

        match.includes(searchbox)
            ? product[i].style.display = ''
            : product[i].style.display = 'none'
    }
}