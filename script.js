// Replace this sample content with your own details before deploying.
const profileData = {
  name: "Cris Nathan Villanueva",
  title: "IT Entrepreneur",
  company: "Self-Employed",
  bio: "I'm an IT student based in the Philippines with a growing interest in technology, business, and creative ventures. I enjoy learning, building ideas, and creating things that bring value to people.",
  phone: "0924 018 6263",
  email: "crisnathanbatuto08@gmail.com",
  website: "https://nathandevmode.vercel.app/",
  address: "",
  messenger: "",
  photo: "image/profile.png",
  cover: "image/coverphoto.png",
  specialties: ["Information Technology", "Digital products", "Creative Etrepreneurship"],
  social: {
    facebook: "https://www.facebook.com/C.Nathan.Villanueva",
    instagram: "https://www.instagram.com/tannnn.ig/?hl=en",
    tiktok: "https://www.tiktok.com/@itstannnv?_r=1&_t=ZS-9BcmBAOQZxk",
    linkedin: "",
    youtube: "",
    telegram: "",
    x: "",
    pinterest: "",
  },
};

const toast = document.querySelector("#toast");
const socialPlatforms = [
  {
    key: "facebook",
    label: "Facebook",
    iconPath: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    key: "instagram",
    label: "Instagram",
    iconPath: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
  {
    key: "tiktok",
    label: "TikTok",
    iconPath: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    key: "youtube",
    label: "YouTube",
    iconPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    key: "telegram",
    label: "Telegram",
    iconPath: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
  {
    key: "x",
    label: "X",
    iconPath: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    key: "pinterest",
    label: "Pinterest",
    iconPath: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
  },
];
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function safeWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

function safeAssetUrl(value) {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value, document.baseURI);
    return ["https:", "http:", "file:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

const profile = {
  ...profileData,
  photo: safeAssetUrl(profileData.photo),
  cover: safeAssetUrl(profileData.cover),
  website: safeWebUrl(profileData.website),
  messenger: safeWebUrl(profileData.messenger),
  social: Object.fromEntries(
    socialPlatforms.map(({ key }) => [key, safeWebUrl(profileData.social[key])]),
  ),
};

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toLocaleUpperCase())
    .join("") || "?";
}

function appendProfileLink(container, label, abbreviation, href, external = false, iconPath = "") {
  const link = document.createElement("a");
  link.className = "profile-link";
  link.href = href;
  if (external) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  const icon = document.createElement("span");
  icon.className = "profile-link-icon";
  icon.setAttribute("aria-hidden", "true");
  if (iconPath) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("focusable", "false");
    path.setAttribute("d", iconPath);
    svg.append(path);
    icon.append(svg);
  } else {
    icon.textContent = abbreviation;
  }

  const title = document.createElement("span");
  title.className = "profile-link-label";
  title.textContent = label;

  link.append(icon, title);
  container.append(link);
}

function renderLinkList(container, items, { alwaysVisible = false, emptyMessage = "" } = {}) {
  container.replaceChildren();
  container.closest(".link-group").hidden = !alwaysVisible && items.length === 0;

  if (items.length === 0 && emptyMessage) {
    const message = document.createElement("p");
    message.className = "empty-links";
    message.textContent = emptyMessage;
    container.append(message);
    return;
  }

  for (const item of items) {
    appendProfileLink(container, item.label, item.abbreviation, item.href, item.external, item.iconPath);
  }
}

function phoneForLink(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits ? (phone.trim().startsWith("+") ? `+${digits}` : digits) : "";
}

