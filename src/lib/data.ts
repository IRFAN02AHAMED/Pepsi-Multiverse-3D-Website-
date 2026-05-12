export type FlavorCollection = {
  id: string;
  name: string;
  category: "CORE FLAVORS" | "LIMITED DIMENSIONS" | "ENERGY LEVELS";
  profile: string;
  description?: string;
  image: string;
  color: string;
  colSpan?: number;
};

export const collectionsData: FlavorCollection[] = [
  {
    id: "original",
    name: "ORIGINAL",
    category: "CORE FLAVORS",
    profile: "CL-01",
    description: "The genesis dimension. A perfectly balanced harmonic of cola nut and citrus, refined across countless temporal shifts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANYVPZSPHHD2_KBqCqKC2gUEkhaRnntUApxVnCn9yuVW8rq1BWh57V9EFH4UKQZW7odVYsOXjI6WBF_TR_W814GnJP-9Wy5bX23tq5FacU_ta8eT7ApqvIsI55xJIJmtUPvjCk9xHjV-VU_iAWEH6Mm6ye3PD3Gk-All1Ez21yAfSJh_7AAssotrWJfGdFSsY35CSyKS5tITuHKsfqMWDgT2HU6ejKQKai2IewzUme_xcbwaog1Olo7PLvEinA6EZThIWrlqCUgOq6",
    color: "primary",
    colSpan: 8,
  },
  {
    id: "zero-sugar",
    name: "ZERO SUGAR",
    category: "CORE FLAVORS",
    profile: "ZERO-X",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCppoAoBgFG7gUXMCGGxcnPM5pGgdQISwXir2ODYHuGFgvrkNQkrymri8-BSf8LU-_EAT-q9lEoRjW0mYZYu6Lss7I5y97AHO71eijyd-ho1lDgf8rgzbB-UWKa4lyws3tbU_ZRAtnEvgAWWPZHWEmg5MggDGszXznKoPZuhCUMnjL87KKzmXoOi1zgjEZ-6US1jhlNVqKU3XKNE-GXefj_G-5sBHD9TbZ9o71_gvRuiGi214GUo9JsCm-pToMnVF5ouwQsuNURE6ED",
    color: "gray",
    colSpan: 4,
  },
  {
    id: "wild-cherry",
    name: "WILD CHERRY",
    category: "CORE FLAVORS",
    profile: "CH-44",
    description: "Explosive crimson energy surges through this high-intensity dimension.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGvnjcap5__J6TwQRHCZkN4emv78iDhlKgCNUYRDEKCjx_GB7cz3KiXNs0kRU-J2z51DVbheESieQYUXqFtS3ASqU-SVOAYfEIRU84M2_URmoudRQw20spzoygAfXgV3TA8qxeZBzFwfEIQhQnGO1VjpFWJh5yKw59uFNWYVy-hNE-OwymnqqmeSlGbiwArmYFvir6ABY5GKkxzjZeJZiqgRogW6U7-OdAmCDPE6peK0kQ9xhZum9r0MIYV7EeKCSH7yKvfdWF-u-K",
    color: "secondary",
    colSpan: 4,
  },
  {
    id: "electric-limited",
    name: "ELECTRIC EDITION",
    category: "LIMITED DIMENSIONS",
    profile: "VOLTAGE: 9000.E",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TSlL2vajLLW8dl0INXreI4Llg3Ni70rFC6mwlaxvShenRRFQZt8Sfj7Zbu4ov92EUdznOGpteYTdrVp1P5-Pav629C8b7lSks7JfxAgvSHQDpbgtRu2Ng3657w1TOoZsrr2hoghSfssJoMiqGdpXHj61v7RoQjC56sCFc3t0ofrdhef34KRazOUKyTKIv2ji9tSbFerNI4pzsNk4qNHGaybhBcrhaWKNgQi221NQKs38qQ_hDryGxa9JEKeDtFNazQ3VoWdqAMh1",
    color: "tertiary",
    colSpan: 8,
  },
  {
    id: "lime",
    name: "LIME",
    category: "CORE FLAVORS",
    profile: "NEON-88 PROFILE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMgUdQ-AAnlSeU48FMhJXZIEwL8idYSNA4R5S4b2QODjYxJkEyUHRfheks4X4U5iZFrsA-1aXU0fKQENOAjwOVYRrr61uDR-6bBbO9Dy0uSsHOTlxMAZna3RoOR9wqjV9uyMl3fI1zxMe6dpTUoZI3e__dwznlBP7-3c_KHcR1CtjjiilI_H6jvxH9-2yyyYzbHqytl1g8Aeal0zEMmdqHu20TPQSSyCTeDlhp54A03ZWDSHLwc2buGqL02fOXWJ-p3jC00WmGKXux",
    color: "green",
    colSpan: 3,
  },
  {
    id: "mango",
    name: "MANGO",
    category: "CORE FLAVORS",
    profile: "TROPIC-S9 PROFILE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4v8mm63jHvixfJfeNWtFXivJh-5a50HUcImec3HgyH_rDlJpGFidHam5FiuB17bVDlNXPB9gkhBBdA-6j7QDna2M9F7H2JqLIa0wYXSaORnR7VkJV57CIikKAYjr4tMwHq3BGFV8dMuScN16nAOYO-0xDzk6QAhbIkPVLeuj0ygDlY1wmC0jdTVz6WYR92JNFRYWrlbtRoiA0j_hEfxMLShQoMRrZNI7uSpLDstAe0acPUfaxO8CobyxcczApfblX3VMadDtEmBl",
    color: "orange",
    colSpan: 3,
  },
  {
    id: "blue",
    name: "BLUE",
    category: "CORE FLAVORS",
    profile: "COBALT-VX PROFILE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDijQCV7si4nMNm1DnVwo_n3KxTxEvqqUgEX0VgfgHyh9ublBXZvg2M8B7EdVq1xX8kJA7FUL5eU5SLK2vMoysQgDJ40Tn0-PXbwidMIjMijwe4j81vcM16ESeY4P1UUW2Kuc8oYs8ZSgwQw7rpEKZnPwPsAd7Bc6VOsAi7EHyx5EGAnCLWBr8VzmhjZ1gTqabBsTx5K9vMG2tOfzKyWK_N_8VoLmPJu3btUe3g3-1ISZJU8zlLOLyr_ER8ydlaZ1u8bnsRZr_gdUH7",
    color: "blue",
    colSpan: 3,
  },
  {
    id: "nitro",
    name: "NITRO",
    category: "ENERGY LEVELS",
    profile: "VELOCITY-MAX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFV_g3duxssAhGmmjP5KIZi1c6DEDC9lr_sv0jn-rHtLoEsJZM10nLGs05mc2p-VrarqDmHgfz6OLg3W2o57r8ITf0RL4pV4jKoHfzHyxFdVA0cosQS628RU_euzH1F1zvBL-kEz11yeIQCLlXabK-2pGzLn8gVnfliFoYGlA-dcy2ab_yMZg62RixlvkikPSb7dKOWcVK0SwdyRTKlcMHet1erY_h5NGjwFcLwXvpug4UoIV5jDWixQ7WawFWirqqcPmm5RqD2DLk",
    color: "purple",
    colSpan: 3,
  },
  {
    id: "vanilla",
    name: "VANILLA",
    category: "CORE FLAVORS",
    profile: "SMOOTH SYNTH-V",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDriPVBqdAAQAlTwTcW9oOlWdDbXG15hkqjwpr-ocbfD2okLAZdEsprLD48Wwj8g3Z0BTno3-V5SQuUZXuc5ElafO7Kx2Yt_Rmd19MTwu8bq8gw7kz1w7Ui00L7ihtpPiFFZ3ojFMTLrExt7sORpWAibEaZ_aq-Qpn3eBdVV0Xaik-D_C-jkWWxaUyGJZedSdNgqyz-0iWD4TDIEYT2PnkfohWdZGQhJcjepXKrNwFaDWxyO5VrmOEleuD8-n8b_SHV9TXYHRF7gHv-",
    color: "yellow",
    colSpan: 4,
  },
  {
    id: "max",
    name: "MAX",
    category: "ENERGY LEVELS",
    profile: "ULTRA ENERGIZED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb6W_5oi5rY8M78F4ypbm1YpOalzXvYXjjbfrAKafQMeSdxYN5YHwosAvCnawjqzGPpYA7qfI4PUbofxuCnYaMB4bI2z2qAaGXnpbKgrL5TNbRFvz7cM68ZTsEzkgAHiRwYEquwuVpvDLR6OoTn4p8xSnY2aax9W2-aT8myWcsiF0i8wpddQ5LHl9A-NU1jyxNdwwoIA_Dh5BaziHbExLWiLyx1Hngg_AmvoJE_8WrtA1H6H3XwC5zxkwoY-TBb4HZvY9vw8REGQcn",
    color: "red",
    colSpan: 4,
  },
];
