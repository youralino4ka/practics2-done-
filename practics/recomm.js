// получаем ссылки на элементы формы
const genreSelect = document.getElementById('genre');
const moodSelect = document.getElementById('mood');
const lengthSelect = document.getElementById('lenght');
const dramaSelect = document.getElementById('drama');
const fanSelect = document.getElementById('fan');
const submitButton = document.querySelector('.recommented button[type="submit"]');
const resultContainer = document.getElementById('result-container');
const animeRecommendation = document.getElementById('anime-recommendation');

// массив с данными о аниме
const animeList = [
  {
    title: 'Твоя апрельская ложь',
    genre: 'drama',
    mood: 'happy',
    length: 'medium',
    drama: 'big',
    fan: 'yes'
  },
  {
    title: 'Атака титанов',
    genre: 'action',
    mood: 'excited',
    length: 'long',
    drama: 'big',
    fan: 'no'
  },
  {
    title: 'Повседневная жизнь с девушкой-монстром',
    genre: 'comedy',
    mood: 'relaxed',
    length: 'short',
    drama: 'min',
    fan: 'yes'
  },
  {
    title: 'Евангелион',
    genre: 'drama',
    mood: 'sad',
    length: 'long',
    drama: 'big',
    fan: 'no'
  },
];

// функция для получения рекомендации
function getRecommendation() {
  const selectedGenre = genreSelect.value;
  const selectedMood = moodSelect.value;
  const selectedLength = lengthSelect.value;
  const selectedDrama = dramaSelect.value;
  const selectedFan = fanSelect.value;

  // находим подходящий аниме-сериал
  const matchingAnime = animeList.find(anime =>
    anime.genre === selectedGenre &&
    anime.mood === selectedMood &&
    anime.length === selectedLength &&
    anime.drama === selectedDrama &&
    anime.fan === selectedFan
  );

  // выводим рекомендацию
  if (matchingAnime) {
    animeRecommendation.textContent = matchingAnime.title;
    resultContainer.classList.remove('hidden');
  } else {
    animeRecommendation.textContent = 'Извините, мы не смогли найти подходящее аниме для вас.';
    resultContainer.classList.remove('hidden');
  }
}

// добавляем обработчик события на кнопку "Получить рекомендацию!"
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы
  getRecommendation();
});