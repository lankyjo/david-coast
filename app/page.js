'use client'
import Form from "@/components/Form";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set('#navBtn, #form, #link, #formItem', { opacity: 0 });
    gsap.set('#title', { y: '43.5dvh', x:'43.5dvw'})

    tl.to('#title',{y:0,x:0,delay:1,duration:2})
    tl.to('#blur', {opacity: 0, duration: 2},'<')
    tl.to('#link',{opacity:1, duration: 1})
    tl.to('#navBtn', {opacity: 1, duration:0.5}, '<')
    tl.to('#form', {opacity:1,})
    tl.to('#formItem', {opacity:1, stagger:0.2})

  }, []);

  return (
    <div
      id="bg"
      className="min-h-dvh h-full bg-[url(/1.jpg)] sm:bg-[url(/1.webp)] bg-cover z-0 bg-center relative w-full before:absolute before:inset-0 before:bg-black/70"
    >
      <span id="blur" className="absolute inset-0 bg-black/20 backdrop-blur-md"></span>
      <main className="relative w-full text-white z-10 max-w-[1440px] px-3 mx-auto">
        <Navigation />
        <Header />
        <Form />
      </main>
    </div>
  );
}
