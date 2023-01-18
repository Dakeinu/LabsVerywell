import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import postcss from 'postcss'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { Footer } from '../components'
import react from 'react'
// import { ReCAPTCHA } from 'react-google-recaptcha';


// const posts = [
//   { title: 'React Testing', excerpt: 'Learn React Testing' },
//   { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },

// ]

// function onChange(value) {
//   console.log("Captcha value:", value);
// }



const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-40 mb-8">


      <div className="">
        <div className="lg:col-span- col-span-1 row-start-2">
          {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>

        {/* <div>
          <Footer />
        </div> */}

        {/* <ReCAPTCHA
          sitekey="Your client site key"
          onChange={onChange}
        />, */}

      </div>

    </div>

  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default Home
