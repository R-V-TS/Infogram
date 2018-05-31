import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.js.Json

fun myInfo()
{
    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"

    val url = "http://localhost:7575/api/user/aboutId?id=$user_id"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event) {
        val text = req.responseText
        println(text)
        val objArray  = JSON.parse<Array<Json>>(text)
        objArray.forEach {
            val user = document.createElement("div") as HTMLElement
            user.innerHTML = "<div id = 'userInfo'>id: ${it["id"]}<br />Name: ${it["firstname"]} ${it["lastname"]}<br />Country: ${it["country"]}</div>"
            doc.appendChild(user)
        }
    }
    req.open("GET", url, true)
    req.send()


    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)
}