import fetch from 'isomorphic-fetch';
import Error from 'next/error';

class Story extends React.Component {
    static async getInitialProps({ req, res, query }) {
        let story;
        try {
            const storyId = query.id;
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            story = await response.json();
        } catch (err) {
                console.log(err);
                story = null;
        }

        

        return { story };
    }
    render() {
        const {story} = this.props;
        if(!story){
            <Error></Error>
        }
        return <div>Story</div>
    }
};

export default Story;