import React from 'react'

export default function Projects() {
  return (
    <div className="project-portfolio">
        <h1 className="portfolio-title">Portfolio Projects</h1>
     <div className="projects"> 
        <div className="wrapper">
            <div className="box">
                <img className="img-card" src="https://miro.medium.com/max/1200/0*h0jzbOlN8sF3Vd2p.png"/>
                <h2 className="box-2 heading-four">
                One
                </h2>
            </div>
            <div className="box">
            <img className="img-card" src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"/>
                <h2 className="box-2 heading-four">
                Two
                </h2>
                <p>lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi</p>
            </div>
            <div className="box">
            <img className="img-card" src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"/>
            
                <h2 className="box-2 heading-four">
                Three
                </h2>
                <p></p>
            </div>
        </div>
    </div>
    </div>
  )
}
