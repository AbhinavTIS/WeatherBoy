const inputBox = document.querySelector('input')

inputBox.addEventListener('keydown',function(e){
    if(e.key=='Enter'){
        console.log("Enter Key Pressed");
        e.preventDefault()
    }
})