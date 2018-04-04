const loginForm = (function(){

var form = document.querySelector('.login__form')
var validateBtn = form.querySelector('#loginbtn')
var from = form.querySelector('#login')
var password = form.querySelector('#pass')
//var checked = form.querySelector('.checkbox')
//var radio = form.querySelectorAll('.login__radio-input')
var fields = form.querySelector('.field')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var loginName = form.querySelector('.login__name')

    var icon = loginName.querySelector('.login__img')

    var errors = form.querySelector('.error')

    for (var i = 0; i < errors.length; i++) {
        $(errors[i]).removeClass('active')
        $(loginName[i]).removeClass('login-error', 'login-active')
        $(icon[i]).removeClass('icon-error', 'icon-active')
      }
  
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
            
            $(errors[i]).addClass('active')
            $(loginName[i]).addClass('login-error')
            $(icon[i]).addClass('icon-error')
            
            
          }

          else{
            $(loginName[i]).addClass('login-active')
            $(icon[i]).addClass('icon-active')
          }
    }
  });
  
  return{
    init: function (){
      form();
    }
  }

  

}());


module.exports = loginForm;