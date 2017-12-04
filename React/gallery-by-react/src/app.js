import React from 'react'
import ReactDOM from 'react-dom'

import '_/styles/index.scss'

// 获取图片相关的数据
var imageDatas = require('_/data/imageDatas.json');
// 将图片名信息转成图片URL路径信息
imageDatas = (function getImageUrl(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('_/images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);
// 获取区间内的随机值
function getRangeRandom(low, high) {
  if(low > high){
    return Math.ceil(high)
  }
  return Math.ceil(Math.random() * (high - low) + low)
}

class ImgFigure extends React.Component {
  render() {
    var styleObject = {}
    if (this.props.arrange.pos) {
      styleObject = this.props.arrange.pos
    }
    return (
      <figure className="img-figure" style={styleObject}>
        <img src={this.props.data.imageURL} alt={this.props.data.title} className="img-size" />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgsArrangeArr: []
    }
  }
  render() {
    var controllerUnits = [];
    var imageFigures = [];
    imageDatas.forEach(function (value, index) {
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          }
        }
      }
      imageFigures.push(<ImgFigure data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} />)
    }.bind(this));
    return (
      <div className="stage" ref="stage">
        <div className="img-sec">
          {imageFigures}
        </div>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </div>

    )
  }
  componentDidMount() {
    var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
      stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);
    var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
      imgW = imgFigureDOM.scrollWidth,
      imgH = imgFigureDOM.scrollHeight,
      halfImgW = Math.ceil(imgW / 2),
      halfImgH = Math.ceil(imgH / 2);
      console.log(stageDOM)
    // 计算中心图片的位置点
    this.props.constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }
    // 计算左侧，右侧区域图片排布位置的取值范围
    this.props.constant.hPosRange.leftSecX[0] = -halfImgW
    this.props.constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3
    this.props.constant.hPosRange.rightSecX[0] = halfStageW + halfImgW
    this.props.constant.hPosRange.rightSecX[1] = stageW - halfImgW
    this.props.constant.hPosRange.y[0] = -halfImgH
    this.props.constant.hPosRange.y[1] = stageH - halfImgH
    // 计算上侧区域图片排布位置的取值范围
    this.props.constant.vPosRange.topY[0] = -halfImgH
    this.props.constant.vPosRange.topY[1] = halfStageH - halfImgH * 3
    this.props.constant.vPosRange.x[0] = halfStageW - imgW
    this.props.constant.vPosRange.x[1] = halfStageW

    this.rearrange(0)
  }
  //重新布局所有图片 
  rearrange(centerIndex) {
    var imgsArrangeArr = this.state.imgsArrangeArr,
      constant = this.props.constant,
      centerPos = constant.centerPos,
      hPosRange = constant.hPosRange,
      vPosRange = constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSecX,
      hPosRangeRightSecX = hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeX = vPosRange.x,
      vPosRangeTopY = vPosRange.topY,

      imgsArrangeTopArr = [],
      topImgNum = Math.ceil(Math.random() * 2),
      topImgSpliceIndex = 0,

      imgArrangeCenter = imgsArrangeArr.splice(centerIndex, 1)

    // 首先居中centerIndex的图片
    imgArrangeCenter[0].pos = centerPos
    // 取出要布局上侧的图片的状态信息
    topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum))
    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum)

    // 布局上侧图片
    imgsArrangeTopArr.forEach(function (value, index) {
      imgsArrangeTopArr[index].pos = {
        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
        left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
      }
    })

    // 布局左右的图片
    for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      var hPosRangeLORX = null
      // 前半部分布局左边，右半部分布局右边
      if (i < k) {
        hPosRangeLORX = hPosRangeLeftSecX
      } else {
        hPosRangeLORX = hPosRangeRightSecX
      }
      imgsArrangeArr[i].pos = {
        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
        left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
      }
    }


    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
      imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0])
    }

    imgsArrangeArr.splice(centerIndex, 0, imgArrangeCenter[0])

    this.setState({
      imgsArrangeArr: imgsArrangeArr
    })
  }
}

App.defaultProps = {
  constant: {

    centerPos: {
      left: 0,
      right: 0
    },
    hPosRange: {
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: {
      x: [0, 0],
      topY: [0, 0]
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))