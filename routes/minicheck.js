import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('minicheck', {
        title: 'Welcome to MiniCheck',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
});

export default router;
