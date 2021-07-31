import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios';
import baseURL from '../axios';
import "./carousel.css";

const items = [
    {
      src: "./testImages/IMG_3075.jpg",
      altText: 'Slide 1',
      key: '1'
    },

    {
      src: "./testImages/IMG_20190901_173314_080.jpg",
      altText: 'Slide 2',
      key: '2'
    },

    {
      src: "./testImages/20210626_153233.jpg",
      altText: 'Slide 3',
      key: '3'
    },
    {
        src: "./testImages/DSCF0168.jpg",
        altText: 'Slide 4',
        key: '4'
    },
  
    {
        src: "./testImages/IMG_20201228_141221_768.jpg",
        altText: 'Slide 5',
        key: '5'
    },
  
    {
        src: "./testImages/20161015_212240_HDR.jpg",
        altText: 'Slide 6',
        key: '6'
    },
    {
        src: "./testImages/IMG_20190901_173314_080.jpg",
        altText: 'Slide 7',
        key: '7'
    },
  
    {
        src: "./testImages/IMG_20190901_155331_928.jpg",
        altText: 'Slide 8',
        key: '8'
    },
  
    {
        src: "./testImages/20161005_190140.jpg",
        altText: 'Slide 9',
        key: '9'
    },
    {
        src: "./testImages/20190302_224833.jpg",
        altText: 'Slide 10',
        key: '10'
    },
  
    {
        src: "./testImages/20161019_132639_HDR.jpg",
        altText: 'Slide 11',
        key: '11'
    },
  
    {
        src: "./testImages/20161015_212240_HDR.jpg",
        altText: 'Slide 12',
        key: '12'
    },
    {
        src: "./testImages/20190228_203324.jpg",
        altText: 'Slide 13',
        key: '13'
    },
  
    {
        src: "./testImages/20161010_164232.jpg",
        altText: 'Slide 14',
        key: '14'
    },
  ];

class ImageCarousel extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          images: {items}
        }
    }

    getSliderSettings(){
        return {
            dots: true,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: true,
            centerMode: true,
            adaptiveHeight: true,
            className: "innerSlider"
        }
    }

    handleClickImage = (e, image) => {
        e && e.preventDefault();
     
        this.setState({
          current: image.items.src
        })
       }

    render() {
        const settings = this.getSliderSettings();
        const { images } = this.state;
        
        return (
            <div className="parent">
                <Slider {...settings}>
                    { images.items.map(image => (
                        <img src={image.src} id={image.key} onClick={ e => this.handleClickImage(e, image.src)}  />
        
                    ))} 
                </Slider>
            </div>
        );
    }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = { activeIndex: 0 };
    //     this.next = this.next.bind(this);
    //     this.previous = this.previous.bind(this);
    //     this.goToIndex = this.goToIndex.bind(this);
    //     this.onExiting = this.onExiting.bind(this);
    //     this.onExited = this.onExited.bind(this);
    //   }
    
    //   onExiting() {
    //     this.animating = true;
    //   }
    
    //   onExited() {
    //     this.animating = false;
    //   }
    
    //   next() {
    //     if (this.animating) return;
    //     const nextIndex =
    //       this.state.activeIndex === items.length - 1
    //         ? 0
    //         : this.state.activeIndex + 1;
    //     this.setState({ activeIndex: nextIndex });
    //   }
    
    //   previous() {
    //     if (this.animating) return;
    //     const nextIndex =
    //       this.state.activeIndex === 0
    //         ? items.length - 1
    //         : this.state.activeIndex - 1;
    //     this.setState({ activeIndex: nextIndex });
    //   }
    
    //   goToIndex(newIndex) {
    //     if (this.animating) return;
    //     this.setState({ activeIndex: newIndex });
    //   }
    
    //   render() {
    //     const { activeIndex } = this.state;
    
    //     const slides = items.map(item => {
    //       return (
    //         <CarouselItem
    //           className="custom-tag"
    //           tag="div"
    //           key={item.key}
    //           onExiting={this.onExiting}
    //           onExited={this.onExited}
    //         >
    //           <img src={item.src} alt={item.altText} />
    //         </CarouselItem>
    //       );
    //     });
    
    //     return (
    //       <div>
    //         <style>
    //           {`.custom-tag {
    //                 max-width: 100%;
    //                 height: 500px;
    //               }`}
    //         </style>
    //         <Carousel
    //           activeIndex={activeIndex}
    //           next={this.next}
    //           previous={this.previous}
    //         >
    //           <CarouselIndicators
    //             items={items}
    //             activeIndex={activeIndex}
    //             onClickHandler={this.goToIndex}
    //           />
    //           {slides}
    //           <CarouselControl
    //             direction="prev"
    //             directionText="Previous"
    //             onClickHandler={this.previous}
    //           />
    //           <CarouselControl
    //             direction="next"
    //             directionText="Next"
    //             onClickHandler={this.next}
    //           />
    //         </Carousel>
    //       </div>
    //     );
    //   }
    // }  
    // render() {
    //     return (
    //         items.map((item) => {
    //             <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
    //                 <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
    //                 <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.key}>
    //                     <img className="d-block w-100" src={item.src} alt={item.altText} />
    //                 </CarouselItem>
    //                 <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
    //                 <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    //             </Carousel>
    //         })
    //     )
    // }

  
  export default ImageCarousel;