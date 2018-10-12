import React from 'react'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'
import pluginActivation from '../images/plugin-activation.png'
import findingCredentials from '../images/finding-credentials.png'
import copyingCredentials from '../images/copying-credentials.png'
import buildIcon from '../images/build-icon.png'

const Lab5 = () => (
  <Layout>
    <h2>Lab 5: Deployment to WordPress</h2>
    <p>
      The small chatbot we built so far works well enough from the{' '}
      <span className="instruction">Try it out</span> panel. That's great and
      all, but our customers won't have access to it unless we deploy it
      somewhere.
    </p>
    <p>
      There are many ways to deploy chatbots built with Watson Assistant on
      sites, messenger apps, Slack, and more. And even though newer/easier ways
      are being developed all the time, most of these deployment solutions still
      require programming skills.
    </p>
    <p>
      To make deployment accessible to non-developers as well, we created a
      WordPress plugin that makes it trivial for anyone to place a Watson
      Assistant chatbot on a site (without the need to develop a proxy
      application between your site and the Watson Assistant service). WordPress
      powers about a third of the websites out there so it was a logical target.
    </p>
    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>Obtain a WordPress site for testing purposes;</li>
      <li>Deploy our chatbot to your WordPress site;</li>
      <li>
        Learn about the various features offered by the Watson Assistant
        WordPress plugin.
      </li>
    </ol>
    <h3>Task 1: Deploy your chatbot</h3>
    <p>
      Before we even look at deployment, we'll need to have a site to deploy to.
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
            width="900"
          />
        </p>
      </li>
      <li>
        <strong>
          Click on{' '}
          <span className="instruction">
            Please fill in your Watson Assistant Workspace Credentials.
          </span>
        </strong>{' '}
        and{' '}
        <strong>
          then on the <span className="instruction">Plugin Setup</span> tab.
        </strong>
        Here we'll be able to specify your Watson Assistant credentials for the
        chatbot we've been building.
      </li>
      <li>
        <p>
          There are two possible ways of specifying your credentials: through a
          username and password or through an API key. To find out which one is
          used by your Watson Assistant service (and find out your credentials),
          <strong>
            head over to the <span className="instruction">Deploy</span> section
            of your workspace
          </strong>{' '}
          by clicking on the third blue icon from the top as shown in figure.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={findingCredentials}
            alt="The Credentials section of your workspace"
            title="The Credentials section of your workspace"
            width="900"
          />
        </p>
      </li>
      <li>
        <p>
          In your <span className="instruction">Plugin Setup</span> setting page
          <strong>select the matching authentication method.</strong> If your{' '}
          <span className="instruction">Credentials</span> page in Watson
          Assistant shows an API key (like it does in my case, as per the image
          above),{' '}
          <strong>
            select <span className="instruction">API Key</span> and copy over
            your <span className="instruction">API Key</span> and{' '}
            <span className="instruction">Workspace URL</span>
          </strong>{' '}
          as shown in the image below.
        </p>
        <p style={{ textAlign: 'center' }}>
          <img
            src={copyingCredentials}
            alt="Copy over the credentials from your workspace"
            title="Copy over the credentials from your workspace"
            width="900"
          />
        </p>
        <p>
          If your credentials are shown as a username and password, do the same
          by copying over <span className="instruction">Username</span>,{' '}
          <span className="instruction">Password</span> and{' '}
          <span className="instruction">Workspace URL</span>, instead.
        </p>
        <p>
          In either case, <strong>make sure that the chatbot is enabled</strong>
          . In the future, should you decide to temporarly disable the chatbot,
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
        If you see a chatbot pop up greeting you with the prompt you defined,
        congratulations, <strong>you just deployed your chatbot.</strong> That
        was quite straightforward, wasn't it? Go ahead and{' '}
        <strong>test your chatbot directly through this chat box.</strong>
      </li>
    </ol>

    <h3>Task 2: Familiarize yourself with the options</h3>

    <p>
      In in your workspace, you can go back to developing your chatbot (from
      your <span className="instruction">Deploy</span> section) by clicking on
      the <span className="instruction">Build</span> icon.
    </p>

    <p style={{ textAlign: 'center' }}>
      <img
        src={buildIcon}
        alt="Use the Build icon to go back to developing your chatbot"
        title="Use the Build icon to go back to developing your chatbot"
        width="900"
      />
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
