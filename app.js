// Application data
const appData = {
  "dogs": [
    {
      "id": 1,
      "name": "Барсик",
      "breed": "Лабрадор",
      "age": "3 года",
      "color": "Золотистый",
      "description": "Очень дружелюбный и игривый пес. Любит детей и других собак.",
      "lastPampered": "2025-07-12",
      "currentSubscription": "Премиум",
      "avatar": "🐕",
      "videoStatus": "online",
      "needsAttention": false
    },
    {
      "id": 2,
      "name": "Мурка",
      "breed": "Овчарка",
      "age": "5 лет",
      "color": "Черно-рыжий",
      "description": "Умная и преданная собака. Отлично обучаема.",
      "lastPampered": "2025-07-11",
      "currentSubscription": "Базовый",
      "avatar": "🐕‍🦺",
      "videoStatus": "online",
      "needsAttention": true
    },
    {
      "id": 3,
      "name": "Рекс",
      "breed": "Хаски",
      "age": "2 года",
      "color": "Серо-белый",
      "description": "Энергичный и активный пес. Любит долгие прогулки.",
      "lastPampered": "2025-07-13",
      "currentSubscription": "VIP",
      "avatar": "🐺",
      "videoStatus": "offline",
      "needsAttention": false
    },
    {
      "id": 4,
      "name": "Белка",
      "breed": "Спаниель",
      "age": "4 года",
      "color": "Коричневый",
      "description": "Спокойная и ласковая собака. Идеальна для семей.",
      "lastPampered": "2025-07-11",
      "currentSubscription": "Премиум",
      "avatar": "🐕",
      "videoStatus": "online",
      "needsAttention": true
    },
    {
      "id": 5,
      "name": "Граф",
      "breed": "Доберман",
      "age": "6 лет",
      "color": "Черный",
      "description": "Благородный и умный пес. Отличный охранник.",
      "lastPampered": "2025-07-10",
      "currentSubscription": "Базовый",
      "avatar": "🐕‍🦺",
      "videoStatus": "online",
      "needsAttention": true
    },
    {
      "id": 6,
      "name": "Дружок",
      "breed": "Метис",
      "age": "1 год",
      "color": "Рыжий",
      "description": "Молодой и игривый щенок. Быстро привязывается к людям.",
      "lastPampered": "2025-07-12",
      "currentSubscription": "Премиум",
      "avatar": "🐶",
      "videoStatus": "online",
      "needsAttention": false
    }
  ],
  "services": [
    {
      "id": 1,
      "name": "Покормить",
      "icon": "🍽️",
      "description": "Активирует умную кормушку для кормления",
      "duration": "5 минут",
      "cost": 50
    },
    {
      "id": 2,
      "name": "Налить воды",
      "icon": "💧",
      "description": "Заполняет автоматическую поилку свежей водой",
      "duration": "2 минуты",
      "cost": 30
    },
    {
      "id": 3,
      "name": "Вводные процедуры",
      "icon": "🧼",
      "description": "Гигиенические процедуры и уход",
      "duration": "15 минут",
      "cost": 200
    },
    {
      "id": 4,
      "name": "Сводить на прогулку",
      "icon": "🚶",
      "description": "Прогулка с собакой на свежем воздухе",
      "duration": "30 минут",
      "cost": 300
    },
    {
      "id": 5,
      "name": "Сводить к ветеринару",
      "icon": "🏥",
      "description": "Консультация и осмотр ветеринара",
      "duration": "45 минут",
      "cost": 800
    },
    {
      "id": 6,
      "name": "Сводить к парикмахеру",
      "icon": "✂️",
      "description": "Груминг и стрижка шерсти",
      "duration": "60 минут",
      "cost": 1200
    },
    {
      "id": 7,
      "name": "Пройти курсы с кинологом",
      "icon": "🎓",
      "description": "Обучение и социализация",
      "duration": "45 минут",
      "cost": 1000
    },
    {
      "id": 8,
      "name": "Помыть",
      "icon": "🛁",
      "description": "Купание и гигиенические процедуры",
      "duration": "30 минут",
      "cost": 400
    },
    {
      "id": 9,
      "name": "Игры с мячом",
      "icon": "⚽",
      "description": "Активные игры и развлечения",
      "duration": "20 минут",
      "cost": 250
    },
    {
      "id": 10,
      "name": "Сводить к дрессировщику",
      "icon": "🏃",
      "description": "Тренировки и выучивание команд",
      "duration": "45 минут",
      "cost": 900
    },
    {
      "id": 11,
      "name": "Посмотреть кино",
      "icon": "🎬",
      "description": "Совместный просмотр фильмов",
      "duration": "60 минут",
      "cost": 350
    },
    {
      "id": 12,
      "name": "Поговорить с питомцем",
      "icon": "💬",
      "description": "Двусторонняя аудиосвязь",
      "duration": "10 минут",
      "cost": 100
    }
  ],
  "subscriptions": [
    {
      "name": "Базовый",
      "price": 3000,
      "duration": "1 месяц",
      "features": [
        "Видеонаблюдение 24/7",
        "Кормление 2 раза в день",
        "Ежедневные отчеты",
        "Базовый уход"
      ],
      "color": "#4CAF50"
    },
    {
      "name": "Премиум",
      "price": 8000,
      "duration": "1 месяц",
      "features": [
        "Все функции Базового",
        "Прогулки 2 раза в день",
        "Ветеринарные осмотры",
        "Груминг 1 раз в неделю",
        "Игры и развлечения"
      ],
      "color": "#2196F3"
    },
    {
      "name": "VIP",
      "price": 15000,
      "duration": "1 месяц",
      "features": [
        "Все функции Премиум",
        "Индивидуальный куратор",
        "Занятия с кинологом",
        "Приоритетная поддержка",
        "Все дополнительные услуги"
      ],
      "color": "#FF9800"
    }
  ],
  "jobs": [
    {
      "id": 1,
      "title": "Куратор собак",
      "salary": "45000-60000 руб.",
      "schedule": "Полный день",
      "requirements": "Опыт работы с животными, ответственность"
    },
    {
      "id": 2,
      "title": "Ветеринар",
      "salary": "70000-90000 руб.",
      "schedule": "Сменный график",
      "requirements": "Ветеринарное образование, опыт работы"
    },
    {
      "id": 3,
      "title": "Грумер",
      "salary": "50000-70000 руб.",
      "schedule": "Гибкий график",
      "requirements": "Опыт груминга, сертификаты"
    },
    {
      "id": 4,
      "title": "Кинолог",
      "salary": "55000-75000 руб.",
      "schedule": "Частичная занятость",
      "requirements": "Образование кинолога, опыт дрессировки"
    },
    {
      "id": 5,
      "title": "Волонтер",
      "salary": "Добровольно",
      "schedule": "Свободный график",
      "requirements": "Любовь к животным, желание помогать"
    }
  ],
  "staff": [
    {
      "id": 1,
      "name": "Анна Петрова",
      "role": "Куратор",
      "rating": 4.8,
      "avatar": "👩‍⚕️",
      "experience": "3 года"
    },
    {
      "id": 2,
      "name": "Иван Сидоров",
      "role": "Ветеринар",
      "rating": 4.9,
      "avatar": "👨‍⚕️",
      "experience": "8 лет"
    },
    {
      "id": 3,
      "name": "Мария Козлова",
      "role": "Грумер",
      "rating": 4.7,
      "avatar": "👩‍🎨",
      "experience": "5 лет"
    }
  ]
};

