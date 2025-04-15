import gsap from "gsap";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Navigation = () => {
  function openMenu() {
    gsap.to("#navBtn", {
      x: "100%",
    //   ease: "power4.inOut",
    });
    gsap.to("#navscreen", {
      autoAlpha: 1,
      display: "flex",
      onComplete: () => {
        document
          .getElementById("navscreen")
          .setAttribute("aria-hidden", "false");
      },
    });

    gsap.to(
      "#card",
      {
        x: 0,
        stagger: 0.2,
        ease: "power1",
      },
      ">"
    );
    gsap.to(
      "#closebtn",
      {
        opacity: 1,
      },
      ">"
    );
  }
  function closeMenu() {
    document.getElementById("closebtn")?.blur();
    gsap.to("#closebtn", {
      opacity: 0,
    });
    gsap.to(
      "#card",
      {
        x: "100%",
        stagger: -0.2,
        ease: "power1.out",
      },
      ">"
    );
    gsap.to(
      "#navscreen",
      {
        autoAlpha: 0,
        display: "hidden",
        onComplete: () => {
          document
            .getElementById("navscreen")
            .setAttribute("aria-hidden", "true");
        },
      },
      ">"
    );
    gsap.to(
      "#navBtn",
      {
        x: 0,
        // ease: "power4.inOut",
      },
      ">"
    );
  }
  return (
    <>
      <nav
        aria-label="open Navigation panel"
        onClick={openMenu}
        id="navBtn"
        className="fixed font-anton right-0 hover:scale-105 transition-all cursor-pointer flex justify-between bottom-0 bg-[rgb(239_121_13)] w-40 h-12 p-2 text-white rounded-tl-lg"
      >
        Highlights
    <BsArrowUpRight/>
      </nav>

      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        aria-label="Event Navigation Panel"
        id="navscreen"
        className="hidden flex-col items-end gap-1 overflow-hidden z-50 h-screen w-screen bg-black/20 backdrop-blur-md fixed right-0 top-0"
      >
        {[
          {
            eventName: "Ogatciket!",
            eventVenue: "New York",
            eventDate: "10th, April, 2025",
            image: "/next1.webp",
            link: 'https://www.instagram.com/p/DH39BNHx5uo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          },
          {
            eventName: "Ruger x David Coast",
            eventVenue: "New York",
            eventDate: "10th, April, 2025",
            image: "/next2.webp",
            link:'https://www.instagram.com/p/DIRXfgFRFj-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          },
          {
            eventName: "David Coast Live",
            eventVenue: "New York",
            eventDate: "10th, April, 2025",
            image: "/next3.webp",
            link: 'https://www.instagram.com/p/DIJyrwOp1un/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          },
        ].map((event, index) => (
          <Link
            href={event.link}
            target="_blank"
            key={index}
            id="card"
            role="button"
            tabIndex={0}
            aria-label={`View details for ${event.eventName} in ${event.eventVenue} on ${event.eventDate}`}
            className="flex-[1] w-screen border p-2 sm:w-90 cursor-pointer rounded-xl flex items-end bg-cover bg-center transform translate-x-full"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${event.image})`
            }}
          >
            <h2 className="text-2xl font-anton ">{event.eventName}</h2>

          </Link>
        ))}
        <div
          aria-label="close Navigation panel"
          id="closebtn"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          className="absolute opacity-0 top-1 p-2 right-2 cursor-pointer border border-transparent rounded-lg hover:border-white"
        >
          <TfiClose className="text-3xl" />
        </div>
      </aside>
    </>
  );
};

export default Navigation;
