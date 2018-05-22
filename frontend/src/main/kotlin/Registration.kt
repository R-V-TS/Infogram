import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.appendText

fun registration_form()
{
    val dc = document.getElementById("app") as HTMLElement
    dc.remove()
    val doc = document.createElement("div") as HTMLElement
    doc.id = "app"
    val registration = document.createElement("div") as HTMLElement
    registration.id = "registration"

    val title = document.createElement("h2") as HTMLElement
    title.appendText("Регистрация")
    registration.appendChild(title)

    val label1 = document.createElement("label") as HTMLLabelElement
    label1.htmlFor = "input_name"
    label1.textContent = "Name: "
    val input_name = document.createElement("input") as HTMLInputElement
    input_name.id = "name"
    input_name.type = "text"
    registration.appendChild(input_name)
    registration.appendChild(document.createElement("br"))

    val label2 = document.createElement("label") as HTMLLabelElement
    label2.htmlFor = "input_surname"
    label2.textContent = "Surname: "
    val input_surname = document.createElement("input") as HTMLInputElement
    input_surname.id = "surname"
    input_surname.type = "text"
    registration.appendChild(input_surname)
    registration.appendChild(document.createElement("br"))

    val label3 = document.createElement("label") as HTMLLabelElement
    label3.htmlFor = "input_pass"
    label3.textContent = "Password: "
    val input_pass = document.createElement("input") as HTMLInputElement
    input_pass.id = "pass"
    input_name.type = "password"
    registration.appendChild(input_pass)
    registration.appendChild(document.createElement("br"))

    val button = document.createElement("button") as HTMLButtonElement
    button.id = "ok"
    button.textContent = "Registration"
    button.addEventListener("click", processregistration())
    registration.appendChild(button)

    doc.appendChild(registration)

    val nav = document.getElementById("nav") as HTMLElement
    nav.append(doc)

}

fun processregistration() = EventListener {
    val name = document.getElementById("name") as HTMLInputElement
    val surname = document.getElementById("surname") as HTMLInputElement
    val pass = document.getElementById("pass") as HTMLInputElement

    val name_str = name.value.toString()
    val surname_str = surname.value.toString()
    val password = pass.value.toString()

    val url = "http://localhost:7575/api/user/registration?firstname=$name_str&lastname=$surname_str&password=$password&country=Ukraine"
    val req = XMLHttpRequest()
    req.open("POST", url, true)
    req.send()
}