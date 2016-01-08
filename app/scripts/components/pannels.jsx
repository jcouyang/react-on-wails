import React from 'react';
import { connect, PromiseState } from 'react-refetch';
import Story from './story';

const Panels = React.createClass({
  render() {
    const { storiesFetch } = this.props
    if (storiesFetch.fulfilled) {
      return (
        <div>
          {storiesFetch.value
                       .slice(0,10)
                       .map(story=><Story id={story} key={story} />)}
        </div>
      )
    }else{
      return (
      <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        loading...
      </section>
      )
    }
  },
});

export default connect(props => ({
  storiesFetch: `https://hacker-news.firebaseio.com/v0/${props.channel}.json`,
}))(Panels)
