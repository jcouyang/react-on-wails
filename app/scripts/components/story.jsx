import React from 'react';
import { connect, PromiseState } from 'react-refetch'

let Story = React.createClass({
  render(){
    const { storyFetch } = this.props
    if (storyFetch.fulfilled) {
      let story = storyFetch.value;
      return (
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-card__title">
              <h4>{story.title}</h4>
            </div>
            <div className="mdl-card__supporting-text">
              <span>{story.score} points by {story.by}</span>
            </div>
            {story.text?<div className="mdl-card__supporting-text" dangerouslySetInnerHTML={{__html: story.text}}/>:null}
            <div className="mdl-card__actions">
              <a href={story.url} className="mdl-button">Read...</a>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          Loading...
        </section>
      )
    }
  }
});

export default connect(props => ({
  storyFetch: `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`,
}))(Story)
