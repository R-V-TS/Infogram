package com.infogram.Repositorys

import com.infogram.Entitys.Message
import org.springframework.data.repository.CrudRepository

interface MessageRepository : CrudRepository<Message, String> {
}