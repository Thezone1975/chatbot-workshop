import React from 'react'
import courseImage from '../images/how-to-build-a-chatbot.png'
import { Link } from 'gatsby'
import { UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

const Lab2 = () => (
  <Layout>
    <h2>Lab 2: Working with Intents</h2>
    <p>
      Great job on completing the first lab. We're now ready to tackle the first
      and most important component of a chatbot, Intents.
    </p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Create a workspace for your chatbot;</li>
      <li>Create, modify, and delete intents;</li>
      <li>
        Add intents from the{' '}
        <span className="instruction">Content Catalog</span>;
      </li>
      <li>Import and export intents via CSV files;</li>
      <li>
        Test intents in the <span className="instruction">Try it</span> panel.
      </li>
    </ol>

    <h3>Task 1: Create a workspace for your chatbot</h3>
    <p>
      This lab is all about intents, but in order to work with them, we'll need
      to create a workspace which will contain said intents (along with entities
      and the dialog).
    </p>
    <p>
      Although it's possible to create elaborate chatbots that use multiple
      workspaces, it is common to have just one workspace per chatbot. In other
      words, for now you can simply{' '}
      <strong>think of your workspace as your chatbot</strong>.
    </p>
    <ol>
      <li>
        From the <span className="instruction">Workspaces</span> page of your
        Watson Assistant instance [
        <span
          style={{
            color: 'blue',
            fontWeight: 'bold',
          }}
          href="#"
          id="no-bookmark"
        >
          Tip
        </span>
        ]
        <UncontrolledTooltip placement="top" target="no-bookmark">
          If you didn't bookmark your{' '}
          <span className="instruction">Workspaces</span> page in the previous
          lab, you can find your way back by visiting your dashboard and
          clicking on the Watson Assistant service you created.
        </UncontrolledTooltip>
        ,{' '}
        <strong>
          click on the <span className="instruction">Create</span> button
        </strong>{' '}
        within the <span className="instruction">Create a new workspace</span>{' '}
        tile. [
        <span
          style={{
            color: 'blue',
            fontWeight: 'bold',
          }}
          href="#"
          id="ignore-customer-service"
        >
          Note
        </span>
        ]
        <UncontrolledTooltip placement="top" target="ignore-customer-service">
          You'll also see a Customer Service sample that you can create by
          clicking <span className="instruction">Edit sample</span>. Ignore it
          for now, as we'll take a look at it later in the labs.
        </UncontrolledTooltip>
      </li>
      <li>
        You'll be offered to enter a <span className="instruction">Name</span>{' '}
        and an optional <span className="instruction">Description</span>. Enter{' '}
        <code>Flower Shop Chatbot</code> or whatever you prefer for the name.
        For the description, feel free to add{' '}
        <code>A chatbot for a flower shop chain.</code> or something similar.
      </li>
      <li>
        We'll create the chatbot in English, but{' '}
        <strong>which other languages are also supported?</strong> Find out from
        this window.
      </li>
      <li>
        Ensuring <span className="instruction">English (U.S.)</span> is
        selected,{' '}
        <strong>
          click on the <span className="instruction">Create</span> button
        </strong>{' '}
        to generate the empty workspace for your chatbot.
      </li>
      <li>
        Practice going back and forth between{' '}
        <span className="instruction">Workspaces</span> and the workspace you
        just created (e.g., <code>Flower Shop Chatbot</code>
        ).
      </li>
    </ol>

    <h3>Task 2: Create, modify, and delete intents</h3>

    <p>
      Upon creation of the workspace, you'll find yourself on the{' '}
      <span className="instruction">Intents</span> section of your workspace.
      Here you can add intents in several ways. In this task, we'll focus on the
      most common way. That is, manually adding intents.
    </p>

    <ol>
      <li>
        <strong>
          Click on the <span className="instruction">Add intent</span> button.
        </strong>
      </li>
      <li>
        What happens if you try to call the intent <code>#greeting us</code>{' '}
        with a space in the name?
      </li>
      <li>
        <strong>
          Define a <code>#greetings</code> intent
        </strong>
        . Optionally add an appropriate description as well, and then{' '}
        <strong>
          click <span className="instruction">Create intent</span>
        </strong>
        .
      </li>
      <li>
        You'll be prompted to create some examples to train Watson on the
        concept of greetings. Try examples such as <code>hello</code>,
        <code>hi</code>, <code>hey</code>, <code>good morning</code>,
        <code>good afternoon</code>, and so on. You don't need to go crazy,
        especially on such a simple intent, but you should always{' '}
        <strong>include at least 5 examples</strong>. Ideally, more.
      </li>
    </ol>

    <h3>Task 3: Add intents from the Content Catalog</h3>

    <h3>Task 4: Import intents from a CSV file</h3>

    <h3>Task 5: Test intents in the Try it panel</h3>

    <blockquote>
      Having completed this lab, you're well on your way to becoming a buddying
      chatbot builder. Intents really are the most fundamental part of a
      chatbot. If you add the right intents to your chatbot, everything else
      will just fall into place easily.
    </blockquote>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-1">
        Back to Lab 1
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-3">
        Proceed to Lab 3
      </Link>
    </p>
  </Layout>
)

export default Lab2
