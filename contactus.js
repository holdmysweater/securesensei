let mail = document.getElementById("mail");
let truemail = document.getElementById("mailTest");
let type = document.getElementById("messageType").value;
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let form = document.getElementById("formBox");
let weirdlettercollection = "1BDE0A7C3F893B90A2D371DEE3602DB7BF40";
let wrong = document.getElementById("wrong");
let sent = document.getElementById("sent");

function sendEmail(){
    if(!mail.value.localeCompare(truemail.value)){
        wrong.classList.remove('active');
        Email.send({
            SecureToken : "3b588c44-1ddf-466c-b8d2-207a7aeb752d",
            To : 'VirmLeed@gmail.com',
            From : 'VirmLeed@gmail.com',
            Subject : type + ' // ' + subject.value,
            Body : message.value + '\n // ' + truemail.value,
        }).then(/*message => alert(message)*/);
        sent.classList.add('active');
        form.reset();
        return false;
    }else{
        wrong.classList.add('active');
        sent.classList.remove('active');
        return false;
    }
}