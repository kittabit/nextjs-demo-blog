import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div class="md:container md:mx-auto">
        <article>
          <h1 class="text-5xl font-normal leading-normal mt-0 mb-2 text-purple-800">
            {props.title}
          </h1>
          <div dangerouslySetInnerHTML={{__html:props.content}}/>        
        </article>
      </div>
    </DefaultLayout>
  )
}