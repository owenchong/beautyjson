 BeautyJson is a tool for javascript object format,it is easy to make json readable.<br>
 Usage : <br>
```js
    beautyJson({id:1,name:'Owen',history:[{date : new Date(),b:true}]}});
```	 
   Output :
```js
    {
   	  "id" : 1,
   	  "name" : "Owen",
   	  "history" : [{
   	    "date" : "2012-10-19 15:40:41",
   	    "b" : true
   	  }]
   	}
```