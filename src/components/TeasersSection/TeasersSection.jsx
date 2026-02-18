"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

/* Play Icon */
const PlayIcon = React.memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
  </svg>
));

/* Reel Card Component */
const ReelItem = React.memo(({ url, index, isVisible, onRef }) => {
  const reelId = useMemo(() => url.match(/\/reel\/([^\/]+)/)?.[1], [url]);
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    if (isVisible) setLoadIframe(true);
  }, [isVisible]);

  if (!reelId) return null;

  return (
    <div
      ref={onRef}
      className={`relative rounded-2xl overflow-hidden aspect-[9/16] bg-black border border-white/5 
      transform transition-all duration-700 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} 
      hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/30 hover:-translate-y-2 group`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-full h-full relative">

        {/* Placeholder */}
        {!loadIframe && (
          <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-500 text-sm">
            Loading preview...
          </div>
        )}

        {/* Instagram Embed */}
        {loadIframe && (
          <iframe
            src={`https://www.instagram.com/reel/${reelId}/embed/`}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            title={`Instagram Reel ${index + 1}`}
            className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}

        {/* Hover Play Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
});

/* Main Section */
const TeasersSection = () => {
  const instagramReels = useMemo(
    () => [
      "https://www.instagram.com/reel/DRbwVGhkcac/",
      "https://www.instagram.com/reel/DLg0dx0vqob/",
      "https://www.instagram.com/reel/DCZQ7DISw7i/",
      "https://www.instagram.com/reel/DGX7ypBP7Oc/",
    ],
    []
  );

  const [visibleItems, setVisibleItems] = useState(new Set());
  const reelRefs = useRef([]);
  const observerRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    setVisibleItems((prev) => {
      const next = new Set(prev);
      entries.forEach((entry) => {
        const index = reelRefs.current.indexOf(entry.target);
        if (index !== -1 && entry.isIntersecting) next.add(index);
      });
      return next;
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "100px",
    });

    reelRefs.current.forEach((el) => el && observerRef.current.observe(el));
    return () => observerRef.current.disconnect();
  }, [handleIntersection]);

  const setReelRef = useCallback(
    (index) => (el) => (reelRefs.current[index] = el),
    []
  );

  return (
    <section className="py-24 bg-black text-white" id="teasers">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <span className="italic text-yellow-400 text-lg block">
            In Motion
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Behind the Lens
          </h2>
          <div className="w-24 h-[2px] bg-yellow-500 mx-auto" />
        </header>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramReels.map((url, index) => (
            <ReelItem
              key={`reel-${index}`}
              url={url}
              index={index}
              isVisible={visibleItems.has(index)}
              onRef={setReelRef(index)}
            />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.instagram.com/h_s.photo_graphy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold tracking-wide overflow-hidden transition-all duration-500 hover:bg-black hover:text-yellow-400 border border-yellow-400"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore More on Instagram
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </span>

            {/* Glow */}
            <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default React.memo(TeasersSection);
