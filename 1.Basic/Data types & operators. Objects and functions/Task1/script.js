function Product(name, price, brand, activeSize, quantity, date, description) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.description = description;
    this.reviews = [];
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.images = ['1', '2', '3', '4', '5', '6', '7'];
    
    this.getImage = function(e){
        if(e==null){
            return this.images[0];
        }else{
            return this.images[e];
        }
    }

    this.addReview = function (e) {
      this.reviews.push(e);
    };
  
    this.addSize = function (e) {
      this.sizes.push(e);
    };
  
    this.deleteSize = function (e) {
      this.sizes.splice(e, 1);
    };
  
    this.getReviewByID = function (id) {
      return this.reviews[id - 1];
    };
  
    this.getName = function () {
      return this.name;
    };
  
    this.deleteReview = function (id) {
      this.reviews.splice(id - 1, 1);
    };
  
    this.getAverageRating = function () {
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
  }
  
  const Product1 = new Product('Iphone Xr', 500, 'Apple', 'XL', 10000, "1999-10-5 5:5:5", 'Super phone');
  
  Product1.addReview({
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
  
  console.log(Product1.getReviewByID(1));
  console.log(Product1.reviews);
  console.log(Product1);
  console.log(Product1.getAverageRating());
  console.log(Product1.getImage());
  console.log(Product1.deleteReview(1));
  console.log(Product1.reviews);
  Product1.addSize('XXXXXXXLX');
  console.log(Product1.sizes)