function renderProfile() {
  const name = profile.name.trim() || "Your name";
  document.querySelector("#name-value").textContent = name;
  document.querySelector("#profile-name").setAttribute("aria-label", name);
  document.querySelector("#title-value").textContent = profile.title;
  document.querySelector("#company-value").textContent = profile.company;
  document.querySelector("#role-separator").hidden = !profile.title || !profile.company;
  document.querySelector(".role").hidden = !profile.title && !profile.company;
  document.querySelector("#bio-value").textContent = profile.bio;
  document.querySelector("#address-value").textContent = profile.address;
  document.querySelector("#location-row").hidden = !profile.address;
  document.title = `${name} — Digital Card`;
  document.querySelector('meta[name="description"]').content =
    `A personal digital calling card for ${name}.`;

  const initials = document.querySelector("#avatar-initials");
  const avatar = document.querySelector("#profile-avatar");
  const photo = document.querySelector("#avatar-photo");
  initials.textContent = getInitials(name);
  avatar.setAttribute("aria-label", `${name} profile picture`);
  if (profile.photo) {
    photo.src = profile.photo;
    photo.alt = `${name} profile`;
    photo.hidden = false;
    initials.hidden = true;
  } else {
    photo.removeAttribute("src");
    photo.alt = "";
    photo.hidden = true;
    initials.hidden = false;
  }

  const cover = document.querySelector("#profile-cover");
  cover.classList.toggle("has-photo", Boolean(profile.cover));
  cover.style.backgroundImage = profile.cover
    ? `linear-gradient(rgba(11, 11, 11, 0.1), rgba(11, 11, 11, 0.24)), url("${profile.cover}")`
    : "";
  cover.setAttribute("aria-label", profile.cover ? "Profile cover photo" : "Abstract monochrome charcoal cover artwork");

  const website = document.querySelector("#website-link");
  website.hidden = !profile.website;
  website.href = profile.website || "#";
  website.textContent = profile.website ? new URL(profile.website).hostname.replace(/^www\./, "") : "";

  const emailContact = document.querySelector("#email-contact");
  emailContact.hidden = !profile.email;
  emailContact.href = profile.email ? `mailto:${profile.email}` : "#";
  document.querySelector("#email-value").textContent = profile.email;
  const copyEmail = document.querySelector("#copy-email");
  copyEmail.hidden = !profile.email;

  const phone = phoneForLink(profile.phone);
  const phoneContact = document.querySelector("#phone-contact");
  phoneContact.hidden = !phone;
  phoneContact.href = phone ? `tel:${phone}` : "#";
  document.querySelector("#phone-value").textContent = profile.phone;

  document.querySelector("#specialties-list").replaceChildren(
    ...profile.specialties.map((specialty) => {
      const item = document.createElement("span");
      item.textContent = specialty;
      return item;
    }),
  );
  document.querySelector("#specialties-list").hidden = profile.specialties.length === 0;

  const methods = [];
  if (phone) {
    methods.push({ label: "Phone call", abbreviation: "☎", href: `tel:${phone}` });
    methods.push({ label: "SMS", abbreviation: "SMS", href: `sms:${phone}` });
    const whatsappNumber = phone.replace(/\D/g, "");
    if (whatsappNumber.length >= 5) {
      methods.push({ label: "WhatsApp", abbreviation: "wa", href: `https://wa.me/${whatsappNumber}` });
    }
  }
  if (profile.email) {
    methods.push({ label: "Email", abbreviation: "@", href: `mailto:${profile.email}` });
  }
  if (profile.messenger) {
    methods.push({ label: "Messenger", abbreviation: "m", href: profile.messenger, external: true });
  }
  if (profile.address) {
    methods.push({
      label: "Google Maps",
      abbreviation: "↗",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address)}`,
      external: true,
    });
  }
  if (profile.website) {
    methods.push({ label: "Website", abbreviation: "↗", href: profile.website, external: true });
  }
  renderLinkList(document.querySelector("#contact-method-list"), methods);

  const socialLinks = socialPlatforms
    .filter((platform) => profile.social[platform.key])
    .map((platform) => ({
      label: platform.label,
      iconPath: platform.iconPath,
      href: profile.social[platform.key],
      external: true,
    }));
  renderLinkList(document.querySelector("#social-link-list"), socialLinks, {
    alwaysVisible: true,
    emptyMessage: "Your social links will appear here.",
  });
}

function escapeVCard(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/([,;])/g, "\\$1");
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();

  if (!copied) {
    throw new Error("Copy is not supported in this browser.");
  }
}

document.querySelector("#copy-email").addEventListener("click", async () => {
  try {
    await copyText(profile.email);
    showToast("Email address copied");
  } catch (error) {
    console.error("Could not copy the email address.", error);
    showToast("Couldn't copy the email address");
  }
});

document.querySelector("#share-button").addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: `Meet ${profile.name}${profile.title ? ` — ${profile.title}` : ""}`,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Could not share the profile.", error);
        showToast("Couldn't share this profile");
      }
    }
    return;
  }

  try {
    await copyText(shareData.url);
    showToast("Profile link copied");
  } catch (error) {
    console.error("Could not copy the profile link.", error);
    showToast("Couldn't copy the profile link");
  }
});

document.querySelector("#save-contact").addEventListener("click", () => {
  const nameParts = profile.name.split(/\s+/);
  const lastName = nameParts.length > 1 ? nameParts.pop() : "";
  const firstName = nameParts.join(" ");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(lastName)};${escapeVCard(firstName)};;;`,
    `FN:${escapeVCard(profile.name)}`,
  ];

  if (profile.company) lines.push(`ORG:${escapeVCard(profile.company)}`);
  if (profile.title) lines.push(`TITLE:${escapeVCard(profile.title)}`);
  if (profile.email) lines.push(`EMAIL;TYPE=INTERNET,WORK:${escapeVCard(profile.email)}`);
  if (profile.phone) lines.push(`TEL;TYPE=CELL:${escapeVCard(profile.phone)}`);
  if (profile.website) lines.push(`URL:${escapeVCard(profile.website)}`);
  if (profile.address) lines.push(`ADR;TYPE=WORK:;;${escapeVCard(profile.address)};;;;`);
  lines.push("END:VCARD");

  const file = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(file);
  const downloadLink = document.createElement("a");
  const filename = profile.name.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "contact";

  downloadLink.href = downloadUrl;
  downloadLink.download = `${filename}.vcf`;
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
  showToast("Contact card downloaded");
});

renderProfile();
