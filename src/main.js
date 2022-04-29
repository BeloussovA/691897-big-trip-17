import FilterView from './view/filter-view.js';
import SortingView from './view/sorting-view.js';
import List from './view/events-list.js';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render.js';

const boardPresenter = new BoardPresenter();
const siteHeaderFilters = document.querySelector('.trip-controls__filters');
const siteSortPanel = document.querySelector('.trip-events');
//
// const siteEventsItems = document.querySelector('.trip-events__item');
// const siteWaypoint = document.querySelector('.trip-events__item');
const tripEventsList = new List();
render(new FilterView(), siteHeaderFilters);
render(new SortingView() , siteSortPanel);
render(tripEventsList, siteSortPanel);

boardPresenter.init(tripEventsList.getElement());
