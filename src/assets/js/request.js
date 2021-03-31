import axios from 'axios';

var baseUrl = "http://dahonghua.shangyouyun.cn";

var  HttpRequest={
    getRequest({ url, data = {}, method = "GET" }) {
      return new Promise((resolve, reject) => {
        this._getRequest(url, resolve, reject, data, method);
      });
    },
     _getRequest :function(url, resolve, reject, data = {}, method = "GET") {
        let format = method.toLocaleLowerCase() ==='get'?'params':'data';
        axios({
          url:baseUrl + url,
          method: method,
          [format]: data,
          header: {
            "content-type": "application/json"
          }
        }).then(res => {
          if(res.data.status == false){
            alert(res.data.msg)
          }
          resolve(res.data);
        }).catch(err => {
          reject();
          alert(err)
        })
    }
}
 export {HttpRequest}
