package com.infogram.Entitys

import org.springframework.data.annotation.Id
import org.springframework.data.redis.core.RedisHash
import javax.persistence.GeneratedValue


@RedisHash("message")
data class Message(
        @Id @GeneratedValue
        val id: Long = 1,
        val id_dialog: String,
        val id_user: String,
        val message: String
)