import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of posts:</p>
      <ul>
        {props.posts.map(function(post, idx) {
          return (
            <li key={idx}>
              <Link href={'/post/'+post.slug}>
                <a>{post.title}</a> 
              </Link>
              &nbsp;-&nbsp;
                <ul>
                    {post.tags.map(function(tag, index){
                        return (
                            <li key={index}>
                                <Link href={'/posts/'+tag}>
                                    <a>{tag}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </li>
          )
        })}
      </ul>
    </DefaultLayout>
  )
} 

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}