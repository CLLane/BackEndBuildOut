let stats = require('nightmare');
let nightmare = stats({ show: true });

// nightmare
//   .goto('https://www.premierleague.com/')
//   .wait('a[href="/results"]')
//   .click('a[href="/results"]')
//   .wait('li[class="matchFixtureContainer"]')
//   .evaluate(() => {
//     let nodes = document.querySelectorAll('li[class="matchFixtureContainer"]')
//     let list = [].slice.call(nodes)
//     return list.map(node => {
//       return node.innerText
//     })
//   })
//   .end()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });

    goto('https://www.theguardian.com/football/datablog/2012/dec/24/world-best-footballers-top-100-list')
    .wait('tbody')
    .evaluate(() => {
      let nodes = document.querySelectorAll('tr')
      let list = [].slice.call(nodes)
      return list.map(node => {
        return node.innerText
      })
    })
    .end()
    .then( (result) => {
      console.log(result);
    })
    .catch( (error) => {
      console.error('Search failed:', error);
    });