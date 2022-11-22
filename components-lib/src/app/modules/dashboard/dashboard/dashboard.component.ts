import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slides = [
    {
      img: 'https://sm.ign.com/ign_br/screenshot/default/pokemon-scarlet-violet-1_7new.jpg',
    },
    {
      img: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/dlc/switch-dlc/pokemon-violet-dlc/rom-bundle/pokemon-scarlet-and-pokemon-violet-double-pack/image',
    },
    {
      img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/Microsites/Pokemon-Scarlet-Pokemon-Violet/PMPs/Victory-Road',
    },
    {
      img: 'https://criticalhits.com.br/wp-content/uploads/2022/11/pokemon-scarlet-violet-professor-910x455.jpg',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
