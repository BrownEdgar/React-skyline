import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => {
  return (
    <ContentLoader
      speed={3}
      width={580}
      height={580}
      viewBox="0 0 400 260"
      backgroundColor="#57579c"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="5" y="6" rx="4" ry="4" width="390" height="34" />

      <rect x="5" y="52" rx="4" ry="4" width="390" height="34" />

      <rect x="5" y="98" rx="4" ry="4" width="390" height="34" />

      <rect x="5" y="144" rx="4" ry="4" width="390" height="34" />

    </ContentLoader>
  )
}


export default Loader;