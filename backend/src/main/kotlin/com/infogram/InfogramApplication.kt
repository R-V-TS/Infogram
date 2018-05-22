package com.infogram

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class InfogramApplication

fun main(args: Array<String>) {
    runApplication<InfogramApplication>(*args)
}
