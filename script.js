





$("button[aria-expanded]").click(function(e){

   

    const setMenuState = e.currentTarget.ariaExpanded === 'true' || false;
    e.currentTarget.setAttribute("aria-expanded", !setMenuState);


    if(!setMenuState) {
        $('.header').css('backgroundColor', 'var(--b)');
        setTimeout(() =>{
            $('.nav-links').addClass('mobile').slideDown();
        },200);
        
    }else{
        $('.nav-links').slideUp(function(){
            $(this).removeClass('mobile');

            setTimeout(() => {
                $('.header').css('backgroundColor', 'transparent');
            }, 200);
        });
        
    }

})