var Redis = require('ioredis')
var Acl = require('./index')

var redis = new Redis.Cluster([{
    port: 7000,
    host: '127.0.0.1'
  }, {
    port: 7001,
    host: '127.0.0.1'
  }, {
    port: 7002,
    host: '127.0.0.1'
}]);


//var redis = new Redis()

// cluster.hmset(["key", "test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {})
// redis.sadd("hashsss", "some value");

var acl = new Acl(new Acl.redisBackend(redis, 'acl'));

// acl.addUserRoles('joed', 'guest')
// guest is allowed to view blogs
// acl.allow('guest', 'blogs', 'view')
// allow function accepts arrays as any parameter
// acl.allow('member', 'blogs', ['edit', 'view', 'delete'])

// guest is allowed to view blogs
// redis.multi().sadd('sfsdsf', 3234243).exec()
// var backend = new Acl.redisBackend(redis, 'acl')
// var rediss = backend.redis
// var transaction = backend.begin()

// backend.add(transaction, 'blogs', 'guest', '123456')
// backend.add(transaction, 'meta', 'admin', 'id_qwer');
//backend.add(transaction, 'admin', 'id_qwer', 'guest');
//backend.end(transaction, function(){})
// transaction.sadd('llll222222l', 3234243).exec()
// acl.isAllowed('joed', 'blogs', 'view', function(err, res){
//     if(res){
//         console.log("User joed is allowed to view blogs")
//     }
// })

// acl.allowedPermissions('james', ['blogs', 'forums'], function(err, permissions){
//     console.log(permissions)
// })