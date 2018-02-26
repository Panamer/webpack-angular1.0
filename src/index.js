/**
 * Created on 2017/11/8.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appRouter from './config/app.router';
import components from './components';
let appComponent = {
    restrict: 'E',
    template: require('./app.html'),
    controller: function () {
        console.log('初始化')
    },
    controllerAs: 'app'
};
export default angular.module('sass', [uiRouter, components])
    .config(appRouter)
    .component('app', appComponent)
    .name;
