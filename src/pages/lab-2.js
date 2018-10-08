import React from 'react'
import { Link } from 'gatsby'
import { UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

import tryItOut from '../images/try-it-out-panel.png'
import successfulImport from '../images/successful-import-intents.png'

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
      <li>
        Test intents in the <span className="instruction">Try it</span> panel.
      </li>
      <li>Import and export intents via CSV files;</li>
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

    <h3>Task 2: Create, train, and test intents</h3>

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
        <strong>include at least 5 examples</strong>. Ideally, more. If you make
        a typo in one or two of your examples, don't worry. Keep the typos, as
        your users are likely to do the same mistakes, so this ends up training
        Watson on a more realistic input set. When you are done, you can click
        the back arrow icon at the top to go back to your list of intents.
      </li>
      <li>
        <p>
          Repeat the process to{' '}
          <strong>
            add <code>#thank_you</code> and <code>#goodbyes</code> intents
          </strong>{' '}
          with at least 5 appropriate examples each.
        </p>
        <p>
          At this point, you'll have the most basic chitchat intents a chatbot
          needs to have. The more the merrier, of course, but this will do for
          now.
        </p>
      </li>
      <li>
        To test our intents,{' '}
        <strong>
          click on the <span class="instruction">Try it</span> button
        </strong>{' '}
        in the top right. A chat panel will appear where you can try user input
        and see how Watson analyses the user input and how our chatbot responds.
        We haven't provided responses yet (we'll do so in the Dialog lab) but we
        can still use it to test our intents. If you see a{' '}
        <span class="instruction">Watson is training</span> message, please wait
        for Watson to finish training on your intent examples.
      </li>
      <li>
        Go ahead and{' '}
        <strong>try some greetings, thank you, and goodbye messages</strong> in
        the panel. Feel free to try both examples you provided and expressions
        that you haven't provided as examples.
      </li>
    </ol>
    <p>
      If Watson miscategorized one example, feel free to click on the arrow (V)
      next to the detected intent to assign a different intent. This will add
      your question as an example for the intent automatically for you, further
      training Watson.
    </p>
    <p>
      You'll see a message indicating that the intent correction was submitted
      and that Watson will use it to further training its Machine Learning
      model, as shown in the figure below.
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={tryItOut}
        alt="Manually assigning an intent to a test input"
        title="Manually assigning an intent to a test input"
        width="700"
      />
    </p>
    <p>
      If you do end up correcting some intents, you can click on that intent
      name in the Intents section to verify that the example was indeed added
      automatically for you. If you test the same utterance again, Watson will
      correctly recognize the right intent this time.
    </p>
    <p>
      In the <span class="instruction">Try it</span> panel,{' '}
      <strong>what happens if you try a nonsensical input?</strong> Randomly
      smash on the keyboard if you have to. Personally, I produced the
      beautiful, cat-walking-on-the-keyboard string{' '}
      <code>dljkasdlsa dasldj alskdkas ld</code>. Create your own masterpiece.
      😛
    </p>
    <p>
      Watson will always try its hardest to match the user input to an existing
      intent, even if it's not a perfect match. But if its confidence level in
      the best matching intent is very low (below 20%), it will treat the input
      as <span class="instruction">Irrelevant</span>, as it is likely not
      relevant to our set of intents.
    </p>
    <p>
      In the lab about the Dialog, we'll find out how to handle when the user
      enters a question that is irrelevant or outside the scope of our chatbot.
    </p>
    <p>
      To conclude this task, click on an existing intent of your choice in{' '}
      <span class="instruction">Intents</span>, and{' '}
      <strong>add one more example</strong> to it. Then, select the checkmark
      next to it, and you'll be given the option to delete it (or even move it
      to a different intent). Go ahead and <strong>delete that example</strong>{' '}
      (not the whole intent!)
    </p>
    <p>
      In the future, for more complex intents, you'll be able to add more
      examples that originate from your real customers' conversations with your
      virtual assistant (or your human customer care team), to better train
      Watson on your business-specific intents.
    </p>
    <h3>Task 4: Add intents from the Content Catalog</h3>
    <p>
      IBM provides you with some ready-made intents that might be relevant to
      the scope of your chatbot. To see what's available,{' '}
      <strong>
        click on <span class="instruction">Content Catalog</span>
      </strong>{' '}
      within your workspace.
    </p>
    <p>
      Select one category of your choice (e.g., Banking) and then{' '}
      <strong>
        click on the <span class="instruction">Add to workspace</span> button
      </strong>{' '}
      next to it. Switch back to the <span class="instruction">Intents</span>{' '}
      section and you should see a series of new intents relevant to common
      queries customers may have for the category of your choice. This isn't
      quite a pre-made chatbot but it's a nice starting point, that you can edit
      and adapt as needed. Feel free to try them out in the{' '}
      <span class="instruction">Try it</span> panel.
    </p>
    <p>
      We are not going to use them for our Flower Shop Chatbot so click on the
      checkmarks next to them and{' '}
      <strong>
        press the <span class="instruction">Delete</span> button to remove them
      </strong>
      . (Make sure you keep the chitchat intents we created.) You'll notice how
      you were also given the option to export them to a CSV file, which is
      quite useful when reusing intents across different chatbots. Go ahead and
      <strong>export our chitchat intents</strong> to get some practice with
      this feature.
    </p>
    <p>
      As you can see, it's very easy to create, modify, and delete intents,
      whether they were manually created or imported from the Content Catalog.
    </p>
    <h3>Task 5: Import intents from a CSV file</h3>
    <p>
      There is another way to import intents, and that is from comma separated
      files (i.e., CSV files). This format is particularly handy because it
      allows you to easily export intents (and their examples) stored in a
      spreadsheet. Let's see how this works in practice.
    </p>
    <ol>
      <li>
        <p>
          <strong>Click on the button below</strong> to open a CSV file I
          prepared, in a new tab of your browser.
        </p>
        <p style={{ textAlign: 'center' }}>
          <a
            className="btn btn-primary"
            href="https://raw.githubusercontent.com/acangiano/chatbot-workshop/master/src/csv/hours-and-locations-intents.csv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open CSV file
          </a>
        </p>
        <p>
          As you can see its structure is very simple. Each line of the file has
          an example, comma separated by the intent we want to assign to it.
        </p>
        <p>
          In our Flower Shop Chatbot we want to allow people to enquire about
          hours of operation and addresses of our flower shop stores, so this
          file include examples for both <code>#hours_info</code> and{' '}
          <code>#location_info</code>.
        </p>
        <p>
          Note that the <code>#</code> prefix is not included in the CSV file.
          It will be automatically added by Watson to the intents when importing
          them.
        </p>
      </li>
      <li>
        <strong>Download the file</strong> by pressing <kbd>CRTL</kbd>+
        <kbd>S</kbd> on Windows or{' '}
        <bigger>
          <kbd>&#8984;</kbd>
        </bigger>
        +<kbd>S</kbd> on Mac, or simply select the saving option offered by your
        browser.
      </li>
      <li>
        From the <span class="instruction">Intents</span> section of your
        workspace,{' '}
        <strong>
          click on the <span class="instruction">Import intents</span> icon
        </strong>{' '}
        next to the button to add intents.
      </li>
      <li>
        <strong>
          Select <span class="instruction">Choose a file</span>
        </strong>{' '}
        from the window that appears, and find the CSV file you just downloaded
        in the first step.
      </li>
      <li>
        <strong>
          Click on the <span class="instruction">Import</span> button
        </strong>
        . A report of what was imported will be shown as seen in the picture
        below. Click on <span class="instruction">Done</span> to close the
        window.
      </li>
    </ol>
    <p>
      You now have successfully imported two new intents and their examples to
      train Watson.
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={successfulImport}
        alt="A successful import of intents from CSV files"
        title="A successful import of intents from CSV files"
        width="700"
      />
    </p>
    <p>
      Take a moment to <strong>review the intents that were imported</strong>{' '}
      and the examples for each of them.
    </p>
    <p>
      Next, take them for a spin in the <span class="instruction">Try it</span>{' '}
      panel. <strong>Ask questions like you naturally would</strong> to enquire
      about store hours or address information. Does it recognize the intents we
      imported well enough? Train Watson further by adding your own examples
      directly from the Try it panel when it fails to intepret them correctly.
    </p>
    <p>
      At this point our chatbot understands basic chitchat and it detects when a
      question is about hours of operation vs when it's about location.
    </p>
    <blockquote>
      Having completed this lab, you're well on your way to becoming a buddying
      chatbot builder. Intents really are the most fundamental part of a
      chatbot. If you add the right intents to your chatbot, everything else
      will just fall into place easily. In the next lab, we'll qualify the user
      input further by taking a look at entities.
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
