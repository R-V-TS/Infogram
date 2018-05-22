package com.infogram.Entitys

import org.springframework.data.redis.core.RedisHash
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@RedisHash("dialog")
data class Dialogs(
        @Id @GeneratedValue
        val id: Long = 1,
        val user1id: String,
        val user2id: String
)