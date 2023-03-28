import { SiBitcoin, SiDogecoin, SiEthereum } from "react-icons/si";
import ProfileImage1 from "../assets/images/hero/hero-card-profile.png";
import CardImage1 from "../assets/images/hero/hero1.png";
import CardImage2 from "../assets/images/hero/hero2.png";
import CardImage3 from "../assets/images/hero/hero3.png";

export const data = [
  {
    id: 0,
    image: CardImage1,
    title: "Abstr Gradient NFT",
    profileImage: ProfileImage1,
    profileName: "Arkhan17",
    nft: "0.25 ETH",
    nftLogo: <SiEthereum />,
    endingTime: "12h 43m 42s",
  },
  {
    id: 1,
    image: CardImage2,
    title: "Abstr Gradient NFT",
    profileImage: ProfileImage1,
    profileName: "Arkhan17",
    nft: "2.25 BTC",
    nftLogo: <SiBitcoin />,
    endingTime: "6h 23m 12s",
  },
  {
    id: 2,
    image: CardImage3,
    title: "Abstr Gradient NFT",
    profileImage: ProfileImage1,
    profileName: "Arkhan17",
    nft: "0.25 DC",
    nftLogo: <SiDogecoin />,
    endingTime: "12h 43m 42s",
  },
];
