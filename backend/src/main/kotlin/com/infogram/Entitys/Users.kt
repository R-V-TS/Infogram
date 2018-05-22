package com.infogram.Entitys

import javax.persistence.*

@Entity
@Table(name = "users")
data class Users(
        @Id @GeneratedValue
        val id: Long = 0,
        @Column(name = "firstname")
        val firstname: String = " ",
        @Column(name = "lastname")
        val lastname: String = " ",
        @Column(name = "pass")
        val pass: String = " ",
        @Column(name = "country")
        val country: String = " "
)
{
    override fun toString(): String {
        return "${this.id} ${this.pass} ${this.firstname} ${this.lastname} ${this.country}"
    }
}
