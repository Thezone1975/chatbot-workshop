import React from 'react'

import Layout from '../components/layout'

import signature from '../images/signature.png'


const IndexPage = () => (
  <Layout>
    <h1>Introduction</h1>
    <p>Welcome to the hands-on labs for my Watson Assistant Chatbot Workshop.</p>
    <p>When taking an in-person workshop or an online course, it's easy to watch the presenter introduce new concepts, nod along, and feel like you learned a lot. This approach will certainly introduce you to <em>some</em> new knowledge, but it can also lull you into a false sense of security in your newly acquired abilities.</p>
    <p>What happens next, typically, is that you'll have a terrible realization a couple of days later when you actually try to create something with your new knowledge. You'll quickly find out that you got the gist of it, but don't quite remember the details well enough to make it work.</p>
    <p>Even if you are a genius, you'll struggle if you haven't practiced. Imagine trying to learn how to play the piano by watching weeks' worth of online lessons but never touching any keys. Your theoretical knowledge may increase, but not your practical, musical abilities.</p>
    <p>After all, if this weren't the case, the majority of Rugby sports fans would have pro league level skills in the field.</p>
    <p>The truth is, we learn by doing. When we practice, make mistakes, correct them, and keep practicing, our theoretical knowledge becomes something magical. It becomes a skill impressed in our muscle memory and brain.</p>
    <p>So I structured my workshop to be ruthlessly practical with lots of time dedicated to practicing and experimenting through hands-on labs. By the end of this workshop, <strong>you'll be able to claim that <em>you</em> developed and deployed a chatbot</strong>. And you can always reference these labs, long after the workshop is over.</p>
    <p>Looking forward to seeing you succeed.</p>
    <div><img src={signature} alt="Antonio's Signature" style={{float: "right"}} /></div>
  </Layout>
)

export default IndexPage
