import express from 'express'
import _bloggersService from '../services/BloggersService.js'

export default class BloggersController {

    async createBlogger(req, res, next) {
        try {
            let blogger = await _bloggersService.create(req.body)
            res.send(blogger)
        }catch (err) {
            next(err)
        }
    }

    async getAllBloggers(req, res, next) {
        try { 
            let bloggers = await _bloggersService.find()
            res.send(bloggers)
        }catch (err) {
            next(err)
        }
    }


    //TODO FINISH
    async getBloggers(req, res, next) {
        try {
            let blogger = await _bloggersService.findById(req.params.blogId)
            res.send(blogger)
            if (!blogger) {
                return res.status(400).send("This blog doesn't exist!")
            }
        } catch(err) {
            next(err)
        }
    }

    async editBloggers(req, res, next) {
        try {
            let editedBlog = await _bloggersService.findByIdAndUpdate(req.params.blogId, req.body, {new: true})
            res.send(editedBlog)
        }catch (error) {
            next(error)
        }
    }

    async getBloggerByTag(req, res, next) {
        try {
            if (!req.query.tag) {
                return next()
            }
            let bloggers = await _bloggersService.find({ tags: {$in: [req.query.tag] } })
            res.send(bloggers)
        } catch (err) {
            next(err)
        }
    }

    async deletePost(req, res, next) {
        try {
            let deletePost = await _bloggersService.findByIdAndDelete(req.params.blogId)
            res.send('Blog Deleted')
        } catch (error) {
            next(error)
        }
    }



    constructor() {
        this.router = express.Router()
            .get('', this.getAllBloggers)
            .get('/:bloggersId/bloggers', this.getAllBloggers)
            .get('', this.getBloggerByTag)
            .get('/:blogId', this.getBloggers)
            .put('/:blogId', this.editBloggers)
            .post('', this.createBlogger)
            .delete('/:blogId', this.deletePost)
    }
}