import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="border rounded-lg p-4 border-2 border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown">
      <img src={image} alt={title} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
      <h2 className="text-[24px] font-poppins font-medium mb-4">{title}</h2>
      <p className="text-[18px] font-poppins font-normal">{text}</p>
    </div>
  );
};

const Test = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <Card
          image="/chemin/vers/image1.jpg"
          title="Titre de la carte 1"
          text="Description de la carte 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          image="/chemin/vers/image2.jpg"
          title="Titre de la carte 2"
          text="Description de la carte 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          image="/chemin/vers/image3.jpg"
          title="Titre de la carte 3"
          text="Description de la carte 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default Test;


 {/* return (
     <div className="mt-[28px] pt-[32px] mb-[48px]  sm:px-[100px] sm:py-[32px]">
  <Reveal>
    <h2 className="font-sourceSerif text-[32px] capitalize text-center text-secondary-brown-darker mb-[48px] sm:font-semibold ">
      Testimonials
    </h2>
  </Reveal>

  <div className="flex flex-col gap-[51px] items-center sm:flex-row">
    <Reveal>
      <Card
        title="Communauté 1"
        image={CardImage}
        text="Présentation de 'IslamicHub', une plateforme de pointe conçue pour améliorer l'engagement de la communauté."
      />
    </Reveal>
    <Reveal>
      <Card
        title="Communauté 2"
        image={CardImage}
        text="Présentation de 'IslamicHub', une plateforme de pointe conçue pour améliorer la communication au sein de la communauté."
      />
    </Reveal>
    <Reveal>
      <Card
        title="Communauté 3"
        image={CardImage}
        text="Présentation de 'IslamicHub', une plateforme de pointe conçue pour renforcer les liens au sein de la communauté."
      />
    </Reveal>
  </div>
</div> 

  );*/}



