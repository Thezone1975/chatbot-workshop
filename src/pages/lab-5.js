import React from 'react'
import { Link } from 'gatsby'
import { Alert } from 'reactstrap'

import Layout from '../components/layout'
import pluginActivation from '../images/plugin-activation.png'
import findingCredentials from '../images/finding-credentials.png'
import copyingCredentials from '../images/copying-credentials.png'
import buildIcon from '../images/build-icon.png'
import deployedChatbot from '../images/deployed-chatbot.png'
import pluginSections from '../images/plugin-sections.png'

const Lab5 = () => (
  <Layout>
    <h2>Lab 5: Deployment to WordPress</h2>
    <p>
      The small chatbot we built so far works well enough from the{' '}
      <span className="instruction">Try it out</span> panel. That's great and
      all, but our customers won't have access to it unless we deploy it
      somewhere. Let's see how to accomplish that.
    </p>

    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Create an Assistant and link it to your skill;</li>
      <li>Obtain a WordPress site for testing purposes;</li>
      <li>Deploy our chatbot to your WordPress site;</li>
      <li>Learn about the various features offered by the Watson Assistant
        WordPress plugin.
      </li>
    </ol>

    <h3>Task 1: Create an Assistant and link it to your skill</h3>
    <p>
      So far we created a dialog skill, which is the core engine of our chatbot. However, in order to deploy it, we'll need to create an Assistant and link it to our skill. You can think of assistants as a container of one or more skills. When you deploy a chatbot on a site, you're a deploying the assistant.
    </p>
    <ol>
      <li><strong>Click on the back arrow in the top left of your skill.</strong> This will bring you back to your <span className="instruction">Skills</span> area.</li>
      <li>From here, <strong>click on the <span className="instruction">Assistants</span> tab</strong> at the top and <strong>then the <span className="instruction">Create new</span> button.</strong></li>
      <li>
        <p>
          You'll be asked to give it a name (e.g., <code>Florence Chatbot</code>, an optional description, and whether or not you want a preview link.
        </p>
        <p>
          <strong>Definitely keep the preview enabled</strong> so that you'll be able to show a preview of your chatbot to other people by simply giving them a link. It's a great tool to let other people try your chatbot before you actually deploy it on your site.
        </p>
        <p>
          Finally, <strong>click on the <span className="instruction">Create</span> button to generate the assistant.</strong>
        </p>
      </li>
      <li>You'll be prompted to add a dialog skill to the assistant you just created. Since we already worked on one, we'll <strong>click <span className="instruction">Add Dialog Skill</span></strong> and <strong>then select <span className="instruction">Add existing skill</span>.</strong> Next, <strong>select the <span className="instruction">Flower Shop Skill</span> by clicking on it.</strong> You should see that the <span className="instruction">Florence Chatbot</span> assistant now has the <span className="instruction">Flower Shop Skill</span> linked to it.</li>
      <li>Your chatbot assistant is now ready to be deployed. You can see a preview of it <strong>by clicking on the Preview Link button.</strong></li>
      <li>
        <p>
          When you deploy your assistant in the next steps, you'll be asked to provide your chatbot credentials. <strong>Click on the <span className="instruction">View API Details</span> link</strong> in the top right of your <span className="instruction">Florence Chatbot</span> assistant page.
        </p>
        <p>
          You'll need to know the <span className="instruction">Assistant URL</span>, <span className="instruction">Username</span> and the <span className="instruction">Password</span> in order to successfully deploy your chatbot later on. You might want to <strong>make note of them now</strong> or simply bookmark the page to find it more easily.
        </p>
      </li>
    </ol>

    <h3>Task 2: Deploy your chatbot</h3>
    <p>
      There are many ways to deploy chatbots built with Watson Assistant on
      sites, messenger apps, Slack, and more. And even though newer/easier ways
      are being developed all the time, most of these deployment solutions still
      require programming skills.
    </p>
    <p>
      To make deployment more accessible to non-developers as well, we created a
      WordPress plugin that makes it trivial for anyone to place a Watson
      Assistant chatbot on a site (without the need to develop a proxy
      application between your site and the Watson Assistant service). WordPress
      powers about a third of the websites out there so it was a logical target.
    </p>
    <p>
      Before we even look at deployment, however, we'll need to have a site to deploy to.
      Thankfully by being enrolled in the course on Cognitive Class, we get to
      receive one for free. It's not the kind of site you'd want to use
      permanently, but for testing purposes it will do.
    </p>
    <ol>
      <li>
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
          find the <span className="instruction">Lab 1: Create a website</span>{' '}
          section inside Module 5.
        </strong>{' '}
        Scroll to the bottom of the page and{' '}
        <strong>
          click on the <span className="instruction">Generate Site</span>{' '}
          button.
        </strong>
      </li>
      <li>
        This will generate a WordPress testing site for you.{' '}
        <strong>Write down or save</strong> on your computer your{' '}
        <span className="instruction">Username</span>,{' '}
        <span className="instruction">Password</span>,{' '}
        <span className="instruction">Instance URL</span>, and{' '}
        <span className="instruction">Dashboard URL</span> as we'll need these
        credentials to login in a moment.
      </li>
      <li>
        <strong>
          Click on the <span className="instruction">Go to SITE</span> button
        </strong>{' '}
        to see what the site looks like. Since this is for a flower shop
        chatbot, the site theme has been customized to fit in.
      </li>
      <li>
        <strong>
          Visit your <span className="instruction">Dashboard URL</span> or
          simply append <code>/wp-admin</code> to the URL
        </strong>{' '}
        of the site you are currently on. Enter your{' '}
        <span className="instruction">Username</span> and{' '}
        <span className="instruction">Password</span> that you saved in a
        previous step, and{' '}
        <strong>
          press the <span className="instruction">Log In</span> button.
        </strong>{' '}
        You'll be logged into WordPress' dashboard.
      </li>
      <li>
        <p>
          <strong>
            Click on <span className="instruction">Plugins</span>
          </strong>{' '}
          in the sidebar. Normally, here you'd find a button to add new plugins
          from a marketplace of plugins. There you'd search for Watson Assistant
          to install the free plugin. However, in this testing environment the
          plugin has already been installed for you.
        </p>
        <p>
          All you need to do is{' '}
          <strong>
            click <span className="instruction">Activate</span>
          </strong>{' '}
          under the <span className="instruction">Watson Assistant</span>{' '}
          plugin. You'll be asked to enter credentials for your chatbot as shown
          in the picture below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={pluginActivation}
            alt="The plugin activation"
            title="The plugin activation"
            width="700"
          />
        </p>
      </li>
      <li>
        <strong>
          Click on the link inviting you to fill in your Watson Assistant credentials</strong> and{' '}
        <strong>
          then on the <span className="instruction">Plugin Setup</span> tab.
        </strong>
        Here we'll be able to specify your Watson Assistant credentials for the
        chatbot assistant we created in the previous task.
      </li>
      <li>
        <p>
          <strong>Make sure that the chatbot is enabled</strong>. In the future, should you decide to temporarly disable the chatbot,
          you'll be able to do so from this page by deselecting the checkmark
          next to <span className="instruction">Enable Chatbot</span>.
        </p>
      </li>
      <li>
        <strong>
          Click on <span className="instruction">Save Changes</span>
        </strong>{' '}
        and a message should appear inviting you to{' '}
        <span className="instruction">Browse your website</span> to see the
        chatbot in action. <strong>Click on that link</strong> or simply head
        over to the <span className="instruction">Instance URL</span> you made
        note of earlier on.
      </li>
      <li>
        <p>
          If you see a chatbot pop up greeting you with the prompt you defined,
          congratulations, <strong>you just deployed your chatbot.</strong> That
          was quite straightforward, wasn't it? Go ahead and{' '}
          <strong>test your chatbot directly through this chat box.</strong>
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={deployedChatbot}
            alt="The chatbot deployed on a WordPress site"
            title="The chatbot deployed on a WordPress site"
            width="700"
          />
        </p>
      </li>
    </ol>
    <h3>Task 3: Familiarize yourself with the plugin options</h3>
    <p>
      The WordPress plugin for Watson Assistant offers many customizations
      options. Some are merely cosmetic, while others significantly affect the
      user experience for your customers.
    </p>
    <p>
      Your second task for this lab is exploring these options. Inside the
      WordPress Dashboard you'll notice that that the plugin has three main
      sections as shown in the image below.
    </p>
    <p style={{ textAlign: 'center' }}>
      <img
        src={pluginSections}
        alt="The three plugin sections"
        title="The three plugin sections"
        width="700"
      />
    </p>
    <p>
      We already looked at <span className="instruction">Set Up Chatbot</span>.
      Take time to explore the many options available inside of{' '}
      <span className="instruction">Customize Plugin</span> and{' '}
      <span className="instruction">Advanced Features</span>.
    </p>
    <p>
      Specifically, change some options in the tabs within{' '}
      <span className="instruction">Customize Plugin</span> and watch your chat
      box change. Then read the information provided in the{' '}
      <span className="instruction">Advanced Features</span> section to
      familiarize yourself with more advanced options.
    </p>
    <p>
      Some of the options are for features we haven't discussed yet or are out
      of scope for this workshop. But it's good to know what options the plugin
      has to offer and, as always, if you have any questions feel free to ask
      me.
    </p>

    <Alert color="success">
      We now know how to create basic chatbots and deploy them for our customers
      to use. The next step is to make our chatbot better and in the process,
      discuss some more advanced features.
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-4">
        Back to Lab 4
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-6">
        Proceed to Lab 6
      </Link>
    </p>
  </Layout>
)

export default Lab5
