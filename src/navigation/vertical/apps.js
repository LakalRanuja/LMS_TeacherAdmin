import { Mail, Clipboard, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Clock, Briefcase } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'todo',
    title: 'Manage Schedular ',
    icon: <Clock size={20} />,
    navLink: '/apps/todo'
  },
  
  {
    id: 'users',
    title: 'Student',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/user/edit'
      },
      {
        id: 'blog',
        title: 'Progress Rep.',
        icon: <Clipboard />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            icon: <Circle />,
            navLink: '/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            icon: <Circle />,
            navLink: '/pages/blog/detail'
          }
          // {
          //   id: 'blogEdit',
          //   title: 'Add',
          //   icon: <Circle />,
          //   navLink: '/pages/blog/edit'
          // }
        ]
      }
    ]
  }
]
