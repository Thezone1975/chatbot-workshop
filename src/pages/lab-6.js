import React from 'react'
import { Link } from 'gatsby'
import { Alert } from 'reactstrap'

import Layout from '../components/layout'

import noMemory from '../images/no-memory.png'
import cityDetection from '../images/city-detection.png'
import withMemory from '../images/with-memory.png'
import newLocationProvided from '../images/new-location-provided.png'
import collectName from '../images/collect-name.png'
import goodbyeName from '../images/goodbye-name.png'
import sampleSlot from '../images/sample-slot.png'
import refactoredHours from '../images/refactored-hours.png'
import testingSlots from '../images/testing-slots.png'
import watsonRude from '../images/watson-rude.png'
import configuringSlot from '../images/configuring-slot.png'
import watsonLessRude from '../images/watson-less-rude.png'
import digressionReturn from '../images/digression-return.png'

const Lab6 = () => (
  <Layout>
    <h2>Lab 6: Let's improve it</h2>
    <p>
      By now you know the essentials of chatbot building. There are however some
      more advanced concepts that will enable you to create better and smarter
      chatbots.
    </p>
    <p>
      I could list them all here at once, but I think it makes more sense to
      organically introduce them in this lab as their need arises in the process
      of improving our chatbot.
    </p>
    <p>
      Keep in mind that some of these concepts are tougher to get, particularly
      if you have no prior programming experience. So don't be discouraged if
      you don't fully get everything right away.
    </p>
    <p>
      You can try things, test to see if they work, and if they don't, try
      something else. That's why the{' '}
      <span className="instruction">Try it out</span> panel is so useful. It
      allows you to build chatbots one feature at the time. Stick with it, and
      if you practice, you'll quickly become familiar with the advanced
      concepts.
    </p>
    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Learn about several features of Watson Assistant;</li>
      <li>Improve the chatbot we've built so far;</li>
      <li>Complete the quizzes and exam for the online course.</li>
    </ol>
    <h3>Task 1: Remember the city with context variables</h3>
    <p>
      Whenever a user enters a new input, the intent and entities that are
      detected don't stick around for the rest of the conversation. They exist
      at the moment, for the current input, and are forgotten as the user types
      more questions.
    </p>
    <p>
      This is generally fine, but it limits the chatbot ability to appear
      smarter and remembering the context of the conversation so far. For
      example, consider the following interaction:
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={noMemory}
        alt="No memory of the previous interaction is shown here"
        title="No memory of the previous interaction is shown here"
        width="700"
      />
    </p>
    <p>
      A human customer agent responding to the second question would have
      inferred that the user is asking about the hours of operation for the city
      they just enquired about in the previous question (i.e., Sydney). However,
      the entity detected in the first input only lives for the duration of that
      input, so our chatbot has no memory of it when the user enters a second
      question.
    </p>
    <p>
      How can we store this information so it's available for the duration of
      the conversation? Enter the concept of context variables, which allows us
      to do just that. As we go about collecting information from the user, we
      can store them in the <span className="instruction">Context</span> and
      then reuse it when it makes sense.
    </p>
    <p>
      One way to achieve this is to create a passtrhough node that checks for
      the <code>@location</code> entity and sets it to <code>$city</code> if one
      is detected. It then hands off the execution to the rest of the nodes as
      if this node didn't exist.
    </p>
    <p>Let's see how this would work in practice.</p>
    <ol>
      <li>
        In the <span className="instruction">Dialog</span> section of your
        workspace, select the <span className="instruction">Welcome</span> node
        and then{' '}
        <strong>
          click <span className="instruction">Add node</span>
        </strong>{' '}
        to create a sibiling node underneath (as a reminder, all nodes must be
        contained between the <span className="instruction">Welcome</span> and
        the <span className="instruction">Anything else</span> node).
      </li>
      <li>
        Call the node <code>Assign City</code> or something similar.{' '}
        <strong>
          Set the condition to <code>@location</code>.
        </strong>{' '}
        Delete the response as we don't want this node to issue the response,
        only to set the variable in the context.
      </li>
      <li>
        Next click on the three dots to the right of{' '}
        <span className="instruction">Then respond with:</span> and{' '}
        <strong>
          select <span className="instruction">Open context editor</span>
        </strong>
        .
      </li>
      <li>
        <p>
          You'll be offered the ability to set one or more context variables
          whenever this node is executed.{' '}
          <strong>
            Enter <code>$city</code> for the variable name, and{' '}
            <code>@location</code> for the value.
          </strong>
        </p>
        <p>
          In the <span className="instruction">And finally</span> section we
          don't want to wait for the user input (they already gave us an input
          to process) we just want to jump to the rest of the nodes as if
          nothing happened. To do so{' '}
          <strong>
            select <span className="instruction">Jump to...</span>
          </strong>{' '}
          from the drop down list. You'll be asked to specify which node to jump
          to. <strong>Select the first node just below the current one</strong>{' '}
          (i.e., <span className="instruction">Hours of Operation</span>
          ). You'll then be asked to specify what to do after the jump. Wait for
          the user input? No. Jumping to the response directly? No.{' '}
          <strong>
            What we want is{' '}
            <span className="instruction">If bot recognizes (condition)</span>
          </strong>{' '}
          so that this node can be evaluated as it normally would.
        </p>
        <p>
          To recap, our node detects if there is a <code>@location</code>{' '}
          specified in the input. If there is we execute the node which does
          nothing but set the context variable <code>$city</code> to the entity
          value (e.g., <code>Sydney</code>
          ). Then we jump to evaluating the condition of the first node beneath
          us so that the flow is the same as if this context variable assigning
          node wasn't there. If that node's condition is successful it will be
          executed. If not, the nodes beneath will be evaluated in their order
          of appearance. If none of the nodes satisfy the current input, we hit
          the fallback <span className="instruction">Anything else</span> node
          as usual.
        </p>
        <p>
          Your <span className="instruction">Assign City</span> node should look
          like shown in the image below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={cityDetection}
            alt="The city detection node"
            title="The city detection node"
            width="700"
          />
        </p>
      </li>
      <li>
        <p>
          Head over to the <span className="instruction">Try it out</span> panel
          and{' '}
          <strong>
            ask <code>What are your hours of operation?</code>
          </strong>
          . Click on <span className="instruction">Manage Context</span> at the
          top of the panel to see the content of the{' '}
          <span className="instruction">Context</span> (i.e., its variables).
        </p>
        <p>
          The <code>$timezone</code> variable will already be set for you
          automatically, but because we didn't specify a location, the{' '}
          <span className="instruction">Assign City</span> node was not
          executed, and therefore no <code>$city</code> context variable was
          set.
        </p>
      </li>
      <li>
        Close the context and now{' '}
        <strong>
          try entering <code>What are your hours of operation in Sydney?</code>
        </strong>{' '}
        in input. Next, click on{' '}
        <span className="instruction">Manage Context</span> again. You'll notice
        that this time the <code>$city</code> context variable has been set to
        the entity value (i.e., the string <code>"Sydney"</code>
        ). We'll have access to this variable for the entire duration of the
        conversation with the user (or until we set its value to something
        else). It's worth noting that pressing{' '}
        <span className="instruction">Clear</span> in the panel starts a new
        conversation, and so context variables are cleared as well. Go head and
        close the context manager again.
      </li>
      <li>
        We want to make sure that <code>$city</code> variable is set whether it
        was specified along with a request for hours information (as we already
        did) or for location addresses. So as a sanity check,{' '}
        <strong>
          try <code>where is your Brisbane store?</code>
        </strong>
        . You should see that the city in the context now changes to the string{' '}
        <code>"Brisbane"</code>.
      </li>
      <li>
        <p>
          Alright, we now store city in our trusty <code>$city</code> context
          variable. So we should change our{' '}
          <span className="instruction">Location Provided</span> child nodes to
          make use of it.
        </p>
        <p>
          There is an easy way to do this. Simply{' '}
          <strong>
            replace <code>@location</code> with <code>$city</code> for every
            occurence
          </strong>{' '}
          in the two
          <span className="instruction">Location Provided</span> child nodes as
          shown in the image below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={newLocationProvided}
            alt="Leveraging the $city context variable in the node"
            title="Leveraging the $city context variable in the node"
            width="700"
          />
        </p>
        <p>
          <strong>
            Make sure you repeat this process for both{' '}
            <span className="instruction">Location Provided</span> child nodes.
          </strong>
        </p>
      </li>
      <li>
        <p>
          Next, test the original interaction again.{' '}
          <strong>
            Enter, <code>where is your Sydney store?</code> followed by{' '}
            <code>What are the hours of operation?</code>.
          </strong>{' '}
          You should now see a smarter response as shown in the image below!
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={withMemory}
            alt="The improved chatbot interaction"
            title="The improved chatbot interaction"
            width="700"
          />
        </p>
      </li>
      <li>
        <p>
          But wait... now that we have the <code>$city</code> variables, can we
          use it to help our business even further? It would be a nice touch to
          tell the user we hope they'll visit our store when they wave us
          goodbye.
        </p>
        <p>
          Simply{' '}
          <strong>
            change the <span className="instruction">Goodbyes</span> node
            responses to include the <code>$city</code> variable.
          </strong>{' '}
          If it's set to a specific city, it will shown. If it's not set, it
          will not be displayed. So go ahead and change the first response for
          that node to{' '}
          <code>
            Nice talking to you today. We hope you visit our $city store.
          </code>{' '}
          If the city is set to, say, Sydney, the response to the user will be{' '}
          <em>
            Nice talking to you today. We hope you visit our Sydney store.
          </em>{' '}
          If no city is set, simply{' '}
          <em>Nice talking to you today. We hope you visit our store.</em> A
          small, but still nice touch that invites our customers to shop with
          us.
        </p>
        <p>
          Go head and{' '}
          <strong>
            test that it works in the{' '}
            <span className="instruction">Try it out</span> panel
          </strong>
          . Remember to use the <span className="instruction">Clear</span> link
          at the top to clear your variables whenever you are running a new
          test.
        </p>
        <p>
          Context variables are quite useful, as I hope this small example
          allowed to illustrate.
        </p>
      </li>
    </ol>
    <h3>Task 2: Collect the user name with &lt;? input.text ?&gt;</h3>
    <p>
      Sometimes you'll see chatbots asking for the user name, so as to make the
      interaction more personable. We know that we'd want to store it in a
      context variable once we acquire it, so that we can refer to it throughout
      the conversation to sound more friendly. However, how would we go about
      collecting the name?
    </p>
    <ol>
      <li>
        Since we are dealing with names,{' '}
        <strong>
          let's start by enabling the <code>@sys-person</code> entity
        </strong>{' '}
        from the <span className="instruction">System entities</span> section.
        Watson will start training (as expected).
      </li>
      <li>
        Back in the <span className="instruction">Dialog</span>, select the{' '}
        <span className="instruction">Welcome</span> node. We need to change the
        prompt so that it asks for a name.{' '}
        <strong>
          Enter,{' '}
          <code>
            Hello. My name is Florence and I'm a chatbot. What name can I call
            you by?
          </code>
        </strong>
      </li>
      <li>
        <strong>We need a child node to actually collect the name</strong> (the
        answer to our question, in other words). So go ahead and create a child
        node under <span className="instruction">Welcome</span>. Call it{' '}
        <code>Collect Name</code>. For the condition we want to detect that a{' '}
        <code>@sys-person</code> name was provided.
      </li>
      <li>
        Click on the three dots icon in the response section and open the
        context editor.{' '}
        <strong>
          Set the context variable <code>$name</code> to the value{' '}
          <code>@sys-person</code>.
        </strong>
      </li>
      <li>
        Next, we want to reply to the user from this node, so{' '}
        <strong>
          add the following response,{' '}
          <code>
            Nice to meet you $name. How can I help you? You can ask me about our
            store hours and locations.
          </code>
        </strong>
      </li>
      <li>
        <p>
          Use the <span className="instruction">Try it out</span> panel to{' '}
          <strong>test out the interaction</strong>, as shown below. (Click{' '}
          <span className="instruction">Clear</span> to start a brand new
          conversation.)
        </p>

        <p style={{ textAlign: 'center' }}>
          <img
            src={collectName}
            alt="Testing out the name collection"
            title="Testing out the name collection"
            width="700"
          />
        </p>

        <p>
          Nice! We are all set, right? Well, not so fast. You might have spotted
          the problem with your own name. We live in a beautiful and diverse
          world, and people have a variety of names. If you try it with the
          name, <code>Reyansh</code> it won't detect it. Heck, if you try{' '}
          <code>antonio</code> with a lowercase <em>a</em> it won't detect the
          name (I fully believe this latter limitation will be lifted in the
          future, but the former is much harder to address).
        </p>
        <p>
          So we have something that sort of works, provided the name is common
          enough and properly capitalized. If that's not the case, the
          experience we provide is... poor at best, ending up with{' '}
          <em>I don't understand.</em> type of responses to the user's own name
          (the sweetest sound to their ears).
        </p>
        <p>
          We have a couple of possible approaches. Both valid. The first one is
          to forget about collecting the name. We simply revert to the previous
          prompt, get rid of the child node, and that might be good enough for
          our chatbot.
        </p>
        <p>
          The second approach is to take what the user enters, verbatim. In
          other words, we are collecting whatever answer the user provides and
          storing it exactly as stated. The only downside to this is that the
          user might say, <em>I don't want to tell you</em> and we'll end up
          saying, <em>Nice to meet you I don't want to tell you.</em> Which is
          amusing, but an argument could be made that the user asked for it.
          Technically, we could implement even more sophisticated logic to
          detect such responses (with an intent) and not store the name if we
          get a flippant reply from the user, but it might be a refinement for a
          much later version of our chatbot.
        </p>
        <p>
          At any rate, let's see how to collect the user's input exactly as
          provided. Select the <span className="instruction">Collect Name</span>{' '}
          node and{' '}
          <strong>
            change the condition from <code>@sys-person</code> to{' '}
            <code>true</code>
          </strong>{' '}
          as we want to always collect the name no matter what the user replies
          to the prompt for their name. Watson will store the current user input
          in <code>input.text</code>. So{' '}
          <strong>
            change the value of the <code>$name</code> context variable to{' '}
            <code>&lt;? input.text ?&gt;</code>
          </strong>
          . The reason why we need the special syntax is because we don't want
          to say <em>Nice to meet you input.text.</em> but rather we are asking
          Watson to give us the actual value.
        </p>
        <p>
          Doing so will collect the user input and assign it to the name. If you
          want to always capitalize the name, so that <code>antonio</code> is
          stored as <code>Antonio</code>, you can use a bit of code{' '}
          <code>
            &lt;? input.text.substring(0, 1).toUpperCase() +
            input.text.substring(1) ?&gt;
          </code>{' '}
          that will tranform it for you. If you are not a programmer, don't
          worry too much if you don't understand the details. Simply know that
          it capitalizes the input text and you can copy and paste it whenever
          you have such a need.
        </p>
      </li>
      <li>
        <p>
          Now that you collected the name,{' '}
          <strong>
            use <code>$name</code>
            in the reponses
          </strong>{' '}
          for <span className="instruction">Greetings</span>,{' '}
          <span className="instruction">Thank you</span>, and{' '}
          <span className="instruction">Goodbyes</span> responses (the last one
          of which is shown below).
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={goodbyeName}
            alt="Testing out the goodbye node"
            title="Testing out the goodbye node"
            width="700"
          />
        </p>
        <p>
          If you look at the interaction on the right, you'll notice that it
          comes across as quite personable.{' '}
          <strong>Try it out yourself with your own name.</strong>
        </p>
      </li>
    </ol>
    <h3>Task 3: Follow up questions and slots</h3>
    <p>
      What we just did, beside learning about{' '}
      <code>&lt;? input.text ?&gt;</code> is handle a follow up question in a
      child node. This is a common pattern in which the chatbot asks for
      information or clarification from the user and then handles the answer in
      a child node.
    </p>
    <p>
      If multiple follow up questions that are dependent on each other have to
      be asked by the chatbot, you'll end up with a cascade of children nodes,
      each asking the next question in the chain and having their child process
      it. This works but it's not ideal in terms of reasoning about or
      structuring your chatbot dialog flow.
    </p>
    <p>
      Another shortcoming of this approach is that if the user asks a side
      question or just says, <em>wait a second</em>, instead of replying to what
      we asked, we'll end up losing our "position" in the dialog cascade and
      therefore end up treating the delayed answer as a brand new input, failing
      (most likely) to provide an appropriate response or collect the
      information we wanted.
    </p>
    <p>
      There is a much better tool to help us collect information from the user
      and store it in context variables. Namely, I'm talking about Slots.
    </p>
    <p>Let's see a practical example of how they work.</p>
    <ol>
      <li>
        <strong>
          Define an intent called <code>#flower_recommendations</code>
        </strong>{' '}
        with at least 5 examples of ways people might ask for flower suggestions
        (e.g, <code>Flower recommendations</code>,{' '}
        <code>What are the best flowers for Valentine's Day?</code>, etc.)
      </li>
      <li>
        <strong>
          Create a node called{' '}
          <span className="instruction">Flower Recommendations</span>
        </strong>{' '}
        below the <span className="instruction">Welcome</span> node (as a peer
        node, not a child).{' '}
        <strong>
          Set the condition to <code>#flower_recommendations</code>.
        </strong>{' '}
        This is the node that will handle our flower recommendations.
      </li>
      <li>
        Click on the <span className="instruction">Customize</span> link in the
        node and{' '}
        <strong>
          turn on the <span className="instruction">Slots</span> feature
        </strong>
        . Leave <span className="instruction">Prompt for everything</span>{' '}
        unchecked, as this option is only useful if you have multiple
        slots/questions for the user and you want to ask them all at once,
        rather than one at the time. Not a common scenario. Finally, click on
        the <span className="instruction">Apply</span> button.
      </li>
      <li>
        <p>
          This will automatically add one slot for you. We use slots to collect
          information from the user and store it in a context variable. A node
          can have multiple slots, if multiple pieces of information need to be
          collected. The three key components of a slot are{' '}
          <span className="instruction">Check for</span> (typically an entity),{' '}
          <span className="instruction">Save it as</span> (a context variable),
          and <span className="instruction">If not present, ask</span>{' '}
          (optionally, the question to explicitly request the information if not
          provided).{' '}
          <strong>
            Enter <code>@occasion</code>, <code>$occasion</code>, and{' '}
            <code>For what occasion?</code> respectively.
          </strong>
        </p>

        <p>
          This node will be executed when its condition{' '}
          <code>#flower_recommendations</code> is true. In other words, when the
          user is asking for flower suggestions. However we want to know for
          which occasion the flowers are meant, so as to have an appropriate
          response for different occasions. The slot will automatically assign{' '}
          <code>@occasion</code> to the <code>$occasion</code> context variable
          if the user provided an entity value in their original question (e.g.,{' '}
          <em>flowers suggestions for Valentine's Day</em>) and not ask the
          question in that case. If the <code>@occasion</code> entity is not
          detected, because the user simply asked,{' '}
          <em>I'd like some flower recommendations</em> without specifiying a
          particular occasion, then the slot will ask{' '}
          <em>For what occasion?</em> until the user replies with a relevant{' '}
          <code>@occasion</code>. The slot is like a dog with a bone and will
          keep asking the question until the user enters an occasion. So if the
          user enters an irrelevant reply, the slot will ask the question again.
        </p>
      </li>
      <li>
        After the slot did its job of clarifying with the user which occasion
        are we talking about, it will store it in the <code>$occasion</code>{' '}
        context variable. So we can use it directly in the response section for
        the same node, without the need to create a child node in most cases. We
        want to provide a different answer for each occasion, so you'll want to{' '}
        <strong>
          enable <span className="instruction">Multiple responses</span> for the
          node
        </strong>{' '}
        from the <span className="instruction">Customize</span> link as well.
      </li>
      <li>
        <p>
          Now you can add different answers leveraging the content of the
          context variable <code>$occasion</code>, as shown in the image below.
          Go ahead and <strong>replicate it in your own node</strong>, handling
          at least a few occasions from <code>@occasion</code>. Don't worry
          about implementing them all or adding very meaningful flower
          recommendation responses.
        </p>
        <Alert color="danger">
          The slot sets the context variable <code>$occasion</code> for you.
          Make sure you use <code>$occasion</code> not <code>@occasion</code> in
          your multiple responses.
        </Alert>
        <p style={{ textAlign: 'center' }}>
          <img
            src={sampleSlot}
            alt="A node using a slot and multiple responses"
            title="A node using a slot and multiple responses"
            width="700"
          />
        </p>
      </li>
      <li>
        <p>
          Once you've added a few, open the{' '}
          <span className="instruction">Try it out</span> panel, press the{' '}
          <span className="instruction">Clear</span> link, and{' '}
          <strong>test that this is actually working</strong>. For example, try:
        </p>
        <ul style={{ listStyle: 'none' }}>
          <li>Enter your name to respond to the prompt</li>
          <li>
            <code>I'd like flower suggestions</code>
          </li>
          <li>
            <code>mother's day</code>
          </li>
        </ul>
      </li>
    </ol>
    <p>
      You should get the response you specified (provided you added one for the
      condition <code>$occasion == "Mother's Day"</code>
      ). Note that we can normally use the <code>:</code> shorthand when working
      with entity values that have no spaces. So <code>$occasion:Birthday</code>{' '}
      is equivalent to explictly saying <code>$occasion == "Birthday"</code>{' '}
      which means{' '}
      <em>
        the entity value stored in <code>$occasion</code> is{' '}
        <code>Birthday</code>.
      </em>{' '}
      However, if the entity value contains a space, as it's the case for
      <code>@occasion:(Mother's Day)</code>, you'll want to use the explicit
      form with the equal equal symbols.
    </p>
    <p>
      Using a slot saved us from having to implement the collection of the{' '}
      <code>$occasion</code> somewhere (e.g., in a passthrough node like we did
      for <span className="instruction">Assign City</span>
      ), handling everything in one node. With a required slot (so one for which
      you defined a question to collect information from the user), we can count
      on <code>$occasion</code> existing as we formulate our response.
    </p>
    <p>
      Note that if you don't specify a question, the slot becomes optional,
      which means that the entity value will be stored in the context variable
      of your choice if detected in the user input, but the user won't be asked
      explicitly for it (since you didn't provide a question).
    </p>
    <p>
      If you add two slots to a node, then the node will ask the first question,
      store the information in your first context variable, then proceed with
      asking the second question and storing that answer in the second context
      variable you specified.
    </p>
    <p>
      The classic example of multiple slots in a node is a chatbot that makes a
      restaurant reservation. Let's say that the information it needs to collect
      is the name, phone number, date and time, and party size. The node can
      define a slot for each of these values with their respective questions.
      This greatly simplifies the dialog flow, as it reduces what would require
      several nodes, to a single node that does all the work. It also ensures
      that the answers are collected before the conversation proceeds further
      which is crucial in a scenario where, say, you are making a reservation.
    </p>
    <p>
      To handle complex logic you can use both slots and children nodes. Slots
      to collect the info, children node to do the processing of that
      information according to your logic/preferences.
    </p>
    <p>
      And since slots collect the information in context variables, we can refer
      to their values throughout the conversation with the user. So in the
      example of the reservation, we might be able to provide a confirmation of
      the reservation as we wave the user goodbye.
    </p>
    <p>
      <strong>
        Use slots to reimplement the hours of operation and location information
        logic
      </strong>
      , simplifying the design. Get rid of the{' '}
      <span className="instruction">Assign City</span> node, and have a slot
      collecting the location inside of both{' '}
      <span className="instruction">Hours of Operation</span> and{' '}
      <span className="instruction">Location Information</span>. Make the slots
      required, that is, explicitly ask the user <code>For which city?</code> if
      they didn't specify it in their original question, delete the children
      nodes, using instead multiple responses directly inside of{' '}
      <span className="instruction">Hours of Operation</span> and{' '}
      <span className="instruction">Location Information</span>.
    </p>
    <p>
      This is what <span className="instruction">Hours of Operation</span> needs
      to look like.{' '}
      <strong>
        Ensure you make the changes for both{' '}
        <span className="instruction">Hours of Operation</span> and{' '}
        <span className="instruction">Location Information</span>.
      </strong>
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={refactoredHours}
        alt="Hours of Operation using slots"
        title="Hours of Operation using slots"
        width="700"
      />
    </p>
    <p>And this is what a full interaction would look like.</p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={testingSlots}
        alt="Testing the new Slot powered nodes"
        title="Testing the new Slot powered nodes"
        width="700"
      />
    </p>
    <h3>Task 4: Handling user digressions</h3>
    <p>
      Slots are awesome. However, their stubborn nature (for required slots that
      specify a question) can come across as rude if we are not careful. They
      keep the user to the task, which is fine if the user enters something
      irrelevant. It's less okay if the user is asking a legitimate side
      question, however.
    </p>
    <p>Consider the following interaction.</p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={watsonRude}
        alt="Digressions need to be handled graciously or it will make the chatbot appear to be rude"
        title="Digressions need to be handled graciously or it will make the chatbot appear to be rude"
        width="700"
      />
    </p>
    <p>
      That's not great. It looks like we completely ignored the user's
      legitimate question. A first recourse we have is to use the Slot's{' '}
      <span className="instruction">Found</span> and{' '}
      <span className="instruction">Not Found</span> responses. These are issued
      to the user before the node's own responses (in our case the actual flower
      suggestions for the given occasion).
    </p>
    <ol>
      <li>
        <p>
          Select the <span className="instruction">Flower Recommendations</span>{' '}
          node and click on the gear icon next to our occasion slot.{' '}
          <strong>
            Configure the slot by entering{' '}
            <code>Thank you for providing the occasion, $name.</code> in the
            found response section and{' '}
            <code>
              Sorry, I have to ask again, $name, but in order to provide flower
              recommendations I need the information. What's the occasion again?
            </code>{' '}
            in the not found section
          </strong>
          , as shown in the image below. Then click{' '}
          <span className="instruction">Save</span>. (Variations are also
          possible to make the chatbot less repetitive.)
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={configuringSlot}
            alt="Configuring our slot"
            title="Configuring our slot"
            width="700"
          />
        </p>
        <p>
          Now, when we try the interaction again, we get a slightly more
          friendly interaction.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={watsonLessRude}
            alt="A less rude interaction"
            title="A less rude interaction"
            width="700"
          />
        </p>
        <p>
          That's better, maybe even good enough. We are apologizing when we have
          to ask again, and we are thanking the user when they provide the
          answer we need. But... we are still not answering the user's
          legitimate side question about hours of operation. What we need to do
          to is enable digressions.
        </p>
      </li>
      <li>
        The first thing we need to do is ensure that this slot allows
        digressions. We can do so by selecting the{' '}
        <span className="instruction">Flower Recommendations</span> node again
        and clicking on <span className="instruction">Customize</span>, then the{' '}
        <span className="instruction">Digression tab</span>. Here you'll want to
        expand{' '}
        <span className="instruction">
          Digressions cannot go away from this node
        </span>{' '}
        and{' '}
        <strong>
          turn on the option that allows digressions away from this node to
          happen
        </strong>
        . Make sure you click <span className="instruction">Apply</span>.
      </li>
      <li>
        <p>
          With the digression enabled in our node, we'll now be able to ask
          other questions in the middle of answering the slot's question and get
          a proper response for them. However, we will not automatically return
          to the slot question once we received a response to the side question.
          This may or may not be what we want. If we'd like to return, we'll
          need to explictly{' '}
          <strong>
            set <span className="instruction">Return after digression</span>
          </strong>{' '}
          in the nodes we might digress to. Go ahead and set the option for both{' '}
          <span className="instruction">Hours of Operation</span> and{' '}
          <span className="instruction">Location Information</span> as shown
          below for the latter.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={digressionReturn}
            alt="Enabling digression returns from the Customize / Digressions section of a node"
            title="Enabling digression returns from the Customize / Digressions section of a node"
            width="700"
          />
        </p>
      </li>
      <li>
        <p>
          <strong>
            Try out the the following interaction in a brand new conversation.
          </strong>
        </p>
        <ul style={{ listStyle: 'none' }}>
          <li>Your chatbot will prompt you to enter your name</li>
          <li>Enter your actual name</li>
          <li>
            Chatbot:{' '}
            <em>
              Nice to meet you YOUR NAME. How can I help you? You can ask me
              about our store hours and locations.
            </em>
          </li>
          <li>
            You: <code>I'd like some flower recommendations</code>
          </li>
          <li>
            Chatbot: <em>For what occasion?</em>
          </li>
          <li>
            You: <code>actually wait... what are your hours of operation?</code>
          </li>
          <li>
            Chatbot: <em>For which city?</em>
          </li>
          <li>
            You: <code>Auckland</code>
          </li>
          <li>
            Chatbot:{' '}
            <em>
              Our Auckland store is open Monday to Saturday from 9 am until 6
              pm, except statutory holidays.
            </em>
          </li>
          <li>
            Chatbot: <em>For what occasion?</em>
          </li>
        </ul>
      </li>
    </ol>
    <p>
      We might want to change that slot question to offer a bit more context,
      perhaps to <code>For what occasion are the flowers?</code> but we are in
      good shape. We were able to answer the user digression and come back to
      our original slot to keep the user on task.
    </p>

    <h3>Task 5: Take the quizzes and final exam</h3>
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
        inside Module 4 and 5.
      </strong>{' '}
      Next, <strong>take the final exam</strong> to obtain your certificate and
      badge.
    </p>

    <h3>Task 6: (Homework) Create your own chatbot</h3>
    <p>
      At this point in time, you have all the skills required to create a useful
      chatbot that understands the user. Your take-home assignment is to create
      your own chatbot. Whether a personal chatbot, or something that can be
      useful for your company internally or externally.
    </p>
    <p>
      If you are truly out of ideas, consider the option of simply improving the
      chatbot we developed so far. There is lots of room for improvement and
      expansion (we haven't even used that <code>@relationship</code> entity we
      imported). But you have the tools to do so, and that's what matters.
    </p>
    <p>
      Workspaces can be exported and imported as JSON file. You can download a
      version of the chatbot we built so far{' '}
      <a
        href="https://raw.githubusercontent.com/acangiano/chatbot-workshop/master/src/csv/workspace-with-slots.json"
        target="_blank"
        rel="noopener noreferrer"
      >
        from here
      </a>
      . If needed, feel free to import it in your{' '}
      <span className="instruction">Workspaces</span> area as a starting point.
    </p>
    <p>
      I don't expect you to figure out everything right away, as this was a lot
      of material for one day. But you know where to look now, and can always
      refer back to this workshop material to refresh your memory. Not to
      mention, consulting the{' '}
      <a href="https://console.bluemix.net/docs/services/conversation/getting-started.html#gettingstarted">
        official documentation
      </a>
      .
    </p>
    <Alert color="success">
      You made it! I hope you enjoyed this workshop and if you have any
      questions, please do not hesitate to ask them. I wish you all the best.
      &mdash; Antonio (<a href="https://twitter.com/acangiano">@acangiano</a>)
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-5">
        Back to Lab 5
      </Link>
    </p>
  </Layout>
)

export default Lab6
