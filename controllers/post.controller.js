import db from "./../db.js"

class PostController {
    async createPost(req, res) {
        const { title, content, userId } = req.body
        const newPost = await db.query(
            `INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`,
            [title, content, userId]
        )

        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const { id, limit = 10 } = req.query
        const posts = await db.query(
            `SELECT * FROM post WHERE user_id = $1 LIMIT $2`, [id, limit]
        )

        res.json(posts.rows)
    }
}

export default new PostController()