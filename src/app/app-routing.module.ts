import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Guest/signin',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'Guest/index',
    loadChildren: () => import('./Guest/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Guest/adminlogin',
    loadChildren: () => import('./Guest/adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'Guest/signin',
    loadChildren: () => import('./Guest/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'Guest/signup',
    loadChildren: () => import('./Guest/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'Admin/index',
    loadChildren: () => import('./Admin/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Admin/typeregistration',
    loadChildren: () => import('./Admin/typeregistration/typeregistration.module').then( m => m.TyperegistrationPageModule)
  },
  {
    path: 'Admin/typeview',
    loadChildren: () => import('./Admin/typeview/typeview.module').then( m => m.TypeviewPageModule)
  },
  {
    path: 'Admin/typeedit/:id',
    loadChildren: () => import('./Admin/typeedit/typeedit.module').then( m => m.TypeeditPageModule)
  },
  {
    path: 'Admin/panchayathregistration',
    loadChildren: () => import('./Admin/panchayathregistration/panchayathregistration.module').then( m => m.PanchayathregistrationPageModule)
  },
  {
    path: 'Admin/panchayathview',
    loadChildren: () => import('./Admin/panchayathview/panchayathview.module').then( m => m.PanchayathviewPageModule)
  },
  {
    path: 'Consumer/index',
    loadChildren: () => import('./Consumer/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'Consumer/detailsview',
    loadChildren: () => import('./Consumer/detailsview/detailsview.module').then( m => m.DetailsviewPageModule)
  },
  {
    path: 'Consumer/detailsedit',
    loadChildren: () => import('./Consumer/detailsedit/detailsedit.module').then( m => m.DetailseditPageModule)
  },
  {
    path: 'Consumer/connectionrequest/:id',
    loadChildren: () => import('./Consumer/connectionrequest/connectionrequest.module').then( m => m.ConnectionrequestPageModule)
  },
  {
    path: 'Admin/requestview',
    loadChildren: () => import('./Admin/requestview/requestview.module').then( m => m.RequestviewPageModule)
  },
  {
    path: 'Admin/requestviewmore/:id',
    loadChildren: () => import('./Admin/requestviewmore/requestviewmore.module').then( m => m.RequestviewmorePageModule)
  },
  {
    path: 'Consumer/myconnections',
    loadChildren: () => import('./Consumer/myconnections/myconnections.module').then( m => m.MyconnectionsPageModule)
  },
  {
    path: 'Consumer/rejectedconnection',
    loadChildren: () => import('./Consumer/rejectedconnection/rejectedconnection.module').then( m => m.RejectedconnectionPageModule)
  },
  {
    path: 'Consumer/pendingconnection',
    loadChildren: () => import('./Consumer/pendingconnection/pendingconnection.module').then( m => m.PendingconnectionPageModule)
  },
  {
    path: 'Admin/monthlyreading',
    loadChildren: () => import('./Admin/monthlyreading/monthlyreading.module').then( m => m.MonthlyreadingPageModule)
  },
  {
    path: 'Consumer/monthlyreadingview',
    loadChildren: () => import('./Consumer/monthlyreadingview/monthlyreadingview.module').then( m => m.MonthlyreadingviewPageModule)
  },
  {
    path: 'Consumer/payment/:id',
    loadChildren: () => import('./Consumer/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'Consumer/viewbill/:id',
    loadChildren: () => import('./Consumer/viewbill/viewbill.module').then( m => m.ViewbillPageModule)
  },
  {
    path: 'Admin/paymentview',
    loadChildren: () => import('./Admin/paymentview/paymentview.module').then( m => m.PaymentviewPageModule)
  },
  {
    path: 'Admin/report',
    loadChildren: () => import('./Admin/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'Admin/panchayathwise',
    loadChildren: () => import('./Admin/panchayathwise/panchayathwise.module').then( m => m.PanchayathwisePageModule)
  },
  {
    path: 'Admin/pendingpayments',
    loadChildren: () => import('./Admin/pendingpayments/pendingpayments.module').then( m => m.PendingpaymentsPageModule)
  },
  {
    path: 'Admin/searchconsumer',
    loadChildren: () => import('./Admin/searchconsumer/searchconsumer.module').then( m => m.SearchconsumerPageModule)
  },
  {
    path: 'Admin/searchbill',
    loadChildren: () => import('./Admin/searchbill/searchbill.module').then( m => m.SearchbillPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
