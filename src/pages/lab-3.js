import React from 'react'
import { Link } from 'gatsby'
import { UncontrolledTooltip } from 'reactstrap'
import Layout from '../components/layout'

import showRecommendations from '../images/show-recommendations.png'

const Lab3 = () => (
  <Layout>
    <h2>Lab 3: Working with Entities</h2>
    <p>
      Watson uses intents we trained it on to let us know what the user query is
      about. What does the user want? In the previous lab, we created a few
      chitchat intents, as well as <code>#hours_info</code> and{' '}
      <code>#location_info</code>. If the user greet us, thanks us, wants to
      leave the conversation, ask us about hours of operation, or location
      information, we'll know which <em>intent</em> they had.
    </p>
    <p>
      The next step is to gather specific bits of information provided in the
      question, if any are provided. For that, we'll need <em>entities</em>.
    </p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Create, modify, and delete entities;</li>
      <li>Try out system entities;</li>
      <li>Import and export entities via CSV files;</li>
      <li>
        Test entities in the <span className="instruction">Try it</span> panel;
      </li>
      <li>Take your second graded quiz.</li>
    </ol>

    <h3>Task 1: Create, modify, and delete entities</h3>
    <p>
      Entities recognize and capture specific pieces of information in the user
      input. In our flower shop chain, people asking us about store hours and
      locations might provide a specific location.
    </p>
    <p>
      In our fictious Flower Shop Chain we have stores in Auckland, Wellington,
      Sydney, Melbourne, and Brisbane. So the user might ask,{' '}
      <code>Where is your Wellington store?</code>. We shouldn't ignore that
      information.
    </p>
    <p>
      We can start by creating a <code>@location</code> entity for those cities.
    </p>
    <ol>
      <li>
        <strong>
          Click on <span className="instruction">Entities</span>
        </strong>{' '}
        to enter the entities section.
      </li>
      <li>
        Here, click the Add entity button. Choose <code>@location</code> as the
        entity name. Leave Fuzzy Matching enabled so that we can still detect
        the city name even if the user misspells it. Click the Create entity
        button.
      </li>
      <li>
        You'll be prompted to enter entity values, and possible synonyms. Enter
        Auckland and click Add Value.
      </li>
      <li>
        Repeat the process for Wellington, Sydney, Melbourne, and Brisbane.
      </li>
      <li>
        At any time you can click on an entity value to edit its name or
        synonym. Unlike intenties, entities are allowed to have spaces in them.
        When you first create an entity value, you're given the option to click
        on the Show recommendations button to select some synonyms from a list
        provided by Watson. Try out this feature. If you want to leverage it for
        an existing value, click on the small icon next to it, as shown in the
        picture below.
        <p style={{ textAlign: 'center' }}>
          <img
            src={showRecommendations}
            alt="Synonym recommendations offered by Watson"
            title="Synonym recommendations offered by Watson"
            width="700"
          />
        </p>
      </li>
      <li>
        Use the Try it out panel to test out these cities. Try entering,{' '}
        <code>What are your hours of operation in Auckland</code> and see how
        Watson interprets that input.
      </li>
      <li>
        Awesome. We can now recognize the cities for our stores. But what
        happens when the user enters <code>hours for Christchurch</code> or{' '}
        <code>hours for Perth</code> where we don't have a store? Try it and
        see.
      </li>
      <li>
        You'll notice that since we don't have a entity value for Christchurch
        or Perth, neither will be picked up in an entity value. This is not
        necessarly a problem, because we can structure our chatbot to provide a
        generic, informative response if no recognized location is indicated.
      </li>
      <li>
        Practice creating a new entity of your choice with some values, and then
        deleting it. The process is very similar to that of intents. Inside of
        Entities, you would select the checkmark next to the entity you want to
        delete, and then click the Delete button. (Don't delete @location,
        though.)
      </li>
    </ol>

    <h3>Task 2: Try out system entities</h3>
    <p>
      System entities allow you to easily detect common specific pieces of
      information like dates, times, numbers, currencies, etc. And among
      these... locations. That's right. There is a @sys-location entity that
      will detect locations for us. One that would handle any city (or state,
      country, etc).
    </p>
    <p>
      {' '}
      So in theory we don't even need our @location intent, we could just use
      @sys-location. However, there is one small gotcha worth discussing, as
      we'll see in a moment.{' '}
    </p>
    <ol>
      <li>
        <p>
          To enable @sys-location click on System entities in the Entities
          section of your workspace. Turn on @sys-location. If you open the Try
          it panel now, you'll notice that Watson is now training on this large
          list of standard locations.
        </p>
      </li>
      <li>
        <p>
          Wait for it to finish training and then try entering{' '}
          <code>hours for Auckland</code>. Which entity values are recognized?
        </p>
      </li>
      <li>
        <p>
          You'll notice that both @sys-location:Auckland and @location:Auckland
          are detected. So far so good. Now try, <code>hours for auckland</code>{' '}
          (note the lowercase letter). Which entities are detected?
        </p>
      </li>
      <li>
        <p>
          Unfortunately, only our fuzzy matched entity value is detected. The
          system entity value expects an exact match, capitalization and all. So
          on one hand, we get to detect other cities and locations (try{' '}
          <code>hours for Christchurch</code> again), on the other hand the city
          has to be properly spelled.
        </p>
        <p>
          Depending on your chatbot, one or the other is a bigger compromise. In
          our case, our fictious store has specific cities, so I think that
          opting for our own version of @location makes sense. If the chatbot
          needed to handle an arbitrary number of cities, then the @sys-location
          (warts and all) would still be the best choice (unless we imported a
          large collection of cities via CSV into our own entitiy).
        </p>
        <p>
          Don't get me wrong. System entities are very handy and you should use
          them to make your chatbot smarter. But @sys-location is still in beta
          and has this shortcoming. It will likely be fixed in future versions
          of Watson Assistant, but I wanted to make you aware of it.
        </p>
      </li>
      <li>
        <p>
          Now that you got the gist of how system entities work, go ahead and
          disable @sys-location from the System entities section.
        </p>
      </li>
    </ol>

    <h3>Task 3: Import and export entities via CSV files</h3>
    <p>
      Importing and exporting entities via CSV files works very similarly to
      intents. When you select one or more entities by checking off the
      checkmarks next to them, you'll be offered the ability to export them to
      CSV. Likewise, you can import them by clicking the Import entities button
      next to Add entity.
    </p>
    <p>
      <strong>Click on the button below</strong> to open a CSV file with two new
      entities I prepared (@occasion and @relationship), in a new tab of your
      browser.
    </p>
    <p style={{ textAlign: 'center' }}>
      <a
        className="btn btn-primary"
        href="https://raw.githubusercontent.com/acangiano/chatbot-workshop/master/src/csv/occasion-and-relationship-entities.csv"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open CSV file
      </a>
    </p>
    <p>
      Proceed with importing them by clicking on the Import entities button in
      the Entities section.
    </p>
    <p>
      We'll use these two new entities later in the design of the chatbot. For
      now, it will serve as a good exercise to import entities.
    </p>
    <p>
      The only real difference you need to be aware of lies in the underlying
      structure of the CSV file. For intents, it was example,intent. Entities
      can optionally have synonyms and patterns as well, so the structure is
      different.
    </p>
    <p>
      If you open the CSV file, you'll notice that each line has the entity name
      first, followed by a value, followed by a comma separated list of synonyms
      if any have been provided for that row/value. If a pattern is specified
      instead, it will also appear here. A pattern is an advanced feature that
      allows to detect an entity value based not on a specific string (its
      synonym) but rather a specific pattern like a properly formatted phone
      number, email address, or website address. If you are a programmer, it's
      worth noting that this is based on Regular Expressions. If you are not a
      programmer, you can safely ignore this advanced feature. 😊
    </p>

    <h3>Task 4: Take the Module 2 Quiz</h3>
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
      <Link className="btn btn-secondary" to="/lab-2">
        Back to Lab 2
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-4">
        Proceed to Lab 4
      </Link>
    </p>
  </Layout>
)

export default Lab3
