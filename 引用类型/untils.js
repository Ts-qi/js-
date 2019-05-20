

let untils = function() {

  return new untils.prototype.init()

}
untils.fn = untils.prototype = {

  init: function() {

      return this

  },

  keys: function(obj,callback,reverse) {

      if(!(Object.prototype.toString.call(obj) == '[object Object]' || !(Object.prototype.toString.call(obj) == '[object Array]'))) {

          throw new Error(`${obj}: may be Object or Array`)

          return;

      }



      let res = [];



      if(Object.prototype.toString.call(obj) == '[object Array]') {

          for(var i = 0;i < Object.length;i ++) {

              res.push(i)

          }

      }else {



          for(var i in obj){

              res.push(i)

          }

      }



      reverse && reverse == -1 ? res.reverse() : res



      return callback(res)

  },

  forEach: function(arr,callback) {

      if(!(Object.prototype.toString.call(arr) == '[object Array]')) {

          throw new Error(`${arr}: may be Array`)

          return;

      }



      var that = arr;

      var index,value,self,res;

      self = that;



      for(var i = 0; i < self.length;i ++) {

          index = i;

          value = self[i];

          res = callback(value,index,self)

      }



      return res

  },

  filter: function(arr, callback) {

      if(!(Object.prototype.toString.call(arr) == '[object Array]')) {

          throw new Error(`${arr}: may be Array`)

          return;

      }

      

      var that = arr;

      var index,value,self,res=[];

      self = that;

      

      for(var i = 0;i < self.length; i++) {

          if(callback(self[i],i,self)) {

              res.push(self[i])

          }

      }



      return res

  },

  query: function(key) {

      let queryObj = {}

      let query = location.search



      if(!query) {

          return 

      }



      let qa = query.split('?')[1]

      let qs = qa.split('&')

      this.forEach(qs,function(item,i){

          let its = item.split('=')

          queryObj[its[0]] = its[1]

      })



      if(key && !(key in queryObj)) {

          console.warn(`Query object have not '${key}', You can try run javascript’s '${'location.search'}' function`)

      }



      if(key in queryObj) {

          return queryObj[key]

      }



      return queryObj

      

  }

}



untils.fn.init.prototype = untils.prototype;



let f = untils(); 



export default f