"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map