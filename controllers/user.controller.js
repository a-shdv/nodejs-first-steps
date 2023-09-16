const pool = require('../db.js')

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const sql = 'INSERT INTO persons(name, surname) VALUES (?, ?)'
        const user = await pool.query(sql, [name, surname])
        res.json(user)
    }

    async getUsers(req, res) {
        const sql = 'SELECT * FROM persons'
        const users = await pool.query(sql)
        res.json(users)
    }

    async getUserById(req, res) {
        const id = req.params.id
        const sql = 'SELECT * FROM persons WHERE id = ?'
        const user = await pool.query(sql, [id])
        res.json(user)
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const sql = 'UPDATE persons SET name = ?, surname = ? WHERE id = ?'
        const user = await pool.query(sql, [name, surname, id])
        res.json(user)
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const sql = 'DELETE  FROM persons WHERE id = ?'
        const user = await pool.query(sql, [id])
        res.json(user)
    }
}

module.exports = new UserController()