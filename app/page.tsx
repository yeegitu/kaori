"use client";

import React, { useState, useEffect, useRef } from "react";
import { Heart, Bookmark, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Animasi from "./animasi";

const BirthdayGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likedCards, setLikedCards] = useState<{ [key: number]: boolean }>({});
  const [savedCards, setSavedCards] = useState<{ [key: number]: boolean }>({});
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const message = "Panjang umur, lancar rezeki, ilmu yang bermanfaat dan sehat selalu💖";

  // 🎶 Musik autoplay
  useEffect(() => {
    const audio = new Audio("/music/1.mp3");
    audio.loop = true;
    audioRef.current = audio;
    audio.play().catch(() => { });
    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play().catch(() => { });
      else audioRef.current.pause();
    }
  }, [isPlaying]);


  // ✨ Background sparkle lembut
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];

    const createParticles = () => {
      particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.2,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,182,193,${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
      });
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    });
  }, []);

  // 🖼 Carousel data
  const carouselImages = [
    { id: 1, url: "/images/1.jpeg", alt: "Moment 1" },
    { id: 2, url: "/images/2.jpeg", alt: "Moment 2" },
    { id: 3, url: "/images/3.jpeg", alt: "Moment 3" },
    { id: 4, url: "/images/4.jpeg", alt: "Moment 4" },
    { id: 5, url: "/images/5.jpeg", alt: "Moment 5" },
    { id: 6, url: "/images/6.jpeg", alt: "Moment 6" },
    { id: 7, url: "/images/7.jpeg", alt: "Moment 7" },
    { id: 8, url: "/images/8.jpeg", alt: "Moment 8" },
    { id: 9, url: "/images/9.jpeg", alt: "Moment 9" },
    { id: 10, url: "/images/10.jpeg", alt: "Moment 10" },
  ];

  const galleryCards = [
    { id: 1, url: "/images/11.jpeg", title: "💖 Sweet Hug" },
    { id: 2, url: "/images/12.jpeg", title: "🌸 Lovely Smile" },
    { id: 3, url: "/images/13.jpeg", title: "🥰 Happy Day" },
    { id: 4, url: "/images/14.jpeg", title: "✨ Light Up" },
    { id: 5, url: "/images/15.jpeg", title: "🌷 Cute Memory" },
    { id: 6, url: "/images/16.jpeg", title: "💫 Fun Time" },
    { id: 7, url: "/images/17.jpeg", title: "🌼 Sweet Vibes" },
    { id: 8, url: "/images/18.jpeg", title: "🍀 Lovely Moment" },
    { id: 9, url: "/images/19.jpeg", title: "🎀 Happy Hearts" },
  ];


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  const toggleLike = (id: number) => setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleSave = (id: number) => setSavedCards((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="relative min-h-screen bg-[linear-gradient(135deg,#4FC3F7,#A5D6A7,#FFF9C4)] overflow-hidden">

      {/* ⬇️ Tambahkan di sini */}
      <Animasi />

      {/* Background Sparkle */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="relative z-10">

        {/* 🎂 Header */}
        <div className="text-center py-10 px-4">
          {/* Happy Birthday 🎉 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap overflow-hidden">
            <span className="inline-block text-white relative">
              🎂 Happy Birthday 🎉
              {/* Sparkle / kilau kecil */}
              <span className="absolute -top-1 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></span>
              <span className="absolute top-0 right-1/3 w-2 h-2 bg-white rounded-full animate-ping opacity-60 delay-200"></span>
              <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping opacity-50 delay-400"></span>
              <span className="absolute bottom-0 right-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-60 delay-600"></span>
            </span>
          </h1>

          {/* Nama Janice Kaori lebih besar dengan animasi scale */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl mt-2 font-extrabold text-yellow-200 drop-shadow-md animate-[pulse_1.5s_ease-in-out_infinite]">
            Janice Kaori
          </h1>

          {/* Pesan */}
          <p className="text-sm md:text-base lg:text-lg text-center text-white mt-3 font-medium">
            {message}
          </p>


          {/* Tombol Musik */}
          <div className=" flex justify-center mt-2 ">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-5 py-2 bg-white text-gray-800 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
          </div>
        </div>




        {/* 📸 Carousel */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <img
                src={carouselImages[currentSlide].url}
                alt={carouselImages[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* 💕 Gallery */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            💞 Janice Memories 💞
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {galleryCards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white shadow-lg rounded-lg p-2 pb-4 transition-all duration-300 
        hover:scale-105 hover:rotate-0 cursor-pointer relative
        ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}  // rotasi random simple
              >
                {/* Foto */}
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <img
                    src={card.url}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tulisan Polaroid */}
                <p className="text-center font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base mt-2 text-gray-800 break-words">
                  {card.title}
                </p>



                {/* Like & Save */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <button onClick={() => toggleLike(card.id)}>
                    <Heart
                      className={`w-5 h-5 transition ${likedCards[card.id]
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                        }`}
                    />
                  </button>

                  <button onClick={() => toggleSave(card.id)}>
                    <Bookmark
                      className={`w-5 h-5 transition ${savedCards[card.id]
                        ? "fill-blue-500 text-blue-500"
                        : "text-gray-600"
                        }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        <footer className="bg-white py-6 text-center flex flex-col items-center gap-3 border-t border-gray-200">
          <div className="flex gap-6 text-3xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-pink-600" />
              <span className="text-gray-800 text-xl">Janice Kaori</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex items-center gap-2 hover:scale-110 transition-transform"
            >
              <FaTiktok className="text-black" />
              <span className="text-gray-800 text-xl">Janice Kaori</span>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default BirthdayGallery;
