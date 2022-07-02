const collapSible = () =>{
    const blocs = [...document.querySelectorAll('.bloc')];

    blocs.forEach(bloc =>{
        bloc.addEventListener('click', (e) =>{
            const target = e.target;

            for(let i = 0; i < blocs.length; i++){
                if(blocs[i] == target){
                    blocs[i].classList.add('active');
                }else{
                    blocs[i].classList.remove('active');
                }
            }
        })
    })
}
collapSible();