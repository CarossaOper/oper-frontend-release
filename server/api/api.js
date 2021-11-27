const express = require("express")
const mongoose = require("mongoose")

const PostSchema = require("../schemas/post.js")
const Post = mongoose.model("Post", PostSchema)
const MailSchema = require("../schemas/mail.js")
const Mail = mongoose.model("Mail", MailSchema)

const router = express.Router()

router.get("/blog", (req, res) => {
    Post.find({}, (error, posts) => {
        if (error){
            console.log(`Error querying server: ${error}`)
        } else {
            return res.json({blog: posts});
        }
    })
})

router.get("/post/:id", (req, res) => {
    let id = req.params.id
    Post.find({_id: id}, (error, post) => {
        if (error) {
            res.json({error: error})
        } else {
            res.json({Post: post})
        }
    })
})

router.get("/latest", (req, res) => {
    Post.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec((error, post) => {
        if (error) {
            res.json({error: error})
        } else {
            res.json({Post: post})
        }
    })
})

router.post("/newsletter", (req, res) => {

    let entry = new Mail({
        email: req.body.mail
    })

    Mail.find({email: req.body.mail}, (error, mails) => {

        if (error) {
            res.json({error: error})
        } else if ( mails.length != 0 ) {
            res.json({error: "Already registered"})
        } else {
            entry.save((err) => {
                if (err) {
                    res.json({error: err})
                } else {
                    res.json({entry})
                }
            })
        }
    }) 
})

router.delete("/newsletter", (req, res) => {
    Mail.findOneAndDelete({email: req.body.mail}, (error, mail) => {
        if (error) {
            res.json({error: error})
        } else {
            res.json({mail})
        }
    })
})

module.exports = router