const elements = [...document.querySelectorAll(".hidden")]

const myObserver = new IntersectionObserver((entries)=>{
    entries.map((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

elements.map((el)=>{
    myObserver.observe(el)
})