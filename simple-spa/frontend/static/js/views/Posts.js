import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Posts')
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>These are your Posts</p>
      <p><a href="/posts/3" data-link>Post 3</a></p>
      <p><a href="/posts/2" data-link>Post 2</a></p>
      <p><a href="/posts/1" data-link>Post 1</a></p>
    `
  }
}
