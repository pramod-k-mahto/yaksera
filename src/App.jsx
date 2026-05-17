import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { useEffect } from "react";
import Anthropic from "@anthropic-ai/sdk";
function App() {
  const getData = async () => {
    const client = new Anthropic();
    const msg = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: "Hello, Claude",
        },
      ],
    });
    console.log(msg.content[0].text);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