// App state
let currentSection = 'home';
let currentDog = null;
let currentService = null;
let currentFilter = 'all';
let serviceHistory = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  console.log('Doge of House app initializing...');
  initializeNavigation();
  renderDogs();
  renderSubscriptions();
  renderJobs();
  renderStaff();
  initializeModals();
  initializeDonations();
  initializeFilters();
  console.log('App initialized successfully');
});

// Navigation
function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = this.dataset.section;
      switchSection(targetSection);
    });
  });

  const heroButtons = document.querySelectorAll('.hero__buttons .btn');
  heroButtons.forEach(button => {
    if (button.dataset.section) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        switchSection(this.dataset.section);
      });
    }
  });

  // Profile subscription buttons
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-dog-id]')) {
      const dogId = parseInt(e.target.dataset.dogId);
      showDogProfile(dogId);
    }
  });
}

function switchSection(targetSection) {
  console.log('Switching to section:', targetSection);
  
  // Update nav buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.querySelector(`[data-section="${targetSection}"]`);
  if (activeBtn && activeBtn.classList.contains('nav-btn')) {
    activeBtn.classList.add('active');
  }
  
  // Update sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  
  const targetSectionEl = document.getElementById(targetSection);
  if (targetSectionEl) {
    targetSectionEl.classList.add('active');
  }
  
  currentSection = targetSection;
}

// Filters
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      currentFilter = this.dataset.filter;
      renderDogs();
    });
  });
}

function getFilteredDogs() {
  const today = new Date().toISOString().split('T')[0];
  
  switch(currentFilter) {
    case 'needs-attention':
      return appData.dogs.filter(dog => dog.needsAttention || dog.lastPampered < today);
    case 'available':
      return appData.dogs.filter(dog => !dog.needsAttention);
    default:
      return appData.dogs;
  }
}

// Render dogs
function renderDogs() {
  const dogsGrid = document.getElementById('dogsGrid');
  if (!dogsGrid) return;
  
  const dogs = getFilteredDogs();
  dogsGrid.innerHTML = '';
  
  dogs.forEach(dog => {
    const dogCard = createDogCard(dog);
    dogsGrid.appendChild(dogCard);
  });
}

function createDogCard(dog) {
  const today = new Date().toISOString().split('T')[0];
  const needsAttention = dog.needsAttention || dog.lastPampered < today;
  
  const card = document.createElement('div');
  card.className = `dog-card ${needsAttention ? 'dog-card--needs-attention' : ''}`;
  
  card.innerHTML = `
    <div class="dog-card__avatar">${dog.avatar}</div>
    <div class="dog-card__content">
      <div class="dog-card__header">
        <div class="dog-card__info">
          <h3>${dog.name}</h3>
          <p>${dog.breed}, ${dog.age}</p>
        </div>
        <span class="status ${dog.videoStatus === 'online' ? 'status--success' : 'status--error'}">
          ${dog.videoStatus === 'online' ? 'Онлайн' : 'Оффлайн'}
        </span>
      </div>
      
      <div class="dog-card__meta">
        <p><strong>Цвет:</strong> ${dog.color}</p>
        <p><strong>Абонемент:</strong> ${dog.currentSubscription}</p>
        <p><strong>Последний раз баловали:</strong> ${formatDate(dog.lastPampered)}</p>
      </div>
      
      <div class="dog-card__description">
        ${dog.description}
      </div>
      
      ${needsAttention ? '<button class="pamper-button">Меня еще не баловали сегодня!</button>' : ''}
      
      <div class="dog-card__actions">
        <button class="btn btn--primary btn--sm" data-action="watch" data-dog-id="${dog.id}">
          📹 Смотреть
        </button>
        <button class="btn btn--secondary btn--sm" data-action="select" data-dog-id="${dog.id}">
          ❤️ Выбрать
        </button>
      </div>
    </div>
  `;
  
  // Add event listeners
  card.addEventListener('click', function(e) {
    if (e.target.matches('[data-action="watch"]') || e.target.matches('[data-action="select"]')) {
      const dogId = parseInt(e.target.dataset.dogId);
      showDogProfile(dogId);
    }
  });
  
  return card;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Сегодня';
  if (diffDays === 1) return 'Вчера';
  if (diffDays < 7) return `${diffDays} дня назад`;
  return date.toLocaleDateString('ru-RU');
}

// Dog profile
function showDogProfile(dogId) {
  const dog = appData.dogs.find(d => d.id === dogId);
  if (!dog) return;
  
  currentDog = dog;
  
  const dogProfileContent = document.getElementById('dogProfileContent');
  if (!dogProfileContent) return;
  
  dogProfileContent.innerHTML = `
    <div class="dog-profile__header">
      <div class="dog-profile__info">
        <div class="dog-profile__avatar">${dog.avatar}</div>
        <h2 class="dog-profile__name">${dog.name}</h2>
        <div class="dog-profile__details">
          <p><strong>Порода:</strong> ${dog.breed}</p>
          <p><strong>Возраст:</strong> ${dog.age}</p>
          <p><strong>Цвет:</strong> ${dog.color}</p>
          <p><strong>Абонемент:</strong> ${dog.currentSubscription}</p>
        </div>
        <p>${dog.description}</p>
      </div>
      
      <div class="dog-profile__video">
        <div class="video-container">
          <div class="video-placeholder">
            📹 Видеотрансляция ${dog.name}
          </div>
          <div class="video-status ${dog.videoStatus === 'online' ? '' : 'offline'}">
            ${dog.videoStatus === 'online' ? 'В эфире' : 'Оффлайн'}
          </div>
        </div>
      </div>
    </div>
    
    <div class="dog-profile__services">
      ${appData.services.map(service => `
        <div class="service-card" data-service-id="${service.id}">
          <div class="service-card__icon">${service.icon}</div>
          <div class="service-card__name">${service.name}</div>
          <div class="service-card__description">${service.description}</div>
          <div class="service-card__cost">${service.cost}₽</div>
          <div class="service-card__duration">${service.duration}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Add service card listeners
  const serviceCards = dogProfileContent.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const serviceId = parseInt(this.dataset.serviceId);
      showServiceModal(serviceId);
    });
  });
  
  switchSection('dogProfile');
}

// Service modal
function showServiceModal(serviceId) {
  const service = appData.services.find(s => s.id === serviceId);
  if (!service || !currentDog) return;
  
  currentService = service;
  
  const serviceDetails = document.getElementById('serviceDetails');
  if (!serviceDetails) return;
  
  serviceDetails.innerHTML = `
    <div class="service-details__icon">${service.icon}</div>
    <div class="service-details__name">${service.name}</div>
    <div class="service-details__description">${service.description}</div>
    <div class="service-details__cost">${service.cost}₽</div>
    <div class="service-details__duration">Длительность: ${service.duration}</div>
  `;
  
  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    serviceModal.classList.add('active');
  }
}

function confirmService() {
  if (!currentService || !currentDog) return;
  
  closeServiceModal();
  
  // Show progress modal
  const progressModal = document.getElementById('progressModal');
  const progressInfo = document.getElementById('progressInfo');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  if (progressModal && progressInfo && progressFill && progressText) {
    progressInfo.innerHTML = `
      <div class="service-details__icon">${currentService.icon}</div>
      <div class="service-details__name">${currentService.name}</div>
      <p>Выполняется для ${currentDog.name}</p>
    `;
    
    progressModal.classList.add('active');
    
    // Simulate service progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressFill.style.width = progress + '%';
      
      if (progress <= 30) {
        progressText.textContent = 'Подготовка...';
      } else if (progress <= 60) {
        progressText.textContent = 'Выполнение...';
      } else if (progress <= 90) {
        progressText.textContent = 'Завершение...';
      } else {
        progressText.textContent = 'Готово!';
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          progressModal.classList.remove('active');
          showServiceSuccess();
        }, 1000);
      }
    }, 200);
  }
}

