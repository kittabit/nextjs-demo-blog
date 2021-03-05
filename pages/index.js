import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
        <section class="bg-white py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

                <div class="flex flex-col items-center justify-center mt-6">
                {props.posts.map(function(post, idx) {
                  return (
                    <Link href={'/post/'+post.slug}>
                      <a key={idx} class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-purple-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-10">
                          <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">{post.title}</h3>
                          </div>
                        </a>
                      </Link>
                      )
                  })}                    
                </div>
            </div>
        </section>
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