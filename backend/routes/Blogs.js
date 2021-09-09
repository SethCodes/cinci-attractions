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
    const imageUrl = req.body.imageUrl;
    const content = req.body.content;
    const websiteUrl = req.body.websiteUrl;


    const newBlog = new Blog({
        title: title,
        snippet: snippet,
        imageUrl: imageUrl,
        websiteUrl: websiteUrl,
        content: content
    });

    newBlog.save()
    .then(() => res.json('blog added'))
    .catch(err => res.json(`Error: ${err}`));

});

router.route('/parks').get((req, res) => {
    Blog.find().findOne()
    .then((blog) => {
      const parks = res.json(blog);
      if(parks)
    })
    .catch(err => console.log(err));

})

module.exports = router;