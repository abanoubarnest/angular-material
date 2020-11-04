import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {

  public advanceTableData = [
    [
      '5',
      'Life of Pi',
      'Yann Martel',
      [
        'Fiction',
      ],
      '2016',
      '2001',
      'English',
      'English',
      4,
    ],
    [
      '6',
      'The secret Garden',
      'Frances Hodgson Burnett',
      [
        'Children\'s book',
      ],
      '2017',
      '1911',
      'English',
      'English',
      1,
    ],
    [
      '7',
      'Rebecca',
      'Daphne du Maurier',
      [
        'Gothic fiction',
      ],
      '2016',
      '1938',
      'English',
      'English',
      2,
    ],
    [
      '8',
      'Dracula',
      'Bram Stoker',
      [
        'Gothic fiction',
        'Horror fiction',
      ],
      '2015',
      '1897',
      'English',
      'English',
      0,
    ],
    [
      '9',
      'The Little Prince',
      'Antoine de Saint-Exupery',
      [
        'Fiction',
      ],
      '2015',
      '1943',
      'English',
      'French',
      1,
    ],
    [
      '10',
      'Les Miserables',
      'Victor Hugo',
      [
        'Novel',
        'Fiction',
      ],
      '2014',
      '1862',
      'English',
      'French',
      3,
    ],
    [
      '11',
      'Alice in Wonderland',
      'Lewis Carroll',
      [
        'Children\'s book',
        'Fantasy',
      ],
      '2018',
      '1865',
      'English',
      'English',
      4,
    ],
    [
      '12',
      'Anne of Green Gables',
      'L.M. Montgomery',
      [
        'Novel',
      ],
      '2019',
      '1908',
      'English',
      'English',
      3,
    ],
    [
      '13',
      'The Hitchhiker\'s Guide to th...',
      'Douglas Adams',
      [
        'Adventure',
        'Fiction',
      ],
      '2017',
      '1979',
      'English',
      'English',
      3,
    ],
    [
      '14',
      'Madame Bovary',
      'Gustave Flaubert',
      [
        'Novel',
      ],
      '2018',
      '1856',
      'English',
      'French',
      2,
    ],
    [
      '15',
      'David Copperfield',
      'Charles Dickens',
      [
        'Novel',
      ],
      '2019',
      '1850',
      'English',
      'English',
      4,
    ],
    [
      '16',
      'War and Peace',
      'Leo Tolstoy',
      [
        'Fiction',
      ],
      '2015',
      '1869',
      'English',
      'Russian',
      3,
    ],
    [
      '17',
      'Gone with the Wind',
      'Margaret Mitchell',
      [
        'Fiction',
      ],
      '2014',
      '1936',
      'English',
      'Russian',
      2,
    ],
    [
      '18',
      'The Count of Monte Cristo',
      'Alexandre Dumas',
      [
        'Novel',
        'Adventure',
      ],
      '2019',
      '1845',
      'English',
      'English',
      0,
    ],
    [
      '19',
      'Lolita',
      'Vladimir Nabokov',
      [
        'Novel',
      ],
      '2018',
      '1955',
      'English',
      'Russian',
      3,
    ],
    [
      '20',
      'The Hobbit',
      'J.R.R. Tolkien',
      [
        'Fantasy',
      ],
      '2017',
      '1937',
      'English',
      'English',
      1,
    ],
  ];
  public data = [
    {
      color: "#008000",
      iconName: "fas fa-user",
      id: 1,
      title: "new Table",
      qnty: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      color: "#008000",
      iconName: "fab fa-ideal",
      id: 2,
      title: "sd",
      qnty: 20,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#008000",
      iconName: "test",
      id: 3,
      title: "new Table",
      qnty: 30,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fab fa-ideal",
      id: 4,
      title: "new Table",
      qnty: 40,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#711971",
      iconName: "test",
      id: 5,
      title: "new Table",
      qnty: 50,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fas fa-user",
      id: 6,
      title: "new Table",
      qnty: 60,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#16096d",
      iconName: "fas fa-user",
      id: 7,
      title: "new Table",
      qnty: 70,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  public data2 = [
    {
      color: "#008000",
      iconName: "fas fa-user",
      id: 1,
      title: "new Table",
      qnty: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      color: "#008000",
      iconName: "fab fa-ideal",
      id: 2,
      title: "sd",
      qnty: 20,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#008000",
      iconName: "test",
      id: 3,
      title: "new Table",
      qnty: 30,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fab fa-ideal",
      id: 4,
      title: "new Table",
      qnty: 40,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#711971",
      iconName: "test",
      id: 5,
      title: "new Table",
      qnty: 50,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fas fa-user",
      id: 6,
      title: "new Table",
      qnty: 60,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#16096d",
      iconName: "fas fa-user",
      id: 7,
      title: "new Table",
      qnty: 70,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  public data3 = [
    {
      color: "#008000",
      iconName: "fas fa-user",
      id: 1,
      title: "new Table",
      qnty: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      color: "#008000",
      iconName: "fab fa-ideal",
      id: 2,
      title: "sd",
      qnty: 20,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#008000",
      iconName: "test",
      id: 3,
      title: "new Table",
      qnty: 30,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fab fa-ideal",
      id: 4,
      title: "new Table",
      qnty: 40,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#711971",
      iconName: "test",
      id: 5,
      title: "new Table",
      qnty: 50,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#651313",
      iconName: "fas fa-user",
      id: 6,
      title: "new Table",
      qnty: 60,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      color: "#16096d",
      iconName: "fas fa-user",
      id: 7,
      title: "new Table",
      qnty: 70,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  public getHeaders() {
    return [
      '#',
      'Book title',
      'Author',
      'First published',
      'Status',
    ];
  }

  public getSimpleTable() {
    return [
      [
        '1',
        'To Kill a Mockingbird',
        'Harper Lee',
        '1960',
        'read',
      ],
      [
        '2',
        'Pride and Prejudice',
        'Jane Austen',
        '1813',
        'unread',
      ],
      [
        '3',
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        '1925',
        'read',
      ],
      [
        '4',
        'Crime and Punishment',
        'Fyodor Dostoyevsky',
        '1866',
        'read',
      ],
    ];
  }

  public getBorderedTable() {
    return [
      [
        '23',
        'Gone with the Wind',
        'Margaret Mitchell',
        '1936',
        'unread',
      ],
      [
        '24',
        'The Count of Monte Cristo',
        'Alexandre Dumas',
        '1845',
        'unread',
      ],
      [
        '25',
        'Lolita',
        'Vladimir Nabokov',
        '1955',
        'read',
      ],
      [
        '26',
        'The Hobbit',
        'J.R.R. Tolkien',
        '1937',
        'unread',
      ],
    ];
  }

  public getStrippedTable() {
    return [
      [
        '54',
        'The Hitchhiker\'s Guide to th...',
        'Douglas Adams',
        '1979',
        'unavailable',
      ],
      [
        '55',
        'Madame Bovary',
        'Gustave Flaubert',
        '1856',
        'available',
      ],
      [
        '56',
        'David Copperfield',
        'Charles Dickens',
        '1850',
        'available',
      ],
      [
        '57',
        'War and Peace',
        'Leo Tolstoy',
        '1869',
        'available',
      ],
    ];
  }

  public getBorderlessTable() {
    return [
      [
        '31',
        'The Little Prince',
        'Antoine de Saint-Exupery',
        '1943',
        'available',
      ],
      [
        '32',
        'Les Miserables',
        'Victor Hugo',
        '1862',
        'unavailable',
      ],
      [
        '33',
        'Alice in Wonderland',
        'Lewis Carroll',
        '1865',
        'available',
      ],
      [
        '34',
        'Anne of Green Gables',
        'L.M. Montgomery',
        '1908',
        'available',
      ],
    ];
  }

  public getAdvancedHeaders() {
    return [
      {
        name: 'ID',
        sort: 0,
        prop: 'id'
      },
      {
        name: 'Color',
        sort: null,
        prop: 'color'
      },
      {
        name: 'Title ',
        sort: 0,
        prop: 'title'
      },
      {
        name: 'Qnty',
        sort: 0,
        prop: 'qnty'
      },
      {
        name: 'Created at ',
        sort: 0,
        prop: 'created_at'
      },
      {
        name: 'Updated at ',
        sort: 0,
        prop: 'updated_at',
      },

    ];
  }
  public getAdvancedHeaders2() {
    return [
      {
        name: 'ID',
        sort: 0,
        prop: 'id'
      },
      {
        name: 'Color',
        sort: null,
        prop: 'color'
      },
      {
        name: 'Title ',
        sort: 0,
        prop: 'title'
      },
      {
        name: 'Qnty',
        sort: 0,
        prop: 'qnty'
      },
      {
        name: 'Created at ',
        sort: 0,
        prop: 'created_at'
      },
      {
        name: 'Updated at ',
        sort: 0,
        prop: 'updated_at',
      },

    ];
  }
  public getAdvancedHeaders3() {
    return [
      {
        name: 'ID',
        sort: 0,
        prop: 'id'
      },
      {
        name: 'Color',
        sort: null,
        prop: 'color'
      },
      {
        name: 'Title ',
        sort: 0,
        prop: 'title'
      },
      {
        name: 'Qnty',
        sort: 0,
        prop: 'qnty'
      },
      {
        name: 'Created at ',
        sort: 0,
        prop: 'created_at'
      },
      {
        name: 'Updated at ',
        sort: 0,
        prop: 'updated_at',
      },

    ];
  }

  public getAdvancedTableNumOfPage(countPerPage) {
    return Math.ceil(this.data.length / countPerPage);
  }
  public getAdvancedTableNumOfPage2(countPerPage) {
    return Math.ceil(this.data2.length / countPerPage);
  }
  public getAdvancedTableNumOfPage3(countPerPage) {
    return Math.ceil(this.data3.length / countPerPage);
  }
  public getAdvancedTablePage(page, countPerPage) {
    return this.data.slice((page - 1) * countPerPage, page * countPerPage);
  }
  public getAdvancedTablePage2(page, countPerPage) {
    return this.data2.slice((page - 1) * countPerPage, page * countPerPage);
  }
  public getAdvancedTablePage3(page, countPerPage) {
    return this.data3.slice((page - 1) * countPerPage, page * countPerPage);
  }

  public changeAdvanceSorting(order, index, prop) {
    this.data = this.sorting(this.data, order, index, prop);
  }
  public changeAdvanceSorting2(order, index, prop) {
    this.data2 = this.sorting(this.data2, order, index, prop);
  }
  public changeAdvanceSorting3(order, index, prop) {
    this.data3 = this.sorting(this.data3, order, index, prop);
  }

  public sorting(array, order, value, prop) {

    const compareFunction = (a, b) => {
      if (a[prop] > b[prop]) {
        return 1 * order;
      }
      if (a[prop] < b[prop]) {
        return -1 * order;
      }
      return 0;
    };
    var array= array.sort(compareFunction);
    return array;
  }
}