function showServiceSuccess() {
  if (!currentService || !currentDog) return;
  
  // Add to service history
  serviceHistory.push({
    service: currentService.name,
    dog: currentDog.name,
    cost: currentService.cost,
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
  });
  
  // Update dog's last pampered if needed
  if (currentService.id === 1) { // Feeding
    currentDog.lastPampered = new Date().toISOString().split('T')[0];
    currentDog.needsAttention = false;
  }
  
  const successMessage = document.getElementById('successMessage');
  const ratingSection = document.getElementById('ratingSection');
  
  if (successMessage) {
    successMessage.textContent = `Услуга "${currentService.name}" успешно выполнена для ${currentDog.name}!`;
  }
  
  if (ratingSection) {
    ratingSection.style.display = 'block';
  }
  
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.add('active');
  }
  
  // Re-render dogs to update display
  renderDogs();
}

function closeServiceModal() {
  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    serviceModal.classList.remove('active');
  }
}

// Subscriptions
function renderSubscriptions() {
  const subscriptionsGrid = document.getElementById('subscriptionsGrid');
  if (!subscriptionsGrid) return;
  
  subscriptionsGrid.innerHTML = '';
  
  appData.subscriptions.forEach((subscription, index) => {
    const subscriptionCard = createSubscriptionCard(subscription, index === 1);
    subscriptionsGrid.appendChild(subscriptionCard);
  });
}

function createSubscriptionCard(subscription, isPopular = false) {
  const card = document.createElement('div');
  card.className = `subscription-card ${isPopular ? 'subscription-card--popular' : ''}`;
  
  const featuresHTML = subscription.features.map(feature => `<li>${feature}</li>`).join('');
  
  card.innerHTML = `
    <h3 class="subscription-card__name">${subscription.name}</h3>
    <div class="subscription-card__price">${subscription.price.toLocaleString()}₽</div>
    <div class="subscription-card__duration">${subscription.duration}</div>
    <ul class="subscription-card__features">
      ${featuresHTML}
    </ul>
    <button class="btn btn--primary btn--full-width">
      Выбрать план
    </button>
  `;
  
  const subscribeBtn = card.querySelector('.btn');
  subscribeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSuccess(`Абонемент "${subscription.name}" активирован! Выберите собаку для начала ухода.`);
    switchSection('dogs');
  });
  
  return card;
}

// Jobs
function renderJobs() {
  const jobsGrid = document.getElementById('jobsGrid');
  if (!jobsGrid) return;
  
  jobsGrid.innerHTML = '';
  
  appData.jobs.forEach(job => {
    const jobCard = createJobCard(job);
    jobsGrid.appendChild(jobCard);
  });
}

function createJobCard(job) {
  const card = document.createElement('div');
  card.className = 'job-card';
  
  card.innerHTML = `
    <h3 class="job-card__title">${job.title}</h3>
    <div class="job-card__salary">${job.salary}</div>
    <div class="job-card__schedule">${job.schedule}</div>
    <div class="job-card__requirements">${job.requirements}</div>
    <button class="btn btn--primary btn--full-width">
      Откликнуться
    </button>
  `;
  
  const applyBtn = card.querySelector('.btn');
  applyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSuccess(`Ваша заявка на вакансию "${job.title}" отправлена! Мы свяжемся с вами в ближайшее время.`);
  });
  
  return card;
}

// Staff
function renderStaff() {
  const staffGrid = document.getElementById('staffGrid');
  if (!staffGrid) return;
  
  staffGrid.innerHTML = '';
  
  appData.staff.forEach(staff => {
    const staffCard = createStaffCard(staff);
    staffGrid.appendChild(staffCard);
  });
}

function createStaffCard(staff) {
  const card = document.createElement('div');
  card.className = 'staff-card';
  
  const stars = '⭐'.repeat(Math.floor(staff.rating));
  
  card.innerHTML = `
    <div class="staff-card__avatar">${staff.avatar}</div>
    <div class="staff-card__name">${staff.name}</div>
    <div class="staff-card__role">${staff.role}</div>
    <div class="staff-card__rating">
      <span>${stars}</span>
      <span>${staff.rating}</span>
    </div>
    <div class="staff-card__experience">${staff.experience}</div>
  `;
  
  return card;
}

