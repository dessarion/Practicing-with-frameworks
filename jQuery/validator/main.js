$(() => {
    $('#myForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            email:{
                required: 'Please Enter an E-mail.' 
            },
            name:{
                required: 'Please Enter a Name.' ,
                minlength: 'Lenght must me at least 3 characters long.'
                
            }   
        },
        submitHandler: () => {            
            alert('valid')
        },
        invalidHandler:()=>{
            alert('invalid')
        }
        
        
    })   
    
})