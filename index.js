var landingSection = gsap.timeline();

landingSection.from(".navbar", { y: -40, opacity: 0, duration: 1 });
landingSection.from(".landing-artwork", { opacity: 0, duration: 0.8 });
landingSection.from(
  ".landing-heading",
  { x: 20, opacity: 0, duration: 0.5 },
  "-=1"
);
landingSection.from(".landing-subheading", {
  x: 200,
  opacity: 0,
  duration: 0.5,
});
landingSection.from(".landing-cta", { x: 20, opacity: 0, duration: 0.5 });

var why = gsap.timeline({
  scrollTrigger: ".why",
});
why.from(".why-image", { opacity: 0, duration: 0.7, delay: 0.5 });
why.from(".why-header", { y: 40, opacity: 0, duration: 1 }, "-=0.3");
why.from(".why-desc", { x: 20, opacity: 0, duration: 0.5 });

var quote = gsap.timeline({
  scrollTrigger: ".quote",
});

quote.from("h3", { x: 300, opacity: 0, duration: 1.2, delay: 0.5 });

var nftDesc = gsap.timeline({
  scrollTrigger: ".nft-desc",
});

nftDesc.from(".nft-desc-header", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
nftDesc.from(".nft-desc-subheader", { x: 20, opacity: 0, duration: 0.5 });
nftDesc.from(".nft-desc-button", { opacity: 0, duration: 0.7 });

var nfts = gsap.timeline({
  scrollTrigger: ".nfts",
});

nfts.from(".nft-1", { opacity: 0, duration: 0.5 });
nfts.from(".nft-2", { opacity: 0, duration: 0.5 });
nfts.from(".nft-3", { opacity: 0, duration: 0.5 });
nfts.from(".nft-4", { opacity: 0, duration: 0.5 });

const openNavButton = document.querySelector("#openNav");
const closeNavButton = document.querySelector("#closeNav");
const mobileNav = document.querySelector("#mobileNav");

openNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});
