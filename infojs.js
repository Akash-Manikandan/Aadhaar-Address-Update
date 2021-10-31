const button = document.querySelector('button');
var w, x, y, z;

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', nextPage);
 

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}

function nextPage() {
  nameFunc();
  dobFunc();
  emailFunc();
  ageFunc();
    download("UserInfo.txt",x+'\n'+w+'\n'+y+'\n'+z);
   /*window.location.href = "https://42ef-2409-4072-41e-fe57-f90e-69e6-78c2-1f0e.ngrok.io/"+"upload.js";*/
   window.location.href = "https://9a68-115-97-244-67.ngrok.io/upload.js";

}




function nameFunc() {
  x = document.getElementById("name").value;
  document.getElementById("demo").innerHTML = x;
}
function dobFunc() {
  y = document.getElementById("dob").value;
  document.getElementById("demo").innerHTML = y;
}
function emailFunc() {
  z = document.getElementById("email").value;
  document.getElementById("demo").innerHTML = z;
}
function ageFunc() {
  w = document.getElementById("age").value;
  document.getElementById("demo").innerHTML = w;
}


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


let saveFile = () => {
      
        // Get the data from each element on the form.
      const name = document.getElementById('txtName');
        const age = document.getElementById('txtAge');
        const email = document.getElementById('txtEmail');
        const country = document.getElementById('selCountry');
        const msg = document.getElementById('msg');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Age: ' +age.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Country: ' + country.value + ' \r\n ' + 
            'Message: ' + msg.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';    // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }