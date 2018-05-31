import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.dom.isElement

fun unlogin_menu()
{
    if(user_id == -1)
    {
        val nav = document.getElementById("nav") as HTMLElement
        val del = document.getElementById("menu") as HTMLElement
        del.remove()
        val menu = document.createElement("div") as HTMLElement
        menu.id = "menu"
        val home = document.createElement("button") as HTMLElement
        home.id = "home"
        home.className = "homeButton"
        home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>"
        home.addEventListener("click", relocation("/"))
        menu.appendChild(home)
        val registration = document.createElement("button") as HTMLElement
        registration.className = "noHover"
        registration.id = "1"
        registration.textContent = "Registration"
        menu.appendChild(registration)
        val login = document.createElement("button") as HTMLElement
        login.className = "noHover"
        login.id = "login"
        login.textContent = "Login"
        menu.appendChild(login)
        login.addEventListener("click", relocation("/login"))
        val allUser = document.createElement("button") as HTMLElement
        allUser.className = "noHover"
        allUser.id = "3"
        allUser.textContent = "All Users"
        allUser.addEventListener("click", relocation("/alluser"))
        menu.appendChild(allUser)
        nav.appendChild(menu)

        val foot = document.getElementById("footer") as HTMLElement
        foot.innerText = "Powered by Rostislav Tsekhmistro. K504"
        registration.addEventListener("click", relocation("/registration"))
    }
}

fun login_menu()
{
    if(user_id >= 0)
    {
        val nav = document.getElementById("nav") as HTMLElement
        val del = document.getElementById("menu") as HTMLElement
        del.remove()
        val menu = document.createElement("div") as HTMLElement
        menu.id = "menu"
        val home = document.createElement("button") as HTMLElement
        home.id = "home"
        home.className = "homeButton"
        home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>"
        home.addEventListener("click", relocation("/"))
        menu.appendChild(home)
        val user = document.createElement("button") as HTMLElement
        user.className = "noHover"
        user.id = "but1"
        user.textContent = user_name
        user.addEventListener("click", relocation("/aboutMe"))
        menu.appendChild(user)
        val unlog = document.createElement("button") as HTMLElement
        unlog.className = "noHover"
        unlog.id = "unlogin"
        unlog.textContent = "Unlogin"
        menu.appendChild(unlog)
        unlog.addEventListener("click", relocation("/unlogin"))
        val allUser = document.createElement("button") as HTMLElement
        allUser.className = "noHover"
        allUser.id = "but3"
        allUser.textContent = "All Users"
        allUser.addEventListener("click", relocation("/alluser"))
        menu.appendChild(allUser)
        val sendMessage = document.createElement("button") as HTMLElement
        sendMessage.className = "noHover"
        sendMessage.id = "but4"
        sendMessage.textContent = "SendMessage"
        sendMessage.addEventListener("click", relocation("/sendmessage"))
        menu.appendChild(sendMessage)
        val myMessage = document.createElement("button") as HTMLElement
        myMessage.className = "noHover"
        myMessage.id = "but5"
        myMessage.textContent = "MyMessage"
        myMessage.addEventListener("click", relocation("/myMessage"))
        menu.appendChild(myMessage)
        nav.appendChild(menu)

        val foot = document.getElementById("footer") as HTMLElement
        foot.innerText = "Powered by Rostislav Tsekhmistro. K504"
        relocation("/")
    }
}