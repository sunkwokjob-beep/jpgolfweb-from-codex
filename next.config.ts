import type { NextConfig } from "next";

const [githubOwner = "", githubRepo = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isUserPage = githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const basePath = isGithubPages && githubRepo && !isUserPage ? `/${githubRepo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
};

export default nextConfig;
