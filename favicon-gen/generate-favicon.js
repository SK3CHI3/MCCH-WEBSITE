import favicons from "favicons";
import fs from "fs-extra";
import path from "path";

const source = path.resolve(__dirname, "../public/favicon.ico");
const outputPath = path.resolve(__dirname, "../public");
const htmlPath = path.resolve(__dirname, "../index.html");

const configuration = {
  path: "/", // Path for overriding default icons path
  appName: "Motherly Care Children's Home & School Centre",
  appShortName: "MCCH",
  appDescription: "Nurturing hope and building futures for vulnerable children in Kenya.",
  developerName: "Motherly Care Children's Home",
  developerURL: null, // prevent retrieving from the nearest package.json
  background: "#ffffff",
  theme_color: "#ffffff",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.0",
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false
  }
};

async function generateFavicons() {
  try {
    const response = await favicons(source, configuration);
    // Write images
    for (const image of response.images) {
      await fs.writeFile(path.join(outputPath, image.name), image.contents);
    }
    // Write files (manifest, browserconfig)
    for (const file of response.files) {
      await fs.writeFile(path.join(outputPath, file.name), file.contents);
    }
    // Update HTML
    let html = await fs.readFile(htmlPath, "utf8");
    // Remove old favicon links
    html = html.replace(/<link rel="icon"[^>]*>\s*/g, "");
    // Insert new favicon HTML before </head>
    html = html.replace(/<\/head>/i, response.html.join("\n") + "\n</head>");
    await fs.writeFile(htmlPath, html);
    console.log("Favicons generated and index.html updated.");
  } catch (err) {
    console.error("Error generating favicons:", err);
  }
}

generateFavicons();
