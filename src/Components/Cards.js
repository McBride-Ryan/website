import React from 'react'
import Imdb from './projects/Imdb'
import BadBank from './projects/BadBank'
import Atomic from './projects/Atomic'

export default function Cards() {
  // pass down props to the other project components to reduce code
  
  return (
    <div className="section-tours" id="projects">
        <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Project Portfolio
                </h2>
        </div>
        <div class="row">
            <Imdb/>
            <BadBank/>
            <Atomic/>
        </div>
    </div>
  )
}
