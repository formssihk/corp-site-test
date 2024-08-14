import "@/styles/globals.css";
import { DirectusProvider } from "@/provider/DirectusProvider";

export default function App({ Component, pageProps }) {
  return (
    <DirectusProvider url={process.env.DIRECTUS_URL} publicStaticToken={process.env.DIRECTUS_PUBLIC_ACCESS_TOKEN}>
      <Component {...pageProps} />
    </DirectusProvider>
  );
}
