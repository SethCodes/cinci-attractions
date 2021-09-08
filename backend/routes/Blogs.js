const router = require('express').Router();
const Blog = require('../models/Blog');


router.route('/').get((req, res) => {
    Blog.find()
    .then((blog) => res.json(blog))
    .catch(err => console.log(err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const snippet = req.body.snippet;
    const image = req.body.imageUrl;
    const content = req.body.content;

    const newBlog = new Blog({
        title: title,
        snippet: snippet,
        image: image,
        content: content
    });

    newBlog.save()
    .then(() => res.json('blog added'))
    .catch(err => res.json(`Error: ${err}`));

});

module.exports = router;