import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="142" cy="130" r="122" /> 
    <rect x="9" y="270" rx="10" ry="10" width="211" height="25" /> 
    <rect x="10" y="324" rx="10" ry="10" width="270" height="89" /> 
    <rect x="158" y="355" rx="0" ry="0" width="1" height="0" /> 
    <rect x="11" y="450" rx="14" ry="14" width="106" height="32" /> 
    <rect x="147" y="443" rx="21" ry="21" width="126" height="42" />
  </ContentLoader>
)

export default Skeleton