// import React, { Component } from "react";
// import Slider from "react-slick";
// import Box from '@material-ui/core/Box';

// class ImageCarousel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
        
//         this.imagestore = this.imagestore.bind(this);
//     }

//     imagestore () {
//         const param = this.props.images

//         this.setState({
//             imageID: Object.keys(param),
//             imagesrc: Object.values(param)
//         })
//     }

//     render () {
//         var settings = {
//             dots: true,
//             infinite: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2500,
//             pauseOnHover: true,
//             adaptiveHeight: true,
//             centerMode: true,
//             variableWidth: true,
//         };

//         return (
//             // <div display="block" boxSizing="border-box" adaptiveHeight="true" maxWidth="100%" maxHeight="100%" margin="30px, 30px, 30px, 30px" onLoad={this.imagestore}>
//                 <Slider {...settings} onLoad={this.imagestore}>
//                     <div className="imgCarousel" key={this.state.imageID}>
//                         <img src={this.state.imagesrc} />
//                     </div>
//                 </Slider>
//             //</div>

//         )
//     }
// }


// export default ImageCarousel;