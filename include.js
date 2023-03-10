let cards = [
  //  Add your card in this section
  {
    artName: 'Loader Animation',
    pageLink: './art/tarunmankar/index.html',
    imageLink: './art/tarunmankar/LoaderAnimation.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/art/tarunmankar',
  },
  {
    artName: 'Mobile JD',
    pageLink: './exercise/jd/index.html',
    imageLink: './exercise/jd/mobile-jd.png',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/exercise/jd',
  },
  {
    artName: 'Mobile C-Trip',
    pageLink: './exercise/ctrip/index.html',
    imageLink: './exercise/ctrip/ctrip-mobile.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/exercise/ctrip',
  },

  {
    artName: 'Bouncing ball',
    pageLink: './art/bouncing-ball/index.html',
    imageLink: './art/bouncing-ball/bouncing-ball.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/art/bouncing-ball',
  },

  {
    artName: 'Water Drop',
    pageLink: './art/water-drop/index.html',
    imageLink: './art/water-drop/water-drop.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/art/water-drop',
  },

  {
    artName: 'Colorful Text Rotation',
    pageLink: './art/text-rotate/index.html',
    imageLink: './art/text-rotate/text-rotate.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/art/text-rotate',
  },

  {
    artName: 'Focus Light Text',
    pageLink: './art/focus-light-text/index.html',
    imageLink: './art/focus-light-text/focus-light-text.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/art/focus-light-text',
  },
  {
    artName: 'Image Sliding Check',
    pageLink: './art/img-sliding-check/index.html',
    imageLink: './art/img-sliding-check/img-sliding-check.gif',
    author: 'Source Code',
    githubLink: 'https://github.com/easianyu/css-hub/tree/master/art/img-sliding-check',
  },
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this
let contents = [];
// Shuffle(cards).forEach((c) => {
cards.forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
      `</a>` +
      `<div class="flex-content">` +
      `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
      `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
      `</div>` +
      `</li>`,
  ]);
});

document.getElementById('cards').innerHTML = contents;

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
