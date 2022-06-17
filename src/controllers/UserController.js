const knex = require('../database')

const listUsers = async (req, res, next) => {
  try {
    const results = await knex('users').where('deleted_at', null)
    return res.status(200).json(results)

  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  const { username } = req.body

  try {
    const [user] = await knex('users').insert({username}).returning('username')
    return res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  const { username } = req.body
  const { id } = req.params

  try {
    await knex('users').update({username}).where({id})
    return res.status(200).json({"message": "usuário atualizado."})
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  const { id } = req.params

  try {
    await knex('users').update('deleted_at', new Date()).where({id})
    return res.status(200).json({"message": "Deletado com sucesso."})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listUsers,
  create,
  update,
  deleteUser
}