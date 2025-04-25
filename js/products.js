/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];
const container = document.querySelector('.products');
let instance;

function productTemplate(product) {
  return `<li class="item" data-id ="${product.id}">
        <img src="${product.img} " alt="${product.name}" />
        <h3>${product.name}</h3>
      </li>`;
}

function productsTemplate(products) {
  return products.map(productTemplate).join('\n');
}

function renderProducts() {
  const markup = productsTemplate(products);
  container.innerHTML = markup;
}

renderProducts();

function openModal(product) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${product.img} " alt="${product.name}" />
        <h3>${product.name}</h3>
        <h4>Price: ${product.price}$</h4>
        <p>${product.description}</p>
      </div>
`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', handleCloseModal);
      },

      onClose: (instance) => {
        window.removeEventListener('keydown', handleCloseModal);
      },
    }
  );

  instance.show();
}

function closeModal() {
  instance.close();
}

function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
container.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) return;

  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;
  const product = products.find((el) => el.id == id);

  openModal(product);
});
