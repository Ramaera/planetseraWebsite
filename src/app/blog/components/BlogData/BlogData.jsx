"use client";
import Link from "next/link";

const BlogData = [
  // --------------  RecentBlog  -------------------------------------------------------------------

  {
    id: "you-must-have-in-your-kitchen",
    category: "BestSelling",
    categoryName: "BestSelling",
    type: "RecentBlog",
    blogImg: "/images/blog/Essential-17-Spicesces.png",
    blogName: "17 Essential Indian Spices List You Must Have In Your Kitchen",
    blogDetail:
      "Indian food is a true work of cooking art; it's a beautiful mix of colours, smells, and tastes. A lot of different spices are at the heart of this magical culinary trip. Spices aren't just ingredients; they're what make Indian food taste so good without even saying a word. Each spice has its own story and flavour that it brings to a dish. When mixed together, they make a symphony of taste that has amazed people for hundreds of years. This piece will delve into the fascinating world of 17 important Indian spices, revealing the secrets that make Indian food a culinary treasure around the world.",
    blogDescription: [
      {
        blogList: (
          <>
            "1.{" "}
            <Link href="/products/red-chilli-powder" className="text-red-500">
              Turmeric Powder
            </Link>{" "}
            Haldi Powder: The Golden Elixir"
          </>
        ),
        blogListAbout: (
          <>
            "It is often called the Golden Spice, and it is an important part of
            Indian food. In addition to its beautiful golden colour, it is
            highly valued for its many health benefits . In curry powders and
            spice mixes like masalas, turmeric is an important ingredient
            because it gives food an earthy, slightly bitter flavour."
          </>
        ),
      },
      {
        blogList: (
          <>
            {" "}
            "2.{" "}
            <Link href="/products/cumin-powder" className="text-red-500">
              Cumin
            </Link>{" "}
            (Jeera): The Flavorful Backbone"
          </>
        ),
        blogListAbout:
          "Indian food is full of flavour because of cumin seeds, which are called jeera. The flavour of these small seeds is warm and nutty, and they are used a lot in both spice mixes and tempering. A famous Indian dish called jeera rice shows how great cumin is.",
      },
      {
        blogList: "3. Coriander (Dhania): The Versatile Delight",
        blogListAbout: (
          <>
            "Coriander is a useful herb that comes in both seed and ground form.
            Ground coriander is an important part of{" "}
            <Link href="/products/coriander-powder" className="text-red-500">
              coriander powders
            </Link>{" "}
            and the seeds have a spicy, slightly sweet taste. It makes a lot of
            Indian recipes more interesting and full.
          </>
        ),
      },
      {
        blogList: "4. Cardamom (Elaichi): The Queen of Spices",
        blogListAbout:
          "Cardamom, also called elaichi, is called the Queen of Spices for a reason. It smells really royal, with a sweet and flowery scent. Cardamom makes everything taste better, from masala chai and biryanis to cakes and sweets.",
      },
      {
        blogList: "5. Mustard Seeds (Rai): The Zesty Tempering",
        blogListAbout:
          "Rai, which are mustard seeds, give Indian food a spicy, slightly sour taste. They are an important part of tempering and are used in pickles and regional foods all over the country.",
      },
      {
        blogList: "6. Cloves (Laung): The Intense Sweetness",
        blogListAbout:
          "With their strong sweet and fragrant flavour, cloves are a spice lover's dream. They are a big part of biryanis, garam masala, and many other meat and rice recipes. They give the flavours a unique depth.",
      },
      {
        blogList: "7. Cinnamon (Dalchini): The Sweet Warmth",
        blogListAbout:
          "Cinnamon sticks and ground cinnamon both make food taste sweet and warm. It is an important part of both spice blends and sweets because it gives them an irresistible flavour that stays in your mouth.",
      },
      {
        blogList: (
          <>
            8.{" "}
            <Link href="/products/red-chilli-powder" className="text-red-500">
              Red Chili Powder
            </Link>{" "}
            (Lal Mirch Powder): The Fiery Essence"
          </>
        ),
        blogListAbout:
          "The fiery flavour that many people associate with Indian food comes from dried red peppers and red chilli powder. There are different levels of heat, so you can find something that suits your tastes.",
      },
      {
        blogList: "9. Fenugreek (Methi): The Bitter Complexity",
        blogListAbout:
          "Fenugreek seeds have a reputation for having a slightly bitter flavour, which offers an additional layer of nuance to Indian pickles and spice mixes. They play an essential role in the production of the distinctive flavours of the area.",
      },
      {
        blogList: "10. Asafoetida (Hing): The Pungent Aroma",
        blogListAbout:
          "Asafoetida, also known as hing, is an aromatic and spicy compound that is commonly used in Indian cooking. It is used as a flavour enhancer in a variety of vegetarian cuisines and spice blends, where it contributes an aroma and flavour with a depth that is unmatched.",
      },
      {
        blogList: "11. Curry Leaves (Kadi Patta): The Citrusy Aroma",
        blogListAbout:
          "Curry leaves are a sensory treat for the body and mind. The zesty and aromatic smell of these spices is widely featured in South Indian cuisine, contributing to the one-of-a-kind tastes of rice dishes and curries.",
      },
      {
        blogList: "12. Bay Leaves (Tej Patta): The Subtle Earthiness",
        blogListAbout:
          "Dishes from North India, such as biryanis and stews, benefit from the use of bay leaves thanks to the subtly earthy flavour they impart. They are an essential component in the diverse flavour profiles of these culinary masterpieces.",
      },
      {
        blogList: "13. Nutmeg (Jaiphal): The Nutty Elegance",
        blogListAbout:
          "When freshly grated, nutmeg imparts a strong flavour that is simultaneously sweet and nutty to the food it is added to. It leaves an indelible mark both on sweets and spice mixtures due to its high regard in both contexts.",
      },
      {
        blogList: "14. Black Pepper (Kali Mirch): The Classic Spice",
        blogListAbout: (
          <>
            {" "}
            <Link href="/products/black-pepper-powder" className="text-red-500">
              Black pepper
            </Link>
            , which may be purchased either whole or ground, is a time-honored
            spice that adds both heat and depth to a broad variety of Indian
            meals. Black pepper can be purchased either whole or ground.
          </>
        ),
      },
      {
        blogList: "15. Fennel Seeds (Saunf): The Licorice Twist",
        blogListAbout:
          "Fennel seeds have a flavour that is similar to licorice and are used not just as a digestive aid after meals but also as an ingredient in a variety of spice combinations.",
      },
      {
        blogList: "16. Star Anise (Chakriphool): The Licorice Star",
        blogListAbout:
          "The use of star anise, which has a flavour that is similar to that of licorice, gives biryanis and some meat dishes a flavour that is unique.",
      },
      {
        blogList: "17. Garam Masala: The Heart of Indian Cooking",
        blogListAbout:
          "Cardamom, cloves, cinnamon, and black pepper are the four primary components of the classic spice mixture known as garam masala. Because it lends warmth and depth to a wide variety of Indian cuisines, it is an essential component in the kitchens of many Indian homes.",
        blogListAbout2:
          "These 17 spice jewels are more than simply ingredients; they encapsulate India's culinary legacy. Each one adds its own distinct flavour and perfume to the table, and when combined, they form an orchestra of flavour that has captured food lovers all over the world.",
        blogListAbout3:
          "To truly appreciate these spices, it is necessary to grasp their particular properties as well as how they complement other foods. Freshness is essential, so keep your spices in airtight containers away from direct sunlight and heat.",
        blogListAbout4:
          "With these 17 spice jewels, you'll unlock the secrets of Indian cuisine, bringing depth and dimension to your cooking. The variety of Indian flavours awaits you, so dig in and transform your kitchen into a canvas for producing culinary masterpieces that embody the essence of India.",
      },
    ],
  },

  {
    id: "sabji-masala",
    category: "BestSelling",
    categoryName: "BestSelling",
    type: "RecentBlog",
    blogImg: "/images/banner/SabjiMasala-Banner.jpg",
    blogName: "Discover the Spice Routes",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },
  {
    id: "red-chilli-powder",
    category: "BestSelling",
    type: "RecentBlog",
    blogImg: "/images/banner/RedChilliPowder-Banner.jpg",
    blogName: "10 Different Types of Chillies in India : Know All About Them",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "coriander-powder",
    category: "BestSelling",
    type: "RecentBlog",
    blogImg: "/images/banner/CorianderPowder-Banner.jpg",
    blogName: "11 Benefits Of Spices That Can Help You To Live Healthy Life",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "black-pepper-powder",
    category: "BestSelling",
    type: "RecentBlog",
    blogImg: "/images/banner/BlackPepperPowder-Banner.jpg",
    blogName: "Top 11 Masala Companies In India",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  // --------------  LatestBlog  -------------------------------------------------------------------

  {
    id: "chat-masala",
    category: "MouthWatering",
    type: "LatestBlog",
    blogImg: "/images/banner/ChatMasala-Banner.jpg",
    blogName: "How PlanetsEra Spices ensures responsibility of different.",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "amchur-powder",
    category: "MouthWatering",
    type: "LatestBlog",
    blogImg: "/images/banner/AmchurPowder-Banner.jpg",
    blogName: "The must-have PlanetsEra Spices for every kitchen",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "chicken-masala",
    category: "MouthWatering",
    type: "LatestBlog",
    blogImg: "/images/banner/ChickenMasala-Banner.jpg",
    blogName: "Using PlanetsEra Spices in a variety of dishes",
    blogDetail:
      "India - The Largest Red-Chili Producer and Consumer. Did you know that Andhra Pradesh is the largest red-chili-producing state in India? Well, it’s no surprise, for we all know how rich their cuisine is with spice.",
  },

  {
    id: "red-chilli-powder",
    category: "MouthWatering",
    type: "LatestBlog",
    blogImg: "/images/banner/RedChilliPowder-Banner.jpg",
    blogName: "How to choose the right spice",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "meat-masala",
    category: "NonvegTadka",
    type: "LatestBlog",
    blogImg: "/images/banner/MeatMasala-Banner.jpg",
    blogName: "Exploring flavours and traditions",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  // --------------  popular  -------------------------------------------------------------------

  {
    id: "sabji-masala",
    category: "KitchenSpices",
    type: "popular",
    blogImg: "/images/banner/SabjiMasala-Banner.jpg",
    blogName: "Sabji Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "kitchen-king",
    category: "KitchenSpices",
    type: "popular",
    blogImg: "/images/banner/KitchenKingMasala-Banner.jpg",
    blogName: "kitchen king Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "cumin-powder",
    category: "KitchenSpices",
    type: "popular",
    blogImg: "/images/banner/CuminPowder-Banner.jpg",
    blogName: "Cumin Powder",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "turmeric-powder",
    category: "KitchenSpices",
    type: "popular",
    blogImg: "/images/banner/TurmericPowder-Banner.jpg",
    blogName: "Turmeric Powder",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "meat-masala",
    category: "WeekandTadka",
    type: "popular",
    blogImg: "/images/banner/MeatMasala-Banner.jpg",
    blogName: "Meat Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "garam-masala",
    category: "WeekandTadka",
    type: "popular",
    blogImg: "/images/banner/GaramMasala-Banner.jpg",
    blogName: "Garam Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "chat-masala",
    category: "WeekandTadka",
    type: "popular",
    blogImg: "/images/banner/ChatMasala-Banner.jpg",
    blogName: "Chat Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },

  {
    id: "chicken-masala",
    category: "WeekandTadka",
    type: "popular",
    blogImg: "/images/banner/ChickenMasala-Banner.jpg",
    blogName: "Chicken Masala",
    blogDetail:
      "Discover the key assets for ensuring high-quality translations. From skilled translators to translation memory tools, learn what you need for success.",
  },
];

export default BlogData;
