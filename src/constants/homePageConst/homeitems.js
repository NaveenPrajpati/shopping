import img1 from './images/Truck.png'
import img2 from './images/gift.png'
import img3 from './images/offer.png'
import img4 from './images/payment.png'
export const bannerData = [
    {
      id: 1,
      title: "Free Shipping",
      Description: "From all orders over 100$",
      icon: (
        <img src={img1} alt="imageNA" />     
      ),
    },
    {
      id: 2,
      title: "Daily Surprise Offers",
      Description: "Save up to 25% off",
      icon: (
        <img src={img2} alt="imageNA" />     
      ),
    },
    {
      id: 4,
      title: "Affortable Prices",
      Description: "Get Factory direct price",
      icon: (
        <img src={img3} alt="imageNA" />     
      ),
    },
    {
      id: 5,
      title: "Secure Payments",
      Description: "100% protected payments",
      icon: (
        <img src={img4} alt="imageNA" />     
      ),
    },
  ];