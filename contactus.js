const applicantForm = document.getElementById('form')
const sentText = document.getElementById('sent')
applicantForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault()
  data = serializeForm(applicantForm)
  sentText.classList.add('active')
  applicantForm.reset()

 subject = data[0].value
 nameUser = data[1].value
 email = data[2].value
 tel = data[3].value
 wantSpam = data[4].value
 message = data[5].value
 message = message.replaceAll("\n", "%0A")

 console.log(message)

 if (wantSpam == true){
  wantSpam = 'Да'
 } else {
  wantSpam = 'Нет'
 }
 Url = `https://api.telegram.org/bot6980042831:AAFpD9bRcz8c1lxBB1-3yI0RMgOT8kTOdKc/sendMessage?chat_id=-4039715960&text=%0A
 Новое обращение%0A
 Тема: ${subject}%0A
 ФИО: ${nameUser}%0A
 Почта: ${email}%0A
 Телефон: ${tel}%0A
 Хочет получать рассылку: ${wantSpam}%0A
 Дополнительное сообщение: %0A${message}`

 sendTelega(Url)
}

function serializeForm(formNode) {
  const { elements } = formNode

  const data = Array.from(elements)
    .map((element) => {
      const { name, type } = element
      const value = type === 'checkbox' ? element.checked : element.value

      return { name, value }
    })
    .filter((item) => !!item.name)

  console.log(data)
 return data
}

function sendTelega(Url) {
 fetch(Url)
}