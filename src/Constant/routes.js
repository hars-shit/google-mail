import { lazy } from "react";


const Mail=lazy(()=>import('../pages/Main'));
const Emails=lazy(() => import('../Components/Emails'));
const ViewEmail=lazy(()=>import('../Components/ViewEmail'))
const routes={
    main:{
        path:'/',
        element:Mail
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    invalid:{
        path:'/*',
        element:Emails

    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}
export {routes};
