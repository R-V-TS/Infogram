import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.appendText

fun sendMessage()
{
    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"
    val registration = document.createElement("div") as HTMLElement
    registration.id = "sendMessage"

    val title = document.createElement("h2") as HTMLElement
    title.appendText("Отправка сообщения")
    registration.appendChild(title)

    val label1 = document.createElement("label") as HTMLLabelElement
    label1.htmlFor = "name"
    label1.textContent = "Id: "
    registration.appendChild(label1)
    val input_id = document.createElement("input") as HTMLInputElement
    input_id.id = "name"
    input_id.type = "text"
    registration.appendChild(input_id)
    registration.appendChild(document.createElement("br"))

    val label2 = document.createElement("label") as HTMLLabelElement
    label2.htmlFor = "text"
    label2.textContent = "Message: "
    registration.appendChild(label2)
    val input_text = document.createElement("input") as HTMLInputElement
    input_text.id = "text"
    input_text.type = "text"
    registration.appendChild(input_text)
    registration.appendChild(document.createElement("br"))

    val button = document.createElement("button") as HTMLButtonElement
    button.id = "ok"
    button.textContent = "Send"
    button.addEventListener("click", processsend())
    registration.appendChild(button)

    doc.appendChild(registration)

    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)
}

fun processsend() = EventListener {
    val id = (document.getElementById("name") as HTMLInputElement).value.toString()
    val text = (document.getElementById("text") as HTMLInputElement).value.toString()

    val url = "http://localhost:7575/api/user/sendMessage?id=$user_id&pass=$user_pass&id_user=$id&message=$text"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event)
    {
        val response = req.responseText
        if(response == "Error")
            alert("Нельзя оправить сообщение самому себе")
        else if(response == "Ok")
            alert("All Ok")
    }
    req.open("POST", url, true)
    req.send()
}

external fun alert(message: Any?)
