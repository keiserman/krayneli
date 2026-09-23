import type { IconName } from "./icons";

export interface Track {
  title: string;
  artist?: string;
  src: string;
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  icon: IconName;
  tracks: Track[];
}

export const services: Service[] = [
  {
    id: "animation",
    title: "Animation",
    icon: "film",
    tracks: [
      { title: "Inspector Demo", src: "/audio/animation/krayneli-anim-1.wav", duration: "0:19" },
      { title: "Honey Jar Demo", src: "/audio/animation/krayneli-anim-2.wav", duration: "0:06" },
      { title: "Siddur Demo", src: "/audio/animation/krayneli-anim-3.wav", duration: "0:20" },
      { title: "Kalmy Demo", artist: "LA Studios", src: "/audio/animation/animation6.mp3", duration: "0:15" },
      { title: "Izzy Demo", artist: "LA Studios", src: "/audio/animation/animation7.mp3", duration: "0:23" },
      { title: "Kaylie Demo", artist: "LA Studios", src: "/audio/animation/animation8.mp3", duration: "0:14" },
      { title: "Kivi Demo", artist: "LA Studios", src: "/audio/animation/animation9.mp3", duration: "0:15" },
      { title: "Crane Driver Demo", artist: "LA Studios", src: "/audio/animation/animation10.mp3", duration: "0:08" },
      { title: "Helicopter Demo", artist: "LA Studios", src: "/audio/animation/animation11.mp3", duration: "0:10" },
      { title: "Dovi Demo", artist: "LA Studios", src: "/audio/animation/animation12.mp3", duration: "0:04" },
      { title: "Mrs Stern", src: "/audio/animation/Mrs-Stern.wav", duration: "0:10" },
      { title: "Georgina", src: "/audio/animation/Georgina-.wav", duration: "0:16" },
      { title: "Barbara", src: "/audio/animation/Barbara-1.wav", duration: "0:16" },
      { title: "anchor", src: "/audio/animation/anchor.wav", duration: "0:33" },
      { title: "Noisy a", src: "/audio/animation/Noisy-a.wav", duration: "0:23" },
      { title: "EA", src: "/audio/animation/Edith-Ann.m4a", duration: "0:10" },
    ],
  },
  {
    id: "audio-book",
    title: "Audio Book",
    icon: "bookOpen",
    tracks: [
      { title: "audiobook", src: "/audio/audiobook/RPReplay_Final1783485942.m4a", duration: "0:17" },
    ],
  },
  {
    id: "narration",
    title: "Narration",
    icon: "messageSquare",
    tracks: [
      { title: "pmc", src: "/audio/narration/pmc.wav", duration: "0:19" },
      { title: "Welcome to Y", src: "/audio/narration/Welcome-to-Y-1.m4a", duration: "0:05" },
      { title: "narration", src: "/audio/narration/narration1.wav", duration: "1:34" },
      { title: "narration-nikadesh", src: "/audio/narration/narration2.wav", duration: "0:13" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: "mic",
    tracks: [
      { title: "krayneli commercial whip", src: "/audio/commercial/krayneli-commercial-whip.wav", duration: "1:28" },
    ],
  },
  {
    id: "phone-greeting",
    title: "Phone Greeting",
    icon: "phoneCall",
    tracks: [
      { title: "phone greeting", src: "/audio/phone-greeting/phone-greeting-6-15-26.wav", duration: "0:29" },
      { title: "pmc phone", src: "/audio/phone-greeting/pmc-phone.wav", duration: "0:30" },
      { title: "phone-greeting1", src: "/audio/phone-greeting/phone-greeting1.wav", duration: "0:21" },
      { title: "FG", src: "/audio/phone-greeting/FG.mp3", duration: "0:49" },
      { title: "phone-greeting2", src: "/audio/phone-greeting/phone-greeting2.wav", duration: "0:19" },
    ],
  },
];
