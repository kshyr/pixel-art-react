import Head from "next/head";
import Editor from "../components/Editor";

const Home = () => {
  const name = "name"
  let scaled = []
  for (let i=0; i<name.length;i++) {
    scaled.push(<div className="w-4 h-4 hover:scale-150 transition">{name[i]}</div>)
  }

  return (
    <div className="">
      <Head>
        <title>PixelReact</title>
        <meta name="description" content="React app for creating pixel art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center">
        {scaled.map((a) => a)}
        <Editor />
      </main>
    </div>
  );
}

export default Home;