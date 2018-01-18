const db = require('./db')

exports.showIndex = (req, res) => {
  db.query('SELECT * FROM `topic_categories`', (err, results) => {
    if (err) {
      return res.send('500 Server Internal Error')
    }
    console.log(results)
    res.render('index.html', {
      topicCategories: results
    })
  })
}
