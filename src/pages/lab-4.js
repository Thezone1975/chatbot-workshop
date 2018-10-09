import React from 'react'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

import chitchat from '../images/chitchat-nodes.png'

const Lab4 = () => (
  <Layout>
    <h2>Lab 4: Dialog Flow</h2>
    <p>
      With intents and entities under our belts, we can finally look at the
      third component: the dialog.
    </p>
    <p>
      In fact, at this point, our chatbot can understand some intents and detect
      a few specific pieces of information thanks to entities. What we are
      missing is using this information to formulate appropriate responses to
      the user. Will do so in this lab to create a simple, but useful chatbot.
    </p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>
        Create a useful chatbot that leverages the intents and entities we
        created so far;
      </li>
      <li>Better understand how the dialog flow and responses work.</li>
      <li>
        Test our chatbot in the <span className="instruction">Try it out</span>{' '}
        panel.
      </li>
      <li>Take your third graded quiz.</li>
    </ol>

    <h3>Task 1: Create a Dialog and improve the prompt</h3>
    <p>
      Let's kick things off by creating a dialog and a good prompt for our
      chatbot.
    </p>
    <ol>
      <li>
        <strong>
          Click on the <span className="instruction">Dialog</span> section
        </strong>{' '}
        of your workspace.
      </li>
      <li>
        It's empty at the moment. Go ahead and{' '}
        <strong>
          click the <span className="instruction">Create</span> button
        </strong>
        .
      </li>
      <li>
        Take a moment to{' '}
        <strong>
          investigate the default <span className="instruction">Welcome</span>{' '}
          and <span className="instruction">Anything else</span> nodes
        </strong>{' '}
        that were generated.
      </li>
      <li>
        <strong>
          Open the <span className="instruction">Try it out</span>{' '}
        </strong>{' '}
        panel and click on the <span className="instruction">Clear</span> link
        at the top to start testing the chatbot from scratch. Notice anything
        different this time around?
      </li>
      <li>
        Yes, we have a prompt! Unfortunately, the default phrasing is not very
        user friendly. Let's change it. Select the{' '}
        <span className="instruction">Welcome</span> node and edit the response
        to say{' '}
        <code>
          Hello. My name is Florence and I'm a chatbot. How can I help you? You
          can ask me about our store hours and locations.
        </code>{' '}
        Change the name from Florence, to whatever flower-inspired name you
        prefer, to make it yours.
      </li>
      <li>
        <p>
          Click the <span className="instruction">Clear</span> link in the{' '}
          <span className="instruction">Try it out</span> panel once again to
          see the change take effect.
        </p>
        <p>
          Great. We added a bit of antropomorphization, set the expectations
          right by coming clean about our robot nature, and offered some
          guidance to the user, in terms of the scope offered by our chatbot.
        </p>
      </li>
      <li>
        Now try replying <code>hello</code> in the{' '}
        <span className="instruction">Try it out</span> panel. What happens?
        Watson recognized the right intent but doesn't have a node to handle
        greetings, so the fallback node{' '}
        <span className="instruction">Anything else</span> was executed. We'll
        remedy to this in the next task.
      </li>
    </ol>

    <h3>Task 2: Add nodes for chitchat</h3>
    <p>
      We have three chitchat intents, <code>#greetings</code>,{' '}
      <code>#thank_you</code>, and <code>#goodbyes</code>. We now need to have
      nodes that specify what reponse we want to give the user, when such
      intents are detected.
    </p>
    <p>
      We have a couple of strategies possible here. We could create three nodes,
      one for each of these intents. This is the most common and simple
      approach. The other option would be to create a single node for chitchat
      that uses multiple responses (essentially, conditional responses),
      attaching a condition to each response.
    </p>
    <p>
      I would recommend that you stick to the traditional way as it's more
      flexible. It allows us to add more chitchat nodes down the line, as well
      as making the chitchat logic more complex if needed.
    </p>
    <p>
      We want to keep things organized, separating small talk from
      domain-specific nodes. So we'll create a folder for chitchat, and we'll
      create three nodes in it for now. The picture below shows the end result.
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={chitchat}
        alt="Our chitchat nodes"
        title="Our chitchat nodes"
        width="700"
      />
    </p>
    <p>Follow these steps to add it to your chatbot:</p>
    <ol>
      <li>
        Select the <span className="instruction">Welcome</span> node and then{' '}
        <strong>
          click the <span className="instruction">Add folder</span> button
        </strong>
        . This will create a folder underneat the selected node (i.e.,{' '}
        <span className="instruction">Welcome</span>
        ).
      </li>
      <li>
        <strong>
          Name the folder <code>Chitchat</code>
        </strong>
        . You don't need to specify a condition for the folder, as the
        conditions of the children nodes will suffice.
      </li>
      <li>
        With the <span className="instruction">Chitchat</span> folder selected,{' '}
        <strong>
          click the <span className="instruction">Add child node</span> button
        </strong>
        . This will create an empty child node within the folder.
      </li>
      <li>
        <strong>
          Name this node <code>Greetings</code>
        </strong>
        . We want it to be executed when the <code>#greetings</code> intent is
        detected, so under{' '}
        <span className="instruction">If bot recognizes:</span>{' '}
        <strong>
          enter the
          <code>#greetings</code> intent
        </strong>
        . Autocomplete will help you find the intent (not that useful here, but
        quite handy in complex chatbots with many intents.)
      </li>
      <li>
        <p>
          <strong>Enter a few appropriate responses</strong>. The scenario we
          are handling here is one in which we already greeted the user with our
          prompt, and they replied with a greeting. So we should greet them back
          without repeating the prompt verbatim.
        </p>

        <p>
          <strong>Enter a few responses to offer some variation</strong> if we
          get a greeting-happy user. Examples, could be{' '}
          <code>Hi there. How can I help you?</code>,{' '}
          <code>Hello. How may I assist you today?</code>,{' '}
          <code>Hi. What can I help you with?</code>.
        </p>

        <p>
          Normally, I would advise against open-ended questions such as how can
          I help you, but since we already qualified the scope of the chatbot in
          our prompt, we can get away with it here.
        </p>
      </li>
      <li>
        You can leave the response variations set to{' '}
        <span className="instruction">sequential</span> or set them to{' '}
        <span className="instruction">random</span> if you prefer. The third
        option, <span className="instruction">multiline</span> is not applicable
        here, as it would provide a response over multiple lines using each
        response you wrote as its own line, de facto asking the user what is
        essentially, the same question three times at once. 😄
      </li>
      <li>
        After this reponse to the user, we expect them to enter some more
        questions, so you can also{' '}
        <strong>
          leave <span className="instruction">Wait for user input</span>
        </strong>{' '}
        as the final action when executing this node, in the{' '}
        <span className="instruction">And finally</span> section at the bottom
        of the node.
      </li>
      <li>
        Open the <span className="instruction">Try it out</span> panel (if you
        closed it) and click the <span className="instruction">Clear</span> link
        to start a new conversation.{' '}
        <strong>
          Try to reply <code>hi</code> to the chatbot prompt
        </strong>
        . Congratulations, you just had your first conversation with our
        chatbot. It's not a complex interaction, but it's a start.
      </li>
      <li>
        You can close the panel as well as the{' '}
        <span className="instruction">Greetings</span> node (by pressing on the
        big X next to <span className="instruction">Customize</span> link within
        the node).
      </li>
      <li>
        <p>
          With the <span className="instruction">Greetings</span> node selected,{' '}
          <strong>
            click on the <span className="instruction">Add node</span> button
          </strong>
          . This will create an empty peer node below{' '}
          <span className="instruction">Greetings</span>.
        </p>
        <p>
          The order of these chitchat nodes is not that important because they
          are all simple nodes with independent intents. However, order can
          matter in more complex scenarios (as we'll see in a moment) and it
          makes sense to place them in a logical manner that is roughly
          equivalent to how a conversation would go. Greetings first, thank yous
          in the middle, and goodbyes at the end.
        </p>
        <p>
          Go ahead and make this node{' '}
          <strong>
            handle the <code>#thank_you</code> intent
          </strong>
          . For the responses, you'll likely want something like{' '}
          <code>
            You're welcome. Please let me know if you need anything else.
          </code>
          , <code>My pleasure.</code>,{' '}
          <code>
            No problem. Let me know if there is anything else I can help with.
          </code>{' '}
          You could get chicky, and say, <code>I aim to please. 😊</code>{' '}
          depending on how much personality you'd like to inject in your
          chatbot. BTW, yes, emojis are supported.
        </p>
      </li>
      <li>
        <strong>
          Repeat the process for the <code>Goodbyes</code> node
        </strong>{' '}
        which will handle the <code>#goodbyes</code> intent. You can use
        standard polite goodbye responses (like{' '}
        <code>Nice talking to you today.</code>,<code>Have a nice day.</code>,{' '}
        <code>Goodbye.</code>
        etc.)
      </li>
      <li>
        Start a new conversation in the{' '}
        <span className="instruction">Try it out</span> panel and{' '}
        <strong>test all three intents</strong> to ensure you get an appropriate
        response in each case.
      </li>
    </ol>
    <h3>Task 3: Add domain specific nodes</h3>
    <p>
      Chitchat interactions are necessary to make our chatbot more pleasant and
      human-like. However, what makes the chatbot actually useful is its ability
      to answer domain specific questions. That is, business related questions.
    </p>
    <p>
      We defined intents for people enquiring about hours information and
      addresses, and even created an entity to be able to provide
      location-specific answers. However, much like the chitchat intents,
      intents alone don't do much. We'll need to create nodes to handle these
      two business specific intents.
    </p>
    <p>We'll need...</p>
    <h3>Task 4: Take the Module 3 Quiz</h3>
    <p>
      TODO: Explain the setup for the quiz, as it differs from this chatbot.
    </p>
    <p>
      Head over to the{' '}
      <a
        href="https://courses.cognitiveclass.ai/courses/course-v1:CognitiveClass+CB0103EN+v1/courseware/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Build Your Own Chatbot
      </a>{' '}
      course and{' '}
      <strong>
        find the <span className="instruction">Graded Review Questions</span>{' '}
        inside Module 2. Take the quiz
      </strong>
      , just like you did in the previous module. As a reminder, there are no
      trick questions, so go with the answer that appears to make most sense to
      you.
    </p>
    <Alert color="success">
      Now that you know how to work with intents and entities, we can move on to
      the third component that make up chatbots. Namely, the dialog.
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-3">
        Back to Lab 3
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-5">
        Proceed to Lab 5
      </Link>
    </p>
  </Layout>
)

export default Lab4
