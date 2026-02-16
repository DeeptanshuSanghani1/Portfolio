const config = {
  // --- 1. Your Basic Info ---
  title: "Deeptanshu Sanghani | Portfolio",
  author: "Deeptanshu Sanghani",
  email: "deeptanshusanghani@gmail.com", // Your email
  site: "https://www.deeptanshusanghani.com/", // We'll update this later

  // --- 2. Your Descriptions (for Google) ---
  description: {
    long: "Explore the portfolio of Deeptanshu Sanghani, a Full-Stack Developer and Backend Engineer specializing in cloud technologies, data engineering, and enterprise applications.",
    short:
      "The portfolio of Deeptanshu Sanghani, Full-Stack Developer and Backend Engineer",
  },

  // --- 3. Your Keywords (for Google) ---
  keywords: [
    "Deeptanshu Sanghani",
    "Deeptanshu",
    "portfolio",
    "Full-Stack Developer",
    "Backend Engineer",
    "Software Engineer",
  ],

  // --- 4. Your Social Links (Very Important!) ---
  social: {
    linkedin: "https://www.linkedin.com/in/deeptanshusanghani/", // Update with actual LinkedIn profile
    github: "https://github.com/DeeptanshuSanghani1", // Your GitHub
  },

  // --- You can leave this part alone ---
  get ogImg() {
    return this.site + "/assets/seo/og-preview.png";
  },
};
export { config };
export const social = config.social;