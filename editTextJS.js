const button = document.querySelector('button');
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
  modalText.textContent = 'Are you sure you want to submit the Address?';

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
   /*window.location.href = "https://42ef-2409-4072-41e-fe57-f90e-69e6-78c2-1f0e.ngrok.io/"+"first.js";*/
   window.location.href = "https://af3a-115-97-244-67.ngrok.io/"+"get.js";

}

/*Start*/

var a='';
    
    Tesseract.recognize(
        'sample.jpeg',
        'eng+hin',
    { logger: m => console.log(m)}
    ).then(({ data: { text } }) => {
        a=text;
        $(".loader").fadeOut(3000,function(){  // Will fade out in 3 secs
        $(".loader").remove();   // animated part will be removed from DOM
        $('body').css('background-color',"#fff"); // background will be changed to white
        })
    
        //document.getElementById("mytext").value = a;
        document.getElementById("edit").innerHTML=a;
    })
    
    //var x = document.getElementById("mytext");
    
  function saveEdits() {
    var editElem = document.getElementById("edit");

    var userVersion = editElem.innerHTML;

    localStorage.userEdits = userVersion;

    document.getElementById("update").innerHTML=localStorage.userEdits;
    download("address.txt",localStorage.userEdits);
  }
    function checkEdits() {
    if(localStorage.userEdits!=null)
    document.getElementById("edit").innerHTML = localStorage.userEdits;
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












