import React from 'react';
import Main from '../pages/Main';
import Main2 from '../pages/Main2';
import AddWork from '../pages/AddWork'

// 동적 라우트 정보 배열
const routes = [
  { path: '/main', component: Main, exact: true },
  { path: '/main2', component: Main2 },
  { path: '/addWork', component: AddWork },
];

export default routes;