
// PopUp form for Followers

// Register Form Popup
function editProfile(){

    var lightbox = document.getElementById('profileEdit');

    lightbox.style.visibility = 'hidden';

    dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';

    }

    var x = document.getElementById('closeX3');
    x.onclick = function(){
        dimmer.className = '';  
        lightbox.style.visibility = 'hidden';

    }

    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';
    return false;
}


