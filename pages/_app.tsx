import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";

const TinaWrapper = dynamic(() => import("../components/tina-wrapper"));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return (
      <TinaWrapper>
        <Component {...pageProps} />
      </TinaWrapper>
    );
  }

  return <Component {...pageProps} />;
}
