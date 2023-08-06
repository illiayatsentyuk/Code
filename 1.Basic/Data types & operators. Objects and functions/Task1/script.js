function Review(id,author,comment,date,rating){
  this.id = id;
  this.author=author;
  this.comment = comment;
  this.date = date;
  this.rating = rating;
  return {
    id:this.id,
    author:this.author,
    comment:this.comment,
    date:this.date,
    rating:this.rating,
  };
}
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
        if(!e){
            return this.images[0];
        }else{
            return this.images[e];
        }
    }
    this.setImage = function(e){
      this.images.push(e);
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
      for(let i=0;i<this.reviews.length;i++){
        if(this.reviews[i].id==id){
          this.reviews.splice(i,1)
        }
      }
    };
  
    this.getAverageRating = function () {
      let totalRating = 0;
  
      this.reviews.forEach((review) => {
        totalRating+= review.rating.service || 0;
        totalRating += review.rating.price || 0;
        totalRating += review.rating.value || 0;
        totalRating += review.rating.quality || 0;
      });
  
      const totalReviews = this.reviews.length;
      return totalRating /totalReviews
    };
  }
  
const Product1 = new Product('Iphone Xr', 500, 'Apple', 'XL', 10000, "1999-10-5 5:5:5", 'Super phone');
const review1 = new Review('100','Illia',"The best phone ever","1999-10-5 5:5:5",{service: 5,price: 3,value: 10, quality: 10,})
const review2 = new Review('2','Oleksiy',"The best phone ever","1999-10-5 5:5:5",{service: 1,price: 3,value: 5, quality: 0,})
Product1.addReview(review1);
Product1.addReview(review2);
    
console.log(Product1.getAverageRating())
console.log(Product1.reviews);
console.log("-------------------------")
Product1.deleteReview(100);
console.log(Product1.reviews);
console.log(Product1.getAverageRating())
