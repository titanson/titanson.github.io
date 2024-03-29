import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static get targets() {
        return ['content'];
    }

    toggleMobileView(e) {
        this.contentTarget.classList.toggle('last-news');
    }
}
