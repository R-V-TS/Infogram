import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.appendText
import kotlin.js.Json

fun allUsers()
{

    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"

    val url = "http://localhost:7575/api/user/all"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event) {
        val text = req.responseText
        println(text)
        val objArray  = JSON.parse<Array<Json>>(text)
        objArray.forEach {
            val user = document.createElement("div") as HTMLElement
            user.innerHTML = "<div id = 'userInfo'>id: ${it["id"]}<br />user: ${it["firstname"]} ${it["lastname"]}</div>"
            doc.appendChild(user)
        }
    }
    req.open("GET", url, true)
    req.send()


    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)
}