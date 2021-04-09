import mock from '../mock'

const data = {
  // blog list
  blogList: [
    {
      img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      title: 'Sahani Josep',
      // id: 1,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      // userFullName: 'Ghani Pradita',
      blogPosted: 'Jan 10, 2020',
      tags: ['1st place'],
      excerpt: 'Sahani got the 1st place cause, he has been acheived 95% over for all subjects'
    },
    {
      img: require('@src/assets/images/avatars/avatar-blank.png').default,
      title: 'Micheal collamon',
      // id: 2,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      // userFullName: 'Jorge Griffin',
      blogPosted: 'Jan 10, 2020',
      tags: ['2nd place'],
      excerpt: 'Micheal has got 2nd place cause, he has been achieved 90% over for all subjects',
      comment: 2100
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      title: 'Nimali Rajapakshe',
      // id: 3,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      // userFullName: 'Claudia Neal',
      blogPosted: 'Jan 10, 2020',
      tags: ['3rd place'],
      excerpt: 'Nimali has got 3nd place cause, he has been achieved 85% over for all subjects',
      comment: 243
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
      title: 'Helixa firuzz',
      // id: 4,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
      // userFullName: 'Fred Boone',
      blogPosted: 'Jan 10, 2020',
      tags: ['4rd place'],
      excerpt: 'Helixa has got 4th place cause, he has been achieved 75% over for all subjects',
      comment: 10
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-13.jpg').default,
      title: 'Shean luis',
      // id: 5,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-13.jpg').default,
      // userFullName: 'Billy French',
      blogPosted: 'Jan 10, 2020',
      tags: ['5rd place'],
      excerpt: 'Helixa has got 4th place of the class',
      comment: 319
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default,
      title: 'Charles bay',
      // id: 6,
      // avatar: require('@src/assets/images/portrait/small/avatar-s-13.jpg').default,
      // userFullName: 'Helena Hunt',
      blogPosted: 'Jan 10, 2020',
      tags: ['6th place'],
      excerpt: 'Charles has got 5th place of the class',
      comment: 1500
    }
  ],

  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        img: require('@src/assets/images/banner/banner-22.jpg').default,
        title: 'Why Should Forget Facebook?',
        id: 7,
        createdTime: 'Jan 14 2020'
      },
      {
        img: require('@src/assets/images/banner/banner-27.jpg').default,
        title: 'Publish your passions, your way',
        id: 8,
        createdTime: 'Mar 04 2020'
      },
      {
        img: require('@src/assets/images/banner/banner-39.jpg').default,
        title: 'The Best Ways to Retain More',
        id: 9,
        createdTime: 'Feb 18 2020'
      },
      {
        img: require('@src/assets/images/banner/banner-35.jpg').default,
        title: 'Share a Shocking Fact or Statistic',
        id: 10,
        createdTime: 'Oct 08 2020'
      }
    ],
    categories: [
      { category: 'Fashion', icon: 'Watch' },
      { category: 'Food', icon: 'ShoppingCart' },
      { category: 'Gaming', icon: 'Command' },
      { category: 'Quote', icon: 'Hash' },
      { category: 'Video', icon: 'Video' }
    ]
  },

  // detail
  blogDetail: {
    blog: {
      img: require('@src/assets/images/banner/banner-12.jpg').default,
      title: 'Sahani Josep',
      avatar: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      // userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['1st place'],
      content:
        '<p class="card-text mb-2"></p><h4>Subjects & marks</h4><ul><li>English - 98 % </li><li>Mathematics - 95 %</li><li>Sinhala - 96 %</li><li>Science - 95 %</li><li>Music - 93 %</li><li>Buddism - 98 %</li></ul>',
      comments: 19100,
      bookmarked: 139
    },
    comments: [
      {
        avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        userFullName: 'John Doe',
        commentedAt: 'May 24, 2020',
        commentText:
          'A variation on the question technique above, the multiple-choice question great way to engage your reader.'
      }
    ]
  },

  // edit
  blogEdit: {
    avatar: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
    userFullName: 'John Doe',
    createdTime: 'May 24, 2020',
    blogTitle: 'Sahan Josep',
    blogCategories: [
      { value: 'sahani', label: 'Sahani' }
      // { value: 'gaming', label: 'Gaming' }
    ],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt:
      '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
    featuredImage: require('@src/assets/images/slider/03.jpg').default
  }
}

mock.onGet('/blog/list/data').reply(() => [200, data.blogList])
mock.onGet('/blog/list/data/sidebar').reply(() => [200, data.blogSidebar])
mock.onGet('/blog/list/data/detail').reply(() => [200, data.blogDetail])
mock.onGet('/blog/list/data/edit').reply(() => [200, data.blogEdit])
