$(document).ready(function() {
    impress().init(); //starts impress.js 

    // Entering State  (step)
    window.addEventListener('impress:stepenter', function() {
        

    });

    //Leaving state (step)
    window.addEventListener('impress:stepleave', function() {

       
    });

    //entering state (substep)
    window.addEventListener('impress:substep-active', function() {

       $('#oneMoreThing.active').parent().find('h1').removeClass("em7")
                                        .text("One More Thing...").addClass("em4 animated bounceInDown");
                                        
    });

    //leaving state (substep)
    window.addEventListener('impress:substep-inactive', function() {
      

    });

});