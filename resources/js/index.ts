import TopView from './modules/TopView';

const topView = new TopView();

topView.on('click', () => {
  const $result:HTMLElement|null = document.querySelector('.js-result');
  if($result) $result.style.display = 'block';
});
