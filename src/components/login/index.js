/**
 * Created by Administrator on 2017/11/28.
 */
import angular from 'angular';
import template from './template.html';

class LoginController {
    constructor() {
        console.log('successlogin')
    }
}

export default angular.module('sass.login', [])
    .component('login', {
        template: template,
        controller: LoginController,
        controllerAs: 'loginCtrl'
    })
    .name;
