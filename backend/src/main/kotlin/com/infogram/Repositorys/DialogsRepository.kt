package com.infogram.Repositorys

import com.infogram.Entitys.Dialogs
import org.springframework.data.repository.CrudRepository
import java.util.*

interface DialogsRepository : CrudRepository<Dialogs, Long> {
    fun findByUser1id(user1id: String): Optional<Dialogs>
    fun findByUser2id(user2id: String): Optional<Dialogs>
}