function normalizeProductId(productId) {
  return String(productId);
}

export function normalizeProductForFavorite(product) {
  return {
    _id: normalizeProductId(product._id),
    name: product.name,
    description: product.description || "",
    price: product.price,
    stock: product.stock,
    image: product.image || "",
    categories: (product.categories || []).map((category) =>
      typeof category === "string"
        ? category
        : { _id: category._id, name: category.name }
    ),
  };
}

export function addFavorite(favorites, product) {
  const normalizedProduct = normalizeProductForFavorite(product);

  if (isFavorite(favorites, normalizedProduct._id)) {
    return favorites;
  }

  return [...favorites, normalizedProduct];
}

export function removeFavorite(favorites, productId) {
  const id = normalizeProductId(productId);

  return favorites.filter(
    (item) => normalizeProductId(item._id) !== id
  );
}

export function isFavorite(favorites, productId) {
  const id = normalizeProductId(productId);

  return favorites.some(
    (item) => normalizeProductId(item._id) === id
  );
}

export function getFavoritesCount(favorites) {
  return favorites.length;
}
