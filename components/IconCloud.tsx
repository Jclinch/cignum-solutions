import { IconCloud } from "@/components/magicui/icon-cloud";

// ✅ Crypto/Finance/Blockchain-focused icons
const slugs = [
  "bitcoin",
  "ethereum",
  "tether",
  "binance",
  "usdcoin",
  "solana",
  "tron",
  "litecoin",
  "ripple",
  "cardano",
  "stellar",
  "dogecoin",
  "uniswap",
  "polkadot",
  "chainlink",
  "avalanche",
  "arbitrum",
  "monero",
  "shiba",
  "crypto-com",
  "blockchain-dot-com",
  "bitfinex",
  "trustwallet",
  "metamask",
  "ledger",
  "binancecoin",
  "coinbase",
  "okx",
  "kraken",
  "bitget",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
