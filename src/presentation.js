import React, { Component } from "react";

// spectacle-core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// theme
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    aqua: "#3A9BB9",
    black: "#111111",
    darkRed: "#7D1513",
    medRed: "#CC2936",
    navy: "#08415C",
    offwhite: "#EFEFEF",
    primary: "#EFEFEF"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

// image assets
const images = {
  CyaL8r: require("./assets/cya.png"),
  DumbBot: require("./assets/machinespam.png"),
  Fail: require("./assets/smart-robot.gif"),
  FormidaLogo: require("./assets/formidableWhite.png"),
  Functions: require("./assets/fn-notation.png"),
  Funnel: require("./assets/funnel.gif"),
  LetsGo: require("./assets/lets-go.gif"),
  MistakenTweet: require("./assets/mistaken_tweet.png"),
  NNDiagram: require("./assets/nn_diagram.png"),
  NaiveBayes: require("./assets/bayes_theorem.jpg"),
  Now: require("./assets/red_lobster.png"),
  Sorting: require("./assets/sorting.png"),
  Supervised: require("./assets/supervised.png"),
  TLDR: require("./assets/tldr_types.png"),
  Throwback: require("./assets/deep-blue.jpg"),
  Tradeoff: require("./assets/tradeoff.png"),
  Unsupervised: require("./assets/big_data.jpg")
};

