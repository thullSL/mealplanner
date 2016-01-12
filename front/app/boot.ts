import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TodoService} from './todos/service/todo.service'
import {DayService} from './planner/service/day.service'
import {NumberService} from './numbers/service/number.service'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [TodoService, DayService, NumberService, ROUTER_PROVIDERS, HTTP_PROVIDERS]);