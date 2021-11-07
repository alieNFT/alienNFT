var landingSection = gsap.timeline();

landingSection.from(".navbar", { y: -40, opacity: 0, duration: 1 });
landingSection.from(".landing-artwork", { opacity: 0, duration: 0.8 });
landingSection.from(
  ".landing-heading",
  { y: 100, opacity: 0, duration: 0.8 },
  "-=1"
);
landingSection.from(
  ".landing-subheading",
  {
    y: 100,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);
landingSection.from(".landing-cta", { y: 100, opacity: 0, duration: 1 }, "-=1");

var why = gsap.timeline({
  scrollTrigger: ".why",
});
why.from(".why-image", { opacity: 0, duration: 0.7, delay: 0.5 }, "-=1");
why.from(".why-header", { y: 40, opacity: 0, duration: 1 }, "-=0.3");
why.from(".why-desc", { y: 20, opacity: 0, duration: 0.5 });

var quote = gsap.timeline({
  scrollTrigger: ".quote1",
});

quote.from(".quote1text", { y: 200, opacity: 0, duration: 1.2, delay: 0.5 });

var quote = gsap.timeline({
  scrollTrigger: ".quote2",
});

quote.from(".quote2text", { y: 200, opacity: 0, duration: 1.2, delay: 0.5 });

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
const mobileNavLinks = document.querySelectorAll(".mobileNavLinks");
const nftBocks = document.querySelectorAll(".nft-block");
const mobileNav = document.querySelector("#mobileNav");
const marketplacePopup = document.querySelector("#marketplacePopup");
const marketplaceButton = document.querySelector("#marketplaceButton");
const cancelPopup = document.querySelector("#cancelPopup");

Array.from(mobileNavLinks).forEach((navLink) => {
  console.log(navLink);
  navLink.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});

Array.from(nftBocks).forEach((nftBock) => {
  nftBock.addEventListener("mouseenter", (e) => {
    e.currentTarget.children[0].classList.add("hidden");
    e.currentTarget.children[1].classList.remove("hidden");
  });
  nftBock.addEventListener("mouseleave", (e) => {
    e.currentTarget.children[1].classList.add("hidden");
    e.currentTarget.children[0].classList.remove("hidden");
  });
});

openNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

marketplaceButton.addEventListener("click", () => {
  marketplacePopup.classList.remove("hidden");
});

cancelPopup.addEventListener("click", () => {
  marketplacePopup.classList.add("hidden");
});
