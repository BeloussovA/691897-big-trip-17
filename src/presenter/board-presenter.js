import NewFormView from '../view/creation-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import WaypointView from '../view/waypoint-listed-view.js';
import {render} from '../render.js';

export default class BoardPresenter {

  init = (boardContainer) => {
    render(new EditFormView(), boardContainer);
    render(new NewFormView(), boardContainer);
    render(new WaypointView(), boardContainer);
    render(new WaypointView(), boardContainer);
    render(new WaypointView(), boardContainer);
  };
}
