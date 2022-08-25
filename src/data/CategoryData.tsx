import categorySucculent from "../img/categorySucculent.jpg";
import categoryPot from "../img/categoryPot.jpg";
import categoryOther from "../img/categoryOther.jpg";

type CategoryProps = {
  categoryName: string;
  image: string;
  description: string;
};

export const CategoryData: CategoryProps[] = [
  {
    categoryName: "Succulents",
    image: categorySucculent,
    description:
      "Choose your little friend which will make your home a little bit more cozy.",
  },
  {
    categoryName: "Pots",
    image: categoryPot,
    description:
      "Add a unique look to your succulents with beautifully hand-crafted potteries.",
  },
  {
    categoryName: "Other",
    image: categoryOther,
    description:
      "Check some equipments which maintain your succulents in a better condition.",
  },
];
