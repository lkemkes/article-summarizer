import React, { Component } from 'react';
import axios from 'axios';

class ArticleSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleUrl: '',
      summary: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ articleUrl: e.target.value });
  };

  handleSummarizeClick = () => {
  // Make an API request here to fetch and summarize the article.
  // Update the 'summary' state with the response.

  const { articleUrl } = this.state;

  // Replace 'your-api-url' with the actual URL of your API
  const apiUrl = `https://fastapi-first-steps-ki7twfnb7q-uc.a.run.app/summarize/?article_url=${articleUrl}`;

  axios.get(apiUrl)
    .then(response => {
      // Assuming the response is a JSON object with a 'summary' key
      const { summary } = response.data;

      // Update the 'summary' state with the fetched summary
      this.setState({ summary });
    })
    .catch(error => {
      console.error('Error fetching and summarizing the article:', error);
      // You may want to handle errors or display an error message to the user here.
    });
}


  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Paste Article URL"
          value={this.state.articleUrl}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSummarizeClick}>Summarize Article</button>
        <h2>Summary</h2>
        <p>{this.state.summary}</p>
      </div>
    );
  }
}

export default ArticleSummary;