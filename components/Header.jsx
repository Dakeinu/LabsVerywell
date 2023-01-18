import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { getCategories } from '../services'
import { getPostsDetails } from '../services'
import PostDetail from './PostDetail';
import { getStaticProps } from '../pages/index.tsx'

const Header = ({ post }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))

    }, []);

    async function getStaticProps() {
        const posts = (await getPosts()) || [];
      
        return {
          props: { posts }
        }
    }

    let staticProps = getStaticProps();

    console.log(staticProps);

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                if ({post.title}) {
                    <title>{post.title}</title>
                }else{
                    <title>Verywell Digital</title>
                }
                <meta name="description" content={post.content}></meta>
                <link rel="icon" href="/favicon.png" />
                {/* <script>
    window.axeptioSettings = {
          clientId: "5c11ff5ce95cd64112feab79",
        };
         
        (function(d, s) {
          var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
          e.async = true; e.src = "//static.axept.io/sdk-slim.js";
          t.parentNode.insertBefore(e, t);
        })(document, "script");
</script> */}

            </Head>
            <div className="border-b w-full inline-block border-neutral-400 py-8">
                <div className="md:float-left block ">


                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            <img src="./Logo.png" alt="Verywell" className='h-11 mr-3' />
                        </span>
                    </Link>
                </div>
                {/* <div className='hidden md:float-left md:contents'>
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}</span></Link>
                    ))}
                </div> */}
            </div>
        </div>
    ); 
};



export default Header