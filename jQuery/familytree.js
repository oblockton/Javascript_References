.parent()
//selects single parent one level up

.parents()
//selects all parents including grandparents

.children()
//selects all children

.find()
// selects all chilldren including grandchildren

.siblings()
//selects siblings of one level

.next() Ex: var article2 = $('featured') var article3 = article2.next()
//selects next siblings in DOM tree

// Usage

$('.omari').children()
// selects the children of the class 'Omari'

<!DOCTYPE html>
<!--


-->
<html lang="en">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
    <div class="container">
        <header class="header">
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>
                    <li class="nav-item"><a href="#4">Item #4</a></li>
                    <li class="nav-item"><a href="#5">Item #5</a></li>
                    <li class="nav-item"><a href="#6">Item #6</a></li>
                </ul>
            </nav>
        </header>
        <div class="articles">
            <input id="input" value="Cool Articles" type="text">
            <h1>Cool Articles</h1>
            <ul class="article-list">
                <li class="article-item">
                    <header>Article #1</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
                    <h3>Sample Image Title here</h3>
                    <img src="http://placehold.it/350x150" alt="Placeholder Image">
                    <ul>
                        <li class="bold">James</li>
                        <li>Lily</li>
                        <li>Harry</li>
                    </ul>
                    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
                </li>
                <li class="article-item featured">
                    <header>Article #2</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi ipsum, incidunt mollitia modi cum, eum ex doloremque rerum quod, maiores quisquam, enim quam unde cumque! Quam, doloremque. Voluptatum, maxime!</p>
                    <p>Numquam et quae, quasi. Reiciendis nemo mollitia eveniet alias, debitis facere atque excepturi et beatae laudantium commodi optio unde amet vitae libero quas cupiditate, nam porro minus. Quisquam, odit non.</p>
                </li>
                <li class="article-item">
                    <header>Article #3</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ratione, cum doloremque molestias labore amet at dicta reiciendis repudiandae fuga atque adipisci pariatur distinctio suscipit perferendis provident, facere ad aut.</p>
                    <p>Temporibus sapiente odio eveniet enim perferendis maxime, ratione, accusantium suscipit alias, soluta architecto culpa pariatur. Cupiditate nam eaque dolore voluptatem necessitatibus corporis iusto adipisci, dignissimos error, vitae quam, aliquid eius!</p>
                </li>
                <li class="article-item">
                    <header>Article #4</header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, est soluta eos voluptates eum! Modi sit quia ipsum fugiat nesciunt, assumenda deleniti consequuntur molestias reprehenderit. Voluptate corporis illum nam?</p>
                    <p>Quia, omnis. Quasi necessitatibus, ducimus, deserunt ipsa, reprehenderit sit a dolore fuga placeat magni culpa ipsam quas id aut veniam rerum pariatur enim harum recusandae quo odio consequuntur. Maxime, aperiam.</p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>




//Use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

// Use articleList to navigate to the element(s)!


// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.children();

parents = articleList.parents('div');

console.log(parents)
// length 3 - div.article, div.container ,div

console.log(h1);
// returns length 1 - the h1 element

console.log(kids);
// returns length 4 - li.article-item, li.article-item.featured, li.article-item, li.article-item


// USED FOR BELOW FUNCTIONS
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Hide and Seek</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
  </head>
  <body>
    <main id="app">
      <ul class="unranked-list">
        <li>2</li>
        <li>5</li>
        <li>4</li>
      </ul>

      <ul class="ranked-list">
        <li>1</li>
        <li>2</li>
      </ul>

      <ul class="ranked-list">
        <li>12</li>
        <li>11</li>
        <li>10</li>
      </ul>

      <div id="nested">
        <div>
          <div>
            <div>
              <div class="target">
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="grand-node">
        <div>
          <div>
            <div>
              <div>
                boo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <script src="index.js"></script>
    <!-- Open this file and call `mocha.run()` in console to run tests -->
    <div id="mocha"></div>
    <script src="node_modules/mocha/mocha.js"></script>
    <script src="node_modules/expect/umd/expect.min.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="test/index-test.js"></script>
  </body>
</html>


function getFirstSelector(selector) {
  const list = document.querySelector(selector)
  return list
}

function nestedTarget() {
  const result = document.querySelector(`#nested .target`)
  return result
}


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const lis = document.getElementById(`#app`).querySelectorAll(ul.ranked-list li)
  for (let i=0; i<lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)) + 3
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
