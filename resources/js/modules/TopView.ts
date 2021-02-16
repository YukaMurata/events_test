import {EventEmitter} from 'events';

export default class TopView extends EventEmitter{
  $button:HTMLElement|null;

  constructor(){
    super();
    this.$button = document.querySelector('.js-button');
    this.bind();
  }

  bind(){
    if(this.$button){
      this.$button.addEventListener('click', () => {
        this.emit('click');
      });
    }
  }
}
