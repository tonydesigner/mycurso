$(function(){
   $('.base button').click(()=>{
        $('.base button').css('animation','acaoBtn 1s')
        setTimeout(()=>{
            $('.indica').css('display', 'flex')
        },300)
   })
   $('.logar').click(()=>{
        $('.logar').css('animation','acaoBtn 1s')
        $('.logIn').show()
   })
   $('.cadastrar').click(()=>{
    $('.cadastrar').css('animation','acaoBtn 1s')
})

  $('form').submit(()=>{
     let campo1 = $('.campo1')
     let campo2 = $('.campo2')

     if(campo1.val() == 'Antonio' && campo2.val() == '123'){
          $('.acao').show()
     }else{alert('Login ou senha inválido Tente novamente!')}
     return false
  })
    

})