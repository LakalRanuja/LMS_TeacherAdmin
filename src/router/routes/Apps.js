import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/manage schedular',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  // {
  //   path: '/apps/todo/data',
  //   exact: true,
  //   appLayout: true,
  //   className: 'todo-application',
  //   component: lazy(() => import('../../views/apps/todo/component/index'))
  // },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/classes/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/classes/edit',
    exact: true,
    component: () => <Redirect to='/apps/classes/edit/1' />
  },
  {
    path: '/apps/classes/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/classes/edit'
    }
  },
  {
    path: '/apps/classes/view',
    exact: true,
    component: () => <Redirect to='/apps/classes/view/1' />
  },
  {
    path: '/apps/classes/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/classes/view'
    }
  },
  {
    path: '/apps/manageclasses/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/manageclasses/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  },
  {
    path: '/apps/manageclass/view/studentdetails',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/manageclasses/screens/StudentDetails'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  },
  {
    path: '/apps/managesubject/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/managesubject/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  }, 
  {
    path: '/apps/manage-assignments/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/manageAssignments/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  },
  {
    path: '/apps/view-assignments/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/manageAssignments/screens/ViewAssignment'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  },
  {
    path: '/apps/managenotifucations/view',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/managenotifucations/screens/index'))
    // meta: {
    //   navLink: '/apps/manageclasses'
    // }
  }
  

]

export default AppRoutes
