# Google Maps Snake Hack

This tool was created during our research at Checkpoint Software Technologies on Whatsapp Protocol.

Here is the link to our blog post: https://research.checkpoint.com/fakesapp-a-vulnerability-in-whatsapp/

The Extension:

![alt tag](https://github.com/romanzaikin/Google_Maps_Snake_Hack/blob/master/snake.gif)


Made By:
---------------

__Yaara Shriki__

Linkedin - https://www.linkedin.com/in/diklabarda/ 


__Roman Zaikin__

Linkedin - https://www.linkedin.com/in/romanzaikin/
Twitter -  https://twitter.com/R0m4nZ41k1n


How To Use:
---------------

1) Start Google Maps in your

2) Download pip at https://pip.pypa.io/en/stable/installing/

3) Execute the command `pip install -r requirements.txt`
    * On Linux/Mac use `python2 -m pip install  -r requirements.txt`

4) Download Microsoft Visual C++ Compiler for Python 2.7 at https://www.microsoft.com/en-us/download/confirmation.aspx?id=44266

5) Copy `stdint.h` to `C:\Users\Administrator\AppData\Local\Programs\Common\Microsoft\Visual C++ for Python\9.0\VC\include`



```js
function str2unit8(str) {
  var buf = new ArrayBuffer(str.length);
  var bufView = new Uint8Array(buf);
  
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str[i];
  }
  return buf;
}
```



