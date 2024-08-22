storage = {};
window = {
       localStorage: {
           /*
           key
           length
           clear
           setitem
           getitem
           */
          key: function(index){
           let counter = 1;
           for (key in storage) {
               if (counter == index) {
                   return storage[key];
               }
               counter++;
           }
          },
          length: function () {
               var length = 0;
               for( var key in storage ) {
                   if( storage.hasOwnProperty(key) ) {
                       length++;
                       console.log("length is " + length);
                   }
               }
               return length;
          },
          clear: function(){
           storage = {};
          },
          getItem: function(key){
           return storage[key];
          },
          setItem: function(key, value){
           storage[key] = value;
          },
          removeItem: function(){
           delete storage[key];
          }
       }
   };

   window.localStorage.setItem("test", "works");
   console.log("first item: " + window.localStorage.getItem("test"));
   console.log("storage length:" + window.localStorage.length());
   console.log("Key of index 1" + window.localStorage.key(1));
   window.localStorage.clear();
   console.log("length after clear" + window.localStorage.length());
   window.localStorage.setItem("done", "lunch time");
   console.log("length after set" + window.localStorage.length());
   window.localStorage.removeItem("done");