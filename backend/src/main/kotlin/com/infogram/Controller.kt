package com.infogram

import com.infogram.Entitys.Dialogs
import com.infogram.Entitys.Message
import com.infogram.Entitys.Users
import com.infogram.Repositorys.DialogsRepository
import com.infogram.Repositorys.MessageRepository
import com.infogram.Repositorys.UsersRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("api/user")
class Controller(@Autowired val repository: UsersRepository, @Autowired val messageRepository: MessageRepository, @Autowired val dialogsRepository: DialogsRepository) {

    @PostMapping("/registration")
    fun addUser(@RequestParam("firstname") _firstname:String,
                @RequestParam("lastname") _lastname:String,
                @RequestParam("password") _pass:String,
                @RequestParam("country") _country:String): String {
        repository.save(Users(firstname = _firstname, lastname = _lastname, pass = _pass, country = _country))
        return "All Ok"
    }

    @GetMapping("/all")
    fun allUser() = repository.findAll()

    @PostMapping("/sendMessage")
    fun addMessage(@RequestParam("id") _id:String,
                   @RequestParam("pass") _pass:String,
                   @RequestParam("id_user") _id_user:String,
                   @RequestParam("message") _message:String): String {
        if(_id == _id_user)
        {
            return "<html><head><title>Error 1</title></head><body>You can not write to yourself<br><a href='http://localhost:8080/user/sendMessage.html'>Back</a></body></html>"
        }
        else
        {
            val id = _id.toLong()
            var loginFactory = false
            repository.findById(id).map{if(_pass == it.pass){loginFactory = true}}
            if(loginFactory)
            {
                var max_id_mes: Long = 1
                var max_id_dialog: Long = 1
                dialogsRepository.findAll().forEach{ if(it.id > max_id_dialog) max_id_dialog = it.id}
                messageRepository.findAll().forEach { if (it.id > max_id_mes) max_id_mes = it.id }
                var dial1: Boolean = false
                var dial2: Boolean = false //Для проверки на присудствие диалога
                var id_dialog: Long = 0
                dialogsRepository.findByUser1id(_id).map { if(it.user2id == _id_user) {dial1 = true; id_dialog = it.id} }
                dialogsRepository.findByUser2id(_id).map { if(it.user1id == _id_user) {dial2 = true; id_dialog = it.id} }
                if(!dial1 && !dial2)
                {
                    dialogsRepository.save(Dialogs(id = max_id_dialog+1, user1id = _id, user2id = _id_user))
                    // Если диалогa нет то создаем
                    dialogsRepository.findByUser1id(_id).filter{it.user2id == _id_user}.map { id_dialog = it.id }
                }
                if(dial2) messageRepository.save(Message(id = max_id_mes+1, id_dialog = id_dialog.toString(), id_user = "2", message = _message)) // Добавляем запись в диалог от имени второго пользователя
                else messageRepository.save(Message(id = max_id_mes+1, id_dialog = id_dialog.toString(), id_user = "1", message = _message)) //Запись в диалог от имени первого пользователя

            }
        }
        return "redirect: /index.html"
    }

    @GetMapping("/myMessage")
    fun myMessage(@RequestParam("id") _id: String,
                  @RequestParam("pass") _pass: String): List<Dialogs> {
        val dialog = dialogsRepository.findAll().filter { it.user1id == _id || it.user2id == _id }.toList()
        return dialog
    }

    @GetMapping("/messageInDialog")
    fun messageInDialog(@RequestParam("id") id:String): List<Message> {
        val message = messageRepository.findAll().filter { it.id_dialog == id }.toList()
        return message
    }

    @RequestMapping("/allMessage")
    fun allMess(): MutableIterable<Dialogs> {
        return dialogsRepository.findAll()
    }

    @RequestMapping("/dropAll")
    fun drops()
    {
        repository.deleteAll()
    }

    @RequestMapping("/clear_repository")
    fun clear()
    {
        dialogsRepository.deleteAll()
        messageRepository.deleteAll()
    }

}