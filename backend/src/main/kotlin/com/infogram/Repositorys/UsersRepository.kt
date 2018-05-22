package com.infogram.Repositorys

import com.infogram.Entitys.Users
import org.springframework.data.repository.CrudRepository

interface UsersRepository : CrudRepository<Users, Long> {

}