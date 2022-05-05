const filterItem=document.querySelector(".items");
const filterPortofolio=document.querySelectorAll(".portofolio-box");


window.onload = ()=>{
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains('item')){
           filterItem.querySelector('.active').classList.remove('active');
           selectedItem.target.classList.add('active');
            let filterName=selectedItem.target.getAttribute('data-name');
           filterPortofolio.forEach((project)=>{
              let filterProject= project.getAttribute('data-name');

              if((filterProject==filterName)|| (filterName=="all")){
                project.classList.remove('hide');
                    project.classList.add('show');
              }else
              {
                  project.classList.remove('show');
                  project.classList.add('hide');
              }
           })
        }
       


    }
}