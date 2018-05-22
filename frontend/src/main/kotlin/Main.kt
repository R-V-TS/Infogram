import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.appendText

var location = "/"

fun main(args: Array<String>) {

    val nav = document.getElementById("nav") as HTMLElement
    val menu = document.createElement("div") as HTMLElement
    menu.id = "menu"
    val home = document.createElement("button") as HTMLElement
    home.className = "homeButton"
    home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>"
    home.addEventListener("click", relocation("/"))
    menu.appendChild(home)
    val registration = document.createElement("button") as HTMLElement
    registration.className = "noHover"
    registration.id = "1"
    registration.textContent = "Registration"
    menu.appendChild(registration)
    val allUser = document.createElement("button") as HTMLElement
    allUser.className = "noHover"
    allUser.id = "2"
    allUser.textContent = "All Users"
    allUser.addEventListener("click", relocation("/alluser"))
    menu.appendChild(allUser)
    nav.appendChild(menu)

    val foot = document.getElementById("footer") as HTMLElement
    foot.innerText = "Powered by Rostislav Tsekhmistro. K504"
    registration.addEventListener("click", relocation("/registration"))

}

fun relocation(loc: String) = EventListener {
    if(loc != location)
    {
        if(loc == "/registration")
            registration_form()
        else if(loc == "/")
            drawMain()
        else if(loc == "/alluser")
            allUsers()
        location = loc
    }
}

fun drawMain()
{
    val doc = document.getElementById("app") as HTMLElement
    doc.remove()
    val main = document.createElement("div") as HTMLElement
    main.id = "app"
    val hello = document.createElement("h2") as HTMLElement
    hello.innerText = "Проэкт Infogram, Создан для общения. Основной уклон на RestAPI"
    main.appendChild(hello)
    val nav = document.getElementById("nav") as HTMLElement
    nav.append(main)
}