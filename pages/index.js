import { useRouter } from "next/router";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
import Link from "../src/components/Link";
//importando o componente Head
import Head from "next/head";
//importando o componente
import QuizContainer from "../src/components/QuizContainer";

import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
import { motion } from "framer-motion";
import db from "../db.json";

export default function Home() {
  const router = useRouter(); //hooks de roteamento
  const [name, setName] = React.useState(""); //hooks trabalharemos
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Data Protection Officer</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quiz Data Protection Officer</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                // const name = "Daniel";
                router.push(`/quiz?name=${name}`);
                console.log("Fazendo uma submissão por meio do react");
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) =>
                  setName(infosDoEvento.target.value)
                }
                placeholder="DPO, entre com o seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "")
                  .split(".");

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/developermiranda" />
    </QuizBackground>
  );
}
