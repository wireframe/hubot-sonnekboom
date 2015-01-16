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
    'http://media.giphy.com/media/Le1XxDqjNmgw0.gif',
    'http://media.giphy.com/media/8sATPKn4IyqYw.gif',
    'http://media.giphy.com/media/b3u8anVaWFQ9G.gif',
    'http://media.giphy.com/media/q6gqTKKc1IErC.gif',
    'http://media.giphy.com/media/5xtDarxQ05ee2ktRA5i.gif',
    'http://media.giphy.com/media/sO5derwxGq1Z6.gif',
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
