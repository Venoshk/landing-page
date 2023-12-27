//EVENTO DE SCROLL NA NAV
const navigation = document.querySelector('.navigation_header');
document.addEventListener('scroll', () =>{
    if(scrollY > 120){
        navigation.classList.add("fixed");
    }else{
        navigation.classList.remove('fixed')
    }
})


//EVENTO DE LOAD
const loading = (show) =>{
    const pyramidLoader = document.querySelector('.pyramid-loader');
    pyramidLoader.style.display = show ? 'block' : 'none';
    
}

//ADICIONANDO O LOAD A PAGINA
document.addEventListener('DOMContentLoaded', () =>{
    loading(true);
    document.body.classList.add("stop-scrolling");
    setInterval(() => {
        loading(false)
        document.body.classList.remove("stop-scrolling");
    });
})