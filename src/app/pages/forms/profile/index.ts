export class Info {
  id: number = 1;
  name: string = 'blog';
  email: string
  constructor() {
    return {
      id: 1,
      email: 'example@example.com',
      name: 'blog'

    }


  }

}
// tslint:disable-next-line: max-classes-per-file
export class Info2 {
  id: number;
  title: string;
  email: string;
  phone: string;
  street_name: string;
  number: number;
  secondary_address: string;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
  image: string;
  constructor() {
    return {
      id: 2,
      title: 'Senior',
      email: 'example@example.com',
      phone: '+20-985232',
      street_name: 'SD',
      image: '/assets/images/Bobby.PNG',
      city: 'USA',
      neighborhood:'st',
      number: 23433,
      postal_code: '98032',
      secondary_address: 'NA',
      state: 'sts',


    }


  }
}
// the URL for the image. Load this on an image HTML/Angular tag to render the image.
