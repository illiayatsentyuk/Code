class AbstractProduct {
  constructor(name, price, brand, activeSize, quantity, date, description, id) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.description = description;
    this.reviews = [];
    this.activeSize = activeSize;
    this.images = ['1', '2', '3', '4', '5', '6', '7'];
  }
  getFullInformation() {
    return this;
  }
  getImage = function (e) {
    if (!e) {
      return this.images[0];
    } else {
      return this.images[e];
    }
  };

  addReview = function (e) {
    this.reviews.push(e);
  };
  getReviewByID = function (id) {
    return this.reviews[id - 1];
  };

  getName = function () {
    return this.name;
  };

  deleteReview = function (id) {
    this.reviews.splice(id - 1, 1);
  };

  getAverageRating = function () {
    let totalServiceRating = 0;
    let totalPriceRating = 0;
    let totalValueRating = 0;
    let totalQualityRating = 0;

    this.reviews.forEach((review) => {
      totalServiceRating += review.rating.service || 0;
      totalPriceRating += review.rating.price || 0;
      totalValueRating += review.rating.value || 0;
      totalQualityRating += review.rating.quality || 0;
    });

    const totalReviews = this.reviews.length;
    return {
      service: totalServiceRating / totalReviews,
      price: totalPriceRating / totalReviews,
      value: totalValueRating / totalReviews,
      quality: totalQualityRating / totalReviews,
    };
  };
  getPriceForQuantity(n) {
    return n * this.price;
  }
}
class Clothes extends AbstractProduct {
  constructor(name, price, brand, activeSize, quantity, date, description, id, material, color) {
    super(name, price, brand, activeSize, quantity, date, description, id, material, color);
    this.material = material;
    this.color = color;
  }
  setMaterial(material) {
    this.material = material;
    return this.material;
  }
  getMaterial() {
    return this.material;
  }

  setColor(color) {
    return (this.color = color);
  }
  getColor() {
    return this.color;
  }
}
class Electronics extends AbstractProduct {
  constructor(name, price, brand, activeSize, quantity, date, description, id, warranty, power) {
    super(name, price, brand, activeSize, quantity, date, description, id, warranty, power);
    this.warranty = warranty;
    this.power = power;
  }
  setWarranty(warranty) {
    this.warranty = warranty;
    return this.warranty;
  }
  getWarranty() {
    return this.warranty;
  }

  setPower(power) {
    return (this.power = power);
  }
  getPower() {
    return this.power;
  }
}
const Product1 = new Clothes(
    'Iphone Xr',
    500,
    'Apple',
    'XL',
    10000,
    '1999-10-5 5:5:5',
    'Super phone',
    1
  );
const Product2 = new Clothes(
  'Iphone Xr',
  500,
  'Apple',
  'XL',
  10000,
  '1999-10-5 5:5:5',
  'Super phone',
  2
);
const Product3 = new Electronics(
  'Iphone Xr',
  500,
  'Apple',
  'XL',
  10000,
  '1999-10-5 5:5:5',
  'Super phone',
  3
);
Product2.setMaterial('qwe');
Product2.setColor('red');
Product3.setWarranty(2);
Product3.setPower(300);
Product2.addReview({
    id: '1',
    author: 'Illia',
    comment: "The best phone ever",
    date: "1999-10-5 5:5:5",
    rating: {
      service: 5,
      price: 3,
      value: 10,
      quality: 10,
    }
});

Product1.addReview({
    id: '2',
    author: 'Oleksiy',
    comment: "The best phone ever",
    date: "1999-10-5 5:5:5",
    rating: {
      service: 1,
      price: 3,
      value: 5,
      quality: 0,
    }
});
Product3.addReview({
    id: '2',
    author: 'Olasfasfeksiy',
    comment: "The basfasfest phone ever",
    date: "1999-10-5 5:5:5",
    rating: {
      service: 1,
      price: 3,
      value: 5,
      quality: 0,
    }
});
console.log(Product1.getFullInformation());
console.log(Product2.getFullInformation());
console.log(Product3.getFullInformation());