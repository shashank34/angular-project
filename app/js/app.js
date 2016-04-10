/**
 * Created by Shashank on 09-04-2016.
 */
if (typeof $ === 'undefined') {
    throw new Error('This application\'s JavaScript requires jQuery');
}
 // App Start

var app = angular.module('angle',['ngRoute', 'ngAnimate', 'ngStorage', 'ngCookies', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'ngSanitize', 'ngResource', 'ui.utils'])
                        .run(["$rootScope", "$state", "$stateParams", '$window', '$templateCache', function ($rootScope, $state, $stateParams, $window, $templateCache) {
// Set reference to access them from any scope

                            $rootScope.$state = $state;
                            $rootScope.$stateParams = $stateParams;
                            $rootScope.$storage = $window.localStorage;
                            console.log("log from angle app");
                            // Scope Globals
                            // -----------------------------------
                            $rootScope.app = {
                                name: ' Dashboard',
                                description: 'Base Template',
                                year: ((new Date()).getFullYear()),
                                layout: {
                                    isFixed: true,
                                    isCollapsed: false,
                                    isBoxed: false,
                                    isRTL: false,
                                    horizontal: false,
                                    isFloat: false,
                                    asideHover: false
                                },
                                useFullLayout: false,
                                hiddenFooter: false,
                                viewAnimation: 'ng-fadeInUp'
                            };
                            $rootScope.user = {
                                name: 'John',
                                job: 'ng-Dev',
                                picture: 'app/img/user/02.jpg'
                            };
                        }]);
