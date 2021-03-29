document.querySelector('.checkbox').addEventListener('click', () =>{
    let radio = document.querySelectorAll('.checkbox');
    for (let i = 0 ; i < radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.getElementById('price').innerHTML = data;
    document.getElementById('planteg').innerHTML = '#1';

  });

  document.getElementById('two').addEventListener('click', () =>{
    let radio = document.querySelectorAll('#two');
    for (let i = 0 ; i < radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.getElementById('price').innerHTML = data;
    document.getElementById('planteg').innerHTML = '#2';
  });

  document.getElementById('three').addEventListener('click', () =>{
    let radio = document.querySelectorAll('#three');
    for (let i = 0 ; i < radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.getElementById('price').innerHTML = data;
    document.getElementById('planteg').innerHTML = '#3';
  });





  
  
  