export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('interfaceBoard', {
            url: '/interfaceBoard',
            template: '<interface-board></interface-board>'
        });
}
routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
