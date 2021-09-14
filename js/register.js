const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('focusout', e => {
  if(username.value.length < 6) {
    document.getElementById('user').style.display = 'block';
  } else {
    document.getElementById('user').style.display = 'none';
  }

  // if(password2.value !== password.value) {
  //   document.getElementById('pass').style.display = 'block';
  // } else {
  //   document.getElementById('pass').style.display = 'none';
  // }
});
