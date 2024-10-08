import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  CardFooter,
  Button,
} from "@material-tailwind/react";
// Import local images and icons
import img1 from '../assets/img/Hiking/batur.jpg';
import img2 from '../assets/img/Hiking/abang.jpg';
import img3 from '../assets/img/Hiking/terunyan.jpg';

import user from '../assets/icon/user.png';
import coin from '../assets/icon/coin.png';
import view from '../assets/icon/view.png';
import van from '../assets/icon/van.png';
import guide from '../assets/icon/guide.png';

const cardData = [
  {
    imageUrl: img1,
    title: "Mount Batur",
    rating: "4.0",
    description: "Conquer the heights of Mount Batur an exhilarating hike with breathtaking sunrise views. Experience the thrill of adventure and the beauty of Bali from the summit of Batur!",
    location: "Kintamani Palace Bali",
    price: "$329",
    tooltips: ["Maximal 3 person", "View Detail", "1 car and driver", "Price include 2 Guide"],
    detailPage: "/DeskripsiBaturpage"
  },
  {
    imageUrl: img2,
    title: "Mount Abang",
    rating: "4.8",
    description: "Challenge yourself with a hike up Mount Abang – a less-traveled gem offering serene trails and panoramic views of Bali's stunning landscapes.",
    location: "Bangli Palace Bali",
    price: "$300",
    tooltips: ["Maximal 3 person", "View Detail", "1 car and driver", "Price include 2 Guide"],
    detailPage: "/DeskripsiAbangpage"
  },
  {
    imageUrl: img3,
    title: "Hill Terunyan",
    rating: "4.5",
    description: "Explore the untouched beauty of Terunyan Hill – a serene escape with breathtaking views of Lake Batur and the surrounding mountains. Experience Bali's hidden gem at Terunyan Hill",
    location: "Place Bangli Bali",
    price: "$129",
    tooltips: ["Maximal 3 person", "View Detail", "1 car and driver", "Price include 2 Guide"],
    detailPage: "/DeskripsiTerunyanpage"
  },
];

const CardComponent = ({ imageUrl, title, rating, location, description, price, tooltips, detailPage }) => {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg mt-12">
      <CardHeader floated={false} color="blue-gray">
        <img src={imageUrl} alt={title} />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-semibold font-poppins">
            {title}
          </Typography>
          <div className="flex items-center gap-1.5">
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-medium font-poppins"
            >
              <img src={coin} alt="" />
              {price}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </Typography>
          </div>
        </div>
        <Typography className='text-customBrown font-poppins font-medium'>
          {location}
        </Typography>
        <Typography color="gray" className='font-poppins'>
          {description}
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          {tooltips.map((tooltipContent, index) => (
            tooltipContent === "View Detail" ? (
              <Tooltip key={index} content={tooltipContent}>
                <a href={detailPage} className="cursor-pointer border rounded-full border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <img src={view} alt={`Icon ${index + 1}`} className="h-5 w-5" />
                </a>
              </Tooltip>
            ) : (
              <Tooltip key={index} content={tooltipContent}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <img src={
                    index === 0 ? user :
                    index === 2 ? van :
                    guide // Menambahkan ikon guide di sini
                  } alt={`Icon ${index + 1}`} className="h-5 w-5" />
                </span>
              </Tooltip>
            )
          ))}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='bg-customBrown font-poppins text-base' fullWidth={true}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const CardGrid = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((data, index) => (
          <CardComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
