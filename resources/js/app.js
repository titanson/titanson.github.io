import * as Turbo from '@hotwired/turbo';

import {Application}            from '@hotwired/stimulus';
import {definitionsFromContext} from '@hotwired/stimulus-webpack-helpers';

const application = window.application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));


window.Turbo = Turbo;
