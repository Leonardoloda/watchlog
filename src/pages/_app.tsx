import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>WatchLog - Your Movie, Series, and Anime Tracker</title>
      <meta name="description" content="Keep a record of all the movies, animes and series you've seen." />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Keep track of all the movies, series, and animes you've watched with WatchLog. A simple and efficient way to manage your entertainment history."
      />
      <meta name="keywords" content="watchlog, movie tracker, series tracker, anime tracker, watch history" />
      <meta name="author" content="Leo" />
      <Component {...pageProps} />
    </>
  );
}
