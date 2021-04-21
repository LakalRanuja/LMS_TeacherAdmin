import { Mail, Clipboard, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Clock, Briefcase, Archive, Book } from 'react-feather'

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
    navLink: '/apps/manage schedular'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'blog',
    title: 'Manage Class',
    icon: <Archive size={20} />,
    navLink: '/apps/manageclasses/view'
  },
  {
    id: 'users',
    title: 'Manage Subject',
    icon: <Book size={20} />,
    navLink: '/apps/managesubject/view'
  },
  {
    id: 'assignent',
    title: 'Manage Assignments',
    icon: <FileText size={20} />,
    navLink: '/apps/manage-assignments/view'
  }
]
