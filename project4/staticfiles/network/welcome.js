// Register Form Popup
function register(){
    
    var lightbox = document.getElementById('lightbox');

    dimmer.className = '';  
    lightbox3.style.visibility = 'hidden';

    dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    var x = document.getElementById('x');
    x.onclick = function(){
        dimmer.className = '';  
        lightbox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';
    return false;
}

// Login Form Pop up
function login(){
    var lightbox = document.getElementById('lightbox2');
    var lightbox3 = document.getElementById('lightbox3');

    dimmer.className = '';  
    lightbox3.style.visibility = 'hidden';

    lightbox.style.visibility = 'hidden';
    

    dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    var x = document.getElementById('x2');
    x.onclick = function(){
        dimmer.className = '';  
        lightbox.style.visibility = 'hidden';
    }


    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';

    return false;
}


// Pop Out Don't Miss out form!
function popup(){

    var lightbox = document.getElementById('lightbox3');


    dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    var x = document.getElementById('x3');
    x.onclick = function(){
        dimmer.className = '';  
        lightbox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';
    return false;
};

function settings(){
    var lightbox = document.getElementById('settings');


    dimmer = document.createElement("div");
    
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }

    var x = document.getElementById('closeSettings');
    x.onclick = function(){
        dimmer.className = '';  
        lightbox.style.visibility = 'hidden';
    }

    document.body.appendChild(dimmer);
    
    lightbox.style.visibility = 'visible';
    return false;
    

}



// Disable form if no input
 document.addEventListener('DOMContentLoaded', function(){

                // By default, submit button is disabled
                document.querySelector('#submitPost').disabled = true;
                document.querySelector('#textPost').onkeyup = () => {
                    if(document.querySelector('#textPost').value.length > 0){
                                            
                        document.querySelector('#submitPost').disabled = false;
                    }else{
                        document.querySelector('#submitPost').disabled = true;
                    }

                }


                document.querySelector('form').onsubmit = () => {

                    // Clears out the last value we typed in our input
                    //document.querySelector('#task').value = '';
                    document.querySelector('#submit').disabled = true;

                    // Stop form from submitting
                    return false;
                }
            })