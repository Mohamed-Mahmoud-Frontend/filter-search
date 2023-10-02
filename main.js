let filter = document.getElementById('searchInput');
filter.addEventListener("keyup" ,function(){
    let search = this.value.toLowerCase();
    let list = document.querySelectorAll("#list li");
    for(let i of list){
        let item = i.innerHTML.toLowerCase();
        if(
            item.indexOf(search) == -1
        ){
            i.classList.add('hide');
        }else{
            i.classList.remove('hide');

        }
    }
})
