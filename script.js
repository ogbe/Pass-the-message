const messageIn = document.getElementById('messageIn');
const sendBtn = document.getElementById('sendBtn');
const messageOut = document.getElementById('messageOut');


const sendMsg = () => {
    let content = messageIn.value;
    (content === '') ? alert('Please Enter Valid Value. Current Value is Empty') : messageOut.innerHTML = content;
    messageIn.value = '';
    
}
sendBtn.addEventListener('click', sendMsg);

