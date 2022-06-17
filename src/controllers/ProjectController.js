const knex = require('../database/')

const listProjects = async (req, res, next) => {
  const { user_id, page = 1 } = req.query

  try {
    const query = knex('projects').limit(5).offset((page -1) * 5)

    const countObj = knex('projects').count()

    if (user_id) {
      query.where({user_id}).join('users', 'users.id', '=', 'projects.user_id').select('projects.*', 'users.username').where('users.deleted_at', null)

      countObj.where({user_id})
    }

    const [count] = await countObj
    
    res.header('X-Total-Count', count["count"])

    const results = await query

    return res.status(200).json(results)
  } catch (error) {
    next(error)
  }
}

const createProject = async (req, res, next) => {
  const { title, user_id } = req.body
  try {
    const [ project ] = await knex('projects').insert({title, user_id}).returning(['title', 'user_id'])
    return res.status(200).json(project)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listProjects,
  createProject
}