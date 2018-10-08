import React from 'react'
import courseImage from '../images/how-to-build-a-chatbot.png'
import { Link } from 'gatsby'
import { UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

const Lab4 = () => (
  <Layout>
    <h2>Lab 4: Dialog Flow</h2>
    <p>Lorem ipsum...</p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Create, modify, and delete entities;</li>
      <li>Try out system entities;</li>
      <li>Import and export entities via CSV files;</li>
      <li>
        Test entities in the <span className="instruction">Try it out</span>{' '}
        panel;
      </li>
      <li>Take your second graded quiz.</li>
    </ol>

    <h3>Task 1: Create, modify, and delete entities</h3>
    <p>Lore ipsum...</p>

    <h3>Task 2: Try out system entities</h3>
    <h3>Task 3: Import and export entities via CSV files</h3>
    <h3>Task 4: Test entities in the Try it out panel</h3>

    <h3>Task 5: Take the Module 2 Quiz</h3>
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
    <blockquote>
      Now that you know how to work with intents and entities, we can move on to
      the third component that make up chatbots. Namely, the dialog.
    </blockquote>
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
