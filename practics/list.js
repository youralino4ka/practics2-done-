window.addEventListener('scroll', () => {
  // установка CSS переменной, равной отношению прокрученной высоты к разнице между общей высотой содержимого и высотой окна 
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  
  // получение элементов с классами .elevator, .elevatorL и .elevatorR
  const elevator = document.querySelector('.elevator');
  const elevatorL = document.querySelector('.elevatorL');
  const elevatorR = document.querySelector('.elevatorR');
  
  // создание наблюдателя за пересечением элементов с viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // если элемент пересекается с viewport
      if (entry.isIntersecting) {
        // добавление классов для анимации
        elevator.classList.add('elevator-transition');
              elevatorL.classList.add('elevatorL-transition');
        elevatorR.classList.add('elevatorR-transition');
        return;
      }
      // удаление классов анимации, если элемент не пересекается с viewport
      elevator.classList.remove('elevator-transition');
      elevatorL.classList.remove('elevatorL-transition');
      elevatorR.classList.remove('elevatorR-transition');
  
    });
  });
  
  // наблюдение за элементами с классами .elevator, .elevatorL и .elevatorR
  observer.observe(document.querySelector('.elevator'));
  observer.observe(document.querySelector('.elevatorL'));
  observer.observe(document.querySelector('.elevatorR'));


// функция для переключения темы оформления
  function switchTheme(theme) {
    // установка класса для body и сохранение темы в localStorage
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}
// функция при загрузке окна
window.onload = function() {
  // получение темы из localStorage
    var savedTheme = localStorage.getItem('theme');
    // приеняем тему, если она было сохранена
    if (savedTheme) {
        switchTheme(savedTheme);
    }
};
