import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCategory = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={115}
    viewBox="0 0 280 115"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="270" rx="10" ry="10" width="211" height="25" /> 
    <rect x="10" y="324" rx="10" ry="10" width="270" height="89" /> 
    <rect x="158" y="355" rx="0" ry="0" width="1" height="0" /> 
    <rect x="11" y="450" rx="14" ry="14" width="106" height="32" /> 
    <rect x="147" y="443" rx="21" ry="21" width="126" height="42" /> 
    <rect x="13" y="15" rx="61" ry="61" width="90" height="90" /> 
    <rect x="119" y="39" rx="0" ry="0" width="132" height="20" /> 
    <rect x="234" y="89" rx="0" ry="0" width="4" height="0" /> 
    <rect x="204" y="88" rx="0" ry="0" width="27" height="0" /> 
    <rect x="120" y="73" rx="0" ry="0" width="74" height="19" />
  </ContentLoader>
)

export default SkeletonCategory