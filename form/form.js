function animation(){
    const arrows = document.querySelectorAll(".arrow");
    
    arrows.forEach(arrow => {
        arrow.addEventListener("click",() => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            // const previousForm = parent.previousElementSibling;



            if(input.type === 'text' && validdateuser(input)){
                console.log("Everything is okay")
                nextSlide(parent,nextForm);
            }
            else if(input.type === 'email' && validdateEmail(input)){
                nextSlide(parent,nextForm);
            }
            else if(input.type === 'password' && validdateuser(input)){
                nextSlide(parent,nextForm);
            }
            else{
                parent.style.animation = "shake 0.5s ease";
            }
        })
    })
    function nextSlide(parent,nextForm){
        parent.classList.add("inactive")
        parent.classList.remove("active")
        nextForm.classList.add("active")
    }
    function validdateuser(user){
        if(user.value.length < 6){
            console.log('not enough character');
            error("rgb(189,87,87)")
        }
        else{
            error("rgb(87,189,130)")
            return true;
        }
    }

    function validdateEmail(email){
        const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(validation.test(email.value)){
            error("rgb(87,189,130)");
            return true;
        }
        else{
            error("rgb(189,87,87)")
        }
    }
    function error(color){
        document.body.style.backgroundColor =color
    }
}
animation()