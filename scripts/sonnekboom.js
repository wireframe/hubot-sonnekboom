// Description:
//   Listener for "SONNEK BOOM!"
//
// Dependencies:
//   underscore
//
// Author:
//   Ryan Sonnek
var _ = require('underscore');

module.exports = function(robot) {
  var REMARKS = [
    "SONNEK BOOM!"
  ];

  var IMAGES = [
    'http://i.imgur.com/9ngl7Kl.gif',
    'http://i.imgur.com/CgQbdAh.gif',
    'http://i.imgur.com/Y5SR075.gif',
    'http://i.imgur.com/lGGWWDp.gif',
    'http://i.imgur.com/7VFpe31.gif',
    'http://i.imgur.com/DsRjKAu.gif',
    'http://i.imgur.com/DHnMmMA.gif'
  ]

  function randomRemark() {
    return _.sample(REMARKS);
  }

  function randomImage() {
    return _.sample(IMAGES);
  }

  robot.hear(/sonnek\s?boom/i, function(msg) {
    var message = [randomRemark(), randomImage()].join(' ');
    msg.send(message);
  });
};
