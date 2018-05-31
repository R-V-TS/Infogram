import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.appendText

fun login_form()
{
    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"
    val registration = document.createElement("div") as HTMLElement
    registration.id = "registration"

    val title = document.createElement("h2") as HTMLElement
    title.appendText("Вход")
    registration.appendChild(title)

    val label1 = document.createElement("label") as HTMLLabelElement
    label1.htmlFor = "id"
    label1.textContent = "Id: "
    registration.appendChild(label1)
    val input_name = document.createElement("input") as HTMLInputElement
    input_name.id = "id"
    input_name.type = "text"
    registration.appendChild(input_name)
    registration.appendChild(document.createElement("br"))

    val label3 = document.createElement("label") as HTMLLabelElement
    label3.htmlFor = "pass"
    label3.textContent = "Password: "
    registration.appendChild(label3)
    val input_pass = document.createElement("input") as HTMLInputElement
    input_pass.id = "pass"
    input_pass.type = "password"
    registration.appendChild(input_pass)
    registration.appendChild(document.createElement("br"))

    val button = document.createElement("button") as HTMLButtonElement
    button.id = "ok"
    button.textContent = "Login"
    button.addEventListener("click", loginprocess())
    registration.appendChild(button)

    doc.appendChild(registration)

    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)

}

fun loginprocess() = EventListener {
    val name = document.getElementById("id") as HTMLInputElement
    val pass = document.getElementById("pass") as HTMLInputElement

    val id = name.value.toInt()
    val password = pass.value.toString()

    var succ = false
    val url = "http://localhost:7575/api/user/login?id=$id&password=$password"
    val req = XMLHttpRequest()
    req.onloadend = fun(event: Event)
    {
        val response = req.responseText
        if(response != "error")
        {
            succ = true
            user_id = id
            user_pass = password
            user_name = response
            login_menu()
        }
        else
        {
            println("Error login $id $password")
        }
    }
    req.open("GET", url, true)
    req.send()
}