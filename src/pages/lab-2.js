import React from 'react'
import courseImage from '../images/how-to-build-a-chatbot.png'
import { Link } from 'gatsby'
import { UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

const Lab2 = () => (
  <Layout>
    <h2>Lab 2: Working with Intents and Entities</h2>
    <p>
      Welcome to your first hands-on lab. I'm sure you're eager to get started.
      Before we can begin to actually build chatbots, however, we'll need to
      take care of a couple of prerequisites for this workshop.
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
        Test intents and entities in the{' '}
        <span className="instruction">Try it</span> panel.
      </li>
      <li>Take your second graded quiz.</li>
    </ol>

    <h3>Task 1: Create a workspace for your chatbot</h3>
    <h3>Task 2: Create, modify, and delete intents</h3>
    <h3>Task 3: Add intents from the Content Catalog</h3>
    <h3>Task 4: Import intents from a CSV file</h3>
    <h3>Task 5: Test intents in the Try it panel</h3>

    <p>
      To create chatbots, we'll use IBM Watson Assistant, an easy to use and
      powerful chatbot service offered on the IBM Cloud. So we need to make sure
      that you have an account with the IBM Cloud.
    </p>

    <h3>Task 6: Take the Module 2 Quiz</h3>
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
      trick questions, so go with the answer that appears to be most logical to
      you.
    </p>
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
