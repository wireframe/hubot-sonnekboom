require('coffee-script/register');
var path = require("path");
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;

var Robot = require("hubot/src/robot");
var TextMessage = require("hubot/src/message").TextMessage;

describe('sonnekboom listener', function() {
  var robot = null
  var adapter = null;
  var user = null;
  var room = null;
  var clock = null;

  beforeEach(function(done) {
    var ready = false;
    robot = new Robot(null, "mock-adapter", false, "Eddie");
    robot.adapter.on('connected', function() {
      robot.loadFile(path.resolve('.', 'scripts'), 'sonnekboom.js');
      var hubotScripts = path.resolve('node_modules', 'hubot', 'src', 'scripts');
      // load any relevant hubot scripts here
      // robot.loadFile(hubotScripts, 'help.coffee');

      // create a user
      user = robot.brain.userForId("1", {
        name: "mocha",
        room: "#mocha"
      });

      adapter = robot.adapter;
      done();
    });
    robot.run();
  });

  afterEach(function() {
    robot.shutdown();
  });

  describe('when message is lowercase', function() {
    it('replies with random remark', function(done) {
      adapter.on("send", function(envelope, strings) {
        expect(strings[0]).match(/boom/i);
        done();
      });
      adapter.receive(new TextMessage(user, "sonnek boom!"));
    });
  });
  describe('when message is uppercase', function() {
    it('replies with random remark', function(done) {
      adapter.on("send", function(envelope, strings) {
        expect(strings[0]).match(/boom/i);
        done();
      });
      adapter.receive(new TextMessage(user, "SONNEK BOOM!"));
    });
  });
  describe('when message does not have a space between words', function() {
    it('replies with random remark', function(done) {
      adapter.on("send", function(envelope, strings) {
        expect(strings[0]).match(/boom/i);
        done();
      });
      adapter.receive(new TextMessage(user, "#SONNEKBOOM!"));
    });
  });
});
