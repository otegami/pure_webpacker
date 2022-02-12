// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Img from '../images/webpack-png.png'

type Props = {
  name: string
}

const Hello = (props: Props) => (
  <>
    <div>Hello {props.name}!</div>
    <img src={Img} width='300px' />
  </>
)

Hello.defaultProps = {
  name: 'Otegami'
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
