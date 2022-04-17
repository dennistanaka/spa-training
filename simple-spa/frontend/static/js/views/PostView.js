import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.postId = params.id
    this.setTitle(`Post ${this.postId}`)
  }

  async getHtml() {
    return `
      <h1>Post ${this.postId}</h1>
      <p>This is the content of Post ${this.postId}</p>
    `
  }
}
