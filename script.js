// Data keranjang belanja
const keranjangBelanja = [];

// Fungsi untuk menambahkan produk ke keranjang belanja
function addToCart(productId) {
  const products = [
    { id: 1, nama: 'Beras', harga: 15000 },
    { id: 2, nama: 'Minyak Goreng', harga: 20000 },
    { id: 3, nama: 'Gula', harga: 12000 },
    { id: 4, nama: 'Tepung Terigu', harga: 6000 },
    { id: 5, nama: 'Garam', harga: 4000 },
    // Tambahkan produk lainnya sesuai kebutuhan
  ];

  const selectedProduct = products.find(product => product.id === productId);

  if (selectedProduct) {
    keranjangBelanja.push(selectedProduct);
    updateCart();
  }
}

// Fungsi untuk menampilkan produk pada keranjang belanja
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  let totalHarga = 0;

  keranjangBelanja.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.nama} - Rp. ${item.harga}`;
    cartItems.appendChild(listItem);

    totalHarga += item.harga;
  });

  document.getElementById('total').textContent = `Rp. ${totalHarga}`;
}

// Fungsi untuk menghapus produk dari keranjang belanja
function deleteProduct(productId) {
  const index = keranjangBelanja.findIndex(item => item.id === productId);
  if (index !== -1) {
    keranjangBelanja.splice(index, 1);
    updateCart(); // Perbarui keranjang setelah menghapus produk
  }
}

// Fungsi untuk melakukan checkout
function checkout() {
  alert('Checkout berhasil! Total belanja: Rp. ' + document.getElementById('total').textContent);
}

// Fungsi untuk melakukan edit item pada keranjang
function editCart() {
  alert('Edit keranjang belanja'); // Gantilah dengan logika edit yang sesuai
}
