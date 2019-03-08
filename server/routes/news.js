const express = require('express')
const router = express.Router()

const fakeNews = [{
    id: '1',
    title: 'Mad owl chases car',
    teaser: 'Mad owl seen tormenting drivers in Morecambe',
    body: 'This is some body text regarding the news story of the mad owl tormenting drivers in Morecambe'
}, {
    id: '2',
    title: 'Owl stowaway',
    teaser: 'Despicable owl impersonates passenger to board flight to Luton',
    body: 'This is some body text regarding the news story of the owl making its way onto a domestic flight to luton'
}, {
    id: '3',
    title: 'Owl steals pork pie',
    teaser: 'This morning a rogue owl stole a pork pie from a shop in Swindon.',
    body: 'This is some body text regarding the news story of the owl stealing a pork pie from a shop in swindon'
}];

router.get('/', function(req, res, next) {
    res.status(200).send({
      data: fakeNews
    })
})

router.get('/:id', function(req, res, next){
    const id = req.params.id

    const picked = fakeNews.find(o => o.id === id);

    res.status(200).send({
        data: picked
    })

})

module.exports = router;
