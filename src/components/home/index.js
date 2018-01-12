import angular from 'angular';
import template from './template.html';

class HomeController {
    constructor() {
        console.log('successhome')
    }
}

export default angular.module('sass.home', [])
    .component('home', {
        template: template,
        controller: HomeController,
        controllerAs: 'homeCtrl'
    })
    .name;
