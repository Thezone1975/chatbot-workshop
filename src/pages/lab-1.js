import React from 'react'
import {Link} from 'gatsby'
import { Button } from 'reactstrap';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h2>Lab 1: Get Set Up</h2>
    <p>Welcome to your first hands-on lab. I'm sure you're eager to get started. Before we can get begin to actually build chatbots, however, we'll need to take care of a couple of prerequisites for this workshop.</p>

    <h3>What you will accomplish</h3>
    <p>
      In this lab you will:
    </p>
    <ol>
      <li>Register an account with IBM Cloud;</li>
      <li>Create an instance of Watson Assistant;</li>
      <li>Enroll in a Chatbot Course online to obtain a certificate and badge, as well as other benefits.</li>
    </ol>
    <h3>Task 1: Register with IBM Cloud</h3>
    <p>
      To create chatbots, we'll use IBM Watson Assistant, an easy to use and powerful chatbot service offered on the IBM Cloud. So we need to make sure that you have an account with IBM Cloud.
    </p>
    <ol>
      <li>Register with IBM Cloud by clicking on <a href="https://cocl.us/CB0103EN_BM" target="_blank" rel="noopener">this link</a>.</li>
      <li>You'll be asked to log in if you already have an account with IBM.com. If you do, log in. If you don't, click on Create an account and proceed with the creation of an account with your professional email address (or personal if you prefer).</li>
      <li>If you created an account in the previous step, you'll be asked to verify your email. Check your inbox for the verification email (and for good measure, be sure to check your spam folder as well, if you don't see the email after a few minutes).</li>
      <li>At this point you'll be logged in with your IBM ID. The next step is to sign up for IBM Cloud, if you haven't done so already in the past. If you don't have an IBM Cloud account yet, you'll be presented with a page asking you to sign up. Click on the Sign Up button presented to you on the page. If clicking it does nothing, click the log out link available on the page, log back in with your IBM ID, and then try again.</li>
      <li>You'll see a registration form for IBM Cloud. Considering you likely just entered your information to register for an IBM ID, this extra step might feel tedious. Thankfully, you can just enter your email address and the rest of the form will disappear, allowing you to create an IBM Cloud account by simply clicking on the Create Account button.</li>
      <li>Check your email once again click on the Confirm Account button provided in the confirmation email.</li>
      <li>Congratulations. You registered and activated your IBM Cloud account. Our last step for this task is to log in using the provided button on the success page you were redirected to.</li>
      <li>You're now logged in and should see your (empty) dashboard.</li>
    </ol>
    <p>
      You can access this page at any time by logging in on the ibm.com/cloud site, but I highly recommend that you just bookmark the <a href="https://console.bluemix.net/dashboard/apps/" target="_blank" rel="noopener">dashboard page</a> instead. It will give you quick access to seeing and managing all the resources you created inside of your IBM Cloud account.
    </p>

    <h3>Task 2: Create an instance of Watson Assistant</h3>

    <p>Now that you have an IBM Cloud account, it's time to create an instance of Watson Assistant. You can do so by following these simple steps:</p>

    <ol>
      <li>Click on the Create resource button on your dashboard.</li>
      <li>Search for Watson Assistant in the search field or select it from the AI category of the catalog and click on it.</li>
      <li>You should see a Watson Assistant (formerly Conversation) creation page. You can leave everything to default, or customize the name to your liking.</li>
      <li>Take note of the differences between the free Lite plan (which you'll be using) and the Standard Plan.</li>
      <li>Click on the Create button at the bottom to create your instance.</li>
      <li>You'll be redirected to the launch page for the service you just created. Click on the Launch tool button to access the web application that will allow you to create chatbots. You'll land on an informative tab. Click the Workspaces tab instead, as it's where we'll be creating chatbots.</li>
      <li>For quick access, you may want to bookmark this Workspaces page as well. </li>
    </ol> 

    <h3>Task 3: Enroll in the Chatbot Course</h3>
    <p>Last year, I created a chatbot course that's been taken by about 50,000 people around the world. You can think of this workshop as a more in depth, up to date, and interactive version of my online course available on <a href="https://cognitiveclass.ai" target="_blank" rel="noopener">CognitiveClass.ai</a>. You don't need to take the course, since you're getting the in-person workshop which covers the same material and more; however, you should still sign up for Cognitive Class and enroll in my course. There are a few reason for this task:</p>
    <ul>
      <li>Being enrolled in the course will enable you to take the quizzes and final exam. A passing grade will entitle you to a badge backed by IBM, to attest to your ability to create chatbots. This badge, digitally issued by Acclaim, can then be shared on your LinkedIn profile, other social media sites (a little bragging won't hurt anyone), on your CV/résumé, etc.</li>
      <li>Upon passing the exam, you'll also receive a digital certificate of accomplishment from Cognitive Class, which you could print if you wished.</li>
      <li>You'll be given a special coupon code that allows you to receive US$200 a month worth of Cloud services for six months. This can be applied for many IBM Cloud services, including Watson Assistant.</li>
      <li>You'll receive a free WordPress testing site that we'll need for the deployment of your chatbot later in the workshop.</li>
      <li>Once you're registered with Cognitive Class, you can take many other courses on Data Science, AI, Containers, Blockchain, and more if you're interested. All for free and at your own pace.</li>
    </ul>
    <p>
      To register with Cognitive Class and enroll in the Build Your Own Chatbot course, click on the Start the Free Course button on the <a href="https://cognitiveclass.ai/courses/how-to-build-a-chatbot/" target="_blank" rel="noopener">course page</a>. You'll be asked to login (if you already have a Cognitive Class account) or register with Cognitive Class and then verify your email (as usual with most services). On the verification page, when you click the activation link sent to you by email, you'll be prompted with the aforementioned US$1200 special offer. You can safely ignore it for now. Later in the workshop, we'll cover how to obtain the free WordPress testing environment inside of the course you just enrolled in.
    </p>
    <p>
      This concludes your very first lab. On the next one, we'll start getting our hands dirty by building our first chatbot components.
    </p>
  </Layout>
)

export default SecondPage
