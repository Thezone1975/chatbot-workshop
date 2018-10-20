import React from 'react'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

import showRecommendations from '../images/show-recommendations.png'

const Lab3 = () => (
  <Layout>
    <h2>Lab 3: Working with Entities</h2>
    <p>
      Watson leverages intents we define to let us know what the user query is
      about. What does the user want? In the previous lab, we created a few
      chitchat intents, as well as <code>#hours_info</code> and{' '}
      <code>#location_info</code>. If the user greets us, thanks us, wants to
      leave the conversation, ask us about hours of operation, or location
      information, we'll know which <em>intent</em> they had.
    </p>
    <p>
      The next step is to gather specific bits of information given in the
      question, if any are provided. For that, we'll need <em>entities</em>.
    </p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Create, modify, and delete entities;</li>
      <li>
        Test entities in the <span className="instruction">Try it out</span>{' '}
        panel;
      </li>
      <li>Try out system entities;</li>
      <li>Import and export entities via CSV files;</li>
      <li>Learn about synonyms and patterns.</li>
    </ol>

    <h3>Task 1: Create, modify, and delete entities</h3>
    <p>
      Entities recognize and capture specific pieces of information in the user
      input. In our flower shop chain chatbot, people asking us about store
      hours and locations might provide a specific location.
    </p>
    <p>
      In our fictitious Flower Shop Chain we have stores in Auckland,
      Wellington, Sydney, Melbourne, and Brisbane. So a user might ask,{' '}
      <code>Where is your Wellington store?</code>. We shouldn't ignore that
      extra bit of information, so that we can take it into account when we
      formulate a response.
    </p>
    <p>
      We can start by creating a <code>@location</code> entity for those cities.
    </p>
    <ol>
      <li>
        <strong>
          In your workspace, click on{' '}
          <span className="instruction">Entities</span>
        </strong>{' '}
        to enter the entities section.
      </li>
      <li>
        Here,{' '}
        <strong>
          click the <span className="instruction">Add entity</span> button
        </strong>
        . Choose <code>@location</code> as the entity name. Leave{' '}
        <span className="instruction">Fuzzy Matching</span> enabled so that we
        can still detect the city name even if the user misspells it. Finally,{' '}
        <strong>
          click the <span className="instruction">Create entity</span> button
        </strong>
        .
      </li>
      <li>
        You'll be prompted to enter entity values, and possible synonyms.{' '}
        <p>
          <strong>
            Enter
            <code>Auckland</code> and click{' '}
            <span className="instruction">Add Value</span>
          </strong>
          .
        </p>
        <p>
          Generally speaking you won't need a synonym for cities, but you might
          include some if the city has common nicknames, if people refer to your
          store location by its street or neighbourhood in the city, and so on.
          Small towns can also act as synonyms. After all, if people are asking
          about your store in a nearby town, they might be happy with an answer
          for the nearest city.
        </p>
        <p>
          Essentially, a synonym is not necessarly the dictionary definition of
          synonym. Though those are good candidates for synonyms as well, when
          the context makes sense. For example, we could have an entity called{' '}
          <code>@relationship</code> and the entity value{' '}
          <code>@relationship:mother</code> with <code>mom</code> as a synonym
          for that value. When the user enters a question including the word{' '}
          <code>mom</code>, Watson will detect <code>@relationship:mother</code>{' '}
          (the entity value for that synonym).
        </p>
      </li>
      <li>
        <strong>Repeat the process</strong> for <code>Wellington</code>,{' '}
        <code>Sydney</code>, <code>Melbourne</code>, and <code>Brisbane</code>.
      </li>
      <li>
        At any time you can click on an entity value to edit its name or
        synonym. Entities values are allowed to have spaces in them. When you
        first create an entity value, you're given the option to click on the{' '}
        <span className="instruction">Show recommendations</span> button to
        select some synonyms from a list provided by Watson.{' '}
        <strong>Try out this feature.</strong> If you want to leverage it for an
        existing entity value, click on the small Watson icon next to it, as
        shown in the picture below.
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
        Use the <span className="instruction">Try it out</span> panel to{' '}
        <strong>test out these entity values</strong>. Try entering,{' '}
        <code>What are your hours of operation in Auckland</code> and see how
        Watson classifies that user question.
      </li>
      <li>
        <p>
          Awesome. We can now recognize the cities corresponding to our stores.
          But what happens when the user enters{' '}
          <code>hours for Christchurch</code> or <code>hours for Perth</code>{' '}
          where we don't have a store? <strong>Try it and see</strong>.
        </p>
        <p>
          You'll notice that since we don't have a entity value for Christchurch
          or Perth, neither will be picked up as an entity value. This is not
          necessarly a problem, because we can structure our chatbot to provide
          a generic, informative response if no recognized location is
          indicated.
        </p>
      </li>
      <li>
        <strong>
          Practice creating a new entity of your choice with some values, and
          then deleting it.
        </strong>{' '}
        The process is very similar to that of intents. Inside of{' '}
        <span className="instruction">Entities</span>, you would select the
        checkmark next to the entity you want to delete, and then click the{' '}
        <span className="instruction">Delete</span> button that appears. (Don't
        delete <code>@location</code> though.)
      </li>
    </ol>

    <h3>Task 2: Try out system entities</h3>
    <p>
      System entities allow you to easily detect common specific pieces of
      information like dates, times, numbers, currencies, etc. And among
      these... locations. That's right. There is a <code>@sys-location</code>{' '}
      entity that will detect locations for us. One that would handle any city
      (or state, country, etc).
    </p>
    <p>
      So in theory we don't even need our <code>@location</code> entity, we
      could just use
      <code>@sys-location</code>. However, there is one small caveat worth
      discussing, as we'll see in a moment.
    </p>
    <ol>
      <li>
        <p>
          To enable <code>@sys-location</code> click on{' '}
          <span className="instruction">System entities</span> in the{' '}
          <span className="instruction">Entities</span> section of your
          workspace.{' '}
          <strong>
            Turn on <code>@sys-location</code>
          </strong>
          . Take a moment to see what other system entities exist. If you open
          the <span className="instruction">Try it out</span> panel quickly
          enough, you'll notice that Watson is now training on this large list
          of built-in locations.
        </p>
      </li>
      <li>
        <p>
          Wait for it to finish training and then{' '}
          <strong>
            try entering <code>hours for Sydney</code>
          </strong>
          . Which entity values are recognized?
        </p>
      </li>
      <li>
        <p>
          You'll notice that both <code>@sys-location:Sydney</code> and{' '}
          <code>@location:Sydney</code>
          are detected. So far so good.{' '}
          <strong>
            Now try, <code>hours for sydnei</code>
          </strong>{' '}
          (note the typo). Which entities are detected? [
          <span
            style={{
              color: 'blue',
              fontWeight: 'bold',
            }}
            href="#"
            id="recall-input"
          >
            Tip
          </span>
          ]
          <UncontrolledTooltip placement="top" target="recall-input">
            You can use your keyboard <kbd>UP</kbd> key to recall previous
            inputs in the <span className="instruction">Try it out</span> panel.
          </UncontrolledTooltip>
        </p>
      </li>
      <li>
        <p>
          Unfortunately, only our fuzzy matched entity value is detected! The
          system entity value expects an exact match, for some cities it even
          requires the correct capitalization (i.e., <code>auckland</code>, all
          lowercase, won't be detected as <code>@sys-location:Auckland</code>
          ). So on one hand, we get to detect other cities and locations (
          <strong>
            try <code>hours for Perth</code>
          </strong>{' '}
          again). On the other hand, the city has to be properly spelled (and
          often capitalized) by the user.
        </p>
        <p>
          Depending on your chatbot, one or the other is a bigger compromise. In
          our case, our fictitious store has specific cities, so I think that
          opting for our own version of <code>@location</code> makes sense. If
          the chatbot needed to handle an arbitrary number of cities, then the{' '}
          <code>@sys-location</code>
          (warts and all) would be the best choice (unless we imported a large
          collection of cities via CSV into our own <code>@location</code>{' '}
          entity in that scenario, which is also an option).
        </p>
        <p>
          Don't get me wrong. System entities are very handy and you should use
          them to make your chatbot smarter. But <code>@sys-location</code> is
          still in beta and has this shortcoming. It will likely be made more
          forgiving in future versions of Watson Assistant, but I wanted to make
          you aware of the current limitations.
        </p>
      </li>
      <li>
        <p>
          Now that you got the gist of how system entities work,{' '}
          <strong>
            go ahead and disable <code>@sys-location</code>
          </strong>{' '}
          from the <span className="instruction">System entities</span> section,
          as we'll simply use our own <code>@location</code> entity instead.
        </p>
      </li>
    </ol>

    <h3>Task 3: Import and export entities via CSV files</h3>
    <p>
      Importing and exporting entities via CSV files works very similarly to
      intents. When you select one or more entities by checking off the
      checkmarks next to them, you'll be offered the ability to export them to
      CSV. Likewise, you can import them by clicking the{' '}
      <span className="instruction">Import entities</span> button next to{' '}
      <span className="instruction">Add entity</span>.
    </p>
    <p>
      <strong>Click on the button below</strong> to open a CSV file with two new
      entities I prepared (<code>@occasion</code> and <code>@relationship</code>
      ), in a new tab of your browser.
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
      Save the file on your disk and then{' '}
      <strong>proceed with importing the new entities</strong> by clicking on
      the <span className="instruction">Import entities</span> button in the{' '}
      <span className="instruction">Entities</span> section.
    </p>
    <p>
      We'll use these two new entities later in the chatbot. For now, it will
      serve as a good exercise to import entities.
    </p>
    <p>
      The only real difference you need to be aware of, as far as importing
      goes, lies in the structure of the CSV file. For intents, it was{' '}
      <code>example,intent</code>. Entities can optionally have synonyms and
      patterns as well, so the structure is different.
    </p>
    <p>
      If you open the CSV file I provided you with (or simply click the button
      above again), you'll notice that each line has the entity name first,
      followed by a value, followed by a comma separated list of synonyms if any
      have been provided for that row/entity value. If a pattern is specified
      instead, it will also appear here.
    </p>
    <p>
      A pattern is an advanced feature that allows you to detect an entity value
      based not on a specific string (e.g., its synonym) but rather on a
      specific pattern like a properly formatted phone number, email address, or
      website address. If you are a programmer, it's worth noting that you
      specify your pattern as a Regular Expressions (e.g.,{' '}
      <code>04\d&#123;2&#125;\s\d&#123;3&#125;\s\d&#123;3&#125;</code> to detect
      that the number provided is an Australian mobile phone number). If you are
      not a programmer, you can safely ignore this advanced feature. 😊
    </p>
    <Alert color="success">
      Now that you know how to work with intents and entities, we can move on to
      the third component that make up chatbots. Namely, the dialog.
    </Alert>
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
