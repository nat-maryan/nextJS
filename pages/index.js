import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from './components/StoryList';
import Layout from './components/Layout';
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps({req, res, query}) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }


    return { stories, page };
  }

  render() {
    const { stories, page } = this.props;
    if (stories.lenght === 0) {
      return <Error />
    }

    return <div>

      <Layout title="Hacker Next" description="A Hacker News Clone">
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a{
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
        `}</style>
      </Layout>
    </div>;
  }
}

export default Index;