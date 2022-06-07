const imgList = [
"images/airlines/1.png",
"images/airlines/2.png",
"images/airlines/3.png",
"images/airlines/4.png",
"images/airlines/5.png",
"images/airlines/6.png",
"images/airlines/7.png",
"images/airlines/8.png",
"images/airlines/9.png",
];

const InfinitLoopImg = props => {
  const [wrapWidth, setWrapWidth] = React.useState('200%');
  const wrapEl = React.useRef(null);
  React.useEffect(() => {
    const wd = wrapEl.current.clientWidth;
    setWrapWidth(wd * 2);
  }, []);

  const productImgList = imgList.map(ele => /*#__PURE__*/React.createElement("img", { className: "product-img", src: ele, alt: "prodcut" }));

  return /*#__PURE__*/(
    React.createElement("div", { className: "product-img-outter-wrap", style: { width: wrapWidth } }, /*#__PURE__*/
    React.createElement("div", { className: "product-img-wrap", ref: wrapEl },
    productImgList), /*#__PURE__*/

    React.createElement("div", { className: "product-img-wrap" },
    productImgList)));



};

ReactDOM.render( /*#__PURE__*/
React.createElement(InfinitLoopImg, null),
document.getElementById('container'));