import Head from "next/head";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>PixelReact</title>
        <meta name="description" content="React app for creating pixel art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center">
        <Editor />
      </main>
    </div>
  );
};

export default Home;
