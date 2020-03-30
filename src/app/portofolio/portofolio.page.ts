import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.page.html',
  styleUrls: ['./portofolio.page.scss'],
})
export class PortofolioPage implements OnInit {

  @ViewChild('slideWithNav', {static: false}) slideWithNav: IonSlides;
  
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  sliderFour: any;
  sliderFive: any;
  sliderSix: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  slideOptsFour = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  slideOptsFive = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  slideOptsSix = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  constructor() {
    //Item object for Boga
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/porto/boga/1.png'
          },
          {
            id: 2,
            image: '../../assets/porto/boga/2.png'
          },
          {
            id: 3,
            image: '../../assets/porto/boga/3.png'
          },
          {
            id: 4,
            image: '../../assets/porto/boga/4.png'
          },
          {
            id: 5,
            image: '../../assets/porto/boga/5.png'
          },
          {
            id: 6,
            image: '../../assets/porto/boga/6.png'
          }
        ]
      };
      //Item object for CMS NTS
      this.sliderTwo =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [
            {
              id: 1,
              image: '../../assets/porto/cms-nts/1.png'
            },
            {
              id: 2,
              image: '../../assets/porto/cms-nts/2.png'
            },
            {
              id: 3,
              image: '../../assets/porto/cms-nts/3.png'
            },
            {
              id: 4,
              image: '../../assets/porto/cms-nts/4.png'
            },
            {
              id: 5,
              image: '../../assets/porto/cms-nts/5.png'
            },
            {
              id: 6,
              image: '../../assets/porto/cms-nts/6.png'
            },
            {
              id: 7,
              image: '../../assets/porto/cms-nts/7.png'
            }
          ]
        };
      //Item object for CMS NTS
      this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/porto/etle/1.png'
          },
          {
            id: 2,
            image: '../../assets/porto/etle/2.png'
          },
          {
            id: 3,
            image: '../../assets/porto/etle/3.png'
          },
          {
            id: 4,
            image: '../../assets/porto/etle/4.png'
          },
          {
            id: 5,
            image: '../../assets/porto/etle/5.png'
          },
          {
            id: 6,
            image: '../../assets/porto/etle/6.png'
          },
          {
            id: 7,
            image: '../../assets/porto/etle/7.png'
          }
        ]
      };
      //Item object for Ranking Wisata
      this.sliderFour =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/porto/ranking-wisata/1.png'
          },
          {
            id: 2,
            image: '../../assets/porto/ranking-wisata/2.png'
          },
          {
            id: 3,
            image: '../../assets/porto/ranking-wisata/3.png'
          },
          {
            id: 4,
            image: '../../assets/porto/ranking-wisata/4.png'
          },
          {
            id: 5,
            image: '../../assets/porto/ranking-wisata/5.png'
          },
          {
            id: 6,
            image: '../../assets/porto/ranking-wisata/6.png'
          },
          {
            id: 7,
            image: '../../assets/porto/ranking-wisata/7.png'
          },
          {
            id: 8,
            image: '../../assets/porto/ranking-wisata/8.png'
          },
          {
            id: 9,
            image: '../../assets/porto/ranking-wisata/9.png'
          },
          {
            id: 10,
            image: '../../assets/porto/ranking-wisata/10.png'
          },
          {
            id: 11,
            image: '../../assets/porto/ranking-wisata/11.png'
          },
          {
            id: 12,
            image: '../../assets/porto/ranking-wisata/12.png'
          }
        ]
      };
      //Item object for POS Indonesia
      this.sliderFive =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/porto/cukai-pos/1.png'
          },
          {
            id: 2,
            image: '../../assets/porto/cukai-pos/2.png'
          },
          {
            id: 3,
            image: '../../assets/porto/cukai-pos/3.png'
          },
          {
            id: 4,
            image: '../../assets/porto/cukai-pos/4.png'
          },
          {
            id: 5,
            image: '../../assets/porto/cukai-pos/5.png'
          },
          {
            id: 6,
            image: '../../assets/porto/cukai-pos/6.png'
          },
          {
            id: 7,
            image: '../../assets/porto/cukai-pos/7.png'
          },
          {
            id: 8,
            image: '../../assets/porto/cukai-pos/8.png'
          }
        ]
      };
      //Item object for SIAKAD
      this.sliderSix =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/porto/siakad/1.png'
          },
          {
            id: 2,
            image: '../../assets/porto/siakad/2.png'
          },
          {
            id: 3,
            image: '../../assets/porto/siakad/3.png'
          }
        ]
      };
    }

    
    //Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }
  
    //Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }
  
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }
  
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }
  
    checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
    checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      });
    }
  ngOnInit() {
  }

}
