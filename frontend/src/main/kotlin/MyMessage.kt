import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.js.Json

fun MyMessage()
{
    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"

    val url = "http://localhost:7575/api/user/myMessage?id=$user_id&pass=$user_pass"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event) {
        val text = req.responseText
        println(text)
        val objArray  = JSON.parse<Array<Json>>(text)
        objArray.forEach {
            val dialog = document.createElement("div") as HTMLElement
            val id = "${it["id"]}"
            dialog.className = "dialog"
            dialog.id = id
            dialog.innerHTML = "User 1: ${it["user1id"]} <br />User 2: ${it["user2id"]}"
            doc.addEventListener("click", EventListener { messageInDialog(id) })
            val del = document.createElement("div") as HTMLElement
            del.id = "mes$id"
            doc.appendChild(dialog)
            doc.appendChild(del)
        }
    }
    req.open("GET", url, true)
    req.send()

    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)
}

fun messageInDialog(_id: String){
    val dialog = document.getElementById(_id) as HTMLElement
    val del = document.getElementById("mes$_id") as HTMLElement
    del.remove()
    val messages = document.createElement("div") as HTMLDivElement
    messages.className = "messages"
    messages.id = "mes$_id"
    val url = "http://localhost:7575/api/user/messageInDialog?id=$_id"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event) {
        val text = req.responseText
        println(text)
        val objArray  = JSON.parse<Array<Json>>(text)
        objArray.forEach {
            val message = document.createElement("div") as HTMLElement
            message.className = "message"
            message.innerHTML = "User: ${it["id_user"]} <br />Message: ${it["message"]}"
            messages.appendChild(message)
        }
    }
    req.open("GET", url, true)
    req.send()
    dialog.append(messages)
}