// Donations
function initializeDonations() {
  const donationButtons = document.querySelectorAll('.donation-buttons .btn');
  donationButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const amount = this.dataset.amount;
      makeDonation(amount);
    });
  });
  
  const donateCustomBtn = document.getElementById('donateCustom');
  if (donateCustomBtn) {
    donateCustomBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const customAmountInput = document.getElementById('customAmount');
      const amount = customAmountInput ? customAmountInput.value : '';
      
      if (amount && amount > 0) {
        makeDonation(amount);
        if (customAmountInput) {
          customAmountInput.value = '';
        }
      } else {
        showSuccess('Пожалуйста, введите корректную сумму');
      }
    });
  }
}

function makeDonation(amount) {
  showSuccess(`Спасибо за пожертвование ${amount}₽! Ваша поддержка очень важна для наших питомцев. ❤️`);
}

// Modals
function initializeModals() {
  // Service modal
  const confirmServiceBtn = document.getElementById('confirmService');
  const cancelServiceBtn = document.getElementById('cancelService');
  const closeServiceModalBtn = document.getElementById('closeServiceModal');
  
  if (confirmServiceBtn) {
    confirmServiceBtn.addEventListener('click', confirmService);
  }
  
  if (cancelServiceBtn) {
    cancelServiceBtn.addEventListener('click', closeServiceModal);
  }
  
  if (closeServiceModalBtn) {
    closeServiceModalBtn.addEventListener('click', closeServiceModal);
  }
  
  // Success modal
  const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  
  if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener('click', closeSuccessModal);
  }
  
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', closeSuccessModal);
  }
  
  // Rating system
  const ratingStars = document.querySelectorAll('.star-btn');
  ratingStars.forEach((star, index) => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.dataset.rating);
      
      // Update star display
      ratingStars.forEach((s, i) => {
        s.classList.toggle('active', i < rating);
      });
      
      console.log('Rating given:', rating);
    });
  });
  
  // Close modals on backdrop click
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Close modals on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModals = document.querySelectorAll('.modal.active');
      activeModals.forEach(modal => modal.classList.remove('active'));
    }
  });
}

function showSuccess(message) {
  const successModal = document.getElementById('successModal');
  const successMessage = document.getElementById('successMessage');
  const ratingSection = document.getElementById('ratingSection');
  
  if (successMessage) {
    successMessage.textContent = message;
  }
  
  if (ratingSection) {
    ratingSection.style.display = 'none';
  }
  
  if (successModal) {
    successModal.classList.add('active');
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.remove('active');
  }
  
  // Reset rating
  const ratingStars = document.querySelectorAll('.star-btn');
  ratingStars.forEach(star => star.classList.remove('active'));
  
  const ratingComment = document.getElementById('ratingComment');
  if (ratingComment) {
    ratingComment.value = '';
  }
}

// Utility functions
function updateServiceHistory() {
  // This would update the service history in the profile section
  // For now, it's just a placeholder
}

// Simulate live updates
function simulateLiveUpdates() {
  setInterval(() => {
    // Randomly update some dog statuses
    const randomDog = appData.dogs[Math.floor(Math.random() * appData.dogs.length)];
    
    // Sometimes toggle video status
    if (Math.random() < 0.1) {
      randomDog.videoStatus = randomDog.videoStatus === 'online' ? 'offline' : 'online';
    }
    
    // Sometimes update needs attention
    if (Math.random() < 0.05) {
      randomDog.needsAttention = !randomDog.needsAttention;
    }
    
    // Only re-render if we're on the dogs section
    if (currentSection === 'dogs') {
      renderDogs();
    } else if (currentSection === 'dogProfile' && currentDog) {
      showDogProfile(currentDog.id);
    }
  }, 10000); // Update every 10 seconds
}

// Start live updates after initialization
setTimeout(simulateLiveUpdates, 2000);