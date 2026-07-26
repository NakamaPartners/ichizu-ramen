import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/fade-in';
import { menuData } from '@/data/menu';

// Real Ramen Ichizu photos
import heroImg from '@/assets/photos/bowl-shoyu.jpg';
import twoBlowsImg from '@/assets/photos/bowls-two.jpg';
import editorialImg from '@/assets/photos/cityweekly1.jpg';
import saltseek1Img from '@/assets/photos/saltseek1.jpg';
import saltseek2Img from '@/assets/photos/saltseek2.jpg';
import saltseek3Img from '@/assets/photos/saltseek3.jpg';
import menu1Img from '@/assets/photos/menu1.jpg';
import menu2Img from '@/assets/photos/menu2.jpg';
import menu3Img from '@/assets/photos/menu3.jpg';
import menu4Img from '@/assets/photos/menu4.jpg';
import menu5Img from '@/assets/photos/menu5.jpg';
import menu6Img from '@/assets/photos/menu6.jpg';
import kutv2Img from '@/assets/photos/kutv2.jpg';
import kutv4Img from '@/assets/photos/kutv4.jpg';
import kutv5Img from '@/assets/photos/kutv5.jpg';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 280]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden selection:bg-white/20 selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference text-white">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="font-serif tracking-[0.3em] text-sm uppercase">Ichizu</span>
        </button>
        <div className="flex gap-6 text-xs tracking-widest uppercase font-sans">
          <button onClick={() => scrollTo('philosophy')} className="hover:text-white/60 transition-colors">Devotion</button>
          <button onClick={() => scrollTo('menu')} className="hover:text-white/60 transition-colors">Menu</button>
          <button onClick={() => scrollTo('visit')} className="hover:text-white/60 transition-colors">Visit</button>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="hero" ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={heroImg}
            alt="Ramen Ichizu — Shoyu bowl"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-20 text-center flex flex-col items-center px-4">
          <FadeIn delay={0.2} direction="down">
            <h1 className="text-8xl md:text-[11rem] font-serif leading-none tracking-tight text-white/90 font-light mb-4 drop-shadow-2xl">
              一途
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <p className="font-sans uppercase tracking-[0.4em] text-xs md:text-sm text-white/65">
              Single-Minded Devotion
            </p>
          </FadeIn>
          <FadeIn delay={0.7} direction="up">
            <div className="mt-14 w-[1px] h-20 bg-white/25 mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────── */}
      <section id="philosophy" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
                No substitutions.<br />No takeout.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  "Ichizu" translates to single-minded devotion — the philosophy that drives every decision in this room.
                </p>
                <p>
                  Our noodles are hand-crafted in-house daily. The broth simmers for hours to achieve perfect clarity and depth. Every bowl is built with obsessive precision, and served exactly as intended.
                </p>
                <p>
                  To respect the craft and the integrity of the dish, we do not alter our recipes. The ramen is constructed once, correctly, and consumed immediately.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.25} className="relative h-[60vh] md:h-[75vh]">
            <img
              src={twoBlowsImg}
              alt="Two bowls at the Ichizu counter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
          </FadeIn>
        </div>
      </section>

      {/* ── PHOTO STRIP (3 real photos) ───────────────────────── */}
      <section className="grid grid-cols-3 gap-0">
        {[saltseek1Img, editorialImg, saltseek3Img].map((src, i) => (
          <motion.div
            key={i}
            className="aspect-square overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt="Ramen Ichizu"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </section>

      {/* ── CHEF ─────────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-[#080808]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
          <div className="flex-1">
            <FadeIn>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/35 mb-4">The Craftsman</p>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Chef Mike<br />Harrison</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Trained at Tokyo's prestigious Rajuku Ramen School under Master Chef Takeshi Koitani — one of the most demanding ramen programs in Japan.
                </p>
                <p>
                  Following years at Hana Ramen Bar in Park City, Chef Harrison brought his discipline to Salt Lake City's Central Ninth neighborhood. Not to open another ramen shop — but to pursue one thing with complete devotion.
                </p>
                <p className="text-white/50 italic text-sm">
                  "The best ramen this side of Tokyo." — Salt Lake City
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.2} className="flex-1 w-full">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={saltseek2Img}
                alt="Ramen Ichizu — Bowl craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FULL-WIDTH INTERSTITIAL ───────────────────────────── */}
      <section className="h-[65vh] w-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <img
            src={kutv4Img}
            alt="Ramen Ichizu — Tokusei Shoyu"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-serif text-2xl md:text-4xl tracking-[0.25em] text-white/85 uppercase">
              915 Washington St
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── MENU ─────────────────────────────────────────────── */}
      <section id="menu" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h2 className="text-5xl font-serif mb-4">The Menu</h2>
          <div className="w-8 h-[1px] bg-white/15 mx-auto" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-20">
          <div className="space-y-16">
            <MenuCategory title="Ramen" items={menuData.ramen} />
            <MenuCategory title="Seasonal" items={menuData.seasonal} />

            {/* In-column food photo */}
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={menu1Img} alt="Ramen bowl" className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            <MenuCategory title="Sides" items={menuData.sides} />
          </div>

          <div className="space-y-16">
            <MenuCategory title="Add-Ons" items={menuData.addons} compact />
            <MenuCategory title="Mini Donburi" items={menuData.donburi} />

            {/* In-column food photo */}
            <FadeIn delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={menu2Img} alt="Ichizu food" className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-8">
              <MenuCategory title="Dessert" items={menuData.dessert} compact />
              <MenuCategory title="Draft Beer" items={menuData.beer} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────── */}
      <section className="py-4 px-4 bg-[#050505]">
        <FadeIn className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-white/30">The Restaurant</p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
          {[menu3Img, saltseek2Img, menu4Img, kutv2Img, menu5Img, kutv5Img, menu6Img, saltseek1Img, editorialImg].map((src, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <img
                src={src}
                alt="Ramen Ichizu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOURS & LOCATION ─────────────────────────────────── */}
      <section id="visit" className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl mb-16">Visit Us</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 font-sans text-sm">
            <FadeIn delay={0.1}>
              <h4 className="font-serif text-xl mb-5">Location</h4>
              <p className="text-muted-foreground leading-relaxed">
                915 Washington St<br />
                Suite #1A<br />
                Salt Lake City, UT 84101<br />
                <span className="text-white/35 mt-2 block text-xs tracking-wider uppercase">Central Ninth Neighborhood</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h4 className="font-serif text-xl mb-5">Hours</h4>
              <ul className="text-muted-foreground space-y-3 text-xs leading-relaxed">
                <li>
                  <span className="text-white/55 block uppercase tracking-wider text-xs">Mon, Wed, Thu</span>
                  11:30 AM – 3:00 PM<br />5:00 PM – 9:00 PM
                </li>
                <li>
                  <span className="text-white/55 block uppercase tracking-wider text-xs mt-2">Fri – Sat</span>
                  11:30 AM – 3:00 PM<br />5:00 PM – 9:30 PM
                </li>
                <li>
                  <span className="text-white/55 block uppercase tracking-wider text-xs mt-2">Sunday</span>
                  12:00 PM – 8:00 PM
                </li>
                <li>
                  <span className="text-white/55 block uppercase tracking-wider text-xs mt-2">Tuesday</span>
                  Closed
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h4 className="font-serif text-xl mb-5">Connect</h4>
              <p className="text-muted-foreground mb-2 text-xs">
                4.3 / 5 &nbsp;·&nbsp; 342+ Google Reviews
              </p>
              <a
                href="https://www.instagram.com/ramen_ichizu/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/80 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-colors text-sm"
              >
                @ramen_ichizu
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 text-center text-xs font-sans tracking-widest uppercase text-white/25 bg-[#050505] border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ramen Ichizu Bar · Salt Lake City, UT</p>
      </footer>
    </div>
  );
}

function MenuCategory({
  title,
  items,
  compact = false,
}: {
  title: string;
  items: Array<{ name: string; price: string | number; desc?: string }>;
  compact?: boolean;
}) {
  return (
    <FadeIn>
      <div className="mb-10">
        <h3 className="font-serif text-2xl mb-7 flex items-center gap-4">
          {title}
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </h3>
        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline font-sans text-sm">
                <span className="font-medium tracking-wide text-white/88">{item.name}</span>
                <span className="text-white/50 tabular-nums ml-4 shrink-0">${item.price}</span>
              </div>
              {!compact && item.desc && (
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-[85%]">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
