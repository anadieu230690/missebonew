// Données des produits (mock data)
const products = {
  'chemise1': {
    id: 'chemise1',
    name: 'Chemise traditionnelle',
    price: 8500,
    oldPrice: 10000,
    description: 'Magnifique chemise traditionnelle en tissu de qualité, fabriquée à la main. Parfaite pour les cérémonies et événements spéciaux. Taille unique (convient du S au L).',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    seller: 'Koffi',
    location: 'Allée 2, près de la boutique rouge',
    category: 'vetements',
    condition: 'neuf',
    trending: true
  },
  'robe1': {
    id: 'robe1',
    name: 'Robe traditionnelle',
    price: 6500,
    oldPrice: 8000,
    description: 'Belle robe traditionnelle en wax, disponible en plusieurs couleurs. Taille unique (convient du S au L).',
    image: 'https://images.unsplash.com/photo-1592226440509-5d069433b1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    seller: 'Awa',
    location: 'Allée 3, près du kiosque bleu',
    category: 'vetements',
    condition: 'neuf',
    trending: true
  },
  'pantalon1': {
    id: 'pantalon1',
    name: 'Pantalon traditionnel',
    price: 12000,
    oldPrice: 15000,
    description: 'Pantalon traditionnel en tissu de qualité, fabriqué à la main. Parfait pour compléter votre tenue traditionnelle.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    seller: 'Koffi',
    location: 'Allée 2, près de la boutique rouge',
    category: 'vetements',
    condition: 'neuf',
    trending: true
  },
  'sandales1': {
    id: 'sandales1',
    name: 'Sandales en cuir',
    price: 5000,
    description: 'Sandales en cuir véritable, taille 42, parfait état.',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce1d3e826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
    seller: 'Baba',
    location: 'Allée 5, près de l\'entrée',
    category: 'chaussures',
    condition: 'frippe',
    trending: true
  }
  // Ajoutez plus de produits ici
};

// Vérifier si l'utilisateur est connecté
function checkUserStatus() {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return null;
}

// Fonctions utilitaires
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function capitalizeFirstLetter(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Gestion de l'utilisateur courant
let currentUser = checkUserStatus();

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Mettre à jour l'interface selon l'état de connexion
  if (currentUser) {
    updateUIForLoggedInUser();
  }
  
  // Initialiser les événements
  setupEventListeners();
});

function updateUIForLoggedInUser() {
  // Mettre à jour les icônes
  const profileIcon = document.querySelector('.header-icons .icon-button:first-child i');
  if (profileIcon) {
    profileIcon.style.color = 'var(--secondary)';
  }
}

function setupEventListeners() {
  // Boutons de navigation commune
  const sellButtons = document.querySelectorAll('.sell-button');
  sellButtons.forEach(button => {
    button.addEventListener('click', showSellerChoice);
  });
  
  // Boutons de retour
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach(button => {
    button.addEventListener('click', goBack);
  });
}

function goBack() {
  window.history.back();
}

function showSellerChoice() {
  window.location.href = 'seller-choice.html';
}