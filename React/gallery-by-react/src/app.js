import React from 'react'
import ReactDOM from 'react-dom'

import '_/styles/index.scss'

// 获取图片相关的数据
var imageDatas = require('_/data/imageDatas.json');
// 将图片名信息转成图片URL路径信息
imageDatas = (function getImageUrl(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('_/images/'+ singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class App extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="img-sec"> 

        </div>
        <nav className="controller-nav">
        
        </nav>
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))