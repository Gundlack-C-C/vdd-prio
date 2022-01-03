import { Component, OnInit } from '@angular/core';

const LINK_DEFAULT = {
  source: '',
  target: '',
  value: 0,
  T: 0,
  link: ''
}

@Component({
  selector: 'app-connected-app',
  templateUrl: './connected-app.component.html',
  styleUrls: ['./connected-app.component.css']
})
export class ConnectedAppComponent implements OnInit {
  data = [
    {name: 'Nürnberg'},
    {name: 'Bali'},
    {name: 'Singapur'},
    {name: 'Surabaya'},
    {name: 'Yogyakarta'},
    {name: 'Jakarta'},
    {name: 'Kuala Lumpur'},
    {name: 'Phuket'}
  ]

  new_link = LINK_DEFAULT;

  links = [
    {
      source: 'Nürnberg',
      target: 'Bali',
      value: 500,
      T: 1180,
      link: 'https://www.google.com/travel/flights/search?tfs=CBwQAhooagwIAhIIL20vMDVia2YSCjIwMjItMDUtMDFyDAgDEggvbS8wMWJrYnABggELCP___________wFAAUgBmAEC&client=ms-android-sonymobile-rev1',
      type: 'Flug'
    },
    {
      source: 'Nürnberg',
      target: 'Singapur',
      value: 412,
      T: 960,
      link: 'https://www.google.com/travel/flights/search?tfs=CBwQAhojagwIAhIIL20vMDVia2YSCjIwMjItMDUtMDFyBwgBEgNTSU5wAYIBCwj___________8BQAFIAZgBAg&client=ms-android-sonymobile-rev1',
      type: 'Flug'
    },
    {
      source: 'Singapur',
      target: 'Bali',
      value: 57,
      T: 170,
      link: 'https://www.google.com/travel/flights/search?tfs=CBwQAhoeagcIARIDU0lOEgoyMDIyLTA1LTAzcgcIARIDRFBTcAGCAQsI____________AUABSAGYAQI&client=ms-android-sonymobile-rev1',
      type: 'Flug'
    },
    {
      source: 'Bali',
      target: 'Surabaya',
      value: 21,
      T: 65,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxoaagwIAxIIL20vMDFia2ISCjIwMjItMDEtMDVwAoIBCwj___________8BQAFIAZgBArIBExgBIAEqDQgCEgkvbS8wMWY0eGQ&tfu=GiwaKAoSCdDT-gR98hLAEU78PZjNLl1AEhIJU8TbeC0dJMARTvw9mPHuWkAgAw',
      type: 'Flug'
    },
    {
      source: 'Bali',
      target: 'Yogyakarta',
      value: 40,
      T: 90,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxoaagwIAxIIL20vMDFia2ISCjIwMjItMDEtMDVwAoIBCwj___________8BQAFIAZgBArIBExgBIAEqDQgCEgkvbS8wZGc2eXg&tfu=GiwaKAoSCSsV6ZnlHxTAEWK7355MDF1AEhIJx5wBHAqyJMARYrvfnnDMWkAgAw',
      type: 'Flug'
    },
    {
      source: 'Bali',
      target: 'Jakarta',
      value: 37,
      T: 105,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxoaagwIAxIIL20vMDFia2ISCjIwMjItMDEtMDVwAoIBCwj___________8BQAFIAZgBArIBEhgBIAEqDAgCEggvbS8wNDRydg&tfu=GiwaKAoSCWoe_jUI9dW_Ea3zOQYguV1AEhIJhn8SZEgEJsARrfM5Bmg5WUAgAw',
      type: 'Flug'
    },
    {
      source: 'Yogyakarta',
      target: 'Kuala Lumpur',
      value: 52,
      T: 155,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxobag0IAxIJL20vMGRnNnl4EgoyMDIyLTAxLTA1cAKCAQsI____________AUABSAGYAQKyARAYASoMCAISCC9tLzA0OWQx&tfu=GiwaKAoSCTHFQvezoytAEbA125d5BF9AEhIJWddHp-j1HcARsDXblwkFVkAgAw',
      type: 'Flug'
    },
    {
      source: 'Kuala Lumpur',
      target: 'Phuket',
      value: 22,
      T: 90,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxobag0IAxIJL20vMGRnNnl4EgoyMDIyLTAxLTA1cAKCAQsI____________AUABSAGYAQKyARAYASoMCAISCC9tLzA0OWQx&tfu=GiwaKAoSCTHFQvezoytAEbA125d5BF9AEhIJWddHp-j1HcARsDXblwkFVkAgAw',
      type: 'Flug'
    },
    {
      source: 'Jakarta',
      target: 'Phuket',
      value: 98,
      T: 90,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxobag0IAxIJL20vMGRnNnl4EgoyMDIyLTAxLTA1cAKCAQsI____________AUABSAGYAQKyARAYASoMCAISCC9tLzA0OWQx&tfu=GiwaKAoSCTHFQvezoytAEbA125d5BF9AEhIJWddHp-j1HcARsDXblwkFVkAgAw',
      type: 'Flug'
    },
    {
      source: 'Jakarta',
      target: 'Kuala Lumpur',
      value: 84,
      T: 150,
      link: 'https://www.google.com/travel/explore?tfs=CBwQAxoaagwIAxIIL20vMDQ0cnYSCjIwMjItMDEtMDVwAoIBCwj___________8BQAFIAZgBArIBEBgBKgwIAxIIL20vMDQ5ZDE&tfu=GiwaKAoSCR1uKY_v2RVAES689Rv6llxAEhIJEfzFPUIFFcARLrz1G0IXWEAgAw',
      type: 'Flug'
    },
    {
      source: 'Surabaya',
      target: 'Yogyakarta',
      value: 12,
      T: 240,
      link: 'https://www.rome2rio.com/de/map/Yogyakarta/Surabaya#r/Train/s/0',
      type: 'Zug'
    },
    {
      source: 'Yogyakarta',
      target: 'Jakarta',
      value: 20,
      T: 360,
      link: 'https://www.rome2rio.com/de/map/Yogyakarta/Jakarta#r/Train/s/0',
      type: 'Zug'
    }
  ]

  formatter = function(params: any){
    const data = params.data;
    const type = params.dataType;
    if(type=='edge') {
      return[`${data.source} to ${data.target}`,
      `Cost: <b>${data.value} €</b>`,
      `Time: <b>${(data.T/60).toFixed(2)} Hours</b>`,
      `Type: <b>${data.type}</b>`
    ].join('</br>')
    } else {
      return data.name
    }
  }
  constructor() { }

  ngOnInit() {
  }

  onNewLink() {

  }

  onLinkClicked($event: any) {
    window.open($event.link, '_');
  }



}
