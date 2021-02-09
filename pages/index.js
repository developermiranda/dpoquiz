import { useRouter } from "next/router";
import Button from "../src/components/Button";
import Input from "../src/components/Input";
//importando o componente Head
import Head from "next/head";
//importando o componente
import QuizContainer from "../src/components/QuizContainer";

import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
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
        <Widget>
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
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/developermiranda" />
    </QuizBackground>
  );
}
