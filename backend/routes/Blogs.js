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
    const category = req.body.category;


    const newBlog = new Blog({
        title: title,
        snippet: snippet,
        imageUrl: imageUrl,
        websiteUrl: websiteUrl,
        content: content,
        category: category
    });

    newBlog.save()
    .then(() => res.json('blog added'))
    .catch(err => res.json(`Error: ${err}`));

});

//category changes
router.route('/parks').get((req, res) => {
    Blog.find({category: "parks"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});
router.route('/food').get((req, res) => {
    Blog.find({category: "food"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});
router.route('/activities').get((req, res) => {
    Blog.find({category: "activity"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});
router.route('/night-life').get((req, res) => {
    Blog.find({category: "night-life"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});
router.route('/transportation').get((req, res) => {
    Blog.find({category: "transportation"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});
router.route('/art').get((req, res) => {
    Blog.find({category: "art"})
    .then((blog) => res.json(blog))
      
    .catch(err => console.log(err));

});


module.exports = router;