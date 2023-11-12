const changeColor = ()=>{
    const elements = document.querySelectorAll(".stats");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("movein");
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach((element)=>{
        observer.observe(element);
    });
};
document.addEventListener("DOMContentLoaded", ()=>{
    changeColor();
});

