import angular from 'angular';
import template from './template.html';

class interfaceController {
    constructor() {
        console.log('interface_board')
    }
}

export default angular.module('sass.interfaceBoard', [])
    .component('interfaceBoard', {
        template: template,
        controller: interfaceController,
        controllerAs: 'interfaceCtrl'
    })
    .name;