// code assets
const codeSamples = {
  OGBotCode: require("./assets/code/dumb_bot.png")
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["fade"]} theme={theme}>
        {/** INTRODUCTION */}
        <Slide bgColor="aqua">
          <Heading textColor="offwhite" fit={true}>
            Using JavaScript
          </Heading>
          <Heading textColor="offwhite" fit={true}>
            to Teach Machines
          </Heading>
          <Heading textColor="offwhite" fit={true}>
            How to Do{" "}
            <span style={{ textDecorationLine: "line-through" }}>
              Basic Things
            </span>
          </Heading>
          <Heading textColor="offwhite" fit={true}>
            Cool Shit
          </Heading>
        </Slide>

        {/** ABOUT ME */}
        <Slide bgColor="darkRed">
          <Text textColor="offwhite" fit={true}>
            Hi! I'm Kylie
          </Text>
          <Image src={images.FormidaLogo} height="300px" />
          <Appear>
            <Heading size={5} textColor="offwhite">
              <i>We're hiring!</i>
            </Heading>
          </Appear>
          <Notes>
            {
              "Formidable is a Seattle and London-based engineering consultancy and open source software organization specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem."
            }
          </Notes>
        </Slide>

        {/** HIGH-LEVEL OVERVIEW */}
        <Slide bgColor="offwhite" align="center">
          <Heading textColor="navy">Our Agenda</Heading>
          <Text lineHeight={200} textColor="offwhite">
            placeholder
          </Text>
          <Appear>
            <Text textColor="aqua">
              How is Machine Learning different from Artificial Intelligence?
            </Text>
          </Appear>
          <Text lineHeight={100} textColor="offwhite">
            placeholder
          </Text>
          <Appear>
            <Text textColor="aqua">
              What are some different Learning Types?
            </Text>
          </Appear>
          <Text lineHeight={200} textColor="offwhite">
            placeholder
          </Text>
          <Appear>
            <Text textColor="aqua">
              How do we decide which Learning Type to implement?
            </Text>
          </Appear>
          <Text lineHeight={200} textColor="offwhite">
            placeholder
          </Text>
          <Appear>
            <Text textColor="aqua">Seriously? JavaScript?</Text>
          </Appear>
        </Slide>

        {/** LET'S GET STARTED */}
        <Slide bgColor="navy" align="center center">
          <Image height="500px" src={images.LetsGo} />
          <Notes>{"Let's do this"}</Notes>
        </Slide>

        {/** DEFINE MACHINE LEARNING */}
        <Slide bgColor="offwhite">
          <Text textColor="medRed">What is Machine Learning, anyway?</Text>
          <Text textColor="offwhite">placeholder</Text>
          <Appear>
            <Image src={images.Fail} />
          </Appear>
          <Notes>
            <List>
              <ListItem>we interact with it regularly</ListItem>
              <ListItem>infer from the name</ListItem>
              <ListItem>
                have always had access to it, but collaboration is key
              </ListItem>
              <ListItem>shared knowledge</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="medRed">
          <Appear>
            <BlockQuote>
              <Quote>
                "The ability to learn without being explicitly programmed."
              </Quote>
              <Text textColor="medRed">placeholder</Text>
              <Cite>Arthur Samuel</Cite>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide bgColor="medRed">
          <Heading size={4} textColor="offwhite">
            Think: Function Notation
          </Heading>
          <Text textColor="medRed">placeholder</Text>
          <Appear>
            <Image src={images.Functions} />
          </Appear>
          <Notes>
            <List>
              <ListItem>list of inputs, x</ListItem>
              <ListItem>list of outputs, y</ListItem>
              <ListItem>we would normally write the func</ListItem>
              <ListItem>
                instead, we are training the machine to approximate the function
                that converts x to y
              </ListItem>
            </List>
          </Notes>
        </Slide>

        {/** DEFINE ARTIFICIAL INTELLIGENCE */}
        <Slide>
          <Heading size={4} textColor="medRed">
            Machine Learning
          </Heading>
          <Heading size={1} textColor="medRed">
            paves the path
          </Heading>
          <Heading size={4} textColor="medRed">
            to Artificial Intelligence
          </Heading>
        </Slide>

        {/** SO WHAT? */}
        <Slide bgColor="navy">
          <Heading textColor="offwhite" size={1}>
            But how?
          </Heading>
        </Slide>

        <Slide bgColor="navy">
          <Heading fit={true}>Supervised Learning</Heading>
          <Text textColor="navy">placeholder</Text>
          <Layout>
            <Fill>
              <Image src={images.Supervised} height={"400px"} />
            </Fill>
            <Fill>
              <List textColor="offwhite">
                <ListItem>Humans</ListItem>
                <ListItem>Linear Regression</ListItem>
                <ListItem>Classification</ListItem>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <List>
              <ListItem>humans teaching machines</ListItem>
              <ListItem>what is important and what isn't</ListItem>
              <ListItem>guidance</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="navy">
          <Heading fit={true}>Unsupervised Learning</Heading>
          <Text textColor="navy">placeholder</Text>
          <Layout>
            <Fill>
              <List textColor="offwhite">
                <ListItem>Great for big data</ListItem>
                <ListItem>Exploratory analysis</ListItem>
                <ListItem>Anomaly detection</ListItem>
                <ListItem>Clustering</ListItem>
              </List>
            </Fill>
            <Fill>
              <Image src={images.Unsupervised} />
            </Fill>
          </Layout>
          <Notes>
            <List>
              <ListItem>set out on its own</ListItem>
              <ListItem>loose constraints</ListItem>
              <ListItem>too much data for humans to process</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="navy">
          <Image src={images.TLDR} width={"740px"} />
          <Notes>
            <List>
              <ListItem>
                to better understand the learning types, we can look at the data
              </ListItem>
              <ListItem>discrete: individual, specific data points</ListItem>
              <ListItem>continuous: wide-ranging values</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** ABOUT THE FIRST DEMO */}
        <Slide bgColor="aqua">
          <Heading size={3} textColor="white">
            Not Smart:
          </Heading>
          <Text textColor="aqua">placeholder</Text>
          <Image src={images.DumbBot} />
          <Text textColor="aqua">placeholder</Text>
          <Heading size={3} textColor="white">
            this Twitter Bot
          </Heading>
        </Slide>

        {/** LET'S LOOK AT THE CODE */}
        <Slide bgColor="aqua">
          <Image src={codeSamples.OGBotCode} width="610px" />
          <Notes>
            <List>
              <ListItem>known function for input, output</ListItem>
              <ListItem>does exactly what we want it to</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** WHAT CHANGES CAN WE MAKE TO THE BOT */}
        <Slide bgColor="aqua">
          <Heading textColor="offwhite" fit={true}>
            How can we make this bot smarter?
          </Heading>
          <Text textColor="aqua">placeholder</Text>
          <Appear>
            <Text textAlign="center" textColor="offwhite">
              → <i>Clustering?</i>
            </Text>
          </Appear>
          <Appear>
            <Text textAlign="center" textColor="offwhite">
              → <i>Anomaly detection?</i>
            </Text>
          </Appear>
          <Appear>
            <Text textAlign="center" textColor="offwhite">
              → <i>Regression?</i>
            </Text>
          </Appear>
          <Appear>
            <Text textAlign="center" textColor="offwhite">
              → <i>Classification?</i>
            </Text>
          </Appear>
        </Slide>

        {/** DESCRIBE BAYES */}
        <Slide bgColor="aqua">
          <Heading fit={true} textColor="offwhite">
            Bias-Variance Tradeoff
          </Heading>
          <Text textColor="aqua">placeholder</Text>
          <Image src={images.Tradeoff} width="600px" />
          <Cite textSize="12px">http://scott.fortmann-roe.com/</Cite>
          <Notes>
            <List>
              <ListItem>high variance --> consistent BUT inaccurate</ListItem>
              <ListItem>
                high bias --> also bad: accurate BUT inconsistent
              </ListItem>
              <ListItem>not enough complexity, underfit</ListItem>
              <ListItem>too much, overfit</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** DESCRIBE BAYES */}
        <Slide bgColor="medRed">
          <Heading textColor="offwhite" size={4}>
            Naive Bayes
          </Heading>
          <Heading textColor="offwhite" size={6}>
            A Linear Classifier
          </Heading>
          <Text textColor="medRed">placeholder</Text>
          <Image src={images.NaiveBayes} width="500px" />
        </Slide>

        {/** ABOUT THE SECOND DEMO */}
        <Slide bgColor="medRed">
          <Image src={images.Funnel} width={"500px"} />
          <Image src={images.Sorting} />
        </Slide>

        {/** LOOK AT THE CODE */}
        <Slide bgColor="medRed">
          <Heading size={4} textColor="offwhite">
            Room for Error
          </Heading>
          <Text textColor="medRed">placeholder</Text>
          <Image src={images.MistakenTweet} />
          <Notes>
            <List>
              <ListItem>how can we address this?</ListItem>
              <ListItem>human language is weird</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** DEFINE DEEP LEARNING */}
        <Slide bgColor="offwhite">
          <Heading textColor="medRed">Deep Learning</Heading>
        </Slide>

        {/** EXAMPLES OF DEEP LEARNING IN THE WILD: PAST & FUTURE */}
        <Slide bgColor="offwhite">
          <Heading textColor="medRed" size={4}>
            Then
          </Heading>
          <Text textColor="offwhite">placeholder</Text>
          <Image src={images.Throwback} />
        </Slide>

        {/** INTRODUCE THE FINAL DEMO */}
        <Slide bgColor="offwhite">
          <Heading textColor="medRed" size={4}>
            Now
          </Heading>
          <Text textColor="offwhite">placeholder</Text>
          <Image src={images.Now} />
        </Slide>

        {/** DEFINE NEURAL NETWORK TYPES */}
        <Slide bgColor="offwhite">
          <Layout>
            <Fill>
              <Heading textColor="medRed">ANN</Heading>
              <Appear>
                <Text textColor="medRed">Artificial Neural Network</Text>
              </Appear>
            </Fill>
            <Fill>
              <Heading textColor="medRed">CNN</Heading>
              <Appear>
                <Text textColor="medRed">Convolutional Neural Network</Text>
              </Appear>
            </Fill>
          </Layout>
          <Notes>{"CNN assumes data is an image"}</Notes>
        </Slide>

        {/** MANY LAYERS */}
        <Slide bgColor="offwhite">
          <Image src={images.NNDiagram} />
          <Notes>
            <List>
              <ListItem>a bunch of little maps</ListItem>
              <ListItem>teach themselves purely by looking at data</ListItem>
              <ListItem>
                capable of learning in a nonlinear way --> they can spot
                non-obvious features
              </ListItem>
              <ListItem>pooling --> parses into more digestible form</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** WHY JAVASCRIPT? */}
        <Slide bgColor="medRed">
          <Heading fit={true}>But... JavaScript?</Heading>
          <Notes>{"reinventing the wheel"}</Notes>
        </Slide>

        {/** THANKS TO THESE LIBRARIES */}
        <Slide bgColor="medRed">
          <Heading size={3} textColor="offwhite">
            Shoutout to
          </Heading>
          <List textAlign="center" textColor="offwhite">
            <ListItem>{"https://botnik.org/"}</ListItem>
            <ListItem>{"https://github.com/mljs/ml"}</ListItem>
            <ListItem>{"https://github.com/tensorflow/tensorflow"}</ListItem>
            <ListItem>{"https://github.com/janhuenermann/neurojs"}</ListItem>
            <ListItem>{"https://github.com/ttezel/twit"}</ListItem>
          </List>
        </Slide>

        {/** FINAL SLIDE :wave: */}
        <Slide bgColor="offwhite">
          <Layout>
            <Fill>
              <Image width="400px" src={images.CyaL8r} />
            </Fill>
            <Fill>
              <Text textColor="offwhite">placeholder</Text>
              <Heading textColor="black">Thank you!</Heading>
            </Fill>
          </Layout>
          <Text textColor="offwhite">placeholder</Text>
          <Heading size={5}>@kyliestew on Twitter</Heading>
          <Heading size={5}>@kale-stew on Github</Heading>
        </Slide>
      </Deck>
    );
  }
}
