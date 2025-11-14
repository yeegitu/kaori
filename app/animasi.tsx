"use client";

import React from "react";

export default function Animasi() {
    const items = ["⭐", "🌙", "❤️", "😊", "🎂", "🎁"]; // icon jatuh
    const jumlah = 20; // jumlah total emoji

    return (
        <>
            <style>{`
  @keyframes fall {
    0% {
      transform: translateY(-150px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(120vh) rotate(360deg);
      opacity: 0;
    }
  }
`}</style>

            <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
                {Array.from({ length: jumlah }).map((_, i) => {
                    const emoji = items[Math.floor(Math.random() * items.length)];
                    const left = Math.random() * 100; // posisi random
                    const duration = 4 + Math.random() * 6; // durasi random 4–10 dtk
                    const delay = Math.random() * 3; // delay random

                    return (
                        <div
                            key={i}
                            className="absolute text-3xl"
                            style={{
                                left: `${left}%`,
                                animation: `fall ${duration}s linear infinite`,
                                animationDelay: `${-Math.random() * 3}s`, // ⬅️ ini penting
                            }}
                        >
                            {emoji}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
