import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.appendText

var location = "/"

var user_id = -1
var user_pass = " "
var user_name = ""

fun main(args: Array<String>) {

    if(user_id == -1)
        unlogin_menu()
    else
        login_menu()

}

fun relocation(loc: String) = EventListener {
    if(loc != location)
    {
        if(loc == "/registration")
            registration_form()
        else if(loc == "/")
            drawMain()
        else if(loc == "/alluser" && user_id >= 0)
            allUsers()
        else if(loc == "/login")
            login_form()
        else if(loc == "/sendmessage")
            sendMessage()
        else if(loc == "/aboutMe")
            myInfo()
        else if(loc == "/unlogin")
            Unlogin()
        else if(loc == "/myMessage")
            MyMessage()
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